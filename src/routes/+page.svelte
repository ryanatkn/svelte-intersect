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

<main class="box mb_xl7">
	<div class="width_md px_md">
		<section>
			<header class="box">
				<h1 class="my_xl3">svelte-intersect</h1>
				<Package_Summary {pkg} pixelated_logo>
					{#snippet repo_name()}{/snippet}
				</Package_Summary>
			</header>
		</section>
		<section class="box">
			<Card
				href="https://github.com/ryanatkn/svelte-intersect#readme"
				attrs={{class: 'card mb_lg'}}
			>
				{#snippet icon()}{/snippet}
				docs
			</Card>
			<a href="{base}/about" class="chip mt_xl3">about</a>
		</section>
		<Intersect_Tome />
		<Library_Footer {pkg} root_url="https://www.ryanatkn.com/" />
	</div>
</main>
