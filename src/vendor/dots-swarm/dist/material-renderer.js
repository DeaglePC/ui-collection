import { particleNumber } from "./particle-object.js";
import { metalShader } from "./material-metal-shader.js";
import { glassShader } from "./material-glass-shader.js";
import { neonShader } from "./material-neon-shader.js";
import { MATERIAL_MAP_SIZE, MATERIAL_CONTENT_SIZE, MATERIAL_DISTANCE_RANGE, getMaterialSurfacePixels, } from "./material-surface.js";
const TILE = MATERIAL_MAP_SIZE;
const ATLAS = TILE * 8;
const vertexShader = `
attribute vec2 a_position;
attribute vec2 a_uv;
attribute vec2 a_local;
attribute vec2 a_rotation;
attribute float a_opacity;
attribute float a_size;
uniform vec2 u_view;
varying vec2 v_uv;
varying vec2 v_local;
varying vec2 v_screen;
varying vec2 v_rotation;
varying float v_opacity;
varying float v_size;
void main() {
  v_screen = a_position / u_view;
  v_uv = a_uv;
  v_local = a_local;
  v_rotation = a_rotation;
  v_opacity = a_opacity;
  v_size = a_size;
  gl_Position = vec4(v_screen * vec2(2.0, -2.0) + vec2(-1.0, 1.0), 0.0, 1.0);
}`;
const fragmentShader = `
precision highp float;
uniform sampler2D u_scene;
uniform sampler2D u_normals;
uniform vec2 u_view;
uniform vec3 u_tint;
uniform vec2 u_pointer;
uniform float u_time;
uniform float u_material;
uniform float u_refraction;
uniform float u_dispersion;
uniform float u_frost;
uniform float u_intensity;
uniform float u_roughness;
uniform float u_chromatic;
uniform float u_light;
uniform float u_glow;
uniform float u_pixelRatio;
varying vec2 v_uv;
varying vec2 v_local;
varying vec2 v_screen;
varying vec2 v_rotation;
varying float v_opacity;
varying float v_size;
${metalShader}
${glassShader}
${neonShader}
void main() {
  vec4 surface = texture2D(u_normals, v_uv);
  float distance = (surface.b - 0.5) * ${MATERIAL_DISTANCE_RANGE * 2}.0;
  if (u_material > 1.5) {
    float pixelFootprint = ${MATERIAL_CONTENT_SIZE}.0 / max(v_size * u_pixelRatio, 1.0);
    vec4 emission = shadeNeon(distance, u_tint, u_glow, u_intensity, pixelFootprint);
    if (emission.a < 0.002) discard;
    gl_FragColor = vec4(emission.rgb, emission.a * v_opacity);
    return;
  }
  if (surface.a < 0.005) {
    // Subtle grounding outside the silhouette, with no decorative colored halo.
    float shadow = exp(-max(-distance, 0.0) / 2.2) * 0.12 * u_intensity;
    if (shadow < 0.002) discard;
    gl_FragColor = vec4(0.0, 0.0, 0.0, shadow);
    return;
  }
  vec2 xy = surface.rg * 2.0 - 1.0;
  vec3 n = normalize(vec3(xy, sqrt(max(0.01, 1.0 - dot(xy, xy)))));
  n.xy = mat2(v_rotation.x, v_rotation.y, -v_rotation.y, v_rotation.x) * n.xy;
  if (u_material > 0.5) {
    vec3 metal = shadeMetal(n, v_local, v_screen * u_view, distance, u_time, u_roughness, u_chromatic, u_tint, u_pointer, u_light);
    metal = mix(u_tint, metal, u_intensity) * (0.72 + v_opacity * 0.28);
    gl_FragColor = vec4(metal, surface.a);
  } else {
    vec3 glass = shadeGlass(n, v_screen, distance, v_size, u_view, u_refraction, u_dispersion, u_frost, u_intensity, u_tint, u_pointer / u_view);
    gl_FragColor = vec4(glass, surface.a * (0.85 + v_opacity * 0.15));
  }
}`;
/** One GPU batch for continuous metal, glass and emissive contour materials. */
export class MaterialRenderer {
    constructor(wake) {
        this.wake = wake;
        this.canvas = document.createElement("canvas");
        this.gl = this.canvas.getContext("webgl", {
            alpha: true,
            premultipliedAlpha: true,
            antialias: false,
            preserveDrawingBuffer: true,
        });
        this.program = null;
        this.buffer = null;
        this.scene = null;
        this.normals = null;
        this.uniforms = new Map();
        this.maps = new Map();
        this.lenses = [];
        this.vertices = new Float32Array(60 * 128);
        this.active = false;
        this.width = 1;
        this.height = 1;
        this.tintCanvas = document.createElement("canvas");
        this.tintKey = "";
        this.tint = [1, 1, 1];
        this.lost = (event) => {
            event.preventDefault();
            this.active = false;
            this.wake();
        };
        this.restored = () => {
            this.maps.clear();
            this.initialize();
            this.wake();
        };
        this.initialize();
        this.canvas.addEventListener("webglcontextlost", this.lost);
        this.canvas.addEventListener("webglcontextrestored", this.restored);
    }
    initialize() {
        const gl = this.gl;
        if (!gl)
            return;
        const shaders = [];
        try {
            const program = gl.createProgram();
            if (!program)
                return;
            this.program = program;
            for (const [type, source] of [
                [gl.VERTEX_SHADER, vertexShader],
                [gl.FRAGMENT_SHADER, fragmentShader],
            ]) {
                const shader = gl.createShader(type);
                if (!shader)
                    throw new Error("Unable to allocate material shader");
                shaders.push(shader);
                gl.shaderSource(shader, source);
                gl.compileShader(shader);
                if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
                    throw new Error("Unable to compile material shader");
                gl.attachShader(program, shader);
            }
            gl.linkProgram(program);
            if (!gl.getProgramParameter(program, gl.LINK_STATUS))
                throw new Error("Unable to link material shader");
            gl.useProgram(program);
            this.buffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
            let offset = 0;
            for (const [name, size] of [
                ["a_position", 2],
                ["a_uv", 2],
                ["a_local", 2],
                ["a_rotation", 2],
                ["a_opacity", 1],
                ["a_size", 1],
            ]) {
                const location = gl.getAttribLocation(program, name);
                gl.enableVertexAttribArray(location);
                gl.vertexAttribPointer(location, size, gl.FLOAT, false, 40, offset * 4);
                offset += size;
            }
            this.uniforms.clear();
            for (const name of [
                "u_view",
                "u_scene",
                "u_normals",
                "u_tint",
                "u_refraction",
                "u_dispersion",
                "u_frost",
                "u_intensity",
                "u_pointer",
                "u_time",
                "u_material",
                "u_roughness",
                "u_chromatic",
                "u_light",
                "u_glow",
                "u_pixelRatio",
            ])
                this.uniforms.set(name, gl.getUniformLocation(program, name));
            this.scene = this.texture(0);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([16, 17, 20, 255]));
            this.normals = this.texture(1);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, ATLAS, ATLAS, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
            gl.uniform1i(this.uniforms.get("u_scene"), 0);
            gl.uniform1i(this.uniforms.get("u_normals"), 1);
            gl.enable(gl.BLEND);
            gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        }
        catch {
            this.release();
        }
        finally {
            for (const shader of shaders)
                gl.deleteShader(shader);
        }
    }
    texture(unit) {
        const gl = this.gl;
        const texture = gl.createTexture();
        gl.activeTexture(gl.TEXTURE0 + unit);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        return texture;
    }
    reset() {
        this.maps.clear();
    }
    begin(source, width, height, material, color, frame) {
        const gl = this.gl;
        this.active = false;
        this.lenses.length = 0;
        if (!gl ||
            !this.program ||
            gl.isContextLost() ||
            !source.width ||
            !source.height)
            return false;
        this.width = width;
        this.height = height;
        if (this.canvas.width !== source.width ||
            this.canvas.height !== source.height) {
            this.canvas.width = source.width;
            this.canvas.height = source.height;
        }
        gl.viewport(0, 0, this.canvas.width, this.canvas.height);
        gl.useProgram(this.program);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, this.scene);
        if (material.kind === "glass")
            try {
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
            }
            catch {
                return false;
            }
        if (this.tintKey !== color) {
            const context = this.tintCanvas.getContext("2d");
            this.tintCanvas.width = this.tintCanvas.height = 1;
            context.fillStyle = color;
            context.fillRect(0, 0, 1, 1);
            const rgba = context.getImageData(0, 0, 1, 1).data;
            this.tint = [rgba[0] / 255, rgba[1] / 255, rgba[2] / 255];
            this.tintKey = color;
        }
        gl.uniform2f(this.uniforms.get("u_view"), width, height);
        gl.uniform1f(this.uniforms.get("u_pixelRatio"), this.canvas.width / Math.max(width, 1));
        gl.uniform3f(this.uniforms.get("u_tint"), this.tint[0], this.tint[1], this.tint[2]);
        gl.uniform2f(this.uniforms.get("u_pointer"), frame.pointer?.x ?? -10000, frame.pointer?.y ?? -10000);
        gl.uniform1f(this.uniforms.get("u_time"), frame.time *
            (material.kind === "metal"
                ? particleNumber(material.flow, 1, 0, 2)
                : 1));
        gl.uniform1f(this.uniforms.get("u_material"), material.kind === "glass" ? 0 : material.kind === "metal" ? 1 : 2);
        gl.uniform1f(this.uniforms.get("u_light"), material.kind === "metal"
            ? (particleNumber(material.light, -35, -360, 360) * Math.PI) / 180
            : 0);
        for (const [name, value, fallback] of [
            [
                "u_refraction",
                material.kind === "glass" ? material.refraction : 0,
                0.65,
            ],
            [
                "u_dispersion",
                material.kind === "glass" ? material.dispersion : 0,
                0.2,
            ],
            ["u_frost", material.kind === "glass" ? material.frost : 0, 0.03],
            ["u_roughness", material.kind === "metal" ? material.roughness : 0, 0.15],
            ["u_chromatic", material.kind === "metal" ? material.chromatic : 0, 0.35],
            ["u_glow", material.kind === "neon" ? material.glow : 0, 0.5],
            ["u_intensity", material.intensity, 1],
        ])
            gl.uniform1f(this.uniforms.get(name), particleNumber(value, fallback, 0, 1));
        this.active = true;
        return true;
    }
    add(map, x, y, size, angle, opacity) {
        this.lenses.push({ map, x, y, size, angle, opacity });
    }
    end(context) {
        const gl = this.gl;
        if (!this.active || !gl)
            return;
        this.lenses.sort((a, b) => a.opacity - b.opacity);
        if (this.vertices.length < this.lenses.length * 60)
            this.vertices = new Float32Array(this.lenses.length * 60);
        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, this.normals);
        let length = 0;
        const flush = () => {
            if (!length)
                return;
            gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
            gl.bufferData(gl.ARRAY_BUFFER, this.vertices.subarray(0, length), gl.DYNAMIC_DRAW);
            gl.drawArrays(gl.TRIANGLES, 0, length / 10);
            length = 0;
        };
        for (const lens of this.lenses) {
            let slot = this.maps.get(lens.map);
            if (slot === undefined) {
                if (this.maps.size === 64) {
                    flush();
                    this.maps.clear();
                }
                slot = this.maps.size;
                this.maps.set(lens.map, slot);
                const pixels = getMaterialSurfacePixels(lens.map);
                if (!pixels)
                    continue;
                gl.texSubImage2D(gl.TEXTURE_2D, 0, (slot % 8) * TILE, Math.floor(slot / 8) * TILE, TILE, TILE, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
            }
            const cs = Math.cos(lens.angle), sn = Math.sin(lens.angle);
            for (const [u, v] of [
                [0, 0],
                [1, 0],
                [0, 1],
                [0, 1],
                [1, 0],
                [1, 1],
            ]) {
                const extent = (lens.size * MATERIAL_MAP_SIZE) / MATERIAL_CONTENT_SIZE;
                const x = (u - 0.5) * extent, y = (v - 0.5) * extent;
                this.vertices.set([
                    lens.x + x * cs - y * sn,
                    lens.y + x * sn + y * cs,
                    ((slot % 8) * TILE + 0.5 + u * (TILE - 1)) / ATLAS,
                    (Math.floor(slot / 8) * TILE + 0.5 + v * (TILE - 1)) / ATLAS,
                    (u - 0.5) * 2,
                    (v - 0.5) * 2,
                    cs,
                    sn,
                    lens.opacity,
                    lens.size,
                ], length);
                length += 10;
            }
        }
        flush();
        context.save();
        context.globalAlpha = 1;
        context.drawImage(this.canvas, 0, 0, this.width, this.height);
        context.restore();
        this.active = false;
    }
    release() {
        const gl = this.gl;
        if (!gl)
            return;
        gl.deleteTexture(this.scene);
        gl.deleteTexture(this.normals);
        gl.deleteBuffer(this.buffer);
        gl.deleteProgram(this.program);
        this.program = null;
        this.maps.clear();
    }
    dispose() {
        this.release();
        this.canvas.removeEventListener("webglcontextlost", this.lost);
        this.canvas.removeEventListener("webglcontextrestored", this.restored);
    }
}
