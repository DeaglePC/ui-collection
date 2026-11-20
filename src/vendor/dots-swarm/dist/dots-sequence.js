/** A compact, renderer-independent timeline. No coordinates or React markup required. */
export class DotsSequence {
    constructor(steps, options = {}) {
        this.listeners = new Set();
        this.frame = 0;
        this.last = 0;
        this.connections = 0;
        this.controllers = 0;
        this.getSnapshot = () => this.snapshot;
        this.subscribe = (listener) => {
            this.listeners.add(listener);
            return () => {
                this.listeners.delete(listener);
            };
        };
        this.visibility = () => {
            this.stop();
            if (!document.hidden)
                this.schedule();
        };
        this.tick = (now) => {
            this.frame = 0;
            const speed = this.options.defaults?.speed ?? 1;
            const rate = Number.isFinite(speed) ? Math.max(0.1, Math.min(3, speed)) : 1;
            let time = this.snapshot.time +
                (this.last ? Math.min(0.1, (now - this.last) / 1000) : 0) * rate;
            this.last = now;
            let playing = this.snapshot.playing;
            if (time >= this.duration) {
                if (this.options.loop)
                    time %= this.duration;
                else {
                    time = this.duration;
                    playing = false;
                }
            }
            this.publish(time, playing);
            this.schedule();
        };
        if (!Array.isArray(steps) || steps.length < 1 || steps.length > 128)
            throw new Error("DotsSequence needs 1–128 elements.");
        this.steps = Object.freeze(steps.map((step) => {
            if (![step.shape, step.element, step.asset].filter((value) => typeof value === "string" && value.length).length ||
                [step.shape, step.element, step.asset].filter((value) => value !== undefined).length !== 1)
                throw new Error("Each element needs exactly one shape, element, or asset name.");
            if (!Number.isFinite(step.duration) ||
                step.duration < 0.05 ||
                step.duration > 3600)
                throw new Error("Element duration must be 0.05–3600 seconds.");
            if (step.transition?.duration !== undefined &&
                (!Number.isFinite(step.transition.duration) ||
                    step.transition.duration < 0 ||
                    step.transition.duration > step.duration))
                throw new Error("Transition duration must fit inside its clip.");
            return Object.freeze({
                ...step,
                ...(step.transition && {
                    transition: Object.freeze({ ...step.transition }),
                }),
            });
        }));
        this.options = Object.freeze({
            loop: true,
            autoplay: true,
            ...options,
            defaults: Object.freeze({ ...options.defaults }),
        });
        this.duration = this.steps.reduce((sum, step) => sum + step.duration, 0);
        this.snapshot = this.sample(0, this.options.autoplay !== false);
    }
    /** Recreate a timeline from Studio's plain JSON. */
    static fromJSON(definition) {
        if (definition.version !== 1)
            throw new Error("Unsupported Dots sequence version.");
        const { steps, version: _, ...options } = definition;
        return new DotsSequence(steps, options);
    }
    toJSON() {
        return { version: 1, ...this.options, steps: this.steps };
    }
    /** Pure seek; does not start a clock or mutate playback. */
    sample(seconds, playing = false) {
        const time = Math.max(0, Math.min(this.duration, Number.isFinite(seconds) ? seconds : 0));
        let index = 0, start = 0;
        while (index < this.steps.length - 1 &&
            time >= start + this.steps[index].duration)
            start += this.steps[index++].duration;
        const element = this.steps[index];
        return {
            time,
            progress: time / this.duration,
            index,
            elapsed: time - start,
            playing,
            element,
            values: {
                ...this.options.defaults,
                ...element,
                choreography: element.transition?.path ??
                    element.choreography ??
                    this.options.defaults?.choreography,
            },
        };
    }
    publish(time, playing) {
        this.snapshot = this.sample(time, playing);
        this.listeners.forEach((listener) => listener());
    }
    play() {
        this.publish(this.snapshot.time === this.duration ? 0 : this.snapshot.time, true);
        this.schedule();
        return this;
    }
    pause() {
        this.stop();
        this.publish(this.snapshot.time, false);
        return this;
    }
    seek(seconds) {
        this.last = 0;
        this.publish(seconds, this.snapshot.playing);
        return this;
    }
    restart() {
        return this.seek(0).play();
    }
    /** Give scroll/another external driver ownership of time without freezing the renderer. */
    control() {
        this.controllers++;
        this.stop();
        let released = false;
        return () => {
            if (released)
                return;
            released = true;
            this.controllers = Math.max(0, this.controllers - 1);
            this.schedule();
        };
    }
    /** Shared clock: several consumers can follow one sequence without double-speed playback. */
    connect() {
        this.connections++;
        if (this.connections === 1 && typeof document !== "undefined")
            document.addEventListener("visibilitychange", this.visibility);
        this.schedule();
        let disconnected = false;
        return () => {
            if (disconnected)
                return;
            disconnected = true;
            this.connections = Math.max(0, this.connections - 1);
            if (!this.connections) {
                this.stop();
                if (typeof document !== "undefined")
                    document.removeEventListener("visibilitychange", this.visibility);
            }
        };
    }
    stop() {
        if (this.frame)
            cancelAnimationFrame(this.frame);
        this.frame = this.last = 0;
    }
    schedule() {
        if (!this.frame &&
            !this.controllers &&
            this.connections &&
            this.snapshot.playing &&
            typeof requestAnimationFrame !== "undefined" &&
            !document.hidden)
            this.frame = requestAnimationFrame(this.tick);
    }
}
