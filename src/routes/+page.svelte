<script lang="ts">
	import Footer from '$routes/Footer.svelte';
	import Demo from '$routes/Demo.svelte';
</script>

<main class="box">
	<section class="prose text_align_center">
		<header>
			<h1>@fuz.dev/intersect</h1>
		</header>
		<blockquote>
			a <a href="https://svelte.dev/">Svelte</a> action for
			<a
				href="https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver"
				>IntersectionObserver</a
			>
		</blockquote>
		<p>
			<a class="chip" href="https://github.com/fuz-dev/intersect">GitHub</a>
			<a class="chip" href="https://www.npmjs.com/package/@fuz.dev/intersect">npm</a>
			<a class="chip" href="https://www.fuz.dev">fuz.dev</a>
		</p>
		<blockquote>
			demo source code: <a
				href="https://github.com/fuz-dev/intersect/blob/main/src/routes/Demo.svelte"
				>src/routes/Demo.svelte</a
			>
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
		margin-bottom: var(--spacing_xl4);
	}
</style>
