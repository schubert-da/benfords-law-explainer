<script>
	import katex from 'katex';
	import 'katex/dist/katex.min.css';
	import { onMount } from 'svelte';

	export let formula = null;

	let container;
	onMount(() => {
		katex.render(formula, container, {
			throwOnError: false,
			displayMode: false
		});
	});
</script>

{#if formula}
	<span bind:this={container}></span>
{/if}
