<script>
	import ChartContainer from '$components/charts/ChartContainer.svelte';
	import columnData from '$assets/data/columns_overview.json';
	import SectionTitle from '$components/common/SectionTitle.svelte';
	import DeepDiveTextCard from '$components/layout/DeepDiveTextCard.svelte';

	$: filteredColumnData = columnData
		.filter((col) => col.column.toLocaleLowerCase().includes('year') === false)
		.slice(0, 30);
	$: screenWidth = 1000;

	$: chartProps = {
		showTitle: true,
		maxWidth: 400,
		isCompact: true,
		chartType: 'barchart'
	};
</script>

<svelte:window bind:innerWidth={screenWidth} />

<section class="deep-dive">
	<SectionTitle title="A Deeper Dive"></SectionTitle>

	<p>
		Let's see how Benford's Law plays out in the wild. For starters here's the data I pulled from
		Our World in Data's homepage via their nifty API.
	</p>
</section>

<div
	class="plot-grid grid w-full justify-center gap-2"
	style:grid-template-columns="repeat({Math.ceil(screenWidth / 350)}, minmax(0, 1fr))"
>
	{#each [12, 19, 3] as chartIndex}
		<ChartContainer {...chartProps} data={filteredColumnData[chartIndex]}></ChartContainer>
	{/each}
	<DeepDiveTextCard
		text="
		For a random selection I used all of the datasets featured on OWID's <a class='underline' href='https://ourworldindata.org/data'>data page</a>"
	></DeepDiveTextCard>
	{#each [0, 11, 6, 18, 14, 15] as chartIndex}
		<ChartContainer {...chartProps} data={filteredColumnData[chartIndex]}></ChartContainer>
	{/each}
	<DeepDiveTextCard
		text="
		Despite the wide range of topics, we see that <span class='font-semibold'>most exhibit Benford's Law</span>"
	></DeepDiveTextCard>
	{#each [5, 22] as chartIndex}
		<ChartContainer {...chartProps} data={filteredColumnData[chartIndex]}></ChartContainer>
	{/each}
	<DeepDiveTextCard
		text="
		... For the most part."
	></DeepDiveTextCard>
	{#each [26, 10] as chartIndex}
		<ChartContainer {...chartProps} data={filteredColumnData[chartIndex]}></ChartContainer>
	{/each}
	<DeepDiveTextCard text="There are cases where Benford's Law won't hold though"></DeepDiveTextCard>
	<DeepDiveTextCard
		text="For example, it fails when the values are <span class='font-semibold'>artificially constrained</span> to a small range. eg. percentages, which typically range 0-100"
	></DeepDiveTextCard>
	{#each [7, 17] as chartIndex}
		<ChartContainer {...chartProps} data={filteredColumnData[chartIndex]}></ChartContainer>
	{/each}
	<DeepDiveTextCard
		text="But even when they fail we still see the leading digits being the most common ..."
	></DeepDiveTextCard>
	{#each [27, 8, 16] as chartIndex}
		<ChartContainer {...chartProps} data={filteredColumnData[chartIndex]}></ChartContainer>
	{/each}
</div>
