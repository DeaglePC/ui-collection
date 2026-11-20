/** A neutral backdrop; supply your own scene to show background refraction. */
export const glassBackdrop = (ctx, { width, height }) => {
    ctx.fillStyle = "#101114";
    ctx.fillRect(0, 0, width, height);
};
