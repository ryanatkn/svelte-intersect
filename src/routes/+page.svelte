<script lang="ts">
	import 'prismjs'; // TODO why are these needed?
	import 'prism-svelte';
	import '@fuz.dev/fuz_code/prism.css';

	import LibraryHeader from '@fuz.dev/fuz_library/LibraryHeader.svelte';
	import LibraryFooter from '@fuz.dev/fuz_library/LibraryFooter.svelte';
	import {parse_package_meta} from '@fuz.dev/fuz_library/package.js';

	import IntersectTome from '$routes/IntersectTome.svelte';

	// TODO SvelteKit warns about this but we put `/static` in `/src` because of what it's saying,
	/// maybe change to import as the first item from `packages`
	import package_json from '../static/.well-known/package.json';
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
		margin-bottom: var(--spacing_xl5);
	}
	section {
		margin-top: var(--spacing_xl3);
		margin-bottom: var(--spacing_xl3);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
