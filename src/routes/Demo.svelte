<script lang="ts">
	import {intersect} from '$lib/intersect.js';

	export let threshold = 0;
	export let count = -1;
	export let items_count = 100;

	$: items = Array.from({length: items_count}, (_, i) => i);
</script>

<div class="demo">
	<label class="box" title="IntersectionObserver options.threshold">
		<div class="title"><code>options.threshold</code></div>
		<div class="threshold">
			<input type="number" step={0.1} min={0} max={1} bind:value={threshold} />
			<input type="range" step={0.1} min={0} max={1} bind:value={threshold} />
		</div>
	</label>
	<label
		class="box"
		title="disconnect the observer after the element enters and leaves the viewport this many times"
	>
		<div class="title"><code>count</code></div>
		<div class="count">
			<input type="number" min={-1} max={3} step={1} bind:value={count} />
			<input type="range" min={-1} max={3} step={1} bind:value={count} />
		</div>
	</label>
	<ul class="box">
		{#each items as item}
			<li
				class="box"
				use:intersect={{
					cb: (intersecting, el) => el.classList.toggle('intersecting', intersecting),
					count,
					options: {threshold},
				}}
			>
				<div class="box">
					{item}
				</div>
			</li>
		{/each}
	</ul>
</div>

<style>
	.demo {
		display: flex;
		flex-direction: column;
		gap: var(--spacing_lg);
	}
	ul {
		width: 100%;
	}
	li {
		width: 100%;
		padding: var(--spacing_1);
		background-color: hsla(var(--hue_7), 50%, 80%, 0.3);
		font-weight: 900;
		transition: background-color var(--duration_2);
	}
	li:global(.intersecting) {
		color: var(--color_6);
		background-color: hsla(var(--hue_6), 50%, 80%, 0.15);
	}
	.threshold,
	.count {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	}
	.threshold input,
	.count input {
		width: var(--input_width_min);
		min-width: var(--input_width_min);
	}
</style>
