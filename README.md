# @fuz.dev/intersect

> a [Svelte](https://svelte.dev/) action for
> [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver)

demo: [intersect.fuz.dev](https://intersect.fuz.dev/)

npm: [npmjs.com/package/@fuz.dev/intersect](https://www.npmjs.com/package/@fuz.dev/intersect):

```bash
npm i -D @fuz.dev/intersect
```

```ts
import {intersect} from '@fuz.dev/intersect';
```

Your callback gets called when the element enters or leaves the viewport:

```svelte
<div use:intersect={(intersecting, el) => /* ... */}>
```

With `options` forwarded to the
[`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver):

```svelte
<div
	use:intersect={{
		cb: (intersecting, el) => /* ... */,
		options: {threshold: 1},
	}}
>
```

For more see the
[IntersectionObserver docs on MDN](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver)
and [the demo at intersect.fuz.dev](https://intersect.fuz.dev/).

License: [MIT](LICENSE)
