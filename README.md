# [intersect.fuz.dev](https://intersect.fuz.dev/)

> a [Svelte](https://svelte.dev/) action for
> [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver) -
> docs coming soon

demo: [intersect.fuz.dev](https://intersect.fuz.dev/)

```bash
npm i -D @fuz.dev/intersect
```

```ts
import {intersect} from '@fuz.dev/intersect';
```

```svelte
<div use:intersect={(intersecting, el) => /* ... */}>
```

with options:

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
