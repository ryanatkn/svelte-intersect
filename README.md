# @fuz.dev/intersect

> a [Svelte action](https://svelte.dev/docs/svelte-action) for
> [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver)

demo: [intersect.fuz.dev](https://intersect.fuz.dev/)

npm: [@fuz.dev/intersect](https://www.npmjs.com/package/@fuz.dev/intersect)

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

For more complex behavior:

```svelte
<div use:intersect={{
  cb: (intersecting, el, disconnect) => /* ... */,
  count: 1,
  options: {threshold, root, rootMagin},
}}>
```

| property   | default     | description                                                                                                                                 |
| ---------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `cb`       |             | `(intersecting: boolean, el: Element, disconnect: () => void) => void`                                                                      |
| `count?`   | `undefined` | pass `1` to disconnect after `el` enters and leaves the viewport one time, similar to 'once' for an event - disable with `undefined` or `0` |
| `options?` | `undefined` | forwarded to the [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver)       |

For more see the
[IntersectionObserver docs](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver) on MDN
and the demo at [intersect.fuz.dev](https://intersect.fuz.dev/).

todos

- change to `svelte-kit package`
- change to changesets

License: [MIT](LICENSE)
