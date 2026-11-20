/** Glass optics shared by the material renderer. u_scene is an explicit backdrop. */
export const glassShader = `
vec3 glassLinear(vec3 color) {
  return pow(max(color, vec3(0.0)), vec3(2.2));
}

vec3 glassScene(vec2 uv, vec2 view, float size, float frost) {
  vec2 edge = 0.5 / max(view, vec2(1.0));
  vec3 center = glassLinear(texture2D(u_scene, clamp(uv, edge, 1.0 - edge)).rgb);
  if (frost < 0.005) return center;
  vec2 radius = frost * (1.5 + size * 0.024) / max(view, vec2(1.0));
  vec3 blurred = center * 0.4;
  blurred += glassLinear(texture2D(u_scene, clamp(uv + vec2(radius.x, 0.0), edge, 1.0 - edge)).rgb) * 0.15;
  blurred += glassLinear(texture2D(u_scene, clamp(uv - vec2(radius.x, 0.0), edge, 1.0 - edge)).rgb) * 0.15;
  blurred += glassLinear(texture2D(u_scene, clamp(uv + vec2(0.0, radius.y), edge, 1.0 - edge)).rgb) * 0.15;
  blurred += glassLinear(texture2D(u_scene, clamp(uv - vec2(0.0, radius.y), edge, 1.0 - edge)).rgb) * 0.15;
  return blurred;
}

float glassSoftbox(vec3 direction, vec3 axis, vec2 extent, float softness) {
  axis = normalize(axis);
  vec3 right = normalize(cross(vec3(0.0, 1.0, 0.0), axis));
  vec3 up = cross(axis, right);
  float facing = dot(direction, axis);
  vec2 projected = vec2(dot(direction, right), dot(direction, up)) / max(0.08, facing);
  vec2 boundary = abs(projected) - extent;
  float outside = max(boundary.x, boundary.y);
  return (1.0 - smoothstep(-softness, softness, outside)) * smoothstep(0.0, 0.15, facing);
}

vec3 glassEnvironment(vec3 reflected, vec2 pointer) {
  vec2 lightMove = vec2(0.0);
  if (pointer.x >= 0.0 && pointer.x <= 1.0 && pointer.y >= 0.0 && pointer.y <= 1.0) {
    lightMove = (pointer - 0.5) * 0.42;
  }
  float key = glassSoftbox(reflected, vec3(-0.56 + lightMove.x, -0.62 + lightMove.y, 0.86), vec2(0.33, 0.52), 0.1);
  float fill = glassSoftbox(reflected, vec3(0.85, 0.3, 0.42), vec2(0.2, 0.65), 0.15);
  float strip = glassSoftbox(reflected, vec3(0.15, 0.9, 0.28), vec2(0.7, 0.045), 0.055);
  vec3 ambient = vec3(0.055, 0.06, 0.07) + vec3(0.07) * pow(0.5 + 0.5 * reflected.y, 2.0);
  return ambient + key * vec3(4.0, 4.08, 4.2) + fill * vec3(1.6, 1.72, 1.85) + strip * vec3(2.8, 2.72, 2.6);
}

float glassThickness(float signedDistance, float size) {
  float depth = max(0.0, signedDistance);
  float shoulder = clamp(1.0 - depth / 14.0, 0.0, 1.0);
  float height = 12.0 * sqrt(max(0.0, 1.0 - shoulder * shoulder));
  height += 4.32 * (1.0 - exp(-depth / 24.0));
  // A shallow backing joins the curved face; dimensions remain in body units.
  return (3.0 + height) * size / 96.0;
}

vec2 glassBend(vec3 normal, float ior, float thickness, vec2 view) {
  vec3 ray = refract(vec3(0.0, 0.0, -1.0), normal, 1.0 / ior);
  return ray.xy / max(0.15, -ray.z) * thickness / max(view, vec2(1.0));
}

vec3 shadeGlass(
  vec3 normal,
  vec2 screenUV,
  float signedDistance,
  float size,
  vec2 view,
  float refraction,
  float dispersion,
  float frost,
  float intensity,
  vec3 tint,
  vec2 pointer
) {
  normal = normalize(vec3(normal.xy, max(0.02, normal.z)));
  float thickness = glassThickness(signedDistance, size);
  float travel = thickness * clamp(refraction, 0.0, 1.0) * 1.6;
  float separation = clamp(dispersion, 0.0, 1.0) * 0.075;
  vec2 bendR = glassBend(normal, 1.46 - separation, travel, view);
  vec2 bendG = glassBend(normal, 1.46, travel, view);
  vec2 bendB = glassBend(normal, 1.46 + separation, travel, view);
  vec3 transmitted;
  transmitted.r = glassScene(screenUV + bendR, view, size, frost).r;
  transmitted.g = glassScene(screenUV + bendG, view, size, frost).g;
  transmitted.b = glassScene(screenUV + bendB, view, size, frost).b;

  // Dispersion only splits the real scene. No rainbow color is painted onto the rim.
  float opticalDepth = thickness / max(1.0, size * 0.18);
  vec3 absorption = (vec3(1.0) - clamp(tint, 0.0, 1.0)) * 0.24;
  transmitted *= exp(-absorption * opticalDepth);
  float fresnelBase = pow((1.46 - 1.0) / (1.46 + 1.0), 2.0);
  float fresnel = fresnelBase + (1.0 - fresnelBase) * pow(1.0 - clamp(normal.z, 0.0, 1.0), 5.0);
  vec3 reflected = reflect(vec3(0.0, 0.0, -1.0), normal);
  vec3 reflection = glassEnvironment(reflected, pointer);
  vec3 result = transmitted * (1.0 - fresnel) + reflection * fresnel;
  vec3 original = glassScene(screenUV, view, size, 0.0);
  result = mix(original, result, clamp(intensity, 0.0, 1.0));
  return pow(clamp(result, 0.0, 1.0), vec3(1.0 / 2.2));
}
`;
