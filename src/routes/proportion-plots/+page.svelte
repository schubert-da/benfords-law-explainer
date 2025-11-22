<script>
	import columnData from '$assets/data/columns_overview.json';
	import ProportionPlot from '$components/charts/ProportionPlot/ProportionPlot.svelte';

	// console.log(columnData);
</script>

<section class="components-grid">
	<h1 class="text-4xl">Page with all the Proportion Plots</h1>

	<div class="plot-grid">
		{#each columnData.slice(0, 1) as column}
			<div class="proportion-plot-container">
				<ProportionPlot data={column}></ProportionPlot>
			</div>
		{/each}
	</div>
</section>
