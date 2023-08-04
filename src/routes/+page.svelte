<script lang="ts">
	import Footer from './Footer.svelte';

	import Demo from '$routes/Demo.svelte';
</script>

<main class="box">
	<section class="prose text_align_center">
		<header>
			<h1>intersect.fuz.dev</h1>
		</header>
		<blockquote>
			<a class="chip" href="https://github.com/fuz-dev/intersect">github.com/fuz-dev/intersect</a>
		</blockquote>
	</section>
	<Demo />
	<section>
		<Footer />
	</section>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
	h1 {
		text-align: center;
	}
	/* TODO upstream */
	@media (max-width: 440px) {
		h1 {
			font-size: var(--size_xl2);
		}
	}
	section {
		margin-bottom: var(--spacing_xl);
	}
</style>
