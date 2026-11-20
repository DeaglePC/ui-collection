import { particleNumber, particleRandom, } from "./particle-object.js";
import { MaterialRenderer } from "./material-renderer.js";
import { createMaterialSurface } from "./material-surface.js";
// Browser-only resources are allocated on demand. Importing the package is SSR safe.
const RESOLUTION = 96;
function canvas() {
    const value = document.createElement("canvas");
    value.width = value.height = RESOLUTION;
    return value;
}
function trace(ctx, shape) {
    const c = RESOLUTION / 2, r = RESOLUTION * 0.43;
    ctx.beginPath();
    if (shape === "circle")
        ctx.arc(c, c, r, 0, Math.PI * 2);
    else if (shape === "square")
        ctx.roundRect(c - r, c - r, r * 2, r * 2, r * 0.28);
    else {
        const sides = shape === "star" ? 10 : shape === "triangle" ? 3 : 4;
        for (let i = 0; i < sides; i++) {
            const a = (i / sides) * Math.PI * 2 - Math.PI / 2;
            const radius = shape === "star" && i % 2 ? r * 0.46 : r;
            if (i === 0)
                ctx.moveTo(c + Math.cos(a) * radius, c + Math.sin(a) * radius);
            else
                ctx.lineTo(c + Math.cos(a) * radius, c + Math.sin(a) * radius);
        }
        ctx.closePath();
    }
    ctx.fill();
}
function buildMask(draw) {
    const value = canvas(), ctx = value.getContext("2d");
    ctx.fillStyle = "white";
    draw(ctx);
    return { canvas: value };
}
function particleVariant(object, index) {
    const random = particleRandom(index, object.seed, 1);
    const variants = object.kind === "glyph"
        ? object.values
        : object.kind === "shape"
            ? Array.isArray(object.shape)
                ? object.shape
                : [object.shape]
            : object.kind === "image"
                ? object.sources
                : [object.surface ?? "square"];
    return String(variants[Math.floor(random * variants.length)] ??
        (object.kind === "glyph" ? "·" : "circle"));
}
/** Cached silhouettes with continuous, batched GPU material shading. */
export class ParticlePainter {
    constructor(wake) {
        this.wake = wake;
        this.key = "";
        this.paintKey = "";
        this.surfaces = new Map();
        this.masks = new Map();
        this.stamps = new Map();
        this.images = new Map();
        this.failed = new Set();
        this.pending = new Map();
        this.revision = 0;
        this.disposed = false;
        this.renderer = null;
        this.gpuActive = false;
    }
    dispose() {
        this.disposed = true;
        this.reset();
        this.renderer?.dispose();
    }
    reset() {
        this.revision++;
        for (const image of this.pending.values())
            image.onload = image.onerror = null;
        this.pending.clear();
        this.images.clear();
        this.failed.clear();
        this.masks.clear();
        this.stamps.clear();
        this.surfaces.clear();
        this.renderer?.reset();
    }
    invalidate() {
        this.key = "";
        this.reset();
        this.wake();
    }
    image(source, object) {
        if (!source || this.failed.has(source))
            return;
        const loaded = this.images.get(source);
        if (loaded)
            return loaded;
        if (this.pending.has(source))
            return;
        const image = new Image(), revision = this.revision;
        image.crossOrigin = "anonymous";
        this.pending.set(source, image);
        image.onload = () => {
            if (this.disposed || revision !== this.revision)
                return;
            this.pending.delete(source);
            this.images.set(source, image);
            this.masks.clear();
            this.stamps.clear();
            this.surfaces.clear();
            this.renderer?.reset();
            this.wake();
        };
        image.onerror = () => {
            if (this.disposed || revision !== this.revision)
                return;
            this.pending.delete(source);
            this.failed.add(source);
            object.onError?.(source);
            this.wake();
        };
        image.src = source;
    }
    prepare(object, color) {
        const key = JSON.stringify([
            object.kind,
            object.kind === "shape"
                ? object.shape
                : object.kind === "glyph"
                    ? [object.values, object.fontFamily, object.fontWeight]
                    : object.kind === "image"
                        ? [object.sources, object.appearance]
                        : object.surface,
        ]);
        if (key !== this.key) {
            this.key = key;
            this.reset();
        }
        const paintKey = JSON.stringify([object.material, color]);
        if (paintKey !== this.paintKey) {
            this.paintKey = paintKey;
            this.stamps.clear();
        }
    }
    beginFrame(ctx, width, height, object, color, frame = { time: 0 }) {
        this.gpuActive = false;
        const material = object.material;
        if (material?.kind === "glass" ||
            material?.kind === "metal" ||
            material?.kind === "neon") {
            this.renderer ?? (this.renderer = new MaterialRenderer(this.wake));
            this.gpuActive = this.renderer.begin(ctx.canvas, width, height, material, color, frame);
            return this.gpuActive;
        }
    }
    endFrame(ctx) {
        if (this.gpuActive)
            this.renderer?.end(ctx);
        this.gpuActive = false;
    }
    surface(object, index) {
        const key = particleVariant(object, index);
        const cached = this.surfaces.get(key);
        if (cached)
            return cached;
        const mask = this.stamp({ ...object, material: { kind: "flat" } }, "#ffffff", index, 0);
        const map = createMaterialSurface(mask);
        if (this.surfaces.size >= 64)
            this.surfaces.delete(this.surfaces.keys().next().value);
        this.surfaces.set(key, map);
        return map;
    }
    stamp(object, color, index, angle) {
        const variant = particleVariant(object, index);
        const material = object.material ?? { kind: "flat" };
        const image = object.kind === "image" ? this.image(variant, object) : undefined;
        const maskKey = variant + (object.kind === "image" && !image ? ":fallback" : "");
        const key = maskKey + ":" + material.kind;
        const cached = this.stamps.get(key);
        if (cached)
            return cached;
        let mask = this.masks.get(maskKey);
        if (!mask) {
            mask = buildMask((ctx) => {
                if (object.kind === "glyph") {
                    ctx.font = `${particleNumber(object.fontWeight, 700, 100, 900)} 70px ${object.fontFamily ?? "sans-serif"}`;
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                    ctx.fillText(variant.slice(0, 32), RESOLUTION / 2, RESOLUTION / 2 + 3, RESOLUTION * 0.86);
                }
                else if (image) {
                    const scale = (RESOLUTION * 0.86) /
                        Math.max(image.naturalWidth, image.naturalHeight);
                    const w = image.naturalWidth * scale, h = image.naturalHeight * scale;
                    ctx.drawImage(image, (RESOLUTION - w) / 2, (RESOLUTION - h) / 2, w, h);
                }
                else
                    trace(ctx, (object.kind === "shape" || object.kind === "html"
                        ? variant
                        : "circle"));
            });
            if (this.masks.size >= 64)
                this.masks.delete(this.masks.keys().next().value);
            this.masks.set(maskKey, mask);
        }
        let stamp = canvas();
        const ctx = stamp.getContext("2d");
        if (object.kind === "image" && object.appearance !== "mask" && image)
            ctx.drawImage(mask.canvas, 0, 0);
        else {
            ctx.fillStyle = color;
            ctx.fillRect(0, 0, RESOLUTION, RESOLUTION);
            ctx.globalCompositeOperation = "destination-in";
            ctx.drawImage(mask.canvas, 0, 0);
            ctx.globalCompositeOperation = "source-over";
        }
        if (material.kind === "ink") {
            const frame = ctx.getImageData(0, 0, RESOLUTION, RESOLUTION), data = frame.data;
            const intensity = particleNumber(material.intensity, 1, 0, 1);
            const grain = particleNumber(material.grain, 0.5, 0, 1);
            for (let y = 1; y < RESOLUTION - 1; y++)
                for (let x = 1; x < RESOLUTION - 1; x++) {
                    const i = y * RESOLUTION + x, k = i * 4;
                    if (!data[k + 3])
                        continue;
                    const fine = particleRandom(i, 19);
                    const coarse = particleRandom(Math.floor(x / 3) + Math.floor(y / 3) * 32, 71);
                    const pigment = 0.68 + 0.32 * fine;
                    const porous = fine < grain * 0.23 ? 0.15 : 0.75 + 0.25 * coarse;
                    data[k + 3] *= 1 - intensity + intensity * porous;
                    for (let channel = 0; channel < 3; channel++)
                        data[k + channel] *= 1 - intensity + intensity * pigment;
                }
            ctx.putImageData(frame, 0, 0);
        }
        if (this.stamps.size >= 512)
            this.stamps.delete(this.stamps.keys().next().value);
        this.stamps.set(key, stamp);
        return stamp;
    }
    draw(ctx, object, color, index, x, y, size, angle, opacity) {
        const kind = object.material?.kind;
        if (kind === "glass" || kind === "metal" || kind === "neon") {
            if (this.gpuActive)
                this.renderer.add(this.surface(object, index), x, y, size, angle, opacity);
            return;
        }
        const stamp = this.stamp(object, color, index, angle);
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);
        ctx.globalAlpha = opacity;
        const extent = size * (stamp.width / RESOLUTION);
        ctx.drawImage(stamp, -extent / 2, -extent / 2, extent, extent);
        ctx.restore();
    }
}
