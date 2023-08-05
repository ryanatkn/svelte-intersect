<script lang="ts">
	import Footer from '$routes/Footer.svelte';
	import Demo from '$routes/Demo.svelte';
</script>

<main class="box">
	<section class="prose text_align_center">
		<header>
			<h1>@fuz.dev/intersect</h1>
		</header>
		<div class="panel padded_md">
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
		</div>
	</section>
	<section class="box">
		<h2>demo</h2>
		<div class="prose width_sm padded_md panel spaced">
			<details>
				<summary>more info</summary>
				<p>
					An <code>options.threshold</code> of <code>0</code> triggers the event when the element is
					onscreen at least a pixel, and a value of <code>1</code> triggers the event when it is
					fully onscreen. Learn more about
					<a
						href="https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver"
						>IntersectionObserver</a
					>.
				</p>
				<p>
					A <code>count</code> of <code>1</code> disconnects the observer after the element enters
					and leaves the viewport one time, like <code>'once'</code> for events. Similar for any positive
					integer.
				</p>
				<p>
					A <code>count</code> that's negative or <code>undefined</code> makes it so it will never automatically
					disconnect.
				</p>
				<p>
					A <code>count</code> of <code>0</code> makes the callback never trigger.
				</p>
			</details>
		</div>
		<div class="demos">
			<Demo />
			<Demo threshold={1} />
			<Demo count={1} />
		</div>
	</section>
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
	.demos {
		display: flex;
		gap: var(--spacing_lg);
	}
	/* TODO hack, is a `:last-child` thing */
	details:not([open]) summary {
		margin-bottom: 0;
	}
</style>
