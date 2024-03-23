# `svelte-intersect`

> a [Svelte action](https://svelte.dev/docs/svelte-action) for
> [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver)

- demo: [ryanatkn.github.io/svelte-intersect](https://ryanatkn.github.io/svelte-intersect/)
- npm: [`svelte-intersect`](https://www.npmjs.com/package/svelte-intersect)
- Svelte [repl](https://svelte.dev/repl/fad8afe445344c6ab38caea752a3dec5?version=4.1.2)
- todo
  - figure out how to make the `el` type inferred/generic
  - does the API need any tweaks?

## Usage

```bash
npm i -D svelte-intersect
```

```ts
import {intersect} from 'svelte-intersect';
```

`intersect` is a [Svelte action](https://svelte.dev/docs/svelte-action)
that calls `onintersect` when `el` enters or leaves
the [viewport](https://developer.mozilla.org/en-US/docs/Web/CSS/Viewport_concepts):

```svelte
<div use:intersect={{
  onintersect: ({intersecting, intersections, el, observer, disconnect}) => void,
  ondisconnect: ({intersecting, intersections, el, observer}) => void,
  count: 1, // 1 is like 'once', 0 disables, <0 or undefined is infinite
  options: {threshold, root, rootMagin}, // `IntersectionObserver` options
}}>
```

All options are optional.

```ts
export interface Intersect_Params {
	/**
	 * Called when the element enters or leaves the viewport until disconnected.
	 */
	onintersect?: On_Intersect;
	/**
	 * Called when the action's observer is disconnected,
	 * either by the user calling disconnect or the action being destroyed.
	 */
	ondisconnect?: On_Disconnect;
	/**
	 * A value of `1` disconnects after `el` enters and leaves the viewport one time,
	 * similar to 'once' for an event.
	 * `0` disables and `undefined` or a negative number like `-1` never disconnects.
	 */
	count?: number;
	/**
	 * Same as the `options` param to
	 * [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#options)
	 */
	options?: IntersectionObserverInit;
}

export interface On_Intersect {
	(state: Intersect_State): void;
}

export interface Intersect_State {
	intersecting: boolean;
	intersections: number;
	el: HTMLElement | SVGElement;
	observer: IntersectionObserver;
	disconnect: () => void;
}

export interface On_Disconnect {
	(state: Disconnect_State): void;
}

export interface Disconnect_State {
	intersecting: boolean;
	intersections: number;
	el: HTMLElement | SVGElement;
	observer: IntersectionObserver;
}
```

For more see the
[IntersectionObserver docs](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver)
on MDN, the demo at [ryanatkn.github.io/svelte-intersect](https://ryanatkn.github.io/svelte-intersect/),
and [the implementation](/src/lib/index.ts).

## License

[MIT](LICENSE)
