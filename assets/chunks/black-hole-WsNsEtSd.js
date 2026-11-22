import{j as i}from"./client-CsvIHAk3.js";import{r as B}from"./utils-VNNtGTnX.js";import{u as E}from"./color-CT5GfqS9.js";import"./style-BdtxH3Yj.js";import{A as N}from"./shader-B_yW4pt8.js";import"./bundle-mjs-BGKYBunL.js";import"./motion-CAswUGZ0.js";import"./palettes-CipR7Axg.js";const m=`
const float BH_CRITICAL = 2.598076;
const float BH_INNER = 3.0;
const float BH_CAMERA = 60.0;

// Stars on a lon/lat grid of the escaped direction. One star at most per
// grid square, about one sample across, so far from the hole each is a
// single glyph or dot; near the edge the lens stretches it into an arc.
float bhStars(vec3 d, vec2 pixel, float t) {
  vec2 a = vec2(atan(d.x, d.z), asin(clamp(d.y, -1.0, 1.0)));
  float spacing = pixel.y * bhCellRows * 7.0;
  vec2 g = a / spacing;
  vec2 id = floor(g);
  float pick = hash21(id + 17.3 + u_seed);
  if (pick < 0.7) {
    return 0.0;
  }
  vec2 centre = (id + 0.2 + 0.6 * vec2(hash21(id + 3.7), hash21(id + 9.1))) * spacing;
  vec2 off = (a - centre) / pixel;
  // Mostly faint points, with the odd bright one.
  float level = hash21(id + 5.3);
  float bright = level > 0.92 ? 0.62 : 0.12 + 0.12 * level;
  // Slow and shallow, so the sky glimmers rather than flickers.
  float twinkle = 0.85 + 0.15 * sin(t * (0.2 + pick * 0.5) + pick * 80.0);
  return bright * twinkle * exp(-dot(off, off) * 2.2);
}

vec3 bhWarm(float heat) {
  vec3 col = mix(vec3(0.55, 0.13, 0.04), vec3(0.98, 0.42, 0.12), smoothstep(0.0, 0.35, heat));
  col = mix(col, vec3(1.0, 0.7, 0.3), smoothstep(0.3, 0.65, heat));
  return mix(col, vec3(1.0, 0.93, 0.78), smoothstep(0.65, 1.0, heat));
}

vec3 bhDeepen(vec3 col) {
  // On light paper, bright amber vanishes: darken and saturate.
  float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
  vec3 rich = mix(vec3(l), col, 1.3) * 0.6;
  return mix(col, clamp(rich, 0.0, 1.0), bhOnLight);
}

vec2 bhCacheUv = vec2(-1.0);
float bhCacheT = -1.0;
vec4 bhCacheValue = vec4(0.0);

// Returns the colour in rgb and the tone in a.
vec4 bhScene(vec2 uv, vec2 res, float t) {
  if (uv == bhCacheUv && t == bhCacheT) {
    return bhCacheValue;
  }
  float aspect = res.x / res.y;
  // Fit the disk across a wide box, keep the shadow a fair share of a
  // narrow one, and never crop the lensed arcs top and bottom.
  float fit = 1.9 * bhOuter / aspect;
  float zoom = max(11.5, min(fit, 13.5 / aspect)) / bhScale;
  vec2 s = (uv - 0.5) * vec2(aspect, 1.0) * zoom;
  // One sample in Schwarzschild radii, rows from the contract and columns
  // from the sample grid, since glyph cells are narrower than they are tall.
  vec2 cellRs = vec2(aspect / ascii_samples.x, 1.0 / res.y) * zoom;

  vec3 cam = BH_CAMERA * vec3(0.0, sin(bhTilt), -cos(bhTilt));
  vec3 fwd = -normalize(cam);
  vec3 right = vec3(1.0, 0.0, 0.0);
  vec3 up = cross(fwd, right);
  vec3 dir = normalize(fwd + (s.x * right + s.y * up) / BH_CAMERA);

  vec3 pos = cam;
  vec3 vel = dir;
  vec3 hv = cross(pos, vel);
  float h2 = dot(hv, hv);
  float b = sqrt(h2);

  float disk = 0.0;
  float heat = 0.0;
  float cover = 0.0;
  bool captured = false;
  for (int i = 0; i < 128; i++) {
    float r = length(pos);
    // Long strides far out, short ones near the photon sphere.
    float dl = clamp(0.1 * (r - 0.8), 0.04, 4.0);
    vec3 acc = -1.5 * h2 * pos / (r * r * r * r * r);
    vec3 mid = vel + 0.5 * dl * acc;
    vec3 next = pos + dl * mid;
    float rn = length(next);
    vel = mid + 0.5 * dl * (-1.5 * h2 * next / (rn * rn * rn * rn * rn));

    if (pos.y * next.y < 0.0) {
      vec3 hit = mix(pos, next, pos.y / (pos.y - next.y));
      float rh = length(hit.xz);
      if (rh > BH_INNER * 0.96 && rh < bhOuter) {
        // Keplerian orbit, anticlockwise seen from above: the left side
        // comes toward the camera.
        vec3 tangent = vec3(-hit.z, 0.0, hit.x) / rh;
        float beta = sqrt(0.5 / rh);
        float gamma = inversesqrt(1.0 - beta * beta);
        float facing = dot(tangent, -normalize(vel));
        float g = sqrt(1.0 - 1.0 / rh) / (gamma * (1.0 - beta * facing));

        // Each radius turns at its own rate, so streaks shear as they flow.
        float omega = 0.22 * pow(BH_INNER / rh, 1.5);
        float ang = atan(hit.z, hit.x) - omega * t;
        vec2 loop = vec2(cos(ang), sin(ang));
        float clumps = fbm(vec2(rh * 1.1, 2.0) + loop * 1.3 + u_seed);
        float streaks = fbm(vec2(rh * 4.2, 7.0) + loop * 1.9 + u_seed);
        float density = clamp(0.25 + 0.75 * clumps + 1.1 * (streaks - 0.5), 0.0, 1.0);

        float inner = smoothstep(BH_INNER * 0.96, BH_INNER * 1.12, rh);
        float outer = 1.0 - smoothstep(bhOuter * 0.35, bhOuter, rh);
        float profile = pow(BH_INNER / rh, 2.0) * inner * outer;
        // Streaks show most in the bright inner disk; the outer disk stays
        // a quiet haze.
        float texture = mix(0.75, 0.3 + 1.0 * density, smoothstep(bhOuter * 0.8, BH_INNER * 1.4, rh));
        float emit = profile * pow(g, bhBeaming) * texture;
        float alpha = clamp(0.3 + 0.7 * density, 0.0, 0.95) * inner * outer;

        float w = (1.0 - cover) * emit;
        disk += w;
        heat += w * clamp((g * pow(BH_INNER / rh, 0.75) - 0.2) * 1.15, 0.0, 1.0);
        cover += (1.0 - cover) * alpha;
      }
    }
    pos = next;
    if (rn < 1.02) {
      captured = true;
      break;
    }
    if (rn > BH_CAMERA && dot(pos, vel) > 0.0) {
      break;
    }
    if (cover > 0.98) {
      break;
    }
  }

  float starLight = 0.0;
  if (!captured && bhShowStars > 0.5 && cover < 0.98) {
    starLight = bhStars(normalize(vel), cellRs / BH_CAMERA, t) * (1.0 - cover);
  }

  // The photon ring: a line a sample or so wide just outside the shadow,
  // brighter on the side that comes toward you.
  float ringDist = (b - BH_CRITICAL) / cellRs.y;
  float ring = exp(-pow(ringDist - 0.5, 2.0) * 1.1) * (1.0 - 0.5 * cover);
  vec2 sn = s / max(length(s), 1e-4);
  ring *= 0.9 - 0.2 * sn.x * (bhBeaming / 2.5);

  float diskTone = 1.0 - exp(-disk * 2.2);
  float ringTone = ring;
  float starTone = starLight;
  float tone = max(max(diskTone, ringTone), starTone);
  // Dots light against an ordered matrix: stretch the range so the hot
  // disk and the ring draw solid and the faint haze thins out.
  tone = mix(tone, smoothstep(0.05, 0.85, tone), bhPacked);

  float heatAvg = disk > 1e-4 ? heat / disk : 0.0;
  vec3 ink = paletteColor(0.0).rgb;
  vec3 accent = paletteColor(1.0).rgb;
  vec3 diskCol;
  vec3 ringCol;
  vec3 starCol;
  if (bhWarmTint > 0.5) {
    diskCol = bhDeepen(bhWarm(heatAvg));
    ringCol = bhDeepen(bhWarm(0.8));
    starCol = bhDeepen(vec3(0.86, 0.9, 1.0));
  } else {
    diskCol = mix(ink, accent, smoothstep(0.25, 0.7, heatAvg));
    ringCol = accent;
    starCol = ink;
  }
  float wd = diskTone + 1e-4;
  vec3 col = (diskCol * wd + ringCol * ringTone + starCol * starTone) / (wd + ringTone + starTone);

  bhCacheUv = uv;
  bhCacheT = t;
  bhCacheValue = vec4(col, tone);
  return bhCacheValue;
}
`,S=`${m}
float field(vec2 uv, vec2 res, float t) {
  return bhScene(uv, res, t).a;
}
`,L=`${m}
vec4 colorField(vec2 uv, vec2 res, float t) {
  vec4 scene = bhScene(uv, res, t);
  // Faint glyphs sit back toward the paper, so the hot disk reads nearest.
  // Dots are either lit or not, so they keep full colour.
  float fade = mix(mix(0.55, 1.0, smoothstep(0.0, 0.7, scene.a)), 1.0, bhPacked);
  return vec4(scene.rgb, fade);
}
`,H=i.jsx("div",{className:"absolute inset-0",style:{background:"radial-gradient(circle at 50% 50%, var(--ascii-paper) 0 9%, var(--ascii-color-orange) 10%, transparent 13%), linear-gradient(to bottom, transparent 48%, color-mix(in oklab, var(--ascii-color-orange) 45%, transparent) 50%, transparent 52%)"}}),I={braille:4,edge:1,quadrants:2,ramp:1},s=(t,a,o)=>Math.min(o,Math.max(a,t)),z=(t,a)=>{const e=E(void 0,[t])?.[0];return a!==void 0||e===void 0?!1:.2126*e[0]+.7152*e[1]+.0722*e[2]>.55},O=({tilt:t=8,speed:a=1,diskSize:o=1,scale:e=1,beaming:p=1,tint:g="theme",stars:b=!0,ink:l="--ascii-ink",accent:u="orange",paper:n="--ascii-paper",charset:h="standard",chars:d,colorMode:k,phosphor:r,dither:x,cell:C=12,fps:w=30,stillTime:y=6,fallback:R=H,...T})=>{const _=k??(r?"mono":"truecolor"),A=z(n,r),{kind:c}=B(h,d),v=c==="braille"||c==="quadrants",f=r===void 0;return i.jsx(N,{field:S,colorField:L,uniforms:{bhBeaming:2.5*s(p,0,2),bhCellRows:I[c],bhOnLight:A?1:0,bhOuter:3+7*s(o,.5,2),bhPacked:v?1:0,bhScale:s(e,.5,1.5),bhShowStars:b?1:0,bhTilt:s(t,-80,80)*Math.PI/180,bhWarmTint:g==="warm"?1:0},charset:h,chars:d,colorMode:_,phosphor:r,dither:x??(v?"bayer4":"none"),palette:[n,l,u],ink:f?l:void 0,paper:f?n:void 0,speed:a,cell:C,fps:w,stillTime:y,fallback:R,...T})};function U(){return i.jsx("div",{className:"stage",children:i.jsx(O,{})})}export{U as default};
