<script lang="ts">
	import 'prismjs'; // TODO why are these needed?
	import 'prism-svelte';
	import '@fuz.dev/fuz_code/prism.css';

	import LibraryHeader from '@fuz.dev/fuz_library/LibraryHeader.svelte';
	import LibraryFooter from '@fuz.dev/fuz_library/LibraryFooter.svelte';
	import {parse_package_meta} from '@fuz.dev/fuz_library/package_meta.js';

	import IntersectTome from '$routes/IntersectTome.svelte';
	import {package_json} from '$lib/package.js';

	const pkg = parse_package_meta(package_json.homepage, package_json);
</script>

<main class="box width_full">
	<div class="box width_md">
		<section>
			<LibraryHeader {pkg} />
		</section>
		<section>
			<IntersectTome />
		</section>
		<section>
			<LibraryFooter {pkg} root_url="https://www.fuz.dev/" />
		</section>
	</div>
</main>

<style>
	main {
		margin-bottom: var(--spacing_5);
	}
	section {
		margin-top: var(--spacing_3);
		margin-bottom: var(--spacing_3);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
