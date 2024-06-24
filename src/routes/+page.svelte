<script lang="ts">
	import 'prismjs'; // TODO why are these needed? they're imported by Code, Vite config? looks like it should have been fixed here: https://github.com/vitejs/vite/issues/2672
	import 'prism-svelte';
	import '@ryanatkn/fuz_code/prism.css';

	import Package_Summary from '@ryanatkn/fuz/Package_Summary.svelte';
	import Library_Footer from '@ryanatkn/fuz/Library_Footer.svelte';
	import Card from '@ryanatkn/fuz/Card.svelte';
	import {parse_package_meta} from '@ryanatkn/gro/package_meta.js';
	import {base} from '$app/paths';

	import Intersect_Tome from '$routes/Intersect_Tome.svelte';
	import {package_json, src_json} from '$routes/package.js';

	const pkg = parse_package_meta(package_json.homepage, package_json, src_json);
</script>

<main class="box w_100">
	<div class="box width_md">
		<section>
			<Package_Summary {pkg} />
		</section>
		<section class="box">
			<Card
				href="https://github.com/ryanatkn/svelte-intersect#readme"
				attrs={{class: 'card mb_lg'}}
			>
				{#snippet icon()}{/snippet}
				docs
			</Card>
			<a href="{base}/about" class="chip">about</a>
		</section>
		<section class="w_100">
			<Intersect_Tome />
		</section>
		<section>
			<Library_Footer {pkg} root_url="https://www.ryanatkn.com/" />
		</section>
	</div>
</main>

<style>
	main {
		margin-bottom: var(--space_xl5);
		padding: var(--space_xl3) 0;
	}
	section {
		margin-bottom: var(--space_xl5);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
