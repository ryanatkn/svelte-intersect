# `@fuz.dev/intersect`

> a [Svelte action](https://svelte.dev/docs/svelte-action) for
> [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver)

demo: [intersect.fuz.dev](https://intersect.fuz.dev/)

npm: [`@fuz.dev/intersect`](https://www.npmjs.com/package/@fuz.dev/intersect)

[repl](https://svelte.dev/repl/fad8afe445344c6ab38caea752a3dec5?version=4.1.2)

## Usage

```bash
npm i -D @fuz.dev/intersect
```

```ts
import {intersect} from '@fuz.dev/intersect';
```

`intersect` is a [Svelte action](https://svelte.dev/docs/svelte-action)
that calls your callback when `el` enters or leaves the viewport:

```svelte
<div use:intersect={(intersecting, el, disconnect) => /* ... */}>
```

```ts
export interface IntersectCallback {
	(intersecting: boolean, el: HTMLElement | SVGElement, disconnect: () => void): void;
}
```

For more complex behavior:

```svelte
<div use:intersect={{
  cb: (intersecting, el, disconnect) => /* ... */,
  count: 1, // 1 is like 'once', 0 disables, <0 infinite
  options: {threshold, root, rootMagin}, // IntersectionObserver options
}}>
```

| property   | default     | description                                                                                                                                                                                                     |
| ---------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cb`       |             | called every time the element enters or leaves the viewport until the action's observer is disconnected                                                                                                         |
| `count?`   | `undefined` | pass `1` to disconnect after `el` enters and leaves the viewport one time, similar to 'once' for an event - disable the callback with `0`, and never disconnect with `undefined` or a negative number like `-1` |
| `options?` | `undefined` | `IntersectionObserverInit` options forwarded to the [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver)                                        |

For more see the
[IntersectionObserver docs](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver) on MDN
and the demo at [intersect.fuz.dev](https://intersect.fuz.dev/).

## Todo

- look more into making the `el` type generic
- maybe don't use a table for the API docs, `Library`?

## License

[MIT](LICENSE)
