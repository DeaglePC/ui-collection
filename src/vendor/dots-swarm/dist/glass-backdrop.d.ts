export type SwarmBackdropFrame = {
    width: number;
    height: number;
    time: number;
};
export type SwarmBackdrop = (context: CanvasRenderingContext2D, frame: SwarmBackdropFrame) => void;
/** A neutral backdrop; supply your own scene to show background refraction. */
export declare const glassBackdrop: SwarmBackdrop;
