# `@ryanatkn/svelte-intersect`

> a [Svelte action](https://svelte.dev/docs/svelte-action) for
> [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver)

- demo: [svelte-intersect.ryanatkn.com](https://svelte-intersect.ryanatkn.com/)
- npm: [`@ryanatkn/svelte-intersect`](https://www.npmjs.com/package/@ryanatkn/svelte-intersect)
- Svelte [repl](https://svelte.dev/repl/fad8afe445344c6ab38caea752a3dec5?version=4.1.2)
- todo
  - figure out how to make the `el` type inferred/generic

## Usage

```bash
npm i -D @ryanatkn/svelte-intersect
```

```ts
import {intersect} from '@ryanatkn/svelte-intersect';
```

`intersect` is a [Svelte action](https://svelte.dev/docs/svelte-action)
that calls your callback when `el` enters or leaves
the [viewport](https://developer.mozilla.org/en-US/docs/Web/CSS/Viewport_concepts):

```svelte
<div use:intersect={(intersecting, el, disconnect) => /* ... */}>
```

```ts
export interface Intersect_Callback {
	(intersecting: boolean, el: HTMLElement | SVGElement, disconnect: () => void): void;
}
```

For more complex behavior:

```svelte
<div use:intersect={{
  cb: (intersecting, el, disconnect) => /* `Intersect_Callback` */,
  count: 1, // 1 is like 'once', 0 disables, <0 infinite
  options: {threshold, root, rootMagin}, // IntersectionObserver options
}}>
```

| property   | default     | description                                                                                                                                                                                                     |
| ---------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cb`       |             | called every time the element enters or leaves the viewport until the action's observer is disconnected                                                                                                         |
| `count?`   | `undefined` | pass `1` to disconnect after `el` enters and leaves the viewport one time, similar to 'once' for an event - disable the callback with `0`, and never disconnect with `undefined` or a negative number like `-1` |
| `options?` | `undefined` | the [`IntersectionObserver` options](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#options)                                                                        |

For more see the
[IntersectionObserver docs](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver) on MDN
and the demo at [svelte-intersect.ryanatkn.com](https://svelte-intersect.ryanatkn.com/).

## License

[MIT](LICENSE)
