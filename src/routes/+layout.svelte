<script lang="ts">
	import '@fuz.dev/fuz/style.css';
	import '@fuz.dev/fuz/theme.css';
	import '$routes/style.css';

	import Themed from '@fuz.dev/fuz/Themed.svelte';
</script>

<svelte:head>
	<title>intersect.fuz.dev</title>
</svelte:head>

<Themed>
	<slot />
</Themed>
