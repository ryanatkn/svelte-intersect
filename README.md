# `svelte-intersect`

> a [Svelte action](https://svelte.dev/docs/svelte-action) for
> [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver)

- demo: [svelte-intersect.ryanatkn.com](https://svelte-intersect.ryanatkn.com/)
- npm: [`svelte-intersect`](https://www.npmjs.com/package/svelte-intersect)
- Svelte [repl](https://svelte.dev/repl/fad8afe445344c6ab38caea752a3dec5?version=4.1.2)
- todo
  - figure out how to make the `el` type inferred/generic

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
  onintersect: ({intersecting, intersections, el, observer, disconnect}) => /* `On_Intersect` */,
  ondisconnect: ({intersecting, intersections, el, observer}) => /* `On_Disconnect` */,
  count: 1, // 1 is like 'once', 0 disables, <0 or undefined is infinite
  options: {threshold, root, rootMagin}, // IntersectionObserver options
}}>
```

All options are optional.

```ts
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

| property       | default     | description                                                                                                                                                                                                     |
| -------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onintersect`  |             | called every time the element enters or leaves the viewport until the action's observer is disconnected                                                                                                         |
| `ondisconnect` |             | called when the action's observer is disconnected, either by the user calling disconnect or the action being destroyed                                                                                          |
| `count?`       | `undefined` | pass `1` to disconnect after `el` enters and leaves the viewport one time, similar to 'once' for an event - disable the callback with `0`, and never disconnect with `undefined` or a negative number like `-1` |
| `options?`     | `undefined` | the [`IntersectionObserver` options](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#options)                                                                        |

For more see the
[IntersectionObserver docs](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver) on MDN
and the demo at [svelte-intersect.ryanatkn.com](https://svelte-intersect.ryanatkn.com/).

## TODO

- should the `count` API change?

## License

[MIT](LICENSE)
