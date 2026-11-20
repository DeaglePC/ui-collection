const bounded = (value, fallback, low, high) => Number.isFinite(value) ? Math.max(low, Math.min(high, value)) : fallback;
/** Rasterize complete lines (preserving font shaping and ligatures), then sample
 * their ink. Browser-only; load custom fonts via @font-face or FontFace first.
 * Coordinates match SwarmUI.Part / SwarmSurface's normalized point space.
 */
export async function sampleTextPoints(text, options = {}) {
    if (typeof document === "undefined")
        throw new Error("sampleTextPoints requires a browser document.");
    const fontSize = bounded(options.fontSize, 48, 1, 512);
    const lineHeight = bounded(options.lineHeight, fontSize * 1.25, fontSize, 1024);
    const count = Math.round(bounded(options.count, 1800, 24, 2400));
    const width = bounded(options.width, 600, 1, 4096);
    const padding = Math.min(fontSize * 0.2 + 2, width * 0.1);
    const contentWidth = Math.max(1, width - padding * 2);
    const font = `${options.fontStyle ?? "normal"} ${options.fontWeight ?? 400} ${fontSize}px ${options.fontFamily ?? "sans-serif"}`;
    // A failed font request still gets a readable fallback. A later loadingdone
    // event causes SwarmText to sample again with the successfully loaded face.
    try {
        await document.fonts?.load(font, text || " ");
    }
    catch {
        /* use fallback */
    }
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx)
        return { points: [], width, height: lineHeight, lines: [] };
    const configure = () => {
        ctx.font = font;
        ctx.letterSpacing = `${bounded(options.letterSpacing, 0, -20, 100)}px`;
        ctx.direction = options.direction ?? "ltr";
        ctx.textBaseline = "alphabetic";
        ctx.fillStyle = "white";
    };
    configure();
    const lines = [];
    // Keep explicit line breaks, then wrap words. Break an overlong word only
    // when necessary. The final line is painted in one call, never per glyph.
    for (const paragraph of text.replace(/\r\n?/g, "\n").split("\n")) {
        let line = "";
        for (const word of paragraph.split(/(\s+)/)) {
            if (!word)
                continue;
            if (ctx.measureText(line + word).width <= contentWidth) {
                line += word;
                continue;
            }
            if (line.trim()) {
                lines.push(line.trimEnd());
                line = "";
            }
            if (!word.trim())
                continue;
            for (const char of Array.from(word)) {
                if (line && ctx.measureText(line + char).width > contentWidth) {
                    lines.push(line);
                    line = "";
                }
                line += char;
            }
        }
        lines.push(line.trimEnd());
    }
    const height = Math.max(lineHeight, lines.length * lineHeight) + padding * 2;
    // Bound raster memory for long passages without truncating the text.
    const resolution = Math.min(2, 4096 / Math.max(width, height), Math.sqrt(4000000 / (width * height)));
    canvas.width = Math.max(1, Math.ceil(width * resolution));
    canvas.height = Math.max(1, Math.ceil(height * resolution));
    ctx.scale(resolution, resolution);
    configure();
    const metrics = ctx.measureText("Hg");
    const ascent = metrics.fontBoundingBoxAscent ?? fontSize * 0.8;
    const descent = metrics.fontBoundingBoxDescent ?? fontSize * 0.2;
    const align = options.textAlign ?? "center";
    ctx.textAlign = align;
    const x = align === "left"
        ? padding
        : align === "right"
            ? width - padding
            : width / 2;
    lines.forEach((line, i) => ctx.fillText(line, x, padding + i * lineHeight + (lineHeight - ascent - descent) / 2 + ascent, contentWidth));
    const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const ink = [];
    for (let i = 0; i < canvas.width * canvas.height; i++)
        if (data[i * 4 + 3] > 80)
            ink.push(i);
    const scale = Math.min(width, height) * 0.48;
    const points = ink.length
        ? Array.from({ length: count }, (_, i) => {
            // A low-discrepancy walk covers all lines without scan-line striping.
            const index = ink[Math.floor(((i * 0.618033988749895) % 1) * ink.length)];
            return {
                x: (((index % canvas.width) + 0.5) / resolution - width / 2) / scale,
                y: ((Math.floor(index / canvas.width) + 0.5) / resolution -
                    height / 2) /
                    scale,
                z: 0,
            };
        })
        : [];
    return { points, width, height, lines };
}
