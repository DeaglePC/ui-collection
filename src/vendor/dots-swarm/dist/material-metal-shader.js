/** Continuous chrome lighting for the shared particle material renderer. */
export const metalShader = /* glsl */ `
float metalWindow(float value, float start, float end, float softness) {
  return smoothstep(start - softness, start + softness, value)
    * (1.0 - smoothstep(end - softness, end + softness, value));
}

float metalReflection(float coordinate, float roughness) {
  float softness = 0.016 + roughness * roughness * 0.22;
  float broad = metalWindow(coordinate, -0.64, -0.13, softness);
  float strip = metalWindow(coordinate, 0.17, 0.29, softness * 0.7);
  float shoulder = metalWindow(coordinate, 0.49, 0.91, softness * 2.4);
  float result = 0.042 + broad * 0.88 + strip * 0.87 + shoulder * 0.42;
  return mix(result, 0.43 + (result - 0.43) * 0.52, roughness * 0.55);
}

vec3 shadeMetal(
  vec3 normal,
  vec2 local,
  vec2 screen,
  float signedDistance,
  float time,
  float roughness,
  float chromatic,
  vec3 tint,
  vec2 pointer,
  float lightAngle
) {
  float polish = 1.0 - clamp(roughness, 0.0, 1.0);
  roughness = 1.0 - polish;
  chromatic = clamp(chromatic, 0.0, 1.0);

  // The cursor steers a nearby reflected light, without deforming the particle.
  vec2 pointerDelta = pointer - screen;
  float pointerDistance = length(pointerDelta);
  float proximity = exp(-pointerDistance * pointerDistance / 78400.0);
  vec2 pointerDirection = pointerDelta / max(pointerDistance, 1.0);
  vec3 n = normalize(normal + vec3(pointerDirection * proximity * 0.13, 0.0));
  vec3 reflected = reflect(vec3(0.0, 0.0, -1.0), n);
  float cs = cos(lightAngle);
  float sn = sin(lightAngle);
  vec2 reflectionPlane = mat2(cs, -sn, sn, cs) * reflected.xy;
  vec2 bodyPlane = mat2(cs, -sn, sn, cs) * local;

  // A few broad studio cards remain legible at small particle sizes. Their
  // slow, nonuniform drift gives the polished surface a flowing quality.
  float clock = time * 0.28;
  float warp = sin(reflectionPlane.x * 3.1 + reflected.z * 1.4 + clock) * 0.12;
  warp += sin(bodyPlane.x * 4.5 - bodyPlane.y * 2.1 - clock * 0.73) * 0.065;
  float field = reflectionPlane.y * 0.79 + reflectionPlane.x * 0.23;
  field += bodyPlane.y * 1.12 + bodyPlane.x * 0.27;
  field += reflected.z * 0.12 + warp;
  field += sin(clock * 0.67) * 0.12;
  field += dot(pointerDirection, vec2(0.35, -0.7)) * proximity * 0.12;

  float grazing = pow(1.0 - clamp(n.z, 0.0, 1.0), 2.4);
  float edge = 1.0 - smoothstep(0.0, 3.2, max(signedDistance, 0.0));
  float separation = chromatic * (0.008 + grazing * 0.026) * (0.35 + polish * 0.65);
  vec3 silver = vec3(
    metalReflection(field + separation, roughness),
    metalReflection(field, roughness),
    metalReflection(field - separation, roughness)
  );

  // Keep the core metallic: most colour lives at the moving reflection edges.
  vec3 conductorTint = mix(vec3(1.0), clamp(tint, 0.0, 1.0), 0.24);
  silver *= conductorTint;
  silver *= vec3(0.97, 0.985, 1.0);

  vec3 key = normalize(vec3(-0.48 * cs - 0.64 * sn, 0.48 * sn - 0.64 * cs, 0.6));
  float rimFacing = max(0.0, dot(n, key));
  float rim = edge * (0.08 + rimFacing * rimFacing * 0.54);
  float catchLight = pow(max(0.0, dot(n, normalize(vec3(pointerDirection * 0.75, 0.8)))),
    18.0 + polish * 66.0) * proximity * 0.19;
  silver += vec3(rim + grazing * 0.11 + catchLight);

  // A narrow dark inside edge separates the object from its bright outer lip.
  float seam = metalWindow(signedDistance, 1.05, 2.4, 0.7) * (1.0 - rimFacing) * polish;
  silver *= 1.0 - seam * 0.23;
  return clamp(silver, 0.0, 1.0);
}
`;
