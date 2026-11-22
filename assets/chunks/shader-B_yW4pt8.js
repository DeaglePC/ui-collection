import{r as v,j as $e}from"./client-CsvIHAk3.js";import{D as bt,g as ot,c as Et,b as Rt,r as yt,m as At,l as Tt,p as wt,t as St,o as Ft,u as Ct,s as Lt}from"./utils-VNNtGTnX.js";import{s as gt,r as He}from"./color-CT5GfqS9.js";import{a as kt,u as Mt}from"./motion-CAswUGZ0.js";import{P as rt,R as Dt,h as Nt,A as It,b as Ut}from"./palettes-CipR7Axg.js";const ft=["none","repel","ripple","trail"],zt=.08,Ot=.25,Pt=e=>{const t=new Float32Array([.5,.5,0]),r=new Float32Array(2),s=new Float32Array([.5,.5,1e3]);let i=.5,l=.5,n=!1,u=!1;const _=E=>{const A=e.getBoundingClientRect();if(A.width===0||A.height===0)return!1;const T=(E.clientX-A.left)/A.width,S=1-(E.clientY-A.top)/A.height;return n=T>=0&&T<=1&&S>=0&&S<=1,i=T,l=S,u||(u=!0,t[0]=T,t[1]=S),n},x=E=>{_(E)},N=E=>{_(E)&&(s[0]=i,s[1]=l,s[2]=0)},z=()=>{n=!1};return window.addEventListener("pointermove",x,{passive:!0}),window.addEventListener("pointerdown",N,{passive:!0}),document.documentElement.addEventListener("pointerleave",z),{click:s,dispose:()=>{window.removeEventListener("pointermove",x),window.removeEventListener("pointerdown",N),document.documentElement.removeEventListener("pointerleave",z)},pointer:t,update:E=>{if(E<=0)return;const A=1-Math.exp(-E/zt),T=1-Math.exp(-E/Ot),S=t[0]??.5,O=t[1]??.5,L=S+(i-S)*A,P=O+(l-O)*A;t[0]=L,t[1]=P,t[2]=(t[2]??0)+((n?1:0)-(t[2]??0))*T,r[0]=(r[0]??0)+((L-S)/E-(r[0]??0))*T,r[1]=(r[1]??0)+((P-O)/E-(r[1]??0))*T,s[2]=Math.min(1e3,(s[2]??0)+E)},velocity:r}},dt=/\/\*[\s\S]*?\*\/|\/\/[^\r\n]*/g,Bt=/^[ \t]*#/m,Gt=/^\s*(?:(?:lowp|mediump|highp|const|uniform)\s+)*struct\b/,Xt=/^\s*precision\b/,$t=/\d+\.\d*(?:[eE][-+]?\d+)?|\.\d+(?:[eE][-+]?\d+)?|\d+(?:[eE][-+]?\d+)?|[A-Za-z_]\w*|\+\+|--|<=|>=|==|!=|&&|\|\||\^\^|[-+*/]=|\S/g,Ue=e=>{const t=e.replaceAll(dt," "),r=[];let s=0,i=0;const l=n=>{const u=t.slice(i,n).trim();i=n,u!==""&&r.push(u)};for(let n=0;n<t.length;n+=1){const u=t[n];u==="{"?s+=1:u==="}"?(s-=1,s===0&&!Gt.test(t.slice(i,n))&&l(n+1)):u===";"&&s===0&&l(n+1)}return l(t.length),r},nt=e=>e.match($t)?.join(" ")??"",it=e=>Bt.test(e.replaceAll(dt," ")),Ht=(e,t)=>{if(it(e)||it(t))return t;const r=new Set(Ue(e).map(nt));return Ue(t).filter(s=>Xt.test(s)||!r.has(nt(s))).join(`
`)},Vt=`
float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

