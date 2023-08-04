<script lang="ts">
	import {intersect} from '$lib/intersect';

	const items = Array.from({length: 100}, (_, i) => i);

	// TODO think about this module being in the library
</script>

<ul class="items box">
	{#each items as item}
		<li
			class="item box"
			use:intersect={{
				cb: (intersecting, el) => {
					el.classList.toggle('strong', intersecting);
				},
				options: {threshold: 1},
			}}
		>
			<div class="box">
				{item}
			</div>
		</li>
	{/each}
</ul>

<style>
	.items {
		width: 100%;
	}
	.item {
		width: 100%;
		padding: var(--spacing_xl);
		background-color: hsla(var(--hue_7), 50%, 80%, 0.3);
		font-weight: 900;
		transition: background-color var(--duration_2);
	}
	.item:global(.strong) {
		color: var(--color_6);
		background-color: hsla(var(--hue_6), 50%, 80%, 0.15);
	}
</style>
