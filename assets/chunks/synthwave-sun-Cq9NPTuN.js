import{j as r}from"./client-CsvIHAk3.js";import{r as O}from"./utils-VNNtGTnX.js";import{u as k}from"./color-CT5GfqS9.js";import"./style-BdtxH3Yj.js";import{A as z}from"./shader-B_yW4pt8.js";import"./bundle-mjs-BGKYBunL.js";import"./motion-CAswUGZ0.js";import"./palettes-CipR7Axg.js";const p=`
const float SW_HORIZON = -0.07;
// Floor grid spacing across, in world units; rows are 1 apart and the
// camera sits 1 above the floor, one box height from the screen.
const float SW_SPACING = 0.55;

float swRidge(float x) {
  float n = 1.0 - abs(snoise(vec2(x * 2.1, 3.7)));
  float m = 1.0 - abs(snoise(vec2(x * 5.3 + 11.0, 1.3)));
  return n * n * 0.75 + m * m * 0.25;
}

// How many multiples of 'step' lie in (lo, hi]: the grid lines that pass
// through one sample's footprint.
float swCrossings(float lo, float hi, float step) {
  return floor(hi / step) - floor(lo / step);
}

vec3 swDeepen(vec3 col) {
  // On light paper, bright amber vanishes: darken and saturate.
  float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
  vec3 rich = mix(vec3(l), col, 1.35) * 0.62;
  return mix(col, clamp(rich, 0.0, 1.0), swOnLight);
}

vec4 swSky(vec2 p, vec2 px, float vx, float t, float rowsPerUnit) {
  float h = p.y - SW_HORIZON;
  vec3 col = mix(vec3(1.0, 0.62, 0.22), vec3(1.0, 0.22, 0.55), smoothstep(0.0, 0.12, h));
  col = mix(col, vec3(0.45, 0.12, 0.7), smoothstep(0.1, 0.32, h));
  col = mix(col, vec3(0.16, 0.08, 0.42), smoothstep(0.3, 0.55, h));
  // The glow: dense glyphs on the horizon, thinning as it climbs.
  float tone = swGlow * 0.55 * exp(-h * 26.0);

  // Stars: single samples, so each is one crisp glyph or dot.
  vec2 id = floor(p / px);
  float star = hash21(id + 7.0);
  if (swStars > 0.5 && star > 0.993) {
    // Slow and shallow, so the sky glimmers rather than flickers.
    float twinkle = 0.75 + 0.25 * sin(t * (0.3 + star * 0.9) + star * 90.0);
    float s = twinkle * smoothstep(0.12, 0.32, h);
    if (s > tone) {
      col = mix(vec3(1.0, 0.85, 0.95), vec3(0.75, 0.8, 1.0), hash21(id + 3.1));
      tone = s;
    }
  }

  // The sun, setting into the horizon with a quarter of it below.
  float radius = min(0.25, 0.34 * u_resolution.x / u_resolution.y);
  vec2 c = vec2(vx, SW_HORIZON + radius * 0.52);
  vec2 s = p - c;
  float d = length(s);
  float v = s.y / radius;
  if (d < radius) {
    // Slices cut the lower part, widening as they fall and sliding down.
    // Measured in whole sample rows, so every gap is crisp.
    float rows = radius * rowsPerUnit;
    float below = (radius * 0.32 - s.y) * rowsPerUnit;
    float period = max(3.0, floor(rows * 0.17 + 0.5));
    float fall = clamp(below / (rows * 1.3), 0.0, 1.0);
    float local = mod(floor(below) + floor(t * swRate * 1.5), period);
    float gap = floor(mix(1.0, period * 0.72, fall) + 0.5) * swSlices;
    if (below > 0.0 && local < gap) {
      return vec4(col, tone);
    }
    vec3 sun = mix(vec3(1.0, 0.16, 0.52), vec3(1.0, 0.62, 0.2), smoothstep(-0.75, 0.35, v));
    sun = mix(sun, vec3(1.0, 0.88, 0.45), smoothstep(0.45, 1.0, v));
    // Full tone: any less and an ordered matrix pocks the disc with holes.
    return vec4(sun, 1.0);
  }
  // A halo round the disc, lighter glyphs that fade into the sky.
  float halo = 0.24 * exp(-(d - radius) * 40.0) * swGlow;
  if (halo > tone) {
    col = mix(col, vec3(1.0, 0.36, 0.55), 0.6);
    tone = halo;
  }
  return vec4(col, tone);
}

// The ridge's top edge, low in the middle so the sun sets in a valley.
float swRidgeTop(float x, float vx) {
  float side = smoothstep(0.06, 0.6, abs(x - vx));
  return SW_HORIZON + swMountainHeight * side * (0.03 + 0.2 * swRidge(x * 0.9 + 4.0));
}

vec4 swMountains(vec2 p, vec2 px, float top) {
  // The crest is one sample row: a wireframe line against the glow.
  if (top - p.y < px.y) {
    return vec4(1.0, 0.34, 0.8, swLine);
  }
  // Faint strata inside, every fourth row, then empty rock.
  float inside = (top - p.y) / px.y;
  float ring = mod(floor(inside), 4.0) == 2.0 ? 0.34 : 0.0;
  return vec4(0.42, 0.1, 0.55, ring * smoothstep(0.0, 0.03, top - SW_HORIZON));
}

vec4 swFloor(vec2 p, vec2 px, float vx, float t) {
  float d = SW_HORIZON - p.y;
  // The horizon row itself: one bright, crisp line.
  if (d < px.y) {
    return vec4(1.0, 0.78, 0.45, 1.0);
  }
  float near = d + px.y * 0.5;
  float far = max(d - px.y * 0.5, 1e-4);
  float travel = t * swTravel * 0.6;
  // Rows across the floor: depth z = 1 / d. A row lights the samples whose
  // depth span holds it; once rows are closer than one sample they merge.
  float zNear = 1.0 / near;
  float zFar = 1.0 / far;
  float rows = swCrossings(zNear + travel, zFar + travel, 1.0);
  float rowDensity = zFar - zNear;
  // Columns converge on the vanishing point: world x = screen x * z.
  float x = p.x - vx;
  float xs = 1.0 / d;
  float columns = swCrossings((x - px.x * 0.5) * xs, (x + px.x * 0.5) * xs, SW_SPACING);
  float columnDensity = px.x * xs / SW_SPACING;

  float z = 1.0 / d;
  float fog = smoothstep(2.5, 26.0, z);
  float line = max(min(rows, 1.0), min(columns, 1.0));
  // Far rows and columns crowd into haze rather than shimmering.
  float merged = smoothstep(0.45, 1.0, max(rowDensity, columnDensity));
  float tone = mix(line * swLine * (1.0 - 0.4 * fog), 0.12, merged);

  vec3 ink = mix(vec3(1.0, 0.18, 0.72), vec3(1.0, 0.5, 0.32), fog);
  // Haze above the floor near the horizon, the colour of the glow.
  float haze = swGlow * 0.32 * exp(-d * 110.0);
  // The sun's reflection on the wet floor: broken rows under the sun.
  float radius = min(0.25, 0.34 * u_resolution.x / u_resolution.y);
  float under = exp(-pow(x / (radius * 0.75), 2.0)) * exp(-d * 5.0);
  float streak = mod(floor(p.y / px.y), 2.0) * swGlow * 0.4 * under;
  float glow = max(haze, streak);
  if (glow > tone) {
    return vec4(mix(vec3(1.0, 0.62, 0.25), vec3(1.0, 0.3, 0.6), smoothstep(0.0, 0.2, d)), glow);
  }
  return vec4(ink, tone);
}

vec2 swCacheUv = vec2(-1.0);
float swCacheT = -1.0;
vec4 swCacheValue = vec4(0.0);

vec4 swScene(vec2 uv, vec2 res, float t) {
  if (uv == swCacheUv && t == swCacheT) {
    return swCacheValue;
  }
  float aspect = res.x / res.y;
  vec2 p = vec2((uv.x - 0.5) * aspect, uv.y - 0.5);
  // One sample in box units. Rows come from the contract; columns from
  // the sample grid, since glyph cells are narrower than they are tall.
  vec2 px = vec2(aspect / ascii_samples.x, 1.0 / res.y);
  // The vanishing point stays dead centre: the landscape never sways.
  float vx = 0.0;
  vec4 col;
  if (p.y >= SW_HORIZON) {
    float top = swRidgeTop(p.x, vx);
    col = p.y <= top ? swMountains(p, px, top) : swSky(p, px, vx, t, res.y);
  } else {
    col = swFloor(p, px, vx, t);
  }
  col.rgb = swDeepen(col.rgb);
  swCacheUv = uv;
  swCacheT = t;
  swCacheValue = col;
  return col;
}
`,R=`${p}
float field(vec2 uv, vec2 res, float t) {
  return swScene(uv, res, t).a;
}
`,N=`${p}
vec3 colorField(vec2 uv, vec2 res, float t) {
  return swScene(uv, res, t).rgb;
}
`,_=r.jsx("div",{className:"absolute inset-0",style:{background:"radial-gradient(circle at 50% 36%, #ffb347 0 9%, #ff3d8b 15%, transparent 16%), linear-gradient(to bottom, transparent 0%, #3a0f5c 40%, #ff3d8b 57%, transparent 57.4%, transparent 100%)"}}),l=(o,t,s)=>Math.min(s,Math.max(t,o)),F=(o,t)=>{const e=k(void 0,[o])?.[0];return t!==void 0||e===void 0?!1:.2126*e[0]+.7152*e[1]+.0722*e[2]>.55},T=({travel:o=1,slices:t=1,slide:s=1,glow:e=1,mountains:v=1,stars:d=!0,paper:n="--ascii-paper",charset:i="braille",chars:c,colorMode:w,phosphor:a,dither:m,cell:u=12,fps:x=60,stillTime:g=4,fallback:y=_,...b})=>{const S=w??(a?"mono":"truecolor"),C=F(n,a),{kind:f}=O(i,c),h=f==="braille"||f==="quadrants";return r.jsx(z,{field:R,colorField:N,uniforms:{swGlow:l(e,0,1),swLine:h?1:.7,swMountainHeight:l(v,0,2),swOnLight:C?1:0,swRate:s,swSlices:l(t,0,1),swStars:d?1:0,swTravel:o},charset:i,chars:c,colorMode:S,phosphor:a,dither:m??(h?"bayer4":"none"),paper:a===void 0?n:void 0,cell:u,fps:x,stillTime:g,fallback:y,...b})};function P(){return r.jsx("div",{className:"stage",children:r.jsx(T,{})})}export{P as default};
