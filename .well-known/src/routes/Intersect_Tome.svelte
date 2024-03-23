<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import Demo from '$routes/Demo.svelte';

	let demo_key = 0;

	const reset = () => demo_key++;

	// TODO maybe use ts-morph to get the type text from the source code
</script>

<section class="w_100 prose">
	<h2>demo</h2>
	<div class="mb_lg">
		<Code lang="ts" content={`import {intersect} from 'svelte-intersect';`} />
	</div>
	<div class="mb_lg">
		<Code
			content={`<li
	use:intersect={{
		onintersect: ({intersecting, intersections, el, obeserver, disconnect}) =>
			el.classList.toggle('intersecting', intersecting),
		ondisconnect: ({intersecting, intersections, el, obeserver}) => { /* */ },
		count,
		options: {threshold},
	}}
>`}
		/>
	</div>
	<div class="p_md panel mb_lg">
		<button class="mb_lg" on:click={reset}>reset state</button>
		<details>
			<summary>more info</summary>
			<p>
				An <a
					href="https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#threshold"
					><code>options.threshold</code></a
				>
				of <code>0</code> triggers the event when the element is inside the viewport at least a
				pixel, and a value of <code>1</code> triggers the event when it is fully inside the
				viewport. See also <code>options.root</code> and <code>options.rootMargin</code> in the
				<a
					href="https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver"
					>IntersectionObserver docs</a
				>.
			</p>
			<p>
				A <code>count</code> of <code>1</code> disconnects the observer after the element enters and
				leaves the viewport one time, like <code>'once'</code> for events. Similar for any positive integer.
			</p>
			<p>
				A <code>count</code> that's negative or <code>undefined</code> makes it so it will never automatically
				disconnect.
			</p>
			<p>
				A <code>count</code> of <code>0</code> disables <code>onintersect</code> and never creates
				the <code>IntersectionObserver</code>.
			</p>
			<p>
				Demo source code: <a
					href="https://github.com/ryanatkn/svelte-intersect/blob/main/src/routes/Demo.svelte"
					>src/routes/Demo.svelte</a
				>
			</p>
			<p>
				<a href="https://github.com/ryanatkn/svelte-intersect#readme">API docs</a>
			</p>
		</details>
	</div>
</section>
<section>
	<div class="demos">
		{#key demo_key}
			<Demo />
			<Demo threshold={1} />
			<Demo count={1} />
		{/key}
	</div>
</section>

<style>
	.demos {
		display: flex;
		gap: var(--space_lg);
	}
	/* TODO hack, is a `:last-child` thing */
	details:not([open]) summary {
		margin-bottom: 0;
	}
	section {
		margin-bottom: var(--space_xl4);
	}
</style>
