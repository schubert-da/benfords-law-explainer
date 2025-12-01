<script>
	import ChartContainer from '$components/charts/ChartContainer.svelte';
	import columnData from '$assets/data/columns_overview.json';
	import SectionTitle from '$components/common/SectionTitle.svelte';
	import DeepDiveTextCard from '$components/layout/DeepDiveTextCard.svelte';
	import BarChart from '$components/charts/BarChart/BarChart.svelte';
	import SiteRectanglesImage from '$assets/image/rects-screenshot.png';

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

	const rectsProportions = [0.3022, 0.0969, 0.1343, 0.03321, 0.0128, 0.0469, 0.0387, 0.012, 0.0241];
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
		text="But even when they fail, we still see smaller leading digits being more common..."
	></DeepDiveTextCard>
	{#each [27, 8, 16] as chartIndex}
		<ChartContainer {...chartProps} data={filteredColumnData[chartIndex]}></ChartContainer>
	{/each}
</div>

<section class="deep-dive-continued !mt-30">
	<h3 class="mx-auto text-center text-3xl">All the boxes</h3>
	<p>
		At its core, everything on the web is just a bunch of tiny rectangles styled and rearranged
		together to form the content you see on a daily basis. I wrote a bit of code that would go
		through every HTML element on this page and create a dataset of all their areas. This is what we
		get when we analyse these areas.
	</p>

	<div class="image-container">
		<img
			class="mb-1 rounded border-[1px] border-[#555]"
			src={SiteRectanglesImage}
			alt="site with all the individual HTML elements border box drawn"
		/>
		<p class="caption mx-auto text-center text-base opacity-60">
			All HTML elements with their boundary boxes drawn in different colours
		</p>
	</div>

	<div
		class="custom-barchart-container mx-auto flex w-full max-w-[600px] flex-col items-center justify-center"
	>
		<h3 class="!mb-2 block">Distribution of Leading Digits</h3>

		<BarChart customHeight="200" data={{ first_digits_proportions: rectsProportions }}></BarChart>
	</div>
</section>
