export function splitTextUnits(text, reveal) {
    if (reveal === "all")
        return [text];
    if (reveal === "words")
        return text.split(/(\s+)/u).filter(Boolean);
    // Keep accents, emoji sequences, and combining marks together.
    const Segmenter = Intl.Segmenter;
    return Segmenter
        ? Array.from(new Segmenter(undefined, { granularity: "grapheme" }).segment(text), (part) => part.segment)
        : Array.from(text);
}
/** Sample a real DOM text run in its browser layout. Wrapped runs are painted
 * a whole line at a time; the final text remains the original selectable DOM. */
export function sampleElementTextPoints(element, count) {
    const bounds = element.getBoundingClientRect();
    if (!bounds.width || !bounds.height)
        return [];
    const css = getComputedStyle(element);
    const canvas = document.createElement("canvas");
    const resolution = Math.min(2, 4096 / Math.max(bounds.width, bounds.height), Math.sqrt(4000000 / (bounds.width * bounds.height)));
    canvas.width = Math.max(1, Math.ceil(bounds.width * resolution));
    canvas.height = Math.max(1, Math.ceil(bounds.height * resolution));
    const context = canvas.getContext("2d", { willReadFrequently: true });
    if (!context)
        return [];
    context.scale(resolution, resolution);
    context.font = `${css.fontStyle} ${css.fontWeight} ${css.fontSize} ${css.fontFamily}`;
    context.letterSpacing =
        css.letterSpacing === "normal" ? "0px" : css.letterSpacing;
    context.direction = css.direction;
    context.textAlign = "left";
    context.fillStyle = "white";
    context.textBaseline = "alphabetic";
    const metrics = context.measureText("Hg"), size = parseFloat(css.fontSize);
    const ascent = metrics.fontBoundingBoxAscent ?? size * 0.8;
    const descent = metrics.fontBoundingBoxDescent ?? size * 0.2;
    const lines = [];
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
        const text = node.textContent ?? "";
        for (let offset = 0; offset < text.length;) {
            const char = String.fromCodePoint(text.codePointAt(offset));
            const range = document.createRange();
            range.setStart(node, offset);
            range.setEnd(node, offset + char.length);
            const rect = range.getBoundingClientRect();
            let line = lines[lines.length - 1];
            if (!line || Math.abs(line.top - rect.top) > 1) {
                line = {
                    text: "",
                    left: rect.left,
                    top: rect.top,
                    height: rect.height,
                };
                lines.push(line);
            }
            line.text += char;
            line.left = Math.min(line.left, rect.left);
            offset += char.length;
        }
    }
    for (const line of lines)
        context.fillText(line.text, line.left - bounds.left, line.top - bounds.top + (line.height - ascent - descent) / 2 + ascent);
    const { data } = context.getImageData(0, 0, canvas.width, canvas.height), ink = [];
    for (let i = 0; i < canvas.width * canvas.height; i++)
        if (data[i * 4 + 3] > 80)
            ink.push(i);
    const scale = Math.min(bounds.width, bounds.height) * 0.48;
    return ink.length
        ? Array.from({ length: count }, (_, i) => {
            const pixel = ink[Math.floor(((i * 0.618033988749895) % 1) * ink.length)];
            return {
                x: (((pixel % canvas.width) + 0.5) / resolution - bounds.width / 2) /
                    scale,
                y: ((Math.floor(pixel / canvas.width) + 0.5) / resolution -
                    bounds.height / 2) /
                    scale,
                z: 0,
            };
        })
        : [];
}
