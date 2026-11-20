export const DEFAULT_DOT_VALUES = Object.freeze({
    x: 0,
    y: 0,
    width: 16,
    height: 16,
    scale: 1,
    scaleX: 1,
    scaleY: 1,
    rotate: 0,
    opacity: 1,
    color: "currentColor",
    borderRadius: "50%",
    reveal: 0,
});
const finite = (value, fallback) => typeof value === "number" && Number.isFinite(value) ? value : fallback;
const unit = (value, fallback) => Math.max(0, Math.min(1, finite(value, fallback)));
export function resolveDotState(previous, state) {
    return {
        x: finite(state.x, previous.x),
        y: finite(state.y, previous.y),
        width: Math.max(0, finite(state.width, finite(state.size, previous.width))),
        height: Math.max(0, finite(state.height, finite(state.size, previous.height))),
        scale: Math.max(0, finite(state.scale, previous.scale)),
        scaleX: Math.max(0, finite(state.scaleX, previous.scaleX)),
        scaleY: Math.max(0, finite(state.scaleY, previous.scaleY)),
        rotate: finite(state.rotate, previous.rotate),
        opacity: unit(state.opacity, previous.opacity),
        color: state.color ?? previous.color,
        borderRadius: typeof state.borderRadius === "number"
            ? Math.max(0, finite(state.borderRadius, 0))
            : (state.borderRadius ?? previous.borderRadius),
        reveal: unit(state.reveal, previous.reveal),
    };
}
export function dotSurfaceStyle(state) {
    return {
        width: `${state.width}px`,
        height: `${state.height}px`,
        backgroundColor: state.color,
        borderRadius: typeof state.borderRadius === "number"
            ? `${state.borderRadius}px`
            : state.borderRadius,
        opacity: state.opacity,
        transform: `translate3d(${state.x}px, ${state.y}px, 0) rotate(${state.rotate}deg) scale(${state.scale * state.scaleX}, ${state.scale * state.scaleY})`,
    };
}
/** Internal, browser-independent timeline compiler. */
export function compileDotMotion(initial, steps, transition = {}) {
    const start = resolveDotState({ ...DEFAULT_DOT_VALUES }, initial);
    let current = start;
    let duration = 0;
    const stops = [
        { time: 0, state: start, easing: "linear" },
    ];
    const ends = [];
    for (const step of steps) {
        const delay = Math.max(0, finite(step.delay, finite(transition.delay, 0)));
        const seconds = Math.max(0, finite(step.duration, finite(transition.duration, 0.6)));
        if (delay > 0) {
            duration += delay;
            stops.push({ time: duration, state: current, easing: "linear" });
        }
        // Easing belongs to the beginning of an interval in the Web Animations API.
        stops[stops.length - 1].easing =
            step.easing ?? transition.easing ?? "cubic-bezier(0.22, 1, 0.36, 1)";
        current = resolveDotState(current, step);
        duration += seconds;
        stops.push({ time: duration, state: current, easing: "linear" });
        ends.push(duration);
    }
    return {
        start,
        end: current,
        duration,
        ends,
        surface: stops.map(({ time, state, easing }) => ({
            ...dotSurfaceStyle(state),
            offset: duration ? time / duration : 1,
            easing,
        })),
        content: stops.map(({ time, state, easing }) => ({
            opacity: state.reveal,
            offset: duration ? time / duration : 1,
            easing,
        })),
    };
}
