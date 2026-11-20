# Dots for React

A continuous Canvas particle swarm. Morph between 53 formations, or supply your own point geometry. The same particles retain their positions and momentum as the shape changes.

The free collection includes microphone, calendar, to-do list, email, play/pause, shopping cart, payment card, charts, and lock, alongside organic forms, feedback states, structures, and starter navigation. Use them directly through the `shape` prop, for example `<DotSwarm shape="calendar" />`.

**Alpha release.** The package contains compiled ESM, TypeScript declarations, documentation, and an MIT license. React and React DOM 18 or 19 are peer dependencies. APIs may evolve during alpha.

## Install

```sh
npm install dots-swarm
```

Use `dots-swarm/ui` for UI primitives and import `dots-swarm/ui.css` for their styles. [Documentation and live examples](https://dotsui.dev/docs).

## Single dot

`Dot` is a single DOM surface that moves, grows, changes color, and reveals your content. Import it from `dots-swarm/dot` (or the package root). It needs no stylesheet or animation dependency. Available from `0.1.0-alpha.3`.

```tsx
"use client";
import { Dot, type DotKeyframe } from "dots-swarm/dot";

const entrance: DotKeyframe[] = [
  { y: 0, duration: 0.8, easing: "ease-in" },
  { size: 120, duration: 0.9 },
  { color: "#c3adff", duration: 0.6 },
  { reveal: 1, duration: 0.5 },
];

export function AvatarEntrance() {
  return (
    <div style={{ display: "grid", placeItems: "center", height: 400 }}>
      <Dot initial={{ size: 18, y: -160, color: "#d5f999" }} sequence={entrance}>
        <img src="/avatar.jpg" alt="Ada" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </Dot>
    </div>
  );
}
```

For state-driven motion, use `<Dot initial={{ size: 16 }} animate={{ size: expanded ? 96 : 16, color: selected ? "#c3adff" : "#d5f999" }} />`. An updated target starts at the current visible appearance, including when interrupted. Targets are resolved against `initial`; sequence steps inherit the preceding step. Equivalent inline objects do not restart motion. A changed sequence restarts from `initial`; `sequence` takes precedence over `animate`.

| Prop | Behavior |
| --- | --- |
| `initial` | Initial `DotState`. Defaults: 16px, current text color, circle, hidden content. |
| `animate` | State to animate to; change it to retarget. |
| `sequence` | Readonly array of `DotKeyframe` destinations. Each includes state plus optional `duration`, `delay`, and CSS `easing`. |
| `transition` | Defaults for each step: `duration: 0.6`, `delay: 0`, `easing: "cubic-bezier(0.22, 1, 0.36, 1)"`. Times are seconds. |
| `paused`, `loop`, `speed` | Pause/resume, repeat the sequence, or adjust playback speed (0.05–10). Defaults: false, false, 1. Speed changes preserve position. Loop jumps from end to start; include a return step for a seamless loop. |
| `reducedMotion` | Shows the final state immediately, without looping. The OS preference is always respected. |
| `children` | Any React content, clipped to the dot. `reveal` fades it in. Fully hidden content is inert and hidden from assistive technology. |
| `label` | Optional accessible image name. For semantic/interactive children, omit this and use their normal HTML semantics. Use `aria-hidden` for decorative dots. |
| `onUpdate`, `onComplete` | Playback snapshot (`currentTime`, `duration`, `progress`, `step`, `status`) and completion callback. Completion fires once per completed run, not on seek or loop iterations. |
| `className`, `style`, HTML attributes | Apply to the stable outer anchor. |

`DotState` supports `x`, `y`, `size`, `width`, `height`, `scale`, `scaleX`, `scaleY`, `rotate`, `opacity`, `color`, `borderRadius`, and `reveal`. Distances are pixels, rotation is degrees, and opacity/reveal range from 0–1. A numeric radius is pixels; strings accept CSS values such as `"50%"`. `size` sets both dimensions, with explicit width/height taking precedence. Position is relative to the anchor's center. The anchor reserves the initial dimensions; give its parent room for travel and expansion. Use `style` to position the anchor, and state props to animate the surface.

Attach `useRef<DotHandle>(null)` for `play()`, `pause()`, `restart()`, `seek(seconds)`, and `finish()`. Seeking pauses; playing a completed animation starts it again. The handle exposes `element` (the anchor) and `duration` (one iteration in seconds). Changing `paused` controls playback; imperative controls can also pause/resume it. Reduced-motion users always see the final state, including when seeking. Browsers without Web Animations also receive the final state. Server rendering uses the initial state without accessing browser globals.

Run the website and visit `/dot` for the interactive avatar, app-icon, and status-pill demos.

## Use

```tsx
"use client";

import { useState } from "react";
import { DotSwarm, type Shape } from "dots-swarm";

export default function Example() {
  const [shape, setShape] = useState<Shape>("cloud");
  return (
    <>
      <div style={{ width: 400, height: 400 }}>
        <DotSwarm shape={shape} count={1000} color="#d9f99d" />
      </div>
      <button onClick={() => setShape("heart")}>A little love</button>
    </>
  );
}
```

Keep the component mounted while changing `shape`. The parent must have an explicit size; the canvas fills its parent. No stylesheet or browser globals are required at import time. The client entry includes `"use client"` for Next.js. Pure geometry is also available from `dots-swarm/shapes` for use independently of React.

## Particle objects and materials

Use `particle` to make each particle a shape, glyph, image, or live React element. Materials include `flat`, `metal`, `ink`, `neon`, and `glass`.

```tsx
import { DotSwarm, glassBackdrop, type ParticleObject } from "dots-swarm";

const particle: ParticleObject = {
  kind: "shape",
  shape: "square",
  size: 96,
  variation: 0.24,
  material: {
    kind: "glass",
    refraction: 0.65,
    dispersion: 0.2,
    frost: 0.04,
    intensity: 1,
  },
};

<DotSwarm
  shape="cloud"
  count={12}
  particle={particle}
  backdrop={glassBackdrop}
  interactive
  style={{ height: 520 }}
/>
```

Metal, neon, and glass share a batched WebGL renderer. Silhouette maps are cached while lighting updates continuously; changing material controls does not rebuild the shape maps.

Metal provides flowing silver reflections, rounded edges, and cursor-responsive lighting. `roughness`, `chromatic`, and `intensity` range from 0–1; `flow` ranges from 0–2 and `light` sets the light angle in degrees. Neon follows the silhouette with a bright core and a softer colored halo; `glow` and `intensity` range from 0–1.

Glass bends the supplied backdrop through a curved lens profile, with Fresnel reflections, thickness-dependent tint, and separate color-channel sampling. `refraction`, `dispersion`, `frost`, and `intensity` range from 0–1. Larger particles make the lens effect easier to see. Glass supports 1–2400 particles; start with a small count of larger objects.

Supply `backdrop={(ctx, { width, height, time }) => { /* draw your scene */ }}` to use your own Canvas scene or a loaded image. Coordinates are CSS pixels and time is in seconds, respecting pause and reduced motion. Use same-origin or CORS-enabled images. The supplied scene is the refraction source: surrounding HTML and other overlapping lenses are not captured. The included `glassBackdrop` is a plain dark fill; refraction needs details in the supplied scene to be visible.

GPU materials require WebGL. Use `onMaterialStatus={(status) => { /* "ready" or "unavailable" */ }}` to display an explanation or choose another material when it is unavailable. `flat`, `ink`, and the live HTML elements do not require WebGL. These are shaded silhouettes, not volumetric meshes or soft-body simulations.

For live HTML, use `{ kind: "html", render: ({ index }) => <YourComponent />, holdOnInteraction: true }`. Up to 96 real elements retain their identities across formations. `holdOnInteraction` keeps the hovered or focused element still while the rest of the swarm moves.

## Props

| Prop                 | Default     | Description                                                   |
| -------------------- | ----------- | ------------------------------------------------------------- |
| `shape`              | `"cloud"`   | Built-in formation                                            |
| `motion`             | unset       | Custom-point motion: `rotate`, `swirl`, `wave`, `pulse`, or `orbit` |
| `points`             | unset       | Readonly normalized `{ x, y, z }[]`; overrides shape          |
| `count`              | `900`       | Particle count, clamped to 24–2,400                           |
| `color`              | `"#eef0e9"` | Canvas-compatible CSS color                                   |
| `speed`              | `1`         | 0.1–3 animation speed                                         |
| `choreography`       | `"flow"`    | `"flow"`, `"scatter"`, `"direct"`                             |
| `dotSize`            | `1.25`      | Radius in CSS pixels, 0.4–4, scaled down in small canvases    |
| `spread`             | `1`         | Formation scale, 0.4–1.5                                      |
| `paused`             | `false`     | Freeze animation; selecting a new shape renders a static pose |
| `interactive`        | `false`     | Pointer repulsion                                             |
| `reducedMotion`      | `false`     | Force a static pose; OS preference is always respected        |
| `label`              | generated   | Canvas accessible name                                        |
| `className`, `style` | unset       | Canvas styles                                                 |
| `onTransitionChange` | unset       | Callback receiving a transition boolean                       |

## Navigation

15 starter navigation formations are included in the core. Pass a provider-independent instruction to `NavigationSwarm` and keep it mounted between updates:

```tsx
"use client";
import { NavigationSwarm } from "dots-swarm";
import type { NavigationInstruction } from "dots-swarm/navigation";

export function NextTurn({
  instruction,
}: {
  instruction: NavigationInstruction;
}) {
  return (
    <NavigationSwarm
      instruction={instruction}
      units="metric"
      style={{ height: 320 }}
    />
  );
}

// Example instruction:
// { maneuver: "turn-left", distanceMeters: 200, roadName: "Highway 401" }
```

`NavigationSwarm` inherits `DotSwarm`'s visual props except `shape` and `points`, defaults to `choreography="direct"`, and gives the canvas an accessible instruction label. `units` can be `metric` or `imperial`; input distances always use meters. Also show the instruction as visible text for navigation interfaces.

Instructions support `straight`, `turn-left`, `turn-right`, `u-turn`, `roundabout`, and `arrive`, with optional distances, road names, and roundabout exit numbers. The free roundabout uses a generic symbol; directional exits and advanced maneuvers belong to Pro. Unsupported runtime maneuver values throw rather than show a misleading direction. Invalid distances display “Next”; zero or negative distances display “Now”.

This is a visualization layer: bring your own routing and location data.

## Formations

The core has 53 formations: 18 everyday app essentials, 20 organic/expression/feedback/structure shapes, and 15 starter navigation symbols. Navigation IDs: `arrow`, `globe`, `route`, `turn-left`, `turn-right`, `straight`, `u-turn`, `roundabout`, `arrive`, `pin`, `current-location`, `compass`, `map`, `car`, `walking`.

The 76 advanced navigation formations are separate Pro artwork, available in the Studio preview and resolved by name through the private Pro registry. They are not included in this npm archive. Read `SHAPES` and `shapeInfo` for the authoritative core registry.

`getShapePoints(shape, count, timeInSeconds)` returns normalized geometry. `SHAPES` and `shapeInfo` expose the registry. Keep custom point arrays stable with module constants or `useMemo`; a new array intentionally triggers destination rematching. Custom points are resampled to the requested count. Values around −1…1 give the intended framing; z controls brightness and apparent depth.

## Motion and accessibility

The renderer batches particles into eight Canvas paths, caps device pixel ratio at 2, pauses outside the viewport or on hidden pages, and uses analytic critically damped springs. It respects `prefers-reduced-motion` and cleans up animation frames, observers, and event listeners on unmount.

Provide visible text for meaningful status and a pause control for continuous motion. The `label` describes the graphic but does not replace semantic UI. The package targets browsers with Canvas, ResizeObserver, IntersectionObserver, and matchMedia; it is not the React Native implementation.

## License and release

The separate Pro artwork and advanced systems are not included in this MIT package. Studio exports named sequence definitions; Pro formations and features require `@dots-swarm/pro`.

The core package is MIT licensed. The surrounding Dots website and Studio are separate from this package. Studio-generated point data and React code run with this package and make no license-server or analytics requests.

For Pro, purchase lifetime access at [dotsui.dev/pro](https://dotsui.dev/pro), create an install token in your account, and follow the private registry setup in the docs. Then use `npm install dots-swarm @dots-swarm/pro`. Authentication is required for package downloads, never at runtime in your website.


## Seekable keyframe choreography

`SwarmSequence` is included in the free core. Supply stable keyframes and a controlled `progress` from 0 to 1. The playhead can come from a range input, scroll position, requestAnimationFrame, or GSAP. There is no animation-library dependency.

```tsx
import { SwarmSequence, type SwarmKeyframe } from "dots-swarm";

const keyframes: SwarmKeyframe[] = [
  { at: 0, shape: "cloud", dispersion: 0.7, density: 0.4 },
  { at: 0.5, shape: "wire-sphere", dispersion: 0, density: 1,
    color: "#b6a1ff", rotation: 0.5, stagger: 0.2 },
  { at: 1, shape: "check", rotation: 0, color: "#ffffff" },
];

export function Scene({ progress }: { progress: number }) {
  return <SwarmSequence keyframes={keyframes} progress={progress}
    count={1200} style={{ height: 400 }} />;
}
```

Use 2–64 strictly increasing keyframes, starting at 0 and ending at 1. Geometry is sampled and matched once per keyframe array/count change, preserving dot identities in either direction. Memoize generated arrays. A new `shape` clears inherited custom `points`. Custom coordinates use the same normalized `Point` format as `DotSwarm`.

Animatable values: `color` (#RGB/#RRGGBB), `rainbow` (0–1 blend toward a continuous 14-second spectrum cycle), `density` (0–1), `dispersion` (0–2), `turbulence` (0–1), `speed` (turbulence frequency multiplier, 0–5), `dotSize` (0.2–6), `opacity` (0–1), `scale` (0.1–2), `rotation` (Z radians, ±20π), `x`/`y` (normalized position, ±2). Values carry forward when omitted and interpolate between adjacent keyframes. Finite numeric values are clamped to supported bounds. Keep `count` fixed (24–2400); animate `density` to fade dots in the existing pool. Color and other bounded properties do not overshoot with elastic easing; geometry can.

The destination keyframe configures its incoming transition with `ease` (`smooth`, `linear`, `elastic`), `path` (`flow`, `scatter`, `direct`) and `stagger` (0–0.8). Duplicate values at a later `at` to hold a pose. Playback speed belongs to the caller's progress clock; `speed` controls procedural turbulence only.

`interactive` enables pointer repulsion. `reducedMotion` or the OS preference snaps the playhead to keyframe poses and disables turbulence and pointer response. The renderer does not own scrolling: disable scroll pinning in your controller for reduced-motion users. It redraws on progress/property changes and stops drawing when hidden or offscreen.

For custom renderers, `compileSwarmSequence`, `sampleSwarmSequence`, and `sampleSwarmParticle` expose the same deterministic pipeline. JSON-serializable keyframes can be stored as recipes. Existing `DotSwarm` and navigation APIs are unchanged.

Enable `animate` on `SwarmSequence` to play each shape’s native motion while the controlled `progress` stays still. `animationSpeed` (0–5, default 1) controls this independent clock, and `paused` freezes it without resetting phase. Flat interface glyphs gently breathe. Matched particle identities persist through animated morphs; custom points remain unchanged. Offscreen, hidden-tab, and reduced-motion states suspend the clock. With `animate` omitted, rendering stays deterministic and driven only by progress. `sampleSwarmSequence(sequence, progress, timeInSeconds)` exposes the same live geometry and rainbow colors for custom renderers.

## Physics and particles → components

`SwarmSurface` is a second renderer in the free core. One persistent pool moves between named DOM targets, gravity, custom formations, and avatars. Its canvas is decorative: the buttons, menus, text, and focus behavior remain your semantic HTML.

```tsx
"use client";
import { useMemo, useRef, useState } from "react";
import { SwarmSurface, type SwarmTarget } from "dots-swarm";

export function LivingButton() {
  const shape = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const [gathered, setGathered] = useState(false);
  const targets = useMemo<SwarmTarget[]>(() => gathered
    ? [{ id: "cta", kind: "element", ref: button, radius: 28 }]
    : [{ id: "helix", kind: "shape", shape: "helix", ref: shape }],
    [gathered]);

  return (
    <SwarmSurface targets={targets} count={900}
      style={{ height: 400, background: "black", color: "white" }}>
      <div ref={shape} style={{ height: 280 }} aria-hidden="true" />
      <button ref={button} onClick={() => setGathered(!gathered)}
        style={{ display: "block", margin: "auto", width: 200,
          height: 56, borderRadius: 28, border: 0,
          color: "#111", background: "white" }}>
        {gathered ? "Become a helix" : "Become a button"}
      </button>
    </SwarmSurface>
  );
}
```

Targets require a stable `id`, an element `ref` inside the surface, and one of:

- `{ kind: "shape", shape: "helix" }`: a core formation, with its native motion.
- `{ kind: "points", points }`: normalized custom/Pro geometry, resampled to the target's particle share. Use a new ID if replacing unrelated custom geometry and you want nearest-point rematching.
- `{ kind: "element", appearance?: "solid", radius?: 18 }`: particles fill its rounded bounds, then hand rendering to your actual HTML component. The solid finish is the default. Style your element normally, including its fill, typography, border, shadow, hover and focus states. Set `appearance: "dots"` to keep a particle border (`thickness` defaults to 6 CSS px).
- `{ kind: "avatar", appearance?: "solid", expression?: "neutral" }`: a flat, softly lit character with large pill eyes, breathing, blinking, and pointer gaze. It can burst into dots and reform. Use `appearance: "dots"` to retain a point-cloud character. Expressions: `neutral`, `happy`, `curious`, `surprised`, `excited`, `dizzy`. `excited` opens the eyes; `dizzy` makes them drift and tilt independently as the body sways. Set `tension` (0–1) to compress and tremble, or let `burst({ anticipation })` drive it. Use `onBurstPhaseChange` to choose the returning expression. Reduced motion freezes the pose and disables bursts.

Provide multiple targets to split the swarm. Each optional `weight` determines its relative share. Geometry is placed using each element’s bounds relative to the surface. Keep the same component mounted to retain particle positions/velocities. Changing `count` intentionally recreates the pool. Memoize target/collider arrays to avoid unnecessary remeasurement.

Solid targets use a hybrid finish: particles occupy the full body during transitions, then fade out as their arrival error falls and the finished surface appears. The finish latches once assembled, so pointer movement or blinking does not expose a dotted texture. Bursts and physics release the same particle pool again. Density is not used to fake a solid object.

For solid element targets, the renderer temporarily owns inline `opacity`, revealing the **real DOM** at the end of assembly; it restores the previous inline value on target removal/unmount. Do not independently animate that target's opacity. Keep inactive UI hidden/inert yourself. Native children, events, semantics, and CSS remain yours. Use target `color` to match the transitional particles to an element's fill (default: surface color). For avatars, it sets the body color as well. Reduced motion reveals the finished surface immediately.

### Motion and collisions

`mode="form"` (default) attracts particles to their targets. `mode="physics"` releases them under gravity and wind; switching back gathers the same particles. Physics advances in real time, so scroll-triggered state changes do not rewind the simulation.

| Prop | Default | Meaning |
| --- | --- | --- |
| `count` | 1000 | Fixed pool, 24–2400 |
| `gravity`, `wind` | 650, 0 | Downward / horizontal acceleration in CSS px/s², physics mode |
| `spring`, `damping` | 70, 13 | Attraction / velocity damping in form mode |
| `restitution` | 0.55 | Bounce retention, clamped 0–1 |
| `dotSize`, `color` | 1.2, white | Dot radius (0.4–4 CSS px) and Canvas-compatible color |
| `rainbow` | false | Continuous 15-second color cycle |
| `interactive` | false | Pointer repulsion in form mode |
| `viewport` | false | Portal the canvas above the page; particles bounce inside the full viewport |
| `onBurstPhaseChange` | — | Receives `charging`, `scattered`, `gathering`, `settled` |
| `paused` | false | Freeze the simulation and shape clock |
| `reducedMotion` | OS preference | Snap to targets, disable continuous animation and bursts |

Pass `colliders={[{ ref: headline, kind: "text" }]}` for glyph collisions, or `kind: "box"` for a rectangle. A `{ selector: "header a, button", kind: "box" }` entry measures matching controls within the surface, or across the document with `viewport`. Only elements intersecting the surface are included. Text is rasterized into a local occupancy mask; the visible DOM is untouched. Swept particle/mask collisions and 120 Hz substeps reduce tunneling, with frame time capped at 50 ms. Side/floor bounds retain released particles so they can reassemble. There are no particle-to-particle collisions or rigid bodies.

Text masks support horizontal, untransformed text, including wrapped lines. This is not a general DOM screenshot renderer: images, borders, shadows, rotated elements, SVG, vertical writing, and pseudo-elements are not rasterized. Use custom colliders with the pure solver when needed.

Use a `SwarmSurfaceHandle` ref for `burst()` and `refresh()`. A burst adds a velocity impulse to the existing particles. Coordinates are surface-local CSS pixels, or viewport CSS pixels with `viewport`. The default origin is the particle centroid; strength defaults to 360 px/s, radius to unlimited, anticipation to 0, duration to 0.28 seconds, and reassemble to 0 (immediate attraction). `spread` (0–1, default 0) varies particle directions and speeds. Reduced motion and pause disable new bursts. An in-progress burst freezes with the surface clock when paused, offscreen, or in a hidden tab.

```tsx
<SwarmSurface ref={surface} viewport targets={targets}
  colliders={[
    { selector: "h1, h2", kind: "text" },
    { selector: "header a, button", kind: "box" },
  ]}
  gravity={170} restitution={0.82}
  onBurstPhaseChange={(phase) => {
    if (phase === "scattered") setExpression("dizzy");
  }}>
  <div ref={avatar} style={{ height: 400 }} aria-hidden="true" />
</SwarmSurface>

surface.current?.burst({
  anticipation: 2.1, // compress and tremble first
  strength: 1900, spread: 0.95,
  duration: 2.7,     // freely ricochet against the page
  reassemble: 4.2,   // gradually restore the attraction
});
```

`settled` fires after the return interval and arrival at the targets. Keep meaningful status in visible HTML. The viewport canvas is a pointer-transparent React DOM portal and stays mounted so the same particle pool survives every phase; it also bounces off the top edge. Target refs still belong to the surface's children. Refs/selectors can measure obstacles elsewhere on the page.

ResizeObserver and font loading refresh measurements. Call `refresh()` after position-only layout changes, text-content changes, CSS transitions, or scrolling inside a nested container. Viewport surfaces automatically remeasure on captured scroll events. Use untransformed target elements. Elements can be visually hidden while measured, but `display: none` has no usable bounds. Maintain native focus and visibility semantics yourself when revealing controls.

The surface pauses offscreen/in hidden tabs and caps DPR at 2. Keep status text, labels, keyboard interactions, and pause controls in HTML. Pointer events pass through the decorative canvas.

### Use the solver without React

```ts
import { SwarmPhysics, createRectCollider } from "dots-swarm/physics";

const physics = new SwarmPhysics([{ x: 40, y: 20 }, { x: 80, y: 20 }]);
physics.step(1 / 60, {
  gravity: 650,
  colliders: [createRectCollider(0, 180, 240, 30)],
  bounds: { width: 240, height: 300 },
});
// Render physics.particles. Supply a targets array to attract them again.
```

The pure solver exposes mutable particles with `x`, `y`, `vx`, `vy`, and `opacity`; its `step` accepts `PhysicsStep`, and `burst` adds an impulse. Custom colliders expose `contains(x, y)`. `createTextCollider(element, surface)` and `sampleSurfaceGeometry(...)` are also exported from the root for browser/custom renderers. Only the text helper needs the DOM.

## UI primitives — `dots-swarm/ui`

The free core includes `SwarmButton`, `SwarmSelect`, `SwarmSlider`,
`SwarmCheckbox`, and `SwarmSwitch`. Each settles into a real, solid DOM control.
Radix handles keyboard interaction, focus, form integration, disabled states,
and controlled/uncontrolled values. Shape-only imports do not load Radix.

```tsx
"use client";
import { useState } from "react";
import { SwarmUI, SwarmButton, SwarmSwitch } from "dots-swarm/ui";
import "dots-swarm/ui.css"; // optional skin

export function Example() {
  const [scene, setScene] = useState("button");
  return (
    <>
      <SwarmUI.Root active={scene} style={{ height: 280 }}>
        <SwarmUI.Scene name="button" style={{ position: "absolute", inset: 80 }}>
          <SwarmButton onClick={() => setScene("settings")}>Settings</SwarmButton>
        </SwarmUI.Scene>
        <SwarmUI.Scene name="settings" style={{ position: "absolute", inset: 80 }}>
          <SwarmSwitch.Root aria-label="Notifications" defaultChecked>
            <SwarmSwitch.Thumb />
          </SwarmSwitch.Root>
        </SwarmUI.Scene>
      </SwarmUI.Root>
      <button onClick={() => setScene("button")}>Back</button>
    </>
  );
}
```

`Root` owns one pool. `active` chooses a named `Scene`. Inactive scenes keep their
form values, but are hidden and inert. Supply the scene layout yourself; absolute
or grid positioning lets formations share the same space. The controls also work
as ordinary controls outside a root.

- **Button:** native button props, `asChild`, forwarded ref.
- **Select:** `Root`, `Trigger`, `Value`, `Icon`, `Portal`, `Content`, `Viewport`,
  `Item`, `ItemText`, `ItemIndicator`, `Group`, `Label`, `Separator`,
  `ScrollUpButton`, `ScrollDownButton`.
- **Slider:** `Root`, `Track`, `Range`, `Thumb` (including multiple thumbs and vertical sliders).
- **Checkbox:** `Root`, `Indicator` (including `indeterminate`).
- **Switch:** `Root`, `Thumb`.

Parts accept the underlying Radix props and refs. Provide accessible names or
visible labels. Theme with your own classes or the optional skin's
`--swarm-ui-bg`, `--swarm-ui-fg`, `--swarm-ui-muted`, and `--swarm-ui-accent`
tokens. Portalled Select content needs tokens on Content or a common ancestor.

### Your own Radix / shadcn components

```tsx
<SwarmUI.Scene name="custom">
  <SwarmUI.Part asChild radius={12} weight={1}>
    <YourButton onClick={save}>Save changes</YourButton>
  </SwarmUI.Part>
</SwarmUI.Scene>

<SwarmUI.Scene name="cloud">
  <SwarmUI.Part shape="cloud" style={{ width: 240, height: 240 }} />
</SwarmUI.Scene>
```

The `asChild` child must forward its ref and spread received props onto a real
DOM element. Do not wrap an already-registered swarm primitive in another Part.
`Part` registers the actual element, so particles form the control itself rather
than a surrounding card. `shape` produces an optional particle formation instead.

Root accepts `SwarmSurface` options including count, color, colliders, spring,
damping, paused, and reducedMotion. `transition={false}` makes a direct morph;
a burst-options object customizes the default scatter. The forwarded root ref
exposes `burst()` and `refresh()`. `manageFocus` defaults to true and transfers
focus only when a focused outgoing scene becomes inactive. Reduced motion
reveals the finished controls immediately; no animation is needed to use them.

## Compact timelines — `DotsSequence`

```ts
import { DotsSequence } from "dots-swarm/sequence";

export const sequence = new DotsSequence([
  { shape: "halo", duration: 4 },
  { shape: "heart", duration: 6, color: "#ffa9bd",
    transition: { duration: 0.7, path: "flow" } },
  { shape: "check", duration: 3 },
], { loop: true, defaults: { count: 1000, color: "#ffffff" } });
```

Render with `<DotsSequencePlayer sequence={sequence} style={{ height: 400 }} />`
from `dots-swarm`. Keep the instance stable (module scope or `useMemo`).
`pause()`, `play()`, `seek(seconds)`, and `restart()` control playback.
`sample(seconds)` is pure. `toJSON()` / `DotsSequence.fromJSON(definition)`
round-trip a compact definition. The `/sequence` subpath is React-independent.

Each clip has exactly one of `shape`, `element` (a UI scene name), or `asset`
(a key in separately supplied custom geometry). `duration` is the full clip
length; its transition is included. Remaining clip time holds the animated shape.
Per-clip/default appearance supports color, count, speed, dotSize, spread,
background, interactive, and choreography. Transition supports duration/path.
The default transition is min(0.8 seconds, 40% of clip duration).

`useDotsSequence(sequence)` drives UI timelines too:

```tsx
const { element, playing } = useDotsSequence(sequence);
<SwarmUI.Root active={element.element!} paused={!playing}>
  <SwarmUI.Scene name="cloud">
    <SwarmUI.Part shape="cloud" style={{ width: 240, height: 240 }} />
  </SwarmUI.Scene>
  <SwarmUI.Scene name="continue">
    <SwarmButton onClick={next}>Continue</SwarmButton>
  </SwarmUI.Scene>
</SwarmUI.Root>
```

The hook returns time, progress, index, elapsed, element, values, and playing.
Consumers share one clock; unmounting the last consumer stops it. Reduced motion
stays on the chosen state, and hidden tabs suspend playback. Non-React consumers
can call `connect()` and `subscribe()`; both return cleanup functions.

Studio exports `.ts` or compact sequence JSON. Core and Pro shapes are named,
never baked into coordinate arrays. Pass a private Pro registry through `shapes`:

```tsx
import { proShapes } from "@dots-swarm/pro";
<DotsSequencePlayer sequence={sequence} shapes={proShapes} />
```

Only imported/custom artwork needs coordinates. Store it in a separate assets
file and pass `assets={{ "custom-01": { points, motion: "rotate" } }}`. A missing
shape registry or asset produces an explicit error instead of silently replacing
your artwork. Studio backup remains available for importing editor projects.

## Scroll controls

The landing page uses these public APIs. They work with native wheel, touch,
and keyboard scrolling; there is no wheel interception.

```tsx
import { useRef } from "react";
import {
  useSwarmScroll, useSwarmScrollSnap, SwarmScrollPin, SwarmScrollStops,
  SwarmSequence, type SwarmKeyframe,
} from "dots-swarm";

const frames: SwarmKeyframe[] = [
  { at: 0, shape: "halo" },
  { at: 0.45, shape: "halo" }, // long animated hold
  { at: 0.5, shape: "heart" }, // short morph
  { at: 0.95, shape: "heart" },
  { at: 1, shape: "check" },
];

function Story() {
  const target = useRef<HTMLElement>(null);
  const { progress, scrollTo } = useSwarmScroll({ target, offset: 80 });
  useSwarmScrollSnap({ points: "[data-story]", offset: 80 });
  return (
    <section ref={target} data-story
      style={{ height: "400svh", position: "relative" }}>
      <SwarmScrollStops points={[0, 0.5, 1]} offset={80} />
      <SwarmScrollPin offset={80}>
        <SwarmSequence keyframes={frames} progress={progress}
          animate style={{ height: "70svh" }} />
        <button onClick={() => scrollTo(0.5)}>Heart</button>
      </SwarmScrollPin>
    </section>
  );
}
```

- `start` and `end`: target/viewport edge pairs; default `["top", "top"]` to
  `["bottom", "bottom"]`. Edges accept `top`, `center`, `bottom`, or a fraction.
- `offset`: header height in pixels, or a function re-evaluated on resize.
- `container`: optional overflow-scroller ref; omit for window scrolling.
- `scrub`: `true` for direct progress (default), or catch-up time in seconds.
- `onUpdate`, `onEnter`, `onLeave`, `onEnterBack`, `onLeaveBack`: progress and
  boundary callbacks. Snapshot has `progress`, `rawProgress` (both clamped),
  `active`, and `direction` (`1` or `-1`).
- `triggers`: `{ at, onCross, direction?, once? }[]`. Direction defaults to
  `forward`, with `backward` and `both` available. Memoize once-trigger objects.
  Threshold callbacks fire on crossings, not retroactively at mount. They can
  invoke any surface action.
- `sequence`: take control of a `DotsSequence` clock and seek it from scroll.
  Normal playback resumes after disconnect if enabled. Use
  `<DotsSequencePlayer sequence={sequence} animate />` to keep live formation
  motion even when the sequence was created with `autoplay: false`.
- `refresh()` measures an external layout change. Resize and font loading are
  observed automatically. `scrollTo(progress)` navigates to a position.
- Reduced motion disables continuous scrubbing; `scrollTo()` selects a state
  without moving the page. Renderers have their own motion preference.
- `SwarmScrollPin` is a native sticky panel; its parent supplies the scroll
  distance. `SwarmScrollStops` adds alignment markers for the default window
  range. `useSwarmScrollSnap` opts a document/container into `proximity` snapping
  and restores the previous inline styles on cleanup. Points can be a selector
  or element refs. Call it once per scroll container; it never locks scrolling.

These exports are also available from `dots-swarm/scroll`.

## Actions: explode, rain, reform

Targets are destinations. Actions operate on the particles already present.
**Explosion never implicitly reforms.** Gravity and collisions continue until
another action takes over. Use `act()` on a `SwarmSurface` or `SwarmUI.Root` ref.

```tsx
import { swarmActions } from "dots-swarm";

// Each call belongs to its own event/scroll handler.
const explode = () => surface.current?.act(swarmActions.explode({
  anticipation: 1.5,
  strength: 1800,
  spread: 0.95,
  gravity: 170,
  duration: 2.7,
}));

const rain = () => surface.current?.act(swarmActions.rain({ gravity: 460 }));

const becomeDizzy = () => surface.current?.act(swarmActions.reform({
  duration: 3,
  targets: [{ id: "friend", ref: avatar, kind: "avatar",
    expression: "dizzy", appearance: "solid" }],
}));

const becomeButton = () => surface.current?.act(swarmActions.reform({
  duration: 2,
  targets: [{ id: "continue", ref: button, kind: "element", radius: 24 }],
}));

// Without targets, reform into the current destination.
const returnToCurrent = () => surface.current?.act(swarmActions.reform());
```

Attach the refs to real DOM targets inside the surface. Reform accepts the same
shape, element, text, and avatar geometries as `SwarmSurface.targets`.
An explicit target override lasts until the declarative `targets` prop changes.
For UI scenes, update `SwarmUI.Root active` and call reform. Set
`transition={false}` when explicit actions own the scene transition.

`onActionPhaseChange(phase, action)` reports `charging`, `scattered`,
`gathering`, and `settled`. `onActionComplete(action)` is a chaining cue:

- **Explode:** after anticipation + duration (default duration 0.6 seconds).
  The particles remain in physics; the event does not restore them.
- **Rain:** after the optional duration; otherwise continues without a cue.
- **Reform:** after its attraction ramp (default 1.2 seconds) and arrival.

Explicitly chain an explosion to a reform in `onActionComplete`, or let the
user choose the next destination. New actions replace the previous action,
retaining particle positions and velocities. Pausing freezes action time;
system reduced motion renders the destination without the explosion.

Explosion accepts the solver's `x`, `y`, `strength`, `radius`, and `spread`.
Explode/rain accept `gravity`, `wind`, and `restitution` overrides. Coordinates
are local CSS pixels, or viewport CSS pixels on a viewport surface. Colliders
and bounds come from the surface. The older `burst()` method keeps its existing
combined explode-and-return behavior for compatibility.

Action builders/types are also available from `dots-swarm/actions`. Actions
operate on physical surfaces; plain `DotSwarm` and `SwarmSequence` remain the
shape/keyframe renderers.


## Application UI primitives

Import from `dots-swarm/ui` and optionally import `dots-swarm/ui.css`. Alongside Button, Select, Slider, Checkbox and Switch, the package provides Input, Textarea, Label, Card, Badge, Separator, Skeleton, Dialog, AlertDialog, Popover, DropdownMenu, ContextMenu, Tabs, Accordion, RadioGroup, Toggle, ToggleGroup, Tooltip, Progress, ScrollArea, Toast, NavigationMenu, Form and Table (all prefixed `Swarm`).

Compound controls follow Radix's Root/Trigger/Content composition. Supply accessible labels and dialog titles. Controls automatically register their particle parts inside `SwarmUI.Root`; cards register their whole surface and suppress nested registration. Other layout containers do not recursively snapshot arbitrary DOM. Use `SwarmUI.Scene` for states and `SwarmUI.Part contain` for compound surfaces. Portals outside a local canvas need a viewport surface for particle coverage.

Theme with `--swarm-ui-bg`, `--swarm-ui-fg`, `--swarm-ui-border`, `--swarm-ui-accent`, and `--swarm-ui-muted`. These are UI building blocks: routing, authentication, persistence and application logic are supplied by the consumer.

Advanced multi-track sequencing, event graphs, scene coordination, physics fields and configurable avatars live in the separate private Pro package. Existing core sequence, scroll and surface action APIs remain free.


### Mixed UI and shape timelines

`DotsUISequencePlayer` (from `dots-swarm/ui`) accepts a `DotsSequence` and an `elements` map such as `{ welcome: { kind: "card", label: "Hello" } }`. Use `{ element: "welcome", duration: 6 }` alongside shape clips. `SwarmComposition` exposes externally controlled scenes. `SwarmPrimitive` provides twenty editable starting points, while the compound primitive exports support your own layouts. Studio now authors these clips in its main timeline and exports the definitions alongside the sequence. Named core shapes and custom point motion remain animated in the mixed player.


### Motion between component states

Use `<SwarmButton morphKey={saved}>` for particle feedback as a button changes state, or wrap one ref-forwarding element in `<SwarmMorph state={selectedTab}>`. This is visual motion: application state and keyboard focus remain immediate. Select, dropdown-menu, context-menu, popover and dialog content have particle entrances/exits, including portals. Dialog scrims fade. Import `dots-swarm/ui.css` for presence timing. Reduced motion skips handoffs; page scroll and resize cancel transient canvas overlays. Continuous text input and slider dragging do not explode on every keystroke or movement.

### Hover previews, sheets, drawers, and command palettes

These exports live in `dots-swarm/ui` and use the same CSS tokens and particle
presence as Dialog. They also work outside a `SwarmUI.Root`.

| Export | Composition |
| --- | --- |
| `SwarmHoverCard` | Radix `Root`, `Trigger`, `Portal`, `Content`, `Arrow`. Use `openDelay`/`closeDelay` on Root and `sideOffset`/`collisionPadding` on Content. Intended for supplementary previews. Use Popover for interactive forms. |
| `SwarmSheet` | Dialog composition, with `Content side="right"` (also left/top/bottom), `Header`, and `Footer`. Supply Title and Description; Escape and focus return remain Radix behavior. |
| `SwarmDrawer` | Vaul `Root`, `Trigger`, `Portal`, `Overlay`, `Content`, `Handle`, `Title`, `Description`, `Close`, `Header`, `Footer`. Root accepts `direction`, controlled state, snap points and gesture options. Include a Close control alongside swipe dismissal. |
| `SwarmCommand` | cmdk `Root`, `Input`, `List`, `Empty`, `Group`, `Item`, `Separator`, `Loading`, `Shortcut`. Set the accessible input name with `Root label`; items use `value`/`onSelect`. Filtering and arrow-key selection stay immediate. |

`SwarmCommand.Dialog` is a controlled dialog convenience accepting `open`,
`onOpenChange`, `title`, and `description`; its children are the command parts.
For a trigger that participates in a swarm scene and automatic focus return,
compose `SwarmDialog.Trigger`/`Content` with `SwarmCommand.Root`, as in the
`command` preset. Keyboard shortcuts belong to the consuming application.
`cmdk` and `vaul` are dependencies of the UI entry; the core shape renderer
does not import them.

### Text: particles to normal type

```tsx
import { SwarmText } from "dots-swarm/ui";

<SwarmText fontFamily='"Brand Sans", sans-serif' fontSize={64}
  fontWeight={700} reveal="words" stagger={0.1} duration={0.6}
  count={2400} dotSize={1} color="#fafafa">
  Words take shape.
</SwarmText>
```

Load the font with your app's `@font-face`, Next.js font setup, or FontFace API.
The default `appearance="solid"` assembles actual glyphs, then hands each unit
to crisp, selectable DOM text. `reveal="words"` (default), `"letters"`, or `"all"`
sets the reading order; `stagger` is seconds between units starting, and `duration`
is each unit's assembly time before a short fade into the finished type. Letters
are segmented as graphemes so combining accents and emoji stay together.
`appearance="dots"` keeps the particle artwork instead.

The component waits for the requested face, samples the browser's text layout,
and resamples on width and font-load changes. Explicit newlines and
long sentences wrap; whitespace-only text produces no visible particles. Font
coverage determines which glyphs are available, and failed loads use the browser's
fallback font. Font files are not bundled or downloaded by Dots.

`children` is a string. Typography options include `fontFamily`, `fontSize`,
`fontWeight`, `fontStyle`, `lineHeight` (pixels), `letterSpacing`, `textAlign`, and
`direction`. Width defaults to the container; height follows the wrapped text.
CSS/class styles can supply typography too. Keep the component mounted when
changing text. Solid text stays semantic and selectable; particle art has a
visually hidden text alternative. The canvas remains decorative. Reduced motion
shows the finished text immediately, without the stagger. Normal text defaults
to 24px / weight 400, while particle artwork defaults to 48px / weight 600.

Inside `SwarmUI.Root`, text joins that root's existing particle pool, so a cloud
can become letters without replacing its canvas. The root controls count, dot
size, and reduced motion there. Standalone text creates its own surface. Longer
passages need sufficient room and particles (the pool is capped at 2,400).

`sampleTextPoints(text, options)` is a browser-only async helper returning
`{ points, width, height, lines }` for custom `SwarmSurface` point targets. Its
coordinates are normalized for a target sized to the returned width/height;
wide text may extend beyond ±1 on x. It performs no work at module import time.

### Bubbles and messages

`SwarmBubble` is a real HTML surface with `variant="incoming" | "outgoing"`.
`SwarmMessage.Root from="assistant" | "user"` composes `Author`, `Avatar`,
`Content` (a bubble), and `Actions`. Bubbles register as one material inside a
swarm scene, keeping their text and nested controls semantic. Use `SwarmMorph`
around Content for a completed message change; avoid morphing every streaming
token. Provide your application's chat log/live-region behavior and delivery state.

The UI gallery and Studio include `hover-card`, `sheet`, `drawer`, `command`,
`text`, `bubble`, and `message` presets. Text definitions retain `label` (the text),
`fontFamily`, `fontSize`, `fontWeight`, `appearance`, `reveal`, `stagger`, and
`duration` through JSON and sequence exports. The showcase controls demonstrate
both finishes; use the composable `SwarmText` in production.

### Image conceal/reveal

`SwarmImageReveal` conceals an image behind a dot field. It dissolves reversibly
into the original image and works independently of `SwarmUI.Root`.

```tsx
import { useRef } from "react";
import { SwarmImageReveal, type SwarmImageHandle } from "dots-swarm/ui";
import "dots-swarm/ui.css";

function Preview() {
  const image = useRef<SwarmImageHandle>(null);
  return <div style={{ maxWidth: 560 }}>
    <SwarmImageReveal ref={image} src="/landscape.jpg" alt="An alpine lake"
      trigger="hover" duration={0.85} dotSize={5} />
    <button onClick={() => image.current?.toggle()}>Toggle image</button>
  </div>;
}
```

- `trigger="hover"`: enter/focus reveals; leave/blur conceals. Touch taps toggle.
- `trigger="click"`: click, tap, Enter, or Space toggles.
- `trigger="focus"`: focus reveals; blur conceals.
- `trigger="in-view"`: reveals at 35% visibility and conceals below that threshold.
- `trigger="manual"`: use `revealed` / `onRevealedChange`, or a ref's `reveal()`,
  `conceal()`, and `toggle()` methods.

Reveal defaults to the hover trigger and begins concealed unless `defaultRevealed`
(or controlled `revealed`) is true. `aspectRatio` defaults to `"3 / 2"` with a
cover crop.
Animations honor reduced motion, reverse from their current progress, and stop
requesting frames when settled. Images retain an accessible description.

The effect overlays the original image without sampling its pixels. Rendering
errors call `onError` and fall back to the image; load errors show a placeholder.
This is a visual effect, not a way to protect sensitive image content.

Studio preset: `image-reveal`, with `src`, `alt`, and
`imageTrigger` in a `SwarmPrimitiveDefinition`.

### Toasts and restrained control feedback

Checkbox, switch, tabs, and accordion demos form on scene entry. Their ordinary
state changes keep the surface intact: checks fade in, thumbs slide, and accordion
rows expand. `SwarmMorph` remains opt-in for deliberate particle transformations.

Text formation options (`reveal`, `stagger`, `duration`) apply on the next content
change or scene entry. Changing these settings does not dissolve existing text.

`SwarmToast` provides accessible notifications that assemble from dots and
disperse back into dots on dismissal,
swipe and Escape dismissal, automatic timeout, and pause while hovered or focused.
Its root accepts `variant="default" | "success" | "error"` and closes when its
containing swarm scene becomes inactive. Mount a viewport once per provider:

```tsx
import { useState } from "react";
import { SwarmToast } from "dots-swarm/ui";
import "dots-swarm/ui.css";

function SaveNotification() {
  const [open, setOpen] = useState(false);
  return <SwarmToast.Provider duration={5000}>
    <button onClick={() => setOpen(true)}>Save changes</button>
    <SwarmToast.Root open={open} onOpenChange={setOpen} variant="success">
      <div className="swarm-toast-copy">
        <SwarmToast.Title>Changes saved</SwarmToast.Title>
        <SwarmToast.Description>Your preferences are up to date.</SwarmToast.Description>
      </div>
      <SwarmToast.Close aria-label="Dismiss notification">×</SwarmToast.Close>
    </SwarmToast.Root>
    <SwarmToast.Portal><SwarmToast.Viewport /></SwarmToast.Portal>
  </SwarmToast.Provider>;
}
```

Use `SwarmToast.Action altText="…"` for an optional action such as Undo. The `toast`
preset demonstrates success, an error, and an Undo action in both UI and Studio.

The button preset keeps its solid surface while its label crossfades and its arrow
becomes a check. It reserves both labels’ width so state changes do not jump.
