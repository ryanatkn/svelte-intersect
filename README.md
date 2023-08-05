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

Pass `count: 1` to disconnect after `el` enters and leaves the viewport 1 time, similar to 'once' for an event:

```svelte
<div use:intersect={{
	cb: /* ... */,
	count: 1, // disable with `undefined` or `0`
}}>
```

With `options` forwarded to the
[`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver):

```svelte
<div use:intersect={{
	cb: /* ... */,
	options: {threshold: 1}, // also `root` and `rootMargin`
}}>
```

For more see the
[IntersectionObserver docs](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver) on MDN
and the demo at [intersect.fuz.dev](https://intersect.fuz.dev/).

todos

- change to `svelte-kit package`
- change to changesets

License: [MIT](LICENSE)