vec3 ascii_permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = ascii_permute(ascii_permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

float fbm(vec2 p) {
  float sum = 0.0;
  float amp = 0.5;
  mat2 rotate = mat2(0.8, -0.6, 0.6, 0.8);
  for (int i = 0; i < 4; i++) {
    sum += amp * snoise(p);
    p = rotate * p * 2.02 + vec2(11.3, 4.7);
    amp *= 0.5;
  }
  return clamp(0.5 + 0.5 * sum / 0.9375, 0.0, 1.0);
}

vec3 spectrum(float h) {
  vec3 rgb = clamp(abs(mod(fract(h) * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
  return rgb * rgb * (3.0 - 2.0 * rgb);
}

vec4 ascii_paletteEntry(float index) {
  return texture2D(u_palette, vec2((index + 0.5) / u_paletteSize, 0.5));
}

vec4 paletteColor(float x) {
  float last = u_paletteSize - 1.0;
  float scaled = clamp(x, 0.0, 1.0) * max(last - 1.0, 0.0);
  float index = floor(scaled);
  vec4 from = ascii_paletteEntry(min(1.0 + index, last));
  vec4 to = ascii_paletteEntry(min(2.0 + index, last));
  return mix(from, to, scaled - index);
}

vec3 oklch(float L, float C, float h) {
  vec3 lab = vec3(L, C * cos(h), C * sin(h));
  float l = lab.x + 0.3963377774 * lab.y + 0.2158037573 * lab.z;
  float m = lab.x - 0.1055613458 * lab.y - 0.0638541728 * lab.z;
  float s = lab.x - 0.0894841775 * lab.y - 1.2914855480 * lab.z;
  l = l * l * l;
  m = m * m * m;
  s = s * s * s;
  return vec3(
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s
  );
}

vec3 toSrgb(vec3 linear) {
  vec3 c = clamp(linear, 0.0, 1.0);
  vec3 low = c * 12.92;
  vec3 high = 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055;
  return mix(low, high, step(vec3(0.0031308), c));
}

vec3 aces(vec3 x) {
  return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}

vec4 ascii_rgba(vec3 color) {
  return vec4(color, 1.0);
}

vec4 ascii_rgba(vec4 color) {
  return color;
}
`,jt=`
uniform vec2 u_resolution;
uniform float u_time;
uniform float u_seed;
uniform vec3 u_pointer;
uniform vec2 u_pointerVelocity;
uniform vec3 u_click;
uniform vec4 u_audio;
uniform sampler2D u_palette;
uniform float u_paletteSize;
uniform vec2 ascii_samples;
uniform float ascii_levels;
uniform float ascii_interaction;
uniform sampler2D ascii_trail;
`,Wt=`
vec2 ascii_interact(vec2 uv, out float keep, out float boost) {
  keep = 1.0;
  boost = 0.0;
  vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
  if (ascii_interaction > 0.5 && ascii_interaction < 1.5) {
    // Repel: glyphs bulge away from the pointer and its core clears.
    vec2 d = (uv - u_pointer.xy) * aspect;
    float dist = length(d);
    float radius = 0.24;
    float fall = smoothstep(radius, 0.0, dist) * u_pointer.z;
    vec2 dir = dist > 1e-4 ? d / dist : vec2(0.0);
    uv -= dir * fall * radius * 0.55 / aspect;
    keep = 1.0 - 0.9 * smoothstep(radius * 0.42, 0.0, dist) * u_pointer.z;
  } else if (ascii_interaction > 1.5 && ascii_interaction < 2.5) {
    // Ripple: a ring leaves each click, displacing and lighting glyphs.
    float age = u_click.z;
    if (age < 4.0) {
      vec2 d = (uv - u_click.xy) * aspect;
      float dist = length(d);
      float front = dist - age * 0.55;
      float fade = exp(-age * 1.1);
      float wave = sin(front * 46.0) * exp(-front * front * 90.0) * fade;
      vec2 dir = dist > 1e-4 ? d / dist : vec2(0.0);
      uv += dir * wave * 0.018 / aspect;
      boost = max(wave, 0.0) * 0.55;
    }
  }
  return uv;
}
`,Yt=({field:e,colorField:t,uniforms:r})=>{const s=`#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
${jt}
${r}
${Vt}
${Wt}
`;let i="";if(t!==void 0){const _=Ht(e,t);i=Ue(_).length<Ue(t).length?_:t}const l=s.split(`
`).length-1,n=l+e.split(`
`).length,u=`${s}${e}
${i}
void main() {
  vec2 base = gl_FragCoord.xy / ascii_samples;
  float keep;
  float boost;
  vec2 uv = ascii_interact(base, keep, boost);
  float tone = field(uv, u_resolution, u_time);
  // NaN and infinities from a field become paper, not noise.
  tone = (tone == tone && abs(tone) < 1e6) ? clamp(tone, 0.0, 1.0) : 0.0;
  tone = clamp(tone * keep + boost, 0.0, 1.0);
  if (ascii_interaction > 2.5) {
    tone = clamp(tone + texture2D(ascii_trail, base).r, 0.0, 1.0);
  }
  if (ascii_levels > 1.5) {
    tone = floor(tone * (ascii_levels - 1.0) + 0.5) / (ascii_levels - 1.0);
  }
  vec3 rgb = ${t===void 0?"vec3(0.0)":"clamp(ascii_rgba(colorField(uv, u_resolution, u_time)).rgb, 0.0, 1.0)"};
  gl_FragColor = vec4(rgb, tone);
}
`;return{colorLine:n,fieldLine:l,source:u}},Ie=`#version 300 es
in vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`,Kt=`
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`,qt={braille:1,edge:3,quadrants:2,ramp:0},Zt={ansi16:2,duotone:3,mono:0,palette:3,truecolor:1},Jt=`#version 300 es
precision highp float;
precision highp int;

uniform sampler2D u_field;
uniform sampler2D u_positions;
uniform sampler2D u_thresholds;
uniform sampler2D u_coverage;
uniform ivec2 u_cells;
uniform ivec2 u_grid;
uniform int u_kind;
uniform int u_count;
uniform int u_calibrated;
uniform int u_dither;
uniform int u_matrixSize;
uniform float u_steps;
uniform vec4 u_grade;
uniform int u_invert;
uniform float u_threshold;
uniform float u_edgeThreshold;
uniform int u_colorMode;
uniform int u_hasColor;
uniform vec3 u_ink;
uniform vec3 u_ansi[16];
uniform vec3 u_ansiLab[16];
uniform vec3 u_stops[8];
uniform int u_stopCount;
uniform float u_glitch;
uniform float u_glitchSeed;

layout(location = 0) out vec4 o_glyph;
layout(location = 1) out vec4 o_color;

ivec2 fieldSize;

float grade(float t) {
  float shaped = clamp((t - 0.5) * u_grade.y + 0.5 + u_grade.x, 0.0, 1.0);
  return u_grade.z == 1.0 ? shaped : pow(shaped, 1.0 / max(0.01, u_grade.z));
}

// A sample by its top-left based coordinate; the texture's row 0 is the bottom.
vec4 fieldAt(ivec2 p) {
  return texelFetch(u_field, ivec2(p.x, fieldSize.y - 1 - p.y), 0);
}

float toneAt(ivec2 p) {
  float graded = grade(fieldAt(p).a);
  return u_invert == 1 ? 1.0 - graded : graded;
}

float cutAt(ivec2 p) {
  if (u_dither == 0) {
    return 0.5;
  }
  float rank = floor(texelFetch(u_thresholds, p % u_matrixSize, 0).r * 255.0 + 0.5);
  return (rank + 0.5) / u_steps;
}

float positionAt(int index) {
  return texelFetch(u_positions, ivec2(index, 0), 0).r;
}

int rampLevel(float tone, float cut) {
  float last = float(u_count - 1);
  float level;
  if (u_calibrated == 0) {
    level = tone * last;
  } else {
    int low = 0;
    int high = u_count - 1;
    for (int i = 0; i < 12; i++) {
      if (high - low <= 1) {
        break;
      }
      int mid = (low + high) / 2;
      if (positionAt(mid) <= tone) {
        low = mid;
      } else {
        high = mid;
      }
    }
    float from = positionAt(low);
    float to = positionAt(high);
    level = float(low) + (to > from ? (tone - from) / (to - from) : 0.0);
  }
  return int(clamp(floor(level + cut), 0.0, last));
}

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

vec3 linearOf(vec3 c) {
  return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(vec3(0.04045), c));
}

vec3 oklab(vec3 srgb) {
  vec3 c = linearOf(srgb);
  float l = pow(0.4122214708 * c.r + 0.5363325363 * c.g + 0.0514459929 * c.b, 1.0 / 3.0);
  float m = pow(0.2119034982 * c.r + 0.6806995451 * c.g + 0.1073969566 * c.b, 1.0 / 3.0);
  float s = pow(0.0883024619 * c.r + 0.2817188376 * c.g + 0.6299787005 * c.b, 1.0 / 3.0);
  return vec3(
    0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
    1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
    0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s
  );
}

vec3 sampleStops(float t) {
  if (u_stopCount <= 1) {
    return u_stops[0];
  }
  float scaled = clamp(t, 0.0, 1.0) * float(u_stopCount - 1);
  int index = min(u_stopCount - 2, int(floor(scaled)));
  return mix(u_stops[index], u_stops[index + 1], scaled - float(index));
}

vec3 gradeRgb(vec3 rgb) {
  vec3 curved = vec3(grade(rgb.r), grade(rgb.g), grade(rgb.b));
  if (u_grade.w == 1.0) {
    return curved;
  }
  float grey = dot(curved, vec3(0.2126, 0.7152, 0.0722));
  return clamp(grey + (curved - grey) * u_grade.w, 0.0, 1.0);
}

void main() {
  fieldSize = u_cells * u_grid;
  ivec2 cell = ivec2(int(gl_FragCoord.x), u_cells.y - 1 - int(gl_FragCoord.y));
  int slot = 0;
  float tone = 0.0;
  vec3 rgb = vec3(0.0);

  if (u_kind == 1 || u_kind == 2) {
    int mask = 0;
    float sum = 0.0;
    for (int dy = 0; dy < 4; dy++) {
      if (dy >= u_grid.y) {
        break;
      }
      for (int dx = 0; dx < 2; dx++) {
        if (dx >= u_grid.x) {
          break;
        }
        ivec2 p = cell * u_grid + ivec2(dx, dy);
        vec4 s = fieldAt(p);
        float t = toneAt(p);
        sum += t;
        rgb += s.rgb;
        if (t > (u_dither == 1 ? cutAt(p) : u_threshold)) {
          if (u_kind == 1) {
            // Braille dot bits: 1-3 down the left, 4-6 down the right, 7-8 on the bottom row.
            int bit = dy == 3 ? (dx == 0 ? 64 : 128) : (dx == 0 ? (1 << dy) : (8 << dy));
            mask |= bit;
          } else {
            mask |= 1 << (dy * 2 + dx);
          }
        }
      }
    }
    float count = float(u_grid.x * u_grid.y);
    tone = sum / count;
    rgb /= count;
    slot = mask;
  } else {
    tone = toneAt(cell);
    rgb = fieldAt(cell).rgb;
    slot = rampLevel(tone, cutAt(cell));
    if (u_kind == 3) {
      ivec2 hi = u_cells - 1;
      #define T(x, y) toneAt(clamp(cell + ivec2(x, y), ivec2(0), hi))
      float sx = T(1, -1) + 2.0 * T(1, 0) + T(1, 1) - T(-1, -1) - 2.0 * T(-1, 0) - T(-1, 1);
      float sy = T(-1, 1) + 2.0 * T(0, 1) + T(1, 1) - T(-1, -1) - 2.0 * T(0, -1) - T(1, -1);
      #undef T
      if (length(vec2(sx, sy)) / 4.0 > u_edgeThreshold) {
        // y points down here, as in edgeChar: fold the angle into [0, pi).
        float angle = atan(sy, sx);
        if (angle < 0.0) {
          angle += 3.14159265;
        }
        int octant = int(floor(angle / 0.785398163 + 0.5)) % 4;
        int glyph = octant == 0 ? 2 : octant == 1 ? 1 : octant == 2 ? 0 : 3;
        slot = u_count + glyph;
      }
    }
  }

  // Glitch: a few cells flip to a random glyph on glitch frames.
  if (u_glitch > 0.0 && hash(vec2(cell) + u_glitchSeed) < u_glitch * 0.06) {
    float pick = hash(vec2(cell) * 1.7 + u_glitchSeed + 3.1);
    slot = u_kind == 1 ? int(pick * 255.0) + 1 : u_kind == 2 ? int(pick * 15.0) + 1 : int(pick * float(u_count - 1)) + 1;
  }

  vec3 color;
  if (u_colorMode == 0) {
    color = u_ink;
  } else if (u_colorMode == 3) {
    color = sampleStops(tone);
  } else {
    color = u_hasColor == 1 ? gradeRgb(rgb) : vec3(clamp(tone, 0.0, 1.0));
    if (u_colorMode == 2) {
      vec3 lab = oklab(color);
      float best = 1e9;
      vec3 pick = u_ansi[0];
      for (int i = 0; i < 16; i++) {
        vec3 d = lab - u_ansiLab[i];
        float distance = dot(d, d);
        if (distance < best) {
          best = distance;
          pick = u_ansi[i];
        }
      }
      color = pick;
    }
  }

  float coverage = texelFetch(u_coverage, ivec2(slot, 0), 0).r;
  o_glyph = vec4(float(slot & 255) / 255.0, float(slot >> 8) / 255.0, coverage, 1.0);
  o_color = vec4(color, 1.0);
}
`,Qt=`#version 300 es
precision highp float;
precision highp int;

uniform sampler2D u_cellGlyph;
uniform sampler2D u_cellColor;
uniform sampler2D u_atlas;
uniform sampler2D u_bloom;
uniform ivec2 u_cells;
uniform ivec2 u_cellSize;
uniform vec2 u_canvas;
uniform int u_atlasColumns;
uniform vec4 u_paper;
uniform vec4 u_fx;
uniform vec4 u_fx2;
uniform vec4 u_glitchRows;

out vec4 o_color;

float coverageAt(int slot, ivec2 local) {
  ivec2 origin = ivec2(slot % u_atlasColumns, slot / u_atlasColumns) * u_cellSize;
  return texelFetch(u_atlas, origin + clamp(local, ivec2(0), u_cellSize - 1), 0).a;
}

void main() {
  float scanlines = u_fx.x;
  float bloom = u_fx.y;
  float curvature = u_fx.z;
  float split = u_fx.w;
  float flicker = u_fx2.x;
  float vignette = u_fx2.y;
  float dpr = u_fx2.z;

  // Top-left based position in [0, 1].
  vec2 p = vec2(gl_FragCoord.x, u_canvas.y - gl_FragCoord.y) / u_canvas;
  float outside = 0.0;
  if (curvature > 0.0) {
    vec2 c = p * 2.0 - 1.0;
    c *= 1.0 + curvature * 0.18 * dot(c, c);
    c /= 1.0 + curvature * 0.18;
    p = c * 0.5 + 0.5;
    vec2 edge = smoothstep(vec2(0.0), vec2(2.0) / u_canvas, p) * smoothstep(vec2(0.0), vec2(2.0) / u_canvas, 1.0 - p);
    outside = 1.0 - edge.x * edge.y;
  }

  ivec2 px = ivec2(floor(p * u_canvas));
  ivec2 cell = px / u_cellSize;
  ivec2 local = px - cell * u_cellSize;
  // Glitch: a band of rows jumps sideways for a frame.
  if (cell.y >= int(u_glitchRows.x) && cell.y < int(u_glitchRows.y)) {
    cell.x += int(u_glitchRows.z);
  }

  vec3 rgb = u_paper.rgb;
  float alpha = u_paper.a;
  if (cell.x >= 0 && cell.y >= 0 && cell.x < u_cells.x && cell.y < u_cells.y) {
    ivec2 at = ivec2(cell.x, u_cells.y - 1 - cell.y);
    vec4 g = texelFetch(u_cellGlyph, at, 0);
    int slot = int(g.r * 255.0 + 0.5) + 256 * int(g.g * 255.0 + 0.5);
    vec3 ink = texelFetch(u_cellColor, at, 0).rgb;
    float cov = coverageAt(slot, local);
    vec3 covs = vec3(cov);
    if (split > 0.0) {
      int shift = max(1, int(dpr + 0.5));
      covs.r = coverageAt(slot, local - ivec2(shift, 0));
      covs.b = coverageAt(slot, local + ivec2(shift, 0));
    }
    // Premultiplied: glyph over paper, channel by channel for the RGB split.
    rgb = ink * covs + rgb * (1.0 - covs);
    alpha = max(cov, max(covs.r, covs.b)) + alpha * (1.0 - max(cov, max(covs.r, covs.b)));
  }

  if (bloom > 0.0) {
    vec2 grid = vec2(u_cells * u_cellSize);
    vec2 uv = vec2(p.x * u_canvas.x / grid.x, 1.0 - p.y * u_canvas.y / grid.y);
    vec3 glow = texture(u_bloom, uv).rgb * bloom;
    rgb += glow;
    alpha = min(1.0, alpha + dot(glow, vec3(0.3333)));
  }

  float shade = 1.0;
  if (scanlines > 0.0) {
    float y = gl_FragCoord.y / max(dpr, 1.0);
    shade *= 1.0 - scanlines * 0.42 * (0.5 + 0.5 * cos(y * 2.0943951));
  }
  if (vignette > 0.0) {
    vec2 c = p * 2.0 - 1.0;
    shade *= 1.0 - vignette * 0.75 * smoothstep(0.35, 1.45, dot(c, c));
  }
  shade *= flicker;
  rgb *= shade;
  if (u_paper.a < 1.0) {
    alpha *= shade;
  }

  // Curved glass leaves black corners (transparent without paper).
  rgb *= 1.0 - outside;
  alpha = mix(alpha, u_paper.a, outside);
  o_color = vec4(rgb, alpha);
}
`,eo=`#version 300 es
precision highp float;

uniform sampler2D u_source;
uniform sampler2D u_glyph;
uniform vec2 u_step;
uniform int u_fromCells;
uniform vec2 u_size;

out vec4 o_color;

vec3 read(vec2 uv) {
  vec3 c = texture(u_source, uv).rgb;
  if (u_fromCells == 1) {
    c *= texture(u_glyph, uv).b * 2.2;
  }
  return c;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_size;
  vec3 sum = read(uv) * 0.227027;
  sum += (read(uv + u_step * 1.3846) + read(uv - u_step * 1.3846)) * 0.316216;
  sum += (read(uv + u_step * 3.2308) + read(uv - u_step * 3.2308)) * 0.070270;
  o_color = vec4(sum, 1.0);
}
`,to=`#version 300 es
precision highp float;

uniform sampler2D u_previous;
uniform vec2 u_size;
uniform vec3 u_pointer;
uniform float u_decay;
uniform float u_strength;

out vec4 o_color;

void main() {
  vec2 uv = gl_FragCoord.xy / u_size;
  float previous = texture(u_previous, uv).r * u_decay;
  vec2 d = (uv - u_pointer.xy) * vec2(u_size.x / u_size.y, 1.0);
  float stamp = exp(-dot(d, d) / 0.0035) * u_strength * u_pointer.z;
  o_color = vec4(min(1.0, previous + stamp), 0.0, 0.0, 1.0);
}
`,oo=/ERROR:\s*\d+:(\d+):\s*(.*)/g,ro=({log:e,field:t,colorField:r,fieldLine:s,colorLine:i})=>{const l=[];for(const n of e.matchAll(oo)){const u=Number(n[1]),_=n[2]??"";if(r!==void 0&&u>i){const x=u-i;l.push(`colorField line ${x}: ${_}
  > ${(r.split(`
`)[x-1]??"").trim()}`)}else if(u>s){const x=u-s;l.push(`field line ${x}: ${_}
  > ${(t.split(`
`)[x-1]??"").trim()}`)}else l.push(`engine line ${u}: ${_}`)}return l.length>0?l.join(`
`):e},no=/^[A-Za-z][A-Za-z0-9_]*$/,io={1:"float",2:"vec2",3:"vec3",4:"vec4"},so=e=>typeof e=="number"?1:e.length,ao=e=>Object.keys(e).toSorted().flatMap(t=>{const r=e[t];return r===void 0?[]:!no.test(t)||t.startsWith("u_")||t.startsWith("ascii_")?(console.error(`[ascii-shader] uniform "${t}" skipped: names must be GLSL identifiers and not start with "u_" or "ascii_"`),[]):[{name:t,size:so(r)}]}),co=()=>({ansi:new Float32Array(48),ansiLab:new Float32Array(48),audio:new Float32Array(4),bloom:0,click:new Float32Array([.5,.5,1e3]),colorMode:0,curvature:0,delta:0,edgeThreshold:.22,flicker:0,frame:0,glitch:0,grade:new Float32Array([0,1,1,1]),ink:new Float32Array([1,1,1]),interaction:0,invert:!1,levels:0,paper:new Float32Array([0,0,0,1]),pointer:new Float32Array([.5,.5,0]),pointerVelocity:new Float32Array(2),scanlines:0,seed:0,stopCount:1,stops:new Float32Array(24),threshold:.5,time:0,uniforms:{},vignette:0}),st=e=>{console.error(`[ascii-shader] ${e}`)},at=(e,t,r)=>{const s=e.createShader(t);return s?(e.shaderSource(s,r),e.compileShader(s),s):null},Ae=(e,t,r,s=i=>i)=>{const i=at(e,e.VERTEX_SHADER,t),l=at(e,e.FRAGMENT_SHADER,r),n=e.createProgram();if(!(i&&l&&n))return null;if(e.attachShader(n,i),e.attachShader(n,l),e.bindAttribLocation(n,0,"a_position"),e.linkProgram(n),!e.getProgramParameter(n,e.LINK_STATUS)){if(!e.isContextLost()){const u=e.getShaderInfoLog(l)||e.getShaderInfoLog(i)||e.getProgramInfoLog(n)||"";st(`shader failed to compile
${s(u)}`),(u.includes("already has a body")||u.includes("redefinition"))&&st("a function is defined twice. `field` and `colorField` compile into one shader: give helpers different names, or define a shared helper once, in `field`, and call it from both.")}return e.deleteShader(i),e.deleteShader(l),e.deleteProgram(n),null}return e.deleteShader(i),e.deleteShader(l),n},Te=(e,t,r)=>{const s={};for(const i of r)s[i]=e.getUniformLocation(t,i);return s},D=(e,t)=>{const r=e.createTexture();return e.bindTexture(e.TEXTURE_2D,r),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),r},uo=["u_field","u_positions","u_thresholds","u_coverage","u_cells","u_grid","u_kind","u_count","u_calibrated","u_dither","u_matrixSize","u_steps","u_grade","u_invert","u_threshold","u_edgeThreshold","u_colorMode","u_hasColor","u_ink","u_ansi","u_ansiLab","u_stops","u_stopCount","u_glitch","u_glitchSeed"],lo=["u_cellGlyph","u_cellColor","u_atlas","u_bloom","u_cells","u_cellSize","u_canvas","u_atlasColumns","u_paper","u_fx","u_fx2","u_glitchRows"],fo=["u_source","u_glyph","u_step","u_fromCells","u_size"],mo=["u_previous","u_size","u_pointer","u_decay","u_strength"],_o=["u_resolution","u_time","u_seed","u_pointer","u_pointerVelocity","u_click","u_audio","u_palette","u_paletteSize","ascii_samples","ascii_levels","ascii_interaction","ascii_trail"],ve=(e,t)=>{const r=Math.sin(e*12.9898+t*78.233)*43758.5453;return r-Math.floor(r)},vo=e=>{const t=e.getExtension("EXT_color_buffer_float")!==null,r=Ae(e,Ie,Jt),s=Ae(e,Ie,Qt),i=Ae(e,Ie,eo),l=Ae(e,Ie,to);if(!(r&&s&&i&&l))return null;const n=Te(e,r,uo),u=Te(e,s,lo),_=Te(e,i,fo),x=Te(e,l,mo),N=e.createVertexArray();e.bindVertexArray(N);const z=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,z),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.pixelStorei(e.UNPACK_ALIGNMENT,1);const E=D(e,e.NEAREST),A=D(e,e.LINEAR),T=D(e,e.LINEAR),S=D(e,e.LINEAR),O=D(e,e.LINEAR),L=[D(e,e.LINEAR),D(e,e.LINEAR)],P=D(e,e.NEAREST),he=D(e,e.NEAREST),ae=D(e,e.NEAREST),Z=D(e,e.NEAREST),J=D(e,e.NEAREST),ce=e.createFramebuffer(),ue=e.createFramebuffer(),xe=e.createFramebuffer(),Q=e.createFramebuffer(),be=[e.createFramebuffer(),e.createFramebuffer()],H=(o,a)=>{e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,a,0)};let B=null,V=2,Se=1,Fe=1,Ce=!1,g={count:2,grid:[1,1],kind:0,positions:null},Le=32,j=-1,ee=null,d=0,h=0,X=0,W=0,te=1,G=0,Ee=!1,oe=null;const re=(o,a,f,c,b,w)=>{e.bindTexture(e.TEXTURE_2D,o),e.texImage2D(e.TEXTURE_2D,0,c,a,f,0,b,w,null)},ge=o=>{e.bindTexture(e.TEXTURE_2D,J),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,o.canvas);const a=new Float32Array(Math.max(1,o.glyphs.length));for(let f=0;f<o.glyphs.length;f+=1)a[f]=o.slotCoverage(f);e.bindTexture(e.TEXTURE_2D,Z),e.texImage2D(e.TEXTURE_2D,0,e.R32F,a.length,1,0,e.RED,e.FLOAT,a),Le=o.columns,j=o.version},F=(o,a)=>{e.activeTexture(e.TEXTURE0+o),e.bindTexture(e.TEXTURE_2D,a)},Re=(o,a)=>{for(const f of o.custom){const c=a[f.name];c!==void 0&&(typeof c=="number"?e.uniform1f(f.location,c):c.length===2?e.uniform2f(f.location,c[0],c[1]):c.length===3?e.uniform3f(f.location,c[0],c[1],c[2]):e.uniform4f(f.location,c[0],c[1],c[2],c[3]))}},ke=o=>{const a=L[G];G=1-G;const f=L[G];if(a&&f){e.useProgram(l),e.bindFramebuffer(e.FRAMEBUFFER,be[G]??null),e.viewport(0,0,d,h),F(0,a),e.uniform1i(x.u_previous,0),e.uniform2f(x.u_size,d,h),e.uniform3fv(x.u_pointer,o.pointer),e.uniform1f(x.u_decay,Math.exp(-o.delta*2.2));const c=Math.hypot(o.pointerVelocity[0]??0,o.pointerVelocity[1]??0);e.uniform1f(x.u_strength,Math.min(.9,.08+c*1.6)*Math.min(1,o.delta*30)),e.drawArrays(e.TRIANGLES,0,3)}},I=(o,a,f,c)=>{e.useProgram(o.program),e.bindFramebuffer(e.FRAMEBUFFER,ce),e.viewport(0,0,f,c),F(0,P),e.uniform1i(o.at.u_palette,0),F(1,L[G]??L[0]??P),e.uniform1i(o.at.ascii_trail,1),e.uniform1f(o.at.u_paletteSize,V),e.uniform2f(o.at.u_resolution,c*X/Math.max(1,W),c),e.uniform2f(o.at.ascii_samples,f,c),e.uniform1f(o.at.u_time,a.time),e.uniform1f(o.at.u_seed,a.seed),e.uniform3fv(o.at.u_pointer,a.pointer),e.uniform2fv(o.at.u_pointerVelocity,a.pointerVelocity),e.uniform3fv(o.at.u_click,a.click),e.uniform4fv(o.at.u_audio,a.audio),e.uniform1f(o.at.ascii_levels,a.levels),e.uniform1f(o.at.ascii_interaction,a.interaction),Re(o,a.uniforms),e.drawArrays(e.TRIANGLES,0,3)},Oe=(o,a)=>{const[f,c]=g.grid;e.useProgram(r),e.bindFramebuffer(e.FRAMEBUFFER,ue),e.viewport(0,0,d,h),F(0,E),e.uniform1i(n.u_field,0),F(1,ae),e.uniform1i(n.u_positions,1),F(2,he),e.uniform1i(n.u_thresholds,2),F(3,Z),e.uniform1i(n.u_coverage,3),e.uniform2i(n.u_cells,d,h),e.uniform2i(n.u_grid,f,c),e.uniform1i(n.u_kind,g.kind),e.uniform1i(n.u_count,g.count),e.uniform1i(n.u_calibrated,g.positions?1:0),e.uniform1i(n.u_dither,Ce?1:0),e.uniform1i(n.u_matrixSize,Se),e.uniform1f(n.u_steps,Fe),e.uniform4fv(n.u_grade,o.grade),e.uniform1i(n.u_invert,o.invert?1:0),e.uniform1f(n.u_threshold,o.threshold),e.uniform1f(n.u_edgeThreshold,o.edgeThreshold),e.uniform1i(n.u_colorMode,o.colorMode),e.uniform1i(n.u_hasColor,Ee?1:0),e.uniform3fv(n.u_ink,o.ink),e.uniform3fv(n.u_ansi,o.ansi),e.uniform3fv(n.u_ansiLab,o.ansiLab),e.uniform3fv(n.u_stops,o.stops),e.uniform1i(n.u_stopCount,o.stopCount),e.uniform1f(n.u_glitch,a),e.uniform1f(n.u_glitchSeed,ve(o.frame,2)*100),e.drawArrays(e.TRIANGLES,0,3)},ne=()=>{e.useProgram(i),e.uniform2f(_.u_size,d,h),e.bindFramebuffer(e.FRAMEBUFFER,xe),F(0,T),e.uniform1i(_.u_source,0),F(1,A),e.uniform1i(_.u_glyph,1),e.uniform1i(_.u_fromCells,1),e.uniform2f(_.u_step,1/d,0),e.drawArrays(e.TRIANGLES,0,3),e.bindFramebuffer(e.FRAMEBUFFER,Q),F(0,S),e.uniform1i(_.u_fromCells,0),e.uniform2f(_.u_step,0,.6/h),e.drawArrays(e.TRIANGLES,0,3)},Me=(o,a,f)=>{e.useProgram(s),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,X,W),F(0,A),e.uniform1i(u.u_cellGlyph,0),F(1,T),e.uniform1i(u.u_cellColor,1),F(2,J),e.uniform1i(u.u_atlas,2),F(3,O),e.uniform1i(u.u_bloom,3),e.uniform2i(u.u_cells,d,h),e.uniform2i(u.u_cellSize,f.deviceWidth,f.deviceHeight),e.uniform2f(u.u_canvas,X,W),e.uniform1i(u.u_atlasColumns,Le),e.uniform4fv(u.u_paper,o.paper),e.uniform4f(u.u_fx,o.scanlines,o.bloom,o.curvature,a);const c=o.flicker>0?1-o.flicker*.22*ve(o.frame,3):1;if(e.uniform4f(u.u_fx2,c,o.vignette,te,o.time),a>0){const b=Math.floor(ve(o.frame,4)*h),w=1+Math.floor(ve(o.frame,5)*3*o.glitch),y=Math.round((ve(o.frame,6)-.5)*8*o.glitch);e.uniform4f(u.u_glitchRows,b,b+w,y,0)}else e.uniform4f(u.u_glitchRows,-1,-1,0,0);e.drawArrays(e.TRIANGLES,0,3)},De={dispose:()=>{for(const o of[E,A,T,S,O,...L,P,he,ae,Z,J])e.deleteTexture(o);for(const o of[ce,ue,xe,Q,...be])e.deleteFramebuffer(o);e.deleteBuffer(z),e.deleteVertexArray(N);for(const o of[r,s,i,l])e.deleteProgram(o);B&&e.deleteProgram(B.program)},draw:o=>{if(!B||d===0||h===0||!ee)return;ee.version!==j&&ge(ee);const[a,f]=g.grid;e.bindVertexArray(N),e.disable(e.BLEND),o.interaction===3&&ke(o),I(B,o,d*a,h*f);const c=o.glitch>0&&ve(Math.floor(o.frame/3),1)<o.glitch*.3?o.glitch:0;Oe(o,c),o.bloom>0&&ne(),Me(o,c,ee.metrics)},readCells:()=>{if(d===0||h===0)return null;const o=d*h;oe?.slots.length!==o&&(oe={colors:new Uint8Array(o*4),raw:new Uint8Array(o*4),slots:new Uint16Array(o)});const{raw:a,slots:f,colors:c}=oe;e.bindFramebuffer(e.READ_FRAMEBUFFER,ue),e.readBuffer(e.COLOR_ATTACHMENT0),e.readPixels(0,0,d,h,e.RGBA,e.UNSIGNED_BYTE,a);for(let b=0;b<h;b+=1){const w=(h-1-b)*d;for(let y=0;y<d;y+=1){const ie=(w+y)*4;f[b*d+y]=(a[ie]??0)+256*(a[ie+1]??0)}}e.readBuffer(e.COLOR_ATTACHMENT1),e.readPixels(0,0,d,h,e.RGBA,e.UNSIGNED_BYTE,a);for(let b=0;b<h;b+=1)c.set(a.subarray((h-1-b)*d*4,(h-b)*d*4),b*d*4);return e.bindFramebuffer(e.READ_FRAMEBUFFER,null),{colors:c,columns:d,rows:h,slots:f}},resize:o=>{({columns:d,rows:h,canvasWidth:X,canvasHeight:W,dpr:te}=o);const[a,f]=g.grid;t?re(E,d*a,h*f,e.RGBA16F,e.RGBA,e.HALF_FLOAT):re(E,d*a,h*f,e.RGBA8,e.RGBA,e.UNSIGNED_BYTE),H(ce,E);for(const c of[A,T,S,O,...L])re(c,d,h,e.RGBA8,e.RGBA,e.UNSIGNED_BYTE);e.bindFramebuffer(e.FRAMEBUFFER,ue),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,A,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT1,e.TEXTURE_2D,T,0),e.drawBuffers([e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1]),H(xe,S),H(Q,O);for(const[c,b]of be.entries()){const w=L[c];w&&(H(b,w),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT))}e.bindFramebuffer(e.FRAMEBUFFER,null)},setAtlas:(o,a)=>{const f=a.grid[0]!==g.grid[0]||a.grid[1]!==g.grid[1];g=a,ee=o,ge(o);const c=a.positions??new Float32Array([0]);e.bindTexture(e.TEXTURE_2D,ae),e.texImage2D(e.TEXTURE_2D,0,e.R32F,c.length,1,0,e.RED,e.FLOAT,c),f&&d>0&&De.resize({canvasHeight:W,canvasWidth:X,columns:d,dpr:te,rows:h})},setField:({field:o,colorField:a,specs:f})=>{const c=f.map(({name:y,size:ie})=>`uniform ${io[ie]} ${y};`).join(`
`),b=Yt({colorField:a,field:o,uniforms:c}),w=Ae(e,Kt,b.source,y=>ro({colorField:a,colorLine:b.colorLine,field:o,fieldLine:b.fieldLine,log:y}));return w?(B&&e.deleteProgram(B.program),B={at:Te(e,w,_o),custom:f.map(y=>({...y,location:e.getUniformLocation(w,y.name)})),program:w},Ee=a!==void 0,!0):!1},setMatrix:o=>{Ce=o!==null,o&&(e.bindTexture(e.TEXTURE_2D,he),e.texImage2D(e.TEXTURE_2D,0,e.R8,o.size,o.size,0,e.RED,e.UNSIGNED_BYTE,o.ranks),Se=o.size,Fe=o.steps)},setPalette:o=>{const a=new Uint8Array(o.length*4);for(const[f,c]of o.entries())a.set(c.map(b=>Math.round(b*255)),f*4);e.bindTexture(e.TEXTURE_2D,P),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,o.length,1,0,e.RGBA,e.UNSIGNED_BYTE,a),V=o.length}};return De},po=8,we=new Set,ze=(e,t)=>{e.active=t,e.setActive(t)},mt=e=>{let t=null;for(const r of e)(!t||r.lastSeen<t.lastSeen)&&(t=r);return t},ct=e=>{if(e.active)return;const t=[...we].filter(r=>r.active);if(t.length>=po){const r=t.filter(i=>!i.onScreen),s=e.onScreen?mt(r):null;if(!s)return;ze(s,!1)}ze(e,!0)},Ve=e=>{if(!e.active)return;ze(e,!1);const t=[...we].filter(i=>i.near&&!i.active),r=t.filter(i=>i.onScreen),s=mt(r.length>0?r:t);s&&ze(s,!0)},ho=()=>[...we].some(e=>e.onScreen&&e.near&&!e.active),xo=e=>{const[t,r]=v.useState(!1);return v.useEffect(()=>{const s=e.current;if(!s)return;const i={active:!1,lastSeen:0,near:!1,onScreen:!1,setActive:r};we.add(i);const l=new IntersectionObserver(([u])=>{i.near=u?.isIntersecting??!1,i.near?(i.lastSeen=performance.now(),ct(i)):Ve(i)},{rootMargin:"200px"}),n=new IntersectionObserver(([u])=>{i.onScreen=u?.isIntersecting??!1,i.onScreen&&i.near?(i.lastSeen=performance.now(),ct(i)):!i.onScreen&&i.active&&ho()&&Ve(i)});return l.observe(s),n.observe(s),()=>{l.disconnect(),n.disconnect(),we.delete(i),Ve(i)}},[e]),t},bo={},Eo=83e5,Ro="absolute top-0 left-0 block opacity-100 transition-opacity duration-700 ease-out group-data-[state=fallback]/ascii:opacity-0 group-data-[state=fallback]/ascii:duration-0 motion-reduce:transition-none",pe=e=>e===void 0||!Number.isFinite(e)?0:Math.min(1,Math.max(0,e)),ut=/\bu_(pointer|pointerVelocity|click)\b/,yo=Object.fromEntries(Object.entries(It).map(([e,t])=>{const r=new Float32Array(48),s=new Float32Array(48);for(const[i,l]of t.entries())r.set(l.map(n=>n/255),i*3),s.set(Ut(l),i*3);return[e,{lab:s,rgb:r}]})),Ao=({phosphor:e,colorField:t})=>e?"mono":t===void 0?"palette":"truecolor",To=e=>{const t=yt(e.charset??"standard",e.chars),r=e.colorMode??Ao(e),s=typeof e.ramp=="string"?e.ramp:e.ramp?.join(","),i=[r,e.palette.join(","),e.ink,e.paper,e.phosphor,s,e.ansi,e.background].join("|");return{charset:t,colorKey:i,colorMode:r}},_t=(e,t,[r,s,i])=>{e[t]=r,e[t+1]=s,e[t+2]=i},lt=([e,t,r,s])=>`rgba(${Math.round(e*255)}, ${Math.round(t*255)}, ${Math.round(r*255)}, ${s})`,wo=8,So=(e,t=wo)=>{if(e.length<=t||t<2)return e.slice(0,Math.max(1,t));const r=e.length-1;return Array.from({length:t},(s,i)=>{const l=i/(t-1)*r,n=Math.min(r-1,Math.floor(l)),u=l-n,_=e[n]??[0,0,0,1],x=e[n+1]??_;return[_[0]+(x[0]-_[0])*u,_[1]+(x[1]-_[1])*u,_[2]+(x[2]-_[2])*u,_[3]+(x[3]-_[3])*u]})},Fo=(e,{colorMode:t,palette:r,ramp:s})=>{const i=r.at(-1)??[1,1,1,1];let l=r.length>1?r.slice(1):[i];t==="duotone"&&(l=(typeof s=="string"||s===void 0?Dt[s??"mainframe"]:s).map(x=>{const[N,z,E]=Nt(x);return[N/255,z/255,E/255,1]}));const n=So(l),u=Math.max(1,n.length);for(let _=0;_<u;_+=1)_t(e.stops,_*3,n[_]??i);e.stopCount=u},Co=e=>{const t=Number.parseFloat(getComputedStyle(e).getPropertyValue("--ascii-glow"));return Number.isFinite(t)?Math.max(0,t):.7},Lo=(e,t)=>{e.audio[0]=t?.bass??0,e.audio[1]=t?.mid??0,e.audio[2]=t?.treble??0,e.audio[3]=t?.level??0},go=(e,t)=>{e.levels=t.levels===void 0?0:Math.min(256,Math.max(2,Math.round(t.levels))),e.interaction=ft.indexOf(t.mode),e.grade[0]=t.grade?.brightness??0,e.grade[1]=t.grade?.contrast??1,e.grade[2]=t.grade?.gamma??1,e.grade[3]=t.grade?.saturation??1,e.invert=t.invert??!1,e.threshold=t.threshold??.5,e.edgeThreshold=t.edgeThreshold??.22,e.colorMode=Zt[t.colorMode]},ko=(e,t,r)=>{e.scanlines=pe(t?.scanlines),e.bloom=pe(t?.bloom)*r,e.curvature=pe(t?.curvature),e.glitch=pe(t?.glitch),e.flicker=pe(t?.flicker),e.vignette=pe(t?.vignette)},zo=({field:e,colorField:t,uniforms:r=bo,palette:s=bt,ink:i,paper:l,charset:n,chars:u,colorMode:_,phosphor:x,ramp:N,ansi:z,grade:E,invert:A,threshold:T,edgeThreshold:S,dither:O,background:L,fx:P,matrix:he,levels:ae,cell:Z,square:J,speed:ce=1,animate:ue=!0,fps:xe,stillTime:Q=0,seed:be,interaction:H,audio:B,handle:V,fallback:Se,className:Fe,"aria-hidden":Ce=!0,ref:g,...Le})=>{const j=v.useRef(null),ee=p=>{if(j.current=p,typeof g=="function")return g(p);g&&(g.current=p)},d=v.useRef(null),h=v.useRef(null),X=v.useRef(null),W=v.useRef(null),te=v.useRef(null);te.current??=co();const G=v.useRef(null),Ee=v.useRef({ink:"#ffffff",paper:null}),oe=v.useRef(Q),re=v.useRef(0),[ge,F]=v.useState(!1),Re=v.useRef(!1),ke=xo(j),I=To({ansi:z,background:L,chars:u,charset:n,colorField:t,colorMode:_,ink:i,palette:s,paper:l,phosphor:x,ramp:N}),Oe=`${I.charset.kind}:${I.charset.glyphs.join("")}`,ne=O??he??"none",Me=ao(r),De=Me.map(({name:p,size:m})=>`${p}:${m}`).join(","),o=H&&ft.includes(H)?H:"none",a=o!=="none"||ut.test(e)||t!==void 0&&ut.test(t),f=p=>{Re.current!==p&&(Re.current=p,F(p))},c=v.useRef({audio:B,charset:I.charset,colorKey:I.colorKey,colorMode:I.colorMode,edgeThreshold:S,fx:P,grade:E,invert:A,levels:ae,mode:o,speed:ce,threshold:T,uniforms:r}),b=v.useRef(null),w=v.useRef(null),y=v.useRef(null),ie={ansi:z,background:L,ink:i,palette:s,paper:l,phosphor:x,ramp:N},je=v.useRef(ie),We=v.useRef(1),Ye=v.useRef(Z),Ke=v.useRef(J),Pe=v.useRef(ne);v.useEffect(()=>{c.current={audio:B,charset:I.charset,colorKey:I.colorKey,colorMode:I.colorMode,edgeThreshold:S,fx:P,grade:E,invert:A,levels:ae,mode:o,speed:ce,threshold:T,uniforms:r},je.current=ie,y.current=()=>{const p=d.current,m=te.current;if(!(p&&m&&X.current))return;const Y=c.current,K=G.current;K&&(K.update(re.current),m.pointer.set(K.pointer),m.pointerVelocity.set(K.velocity),m.click.set(K.click)),Lo(m,Y.audio),m.time=oe.current,m.delta=re.current,m.frame+=1,m.seed=be??0,m.uniforms=Y.uniforms,go(m,Y),ko(m,Y.fx,We.current),p.draw(m),f(!0)}});const vt=kt(),Be=v.useRef(!1);v.useEffect(()=>{Be.current=!1},[Q]);const qe=Mt((p,m)=>{re.current=m,m>0?(oe.current+=m*c.current.speed,Be.current=!0):(vt||!Be.current)&&(oe.current=p),y.current?.()},{enabled:ue,fps:xe,stillTime:Q,target:j});v.useEffect(()=>{const p=j.current;if(!(p&&ke))return;const m=document.createElement("canvas");m.className=Ro;const Y=m.getContext("webgl2",{alpha:!0,antialias:!1,depth:!1,powerPreference:"low-power",premultipliedAlpha:!0,preserveDrawingBuffer:!0,stencil:!1});if(!Y)return;p.append(m),h.current=m;let K={columns:0};const Ge=()=>{const R=te.current;if(!R)return;const C=je.current,M=C.phosphor?rt[C.phosphor]:void 0,$=C.palette.map(_e=>He(_e,p));d.current?.setPalette($);const q=$.at(-1)??[1,1,1,1],fe=C.ink??M?.ink,k=C.paper??M?.paper,U=fe?He(fe,p):q,se=k?He(k,p):$[0]??[0,0,0,1];_t(R.ink,0,U);const de=C.background==="transparent",me=de?0:se[3];R.paper[0]=se[0]*me,R.paper[1]=se[1]*me,R.paper[2]=se[2]*me,R.paper[3]=me,Ee.current={ink:lt(U),paper:de?null:lt(se)},Fo(R,{colorMode:c.current.colorMode,palette:$,ramp:C.ramp});const ye=yo[C.ansi??"vga"];R.ansi.set(ye.rgb),R.ansiLab.set(ye.lab),We.current=Co(p)},le=()=>{const R=d.current;if(!R)return;const C=getComputedStyle(p),M=Number.parseFloat(C.width)||p.offsetWidth,$=Number.parseFloat(C.height)||p.offsetHeight,q=window.devicePixelRatio||1,fe=M*$*q*q>Eo?Math.min(q,2):Math.min(q,3),k=At({cell:Ye.current??wt(p),dpr:fe,font:Tt(p),square:Ke.current}),{charset:U}=c.current,se=U.kind==="edge"?[...U.glyphs,...St]:U.glyphs,de=Ft({glyphs:se,metrics:k}),me=U.kind==="ramp"||U.kind==="edge",ye=U.glyphs.length;R.setAtlas(de,{count:ye,grid:U.grid,kind:qt[U.kind],positions:me?Ct(de,ye):null}),W.current=de,X.current=k;const{columns:_e,rows:Ne}=Lt(k,M,$);K={columns:_e,rows:Ne},m.width=_e*k.deviceWidth,m.height=Ne*k.deviceHeight,m.style.width=`${_e*k.width}px`,m.style.height=`${Ne*k.height}px`,R.resize({canvasHeight:m.height,canvasWidth:m.width,columns:_e,dpr:fe,rows:Ne}),y.current?.()},Ze=()=>{d.current?.dispose();const R=vo(Y);if(d.current=R,!R)return;if(!R.setField({colorField:t,field:e,specs:Me})){R.dispose(),d.current=null;return}const C=Pe.current==="none"?null:ot(Pe.current);R.setMatrix(C),Ge(),le()};b.current=()=>{Ge(),y.current?.()},w.current=le;const ht=()=>{Ge(),y.current?.()};let Xe=0;const Je=()=>{cancelAnimationFrame(Xe),Xe=requestAnimationFrame(le)},Qe=R=>{R.preventDefault(),d.current=null,f(!1)},et=()=>{Ze()};Ze();const tt=new ResizeObserver(le);tt.observe(p),window.addEventListener("resize",le);const xt=gt(ht);return document.fonts?.addEventListener?.("loadingdone",Je),m.addEventListener("webglcontextlost",Qe),m.addEventListener("webglcontextrestored",et),V&&(V.current={get canvas(){return h.current},capture:()=>{const R=d.current,C=W.current;if(!(R&&C&&Re.current))return null;const M=R.readCells();if(!M||M.columns!==K.columns)return null;const $=c.current.charset.kind==="braille",q=Array.from(M.slots,k=>$&&k===0?" ":C.glyphs[k]??" ");return{colors:c.current.colorMode==="mono"?null:new Uint8ClampedArray(M.colors),columns:M.columns,glyphs:q,rows:M.rows}},colors:()=>Ee.current,metrics:()=>X.current}),()=>{tt.disconnect(),window.removeEventListener("resize",le),xt(),cancelAnimationFrame(Xe),document.fonts?.removeEventListener?.("loadingdone",Je),m.removeEventListener("webglcontextlost",Qe),m.removeEventListener("webglcontextrestored",et),d.current?.dispose(),d.current=null,b.current=null,w.current=null,V?.current&&(V.current=null),Y.getExtension("WEBGL_lose_context")?.loseContext(),m.remove(),h.current=null,f(!1)}},[e,t,De,ke,V]),v.useEffect(()=>{Ye.current=Z,Ke.current=J,w.current?.()},[Z,J,Oe]),v.useEffect(()=>{Pe.current=ne,d.current?.setMatrix(ne==="none"?null:ot(ne))},[ne]),v.useEffect(()=>{b.current?.()},[I.colorKey]),v.useEffect(()=>{const p=j.current;if(!(p&&a))return;const m=Pt(p);return G.current=m,()=>{m.dispose(),G.current=null}},[a]),v.useEffect(()=>{qe!=="running"&&y.current?.()});const pt=ge?qe:"fallback";return $e.jsx("div",{ref:ee,"aria-hidden":Ce,"data-state":pt,className:Rt("group/ascii pointer-events-none relative overflow-hidden",Fe),...Le,children:$e.jsx("div",{"data-ascii-fallback":!0,className:"absolute inset-0 opacity-0 transition-opacity delay-700 duration-0 group-data-[state=fallback]/ascii:opacity-100 group-data-[state=fallback]/ascii:delay-0",children:Se??$e.jsx("div",{className:"absolute inset-0",style:{backgroundColor:L==="transparent"?"transparent":Et(l??(x?rt[x].paper:s[0]))}})})})};export{zo as A};
