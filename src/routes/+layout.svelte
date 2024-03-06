<script lang="ts">
	import '@ryanatkn/fuz/style.css';
	import '@ryanatkn/fuz/theme.css';
	import '@ryanatkn/fuz/semantic_classes.css';
	import '@ryanatkn/fuz/utility_classes.css';
	import '@ryanatkn/fuz/variable_classes.css';
	import '@ryanatkn/fuz/animations.css';
	import '$routes/style.css';

	import Themed from '@ryanatkn/fuz/Themed.svelte';
</script>

<svelte:head>
	<title>svelte-intersect.ryanatkn.com</title>
</svelte:head>

<Themed>
	<slot />
</Themed>
