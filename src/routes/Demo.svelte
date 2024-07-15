<script lang="ts">
	import {intersect} from '$lib/index.js';

	const get_initial_count = (): number => {
		if (typeof window === 'undefined') return 51;
		return window.innerHeight / 30;
	};

	interface Props {
		threshold?: number;
		count?: number;
		items_count?: number;
	}

	let {
		threshold = $bindable(0),
		count = $bindable(-1),
		items_count = get_initial_count(),
	}: Props = $props();

	// TODO use viewport dimensions to make the height a fixed multiple of the viewport height

	const items = $derived(Array.from({length: items_count}, (_, i) => i));
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
		{#each items as item (item)}
			<li
				class="box"
				use:intersect={{
					onintersect: (params) => {
						const {intersecting, el} = params;
						el.classList.toggle('intersecting', intersecting);
						console.log(`onintersect params`, params); // eslint-disable-line no-console
					},
					ondisconnect: (params) => {
						console.log(`ondisconnect params`, params); // eslint-disable-line no-console
					},
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
		gap: var(--space_lg);
	}
	ul {
		width: 100%;
	}
	li {
		width: 100%;
		padding: var(--space_xl);
		background-color: hsla(var(--hue_g), 50%, 80%, 0.3);
		font-weight: 900;
		transition: background-color var(--duration_2);
	}
	li:global(.intersecting) {
		color: hsl(var(--color_f_5));
		background-color: hsla(var(--hue_f), 50%, 80%, 0.15);
	}
	.threshold,
	.count {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.threshold input,
	.count input {
		width: var(--input_width_min);
		min-width: var(--input_width_min);
	}
</style>
