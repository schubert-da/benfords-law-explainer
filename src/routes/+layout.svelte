<script>
	import '../styles/app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="opening-scrolly">
	<div class="placeholder h-100 flex !w-screen !max-w-none flex-col items-center justify-center">
		<h1>Benford's Law Explainer</h1>
		<p>Opening Scrolly</p>
	</div>
</div>
<main>
	{@render children?.()}
</main>
