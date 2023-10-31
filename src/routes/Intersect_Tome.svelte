<script lang="ts">
	import Code from '@fuz.dev/fuz_code/Code.svelte';

	import Demo from '$routes/Demo.svelte';
</script>

<section class="box prose">
	<h2>demo</h2>
	<div class="spaced">
		<Code lang="ts" content={`import {intersect} from '@fuz.dev/svelte_intersect';`} />
	</div>
	<div class="spaced">
		<Code
			content={`<li
	use:intersect={{
		cb: (intersecting, el) =>
			el.classList.toggle('intersecting', intersecting),
		count,
		options: {threshold},
	}}
>`}
		/>
	</div>
	<div class="width_sm padded_md panel spaced">
		<details>
			<summary>more info</summary>
			<p>
				An <code>options.threshold</code> of <code>0</code> triggers the event when the element is
				onscreen at least a pixel, and a value of <code>1</code> triggers the event when it is fully
				onscreen. Learn more about
				<a
					href="https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver"
					>IntersectionObserver</a
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
				A <code>count</code> of <code>0</code> makes the callback never trigger.
			</p>
			<p>
				Demo source code: <a
					href="https://github.com/fuz-dev/svelte_intersect/blob/main/src/routes/Demo.svelte"
					>src/routes/Demo.svelte</a
				>
			</p>
		</details>
	</div>
</section>
<section>
	<div class="demos">
		<Demo />
		<Demo threshold={1} />
		<Demo count={1} />
	</div>
</section>

<style>
	.demos {
		display: flex;
		gap: var(--spacing_lg);
	}
	/* TODO hack, is a `:last-child` thing */
	details:not([open]) summary {
		margin-bottom: 0;
	}
	section {
		margin-bottom: var(--spacing_4);
	}
</style>
