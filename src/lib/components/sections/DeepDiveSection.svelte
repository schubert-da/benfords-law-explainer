<script>
	import ChartContainer from '$components/charts/ChartContainer.svelte';
	import columnData from '$assets/data/columns_overview.json';
	import natgeoData from '$assets/data/natgeo_results.json';
	import SectionTitle from '$components/common/SectionTitle.svelte';
	import DeepDiveTextCard from '$components/layout/DeepDiveTextCard.svelte';
	import BarChart from '$components/charts/BarChart/BarChart.svelte';
	import SiteRectanglesImage from '$assets/image/rects-screenshot.png';
	import NatgeoPagesImage from '$assets/image/natgeo-pages.jpg';
	import { resetDialogBox } from '$utils/utils';

	$: filteredColumnData = columnData
		.filter((col) => col.column.toLocaleLowerCase().includes('year') === false)
		.slice(0, 30);
	$: screenWidth = 1000;

	$: chartProps = {
		showTitle: true,
		maxWidth: 400,
		isCompact: true,
		chartType: 'barchart',
		enabledInteractions: true
	};

	$: natgeoNumbers = natgeoData.find((d) => d.column === 'natgeo-numbers');

	$: natgeoFirstDigits = Array.from({ length: 9 }).map(
		(_, i) => natgeoNumbers['first_digit_' + (i + 1)]
	);

	const rectsProportions = [0.3022, 0.0969, 0.1343, 0.03321, 0.0128, 0.0469, 0.0387, 0.012, 0.0241];
</script>

<svelte:window bind:innerWidth={screenWidth} />

<section class="deep-dive">
	<SectionTitle title="A Deeper Dive"></SectionTitle>

	<p>
		Let's see how Benford's Law plays out in the wild. It's not just numbers in datasets that
		conform to Benford's Law, but we will start there.
	</p>

	<h3 class="mx-auto !mt-20 text-center text-3xl">Our World in Data</h3>
	<p>
		Let's take a closer look at some of the columns we looked at in previous sections. While most
		seem to fit the bill we also notice a couple patterns among those that don't quite follow
		Benford's Law. We will dive deeper into those in a later section though.
	</p>
</section>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="plot-grid grid w-full justify-center gap-2"
	style:grid-template-columns="repeat({Math.ceil(screenWidth / 350)}, minmax(0, 1fr))"
	on:mouseleave={resetDialogBox}
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
			class="shadow-inset mx-auto mb-1 overflow-hidden rounded border-[1px] border-[#555]"
			src={SiteRectanglesImage}
			alt="site with all the individual HTML elements border box drawn"
		/>
		<p class="caption mx-auto text-center text-base opacity-60">
			HTML elements with their boundary boxes highlighted
		</p>
	</div>

	<div
		class="custom-barchart-container mx-auto flex w-full max-w-[600px] flex-col items-center justify-center"
	>
		<h3 class="!mb-2 block">Distribution of Leading Digits</h3>

		<BarChart customHeight="200" data={{ first_digits_proportions: rectsProportions }}></BarChart>
	</div>
</section>

<section class="deep-dive-continued !mt-30">
	<h3 class="mx-auto text-center text-3xl">Flipping Pages</h3>
	<p>
		I have a pile of old National Geographic magazines that I like to flip through from time to
		time. I decided to pick one up and record every number I could find. This lead to me spending an
		hour logging and categorizing numbers from National Geographic's October 2010 issue before I
		ended up with a set of 239 <span class="valid-number">valid numbers</span>.
	</p>

	<div class="image-container">
		<img
			class="shadow-inset mx-auto mb-1 overflow-hidden rounded border-[1px] border-[#555]"
			src={NatgeoPagesImage}
			alt="site with all the individual HTML elements border box drawn"
		/>
		<p class="caption mx-auto text-center text-base opacity-60">
			Categorized pages from National Geographic's October 2010 issue
		</p>
	</div>

	<p>
		The numbers excluded from this set include assigned values like <span class="excluded-number"
			>page numbers, phone numbers, address markers, dates and years</span
		>. Note that while normally values like percentages are problematic for Benford's Law since they
		have a limited range (0-100), in this case since we are lumping them in with different types of
		numbers of varying scales, this constraint is a lot less of a concern. Finally, when charted
		these are the results:
	</p>

	<div
		class="custom-barchart-container mx-auto flex w-full max-w-[600px] flex-col items-center justify-center"
	>
		<h3 class="!mb-2 block">Distribution of Leading Digits</h3>

		<BarChart
			customHeight="200"
			data={{
				first_digits_proportions: natgeoFirstDigits
			}}
		></BarChart>
	</div>
</section>

<style>
	.excluded-number {
		background-color: var(--color-scale-diverging-3);
		border: 1px solid white;
		color: white;
		padding: 0.25rem 0.5rem;
		border-radius: 0.375rem;
	}

	.valid-number {
		background-color: var(--color-scale-diverging-0);
		color: white;
		padding: 0.25rem 0.5rem;
		border-radius: 0.375rem;
	}

	img {
		max-width: min(800px, 90vw) !important;
	}
</style>
