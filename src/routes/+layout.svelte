<script>
	import '../styles/app.css';
	import favicon from '$lib/assets/favicon.svg';
	import DialogBox from '$components/DialogBox/DialogBox.svelte';
	import SEO from '$components/SEO/SEO.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<SEO></SEO>

<main id="content">
	{@render children?.()}
</main>

<DialogBox />
