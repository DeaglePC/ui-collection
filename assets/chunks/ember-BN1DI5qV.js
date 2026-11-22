import{j as t}from"./client-CsvIHAk3.js";import{r as x,c as m}from"./utils-VNNtGTnX.js";import"./style-BdtxH3Yj.js";import{A as y}from"./shader-B_yW4pt8.js";import"./bundle-mjs-BGKYBunL.js";import"./color-CT5GfqS9.js";import"./motion-CAswUGZ0.js";import"./palettes-CipR7Axg.js";const p=`
vec4 emSpark(vec2 uv, float aspect, float flameH, float t) {
  vec2 here = floor(uv * ascii_samples);
  float lane = flameH * 0.32;
  float x = uv.x * aspect;
  float drift = emWind * flameH * 1.2;
  float centre = floor((x - drift * 0.5) / lane);
  vec4 best = vec4(0.0);
  for (int i = -4; i <= 4; i++) {
    for (int k = 0; k < 2; k++) {
      vec2 id = vec2(centre + float(i), float(k) * 31.0 + u_seed * 7.0);
      if (hash21(id + 0.37) > emSparks * 0.6) {
        continue;
      }
      float rate = hash21(id + 4.1);
      float cycle = t / mix(6.0, 11.0, rate) + hash21(id + 1.7);
      float age = fract(cycle);
      float born = floor(cycle);
      float roll = hash21(id + born * 0.731);
      // A spark burns for part of its cycle, then the lane stays dark.
      float span = mix(0.4, 0.8, hash21(id + born * 0.37 + 9.0));
      if (age > span) {
        continue;
      }
      float a = age / span;
      float y = flameH * (0.3 + 0.5 * roll) + flameH * mix(0.9, 1.7, rate) * a;
      float sx = (id.x + 0.15 + 0.7 * roll) * lane + drift * a + flameH * 0.06 * sin(a * 6.0 + roll * 40.0);
      vec2 head = floor(vec2(sx / aspect, y) * ascii_samples);
      vec2 d = here - head;
      if (d.x != 0.0 || d.y > 0.0 || d.y < -1.0) {
        continue;
      }
      float glow = (1.0 - a) * smoothstep(0.0, 0.06, a);
      // Quantised, so a spark blinks now and then rather than shimmering.
      float blink = hash21(id + vec2(floor(t * 5.0), born));
      glow *= blink < 0.14 ? 0.3 : 1.0;
      float tone;
      if (emPacked > 0.5) {
        tone = glow > 0.18 ? (d.y == 0.0 ? 1.0 : 0.8) : 0.0;
      } else {
        // Whole steps, so a spark is a star or a plus, then a dot as it dies.
        float star = glow > 0.55 ? 0.52 : (glow > 0.25 ? 0.47 : 0.12);
        tone = d.y == 0.0 ? star : glow * 0.2;
      }
      if (tone > best.a) {
        best = vec4(a, 0.0, 0.0, tone);
      }
    }
  }
  return best;
}

vec2 emCacheUv = vec2(-1.0);
float emCacheT = -1.0;
vec4 emCacheValue = vec4(0.0);

vec4 emScene(vec2 uv, vec2 res, float t) {
  if (uv == emCacheUv && t == emCacheT) {
    return emCacheValue;
  }
  float aspect = res.x / res.y;
  float flameH = max(emHeight, 0.02);
  vec2 q = vec2(uv.x * aspect, uv.y) / flameH;
  float offset = u_seed * 13.7;

  // Heat shimmer: just above the tongues, rows waver sideways a little.
  float above = smoothstep(0.45, 1.0, q.y) * (1.0 - smoothstep(1.4, 2.4, q.y));
  q.x += 0.03 * above * sin(q.y * 22.0 - t * 2.2 + 2.0 * snoise(vec2(q.x * 1.5, q.y * 2.0 - t * 0.4)));

  // The wind leans the upper flame; turbulence grows with height, so the
  // base holds steady while the tips lick sideways.
  float rise = t * 0.24;
  vec2 w = vec2(q.x - emWind * 0.3 * q.y * q.y + offset, q.y);
  w.x += snoise(vec2(w.x * 1.8, w.y * 1.1 - rise * 1.2)) * (0.03 + 0.12 * w.y);
  // Tongues: ridged noise peaks to a point, so each tongue tapers to a
  // tip. Every one breathes slowly on its own.
  float lobe = 1.0 - abs(snoise(vec2(w.x * 0.8, t * 0.08 + 5.0)));
  float ripple = 0.5 + 0.5 * snoise(vec2(w.x * 3.9 + 11.0, t * 0.16));
  float crest = 0.1 + 1.05 * pow(lobe, 2.6) + 0.2 * ripple * lobe;
  // Smaller tongues in between, so the fire overlaps instead of standing
  // in separate spikes.
  float minor = 1.0 - abs(snoise(vec2(w.x * 1.3 + 20.0, t * 0.12 + 2.0)));
  crest = max(crest, 0.1 + 0.55 * pow(minor, 2.5));
  // Licks rise through each tongue: noise stretched upward.
  float body = fbm(vec2(w.x * 3.0, w.y * 1.3 - rise * 1.5));
  float fine = fbm(vec2(w.x * 6.0 + 3.0, w.y * 2.6 - rise * 2.6));
  float reach = crest * (0.7 + 0.6 * body);
  float h = 1.0 - w.y / max(reach, 0.05);
  // Ragged edges: the fine noise eats into the silhouette, more so near
  // the tip, so no tongue ends on a flat row.
  float ragged = h + (fine - 0.5) * 1.6 * (1.0 - 0.7 * clamp(h, 0.0, 1.0));
  float shape = smoothstep(0.0, 0.22, ragged);
  float root = pow(clamp(h, 0.0, 1.0), 0.9);
  // Vertical streaks inside the tongue, so it reads as rising licks
  // rather than rows of one glyph.
  float streak = fbm(vec2(w.x * 11.0 + 1.7, w.y * 1.2 - rise * 2.2));
  float heat = shape * mix(0.3, 0.92, root) * mix(0.72, 1.08, body);
  heat *= 1.0 + 1.7 * (streak - 0.5);
  // Torn-off pieces that float just above the tips before they fade.
  float torn = smoothstep(0.6, 0.7, fine) * smoothstep(-0.5, -0.1, h) * (1.0 - smoothstep(-0.1, 0.05, h));
  heat = clamp(max(heat, torn * mix(0.14, 0.42, streak)), 0.0, 1.0);

  // Smoke: each tongue carries on above its tip as a faint plume about
  // as tall again, torn by slower noise and fading as it climbs.
  float plume = smoothstep(-1.3, -0.15, h) * (1.0 - smoothstep(-0.15, 0.1, h));
  float drift = fbm(vec2(w.x * 4.0 - 2.0, w.y * 1.6 - t * 0.3));
  // Gated by the vertical streaks too, so it rises in threads rather
  // than lying in rows, and kept to the lightest glyphs.
  float wisp = plume * smoothstep(0.48, 0.66, drift) * smoothstep(0.4, 0.62, streak) * 0.2;
  wisp *= 1.0 - smoothstep(1.4, 2.4, q.y);

  // Theme colours: paper, ink and flame from the palette.
  vec3 paper = paletteColor(0.0).rgb;
  vec3 ink = paletteColor(0.5).rgb;
  vec3 flame = paletteColor(1.0).rgb;
  // Hotter than the flame: toward the ink, which is pale on dark paper and
  // deep on light paper, so the core always has the most contrast.
  vec3 core = mix(flame, ink, 0.42);
  vec3 coal = flame * vec3(1.0, 0.6, 0.4);

  vec4 hit;
  if (heat >= wisp) {
    vec3 col = mix(coal, flame, smoothstep(0.3, 0.75, heat));
    col = mix(col, core, smoothstep(0.78, 1.0, heat));
    // Dots light by threshold, so lift the flame to keep the cores solid.
    hit = vec4(col, emPacked > 0.5 ? pow(heat, 0.6) : heat);
  } else {
    // Smoke fades from warm ink near the flames toward the paper.
    vec3 col = mix(paper, ink, 0.3 + 0.3 * plume);
    col = mix(col, flame, 0.25 * (1.0 - smoothstep(0.8, 1.6, q.y)));
    hit = vec4(col, wisp);
  }

  if (emSparks > 0.0) {
    vec4 spark = emSpark(uv, aspect, flameH, t);
    if (spark.a > hit.a) {
      hit = vec4(mix(mix(flame, core, 0.6), coal, spark.x), spark.a);
    }
  }

  emCacheUv = uv;
  emCacheT = t;
  emCacheValue = hit;
  return hit;
}
`,C=`${p}
float field(vec2 uv, vec2 res, float t) {
  return emScene(uv, res, t).a;
}
`,q=`${p}
vec3 colorField(vec2 uv, vec2 res, float t) {
  return emScene(uv, res, t).rgb;
}
`,i=(a,o,s)=>Math.min(s,Math.max(o,a)),H=({intensity:a=1,wind:o=.2,sparks:s=.5,flame:l="orange",ink:d="--ascii-ink",paper:e="--ascii-paper",charset:n="standard",chars:c,colorMode:v,phosphor:r,dither:u,cell:w=12,stillTime:k=12,fallback:b,interactive:S,...g})=>{const{kind:h}=x(n,c),f=h==="braille"||h==="quadrants";return t.jsx(y,{...g,field:C,colorField:q,uniforms:{emHeight:.5*i(a,0,2),emPacked:f?1:0,emSparks:i(s,0,1),emWind:i(o,-1,1)},palette:[e,e,d,l],paper:r===void 0?e:void 0,charset:n,chars:c,colorMode:v??(r?"mono":"truecolor"),phosphor:r,dither:u??(f?"blue-noise":"none"),cell:w,stillTime:k,interaction:"none",fallback:b??t.jsx("div",{className:"absolute inset-0",style:{backgroundColor:m(e),backgroundImage:`radial-gradient(70% 45% at 50% 100%, color-mix(in oklab, ${m(l)} 28%, transparent), transparent)`}})})};function W(){return t.jsx("div",{className:"stage",children:t.jsx(H,{})})}export{W as default};
