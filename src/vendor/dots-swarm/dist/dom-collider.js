/** Rasterize text nodes, including wrapped lines, into a collision mask.
 * Call again after fonts/layout change. Supports horizontal, untransformed text.
 * No DOM is changed and no text is converted to an image in the visible UI.
 */
export function createTextCollider(element, surface) {
    const bounds = "getBoundingClientRect" in surface
        ? surface.getBoundingClientRect()
        : surface;
    const rect = element.getBoundingClientRect();
    // Keep one small glyph mask per element, rather than a full-screen image
    // for every heading. Coordinates still belong to the caller's surface.
    const left = Math.max(bounds.left, rect.left - 2);
    const top = Math.max(bounds.top, rect.top - 2);
    const right = Math.min(bounds.left + bounds.width, rect.right + 2);
    const bottom = Math.min(bounds.top + bounds.height, rect.bottom + 2);
    if (right <= left || bottom <= top)
        return { contains: () => false };
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.ceil(right - left));
    canvas.height = Math.max(1, Math.ceil(bottom - top));
    const context = canvas.getContext("2d", { willReadFrequently: true });
    if (!context)
        return { contains: () => false };
    context.fillStyle = "white";
    context.textBaseline = "alphabetic";
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
        const parent = node.parentElement;
        if (!parent)
            continue;
        const css = getComputedStyle(parent);
        context.font = `${css.fontStyle} ${css.fontWeight} ${css.fontSize} ${css.fontFamily}`;
        const metrics = context.measureText("Hg");
        const ascent = metrics.fontBoundingBoxAscent ?? parseFloat(css.fontSize) * 0.8;
        const descent = metrics.fontBoundingBoxDescent ?? parseFloat(css.fontSize) * 0.2;
        const value = node.textContent ?? "";
        // Ranges retain the browser's kerning, letter spacing, and line wrapping.
        for (let i = 0; i < value.length;) {
            const char = String.fromCodePoint(value.codePointAt(i));
            const range = document.createRange();
            range.setStart(node, i);
            range.setEnd(node, i + char.length);
            const rect = range.getBoundingClientRect();
            const baseline = rect.top - top + (rect.height - ascent - descent) / 2 + ascent;
            if (char.trim())
                context.fillText(char, rect.left - left, baseline);
            i += char.length;
        }
    }
    const { data } = context.getImageData(0, 0, canvas.width, canvas.height);
    const width = canvas.width, height = canvas.height;
    const x = left - bounds.left, y = top - bounds.top;
    return {
        bounds: { x, y, width, height },
        contains(x, y) {
            const px = Math.round(x - (left - bounds.left)), py = Math.round(y - (top - bounds.top));
            if (px < 0 || py < 0 || px >= width || py >= height)
                return false;
            return data[(py * width + px) * 4 + 3] > 80;
        },
    };
}
