<script>
	import columnData from '$assets/data/columns_overview.json';
	import ChartContainer from '$components/charts/ChartContainer.svelte';

	// console.log(columnData);
</script>

<section class="components-grid !max-w-[90vw]">
	<h1 class="text-4xl">Page with all the Proportion Plots</h1>

	<div
		class="plot-grid grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
	>
		{#each columnData.slice() as column}
			<div class="proportion-plot-container">
				<ChartContainer data={column} chartType="barchart"></ChartContainer>
			</div>
		{/each}
	</div>
</section>
