<script>
	import '../styles/app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="opening-scrolly">
	<div class="placeholder h-100 !w-screen !max-w-none">
		<h1>Benford's Law Explainer</h1>
	</div>
</div>
<main>
	{@render children?.()}
</main>
