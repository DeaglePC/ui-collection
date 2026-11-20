/** Emissive tubing along an SDF contour, with an analytically integrated halo.
 * Distances are in the original 96 px silhouette, independent of atlas padding.
 * The result is display RGB with straight alpha; the batch owns compositing.
 */
export const neonShader = /* glsl */ `
float neonGaussian(float distance, float radius, float pixelFootprint) {
  // Approximate convolution with the framebuffer pixel's box filter. Broaden
  // subpixel tubes without creating extra energy or making distant tubes flash.
  float filteredRadius = sqrt(radius * radius + pixelFootprint * pixelFootprint / 6.0);
  float normalized = distance / max(filteredRadius, 0.001);
  return exp(-normalized * normalized) * radius / filteredRadius;
}

vec4 shadeNeon(
  float signedDistance,
  vec3 tint,
  float glow,
  float intensity,
  float pixelFootprint
) {
  vec3 color = clamp(tint, 0.0, 1.0);
  float power = clamp(intensity, 0.0, 2.0);
  float spread = clamp(glow, 0.0, 1.0);
  float footprint = max(pixelFootprint, 0.001);
  float edgeWidth = max(0.7, footprint * 0.5);
  float silhouette = smoothstep(-edgeWidth, edgeWidth, signedDistance);
  if (power <= 0.0) return vec4(color, silhouette);

  // Place the tube just inside the contour. A white filament sits inside a
  // saturated luminous envelope; the center of a large shape stays transparent.
  float tubeDistance = signedDistance - 0.65;
  float filament = neonGaussian(tubeDistance, 0.48, footprint);
  float hotTube = neonGaussian(tubeDistance, 1.15, footprint);
  float envelope = neonGaussian(tubeDistance, 2.35, footprint);

  // Two smooth scattering scales avoid a hard-edged blur or an opaque halo.
  // The broadest tail is already negligible before the padded quad ends.
  float nearHalo = neonGaussian(tubeDistance, 3.0 + spread * 8.0, footprint);
  float farHalo = neonGaussian(tubeDistance, 6.0 + spread * 14.0, footprint);
  float tubeAlpha = clamp(
    filament * 0.92 + hotTube * 0.75 + envelope * 0.32,
    0.0,
    1.0
  );
  float haloAlpha = spread * sqrt(power) *
    (nearHalo * 0.16 + farHalo * 0.035);
  float neonAlpha = tubeAlpha + haloAlpha * (1.0 - tubeAlpha);

  // Work with linear light, preserving the selected hue as energy increases.
  // Only the very narrow filament approaches white; the sheath remains colored.
  vec3 linearTint = pow(color, vec3(2.2));
  float peak = max(max(linearTint.r, linearTint.g), linearTint.b);
  vec3 phosphor = linearTint / max(peak, 0.02);
  vec3 filamentColor = mix(phosphor, vec3(1.0), 0.94);
  vec3 energy = power * (
    filamentColor * filament * 1.45 +
    phosphor * (hotTube * 0.78 + envelope * 0.18) +
    phosphor * spread * (nearHalo * 0.065 + farHalo * 0.009)
  );

  // Resolve energy against coverage before tone mapping, then return straight
  // alpha. Multiplying by coverage here would attenuate the glow twice.
  vec3 exposed = energy / max(neonAlpha, 0.0001);
  vec3 neonColor = pow(vec3(1.0) - exp(-exposed), vec3(1.0 / 2.2));

  // Zero intensity is the flat material, with a short smooth handoff into tube
  // lighting. Emission is deliberately steady: no flicker or periodic pulsing.
  float materialMix = smoothstep(0.0, 0.16, power);
  float alpha = mix(silhouette, neonAlpha, materialMix);
  vec3 premultiplied = mix(
    color * silhouette,
    neonColor * neonAlpha,
    materialMix
  );
  return vec4(premultiplied / max(alpha, 0.0001), alpha);
}
`;
