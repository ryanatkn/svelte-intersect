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
				cb: (visible, el) => {
					el.classList.toggle('strong', visible);
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
	}
	.item:global(.strong) {
		font-weight: 900;
		background-color: var(--fg_1);
	}
</style>
