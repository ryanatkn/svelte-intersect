<script lang="ts">
	import '@ryanatkn/fuz/style.css';
	import '@ryanatkn/fuz/theme.css';
	import '$routes/style.css';

	import Themed from '@ryanatkn/fuz/Themed.svelte';
</script>

<svelte:head>
	<title>ryanatkn.github.io/svelte-intersect</title>
</svelte:head>

<Themed>
	<slot />
</Themed>
