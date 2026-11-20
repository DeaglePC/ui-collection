/** Targets describe a destination. Actions operate on the particles already there. */
export const swarmActions = {
    explode: (options = {}) => Object.freeze({ ...options, type: "explode" }),
    rain: (options = {}) => Object.freeze({ ...options, type: "rain" }),
    reform: (options = {}) => Object.freeze({ ...options, type: "reform" }),
};
