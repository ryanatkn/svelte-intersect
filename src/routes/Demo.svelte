<script lang="ts">
	import {intersect} from '$lib/intersect';

	const items = Array.from({length: 100}, (_, i) => i);

	export let threshold = 1;
	export let once = false;
</script>

<div class="demo">
	<label class="box spaced">
		<div class="title">once</div>
		<input type="checkbox" bind:checked={once} />
	</label>
	<label class="box spaced">
		<div class="title">threshold</div>
		<input class="threshold" type="number" step="0.1" min={0} max={1} bind:value={threshold} />
	</label>
	<ul class="box">
		{#each items as item}
			<li
				class="box"
				use:intersect={{
					cb: (intersecting, el) => el.classList.toggle('intersecting', intersecting),
					once,
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
	ul {
		width: 100%;
	}
	li {
		width: 100%;
		padding: var(--spacing_xl);
		background-color: hsla(var(--hue_7), 50%, 80%, 0.3);
		font-weight: 900;
		transition: background-color var(--duration_2);
	}
	li:global(.intersecting) {
		color: var(--color_6);
		background-color: hsla(var(--hue_6), 50%, 80%, 0.15);
	}
	.threshold {
		width: var(--input_width_min);
	}
</style>
