<script>
	import columnData from '$assets/data/columns_overview.json';
	import ChartContainer from '$components/charts/ChartContainer.svelte';

	// console.log(columnData);
</script>

<section class="components-grid !max-w-[90vw]">
	<h1 class="text-4xl">Page with all the Proportion Plots</h1>

	<div class="plot-grid flex flex-row flex-wrap gap-8">
		{#each columnData.slice() as column}
			<div class="proportion-plot-container">
				<ChartContainer data={column}></ChartContainer>
			</div>
		{/each}
	</div>
</section>
