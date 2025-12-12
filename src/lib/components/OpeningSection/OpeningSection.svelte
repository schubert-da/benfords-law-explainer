<script>
	import OpeningTable from './OpeningTable.svelte';
	import tableData from '$assets/data/opening-table-samples.json';
	import columnData from '$assets/data/columns_overview.json';
	import ChartContainer from '$components/charts/ChartContainer.svelte';
	import OpeningBackground from '$assets/image/opening-background.svg?raw';
	import { resetDialogBox } from '$utils/utils';

	$: chosenIndex = 1;

	$: chosenDataset = tableData[Object.keys(tableData)[chosenIndex]];

	$: filteredColumnData = columnData
		.filter((col) => col.column.toLocaleLowerCase().includes('year') === false && col.mad_first)
		.sort((a, b) => -b.mad_first + a.mad_first)
		.slice(0, 30);

	$: colorMapping = Array.from({ length: 9 }).map(() => 'var(--color-scale-diverging-1)');

	$: screenWidth = 1000;

	const copyContent = {
		0: {
			name: 'deaths-in-armed-conflicts',
			title: 'deaths in armed conflicts',
			units: 'counts'
		},
		1: {
			name: 'population-historical',
			title: 'country populations since 10,000 BCE',
			units: 'populations'
		},
		2: {
			name: 'electricity-from-gas',
			title: 'electricity generation from natural gas',
			units: 'generated energy'
		}
	};
</script>

<svelte:window bind:innerWidth={screenWidth} />

<section class="opening-section relative !mt-0 flex flex-col !gap-24 !overflow-visible !pt-[25vh]">
	<p>
		This is a story about how numbers in the wild follow certain unexpected patterns. To start off,
		let me ask you this: if I were to give you this dataset of <select
			class="bg-scale-diverging-0 inline w-fit rounded-md border-2 border-[#555] px-1 py-1 text-base text-white"
			bind:value={chosenIndex}
		>
			{#each Object.entries(copyContent) as [key, content], index}
				<option class="bg-white text-base text-[#444]" value={index}>
					{content.title}
				</option>
			{/each}
		</select>, how often would you expect the leading digit in the {copyContent[chosenIndex].units} column
		to be a 2?
	</p>

	<div class="table-container relative">
		<OpeningTable data={chosenDataset}></OpeningTable>
	</div>

	<p>
		Would your answer change if I asked the same about those starting with a 9? There shouldn't be
		any reason why the leading digit wouldn't be random, so all 9 digits should be equally common
		right? Except when chart the leading digits, we get the following:
	</p>

	<div class="barchart-container relative flex w-full items-center justify-center">
		<ChartContainer
			{colorMapping}
			isCompact={false}
			showTitle={true}
			chartType={'barchart'}
			data={{ ...chosenDataset }}
		></ChartContainer>
	</div>

	<p>
		So the leading digits are <span class="font-semibold"
			>more focused around the smaller values</span
		>
		and drop off as we go further out. This could be a one off result, so let's try again with another
		dataset. This time we're looking at {copyContent[(chosenIndex + 1) % 3].title}
	</p>

	<div class="barchart-container relative flex w-full items-center justify-center">
		<ChartContainer
			{colorMapping}
			isCompact={false}
			showTitle={true}
			chartType={'barchart'}
			data={tableData[Object.keys(tableData)[(chosenIndex + 1) % 3]]}
		></ChartContainer>
	</div>

	<p>
		Once more the first digits in the dataset are biased towards a certain digit. The thing is that
		if we look at a couple more datasets, you will find similar behaviour. The fact that the numbers
		are more likely to have a certain leading digit isn’t very surprising - sometimes numbers can
		fall into ranges which have the same leading digit or sometimes it's just a quirk of how they
		are recorded. What is surprising however, is that however many datasets you look at…
	</p>

	<div
		class="background-container absolute bottom-0 left-1/2 h-[90vw] w-[90vw] -translate-x-1/2 translate-y-[20%]"
		style="z-index: -1;"
	>
		{@html OpeningBackground}
	</div>
</section>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="plot-grid relative -z-10 grid w-full justify-center gap-2 !px-0"
	style:grid-template-columns="repeat({Math.ceil(screenWidth / 300)}, minmax(0, 1fr))"
	on:mouseleave={() => resetDialogBox()}
>
	{#each filteredColumnData.slice() as column}
		<div class="proportion-plot-container">
			<ChartContainer
				{colorMapping}
				showTitle={true}
				maxWidth={300}
				data={column}
				isCompact={true}
				enabledInteractions={false}
				chartType="barchart"
			></ChartContainer>
		</div>
	{/each}

	<div
		class="grid-overlay-text pointer-events-none absolute left-1/2 top-1/2 z-10 w-fit -translate-x-1/2 -translate-y-1/2 text-balance rounded border-[1px] border-[#888] bg-white px-5 py-5 text-center shadow-lg"
	>
		... the distribution of the leading digits <span class="font-semibold"
			>stays roughly the same</span
		>
	</div>
</div>

<style>
	.opening-section::after {
		content: '';
		position: absolute;
		left: 50%;
		bottom: 0;
		transform: translate(-50%, 70%);
		width: 100vw;
		height: 40vh;
		pointer-events: none;
		background: linear-gradient(
			to bottom,
			rgba(255, 255, 255, 1) 0%,
			rgba(255, 255, 255, 0.5) 40%,
			rgba(255, 255, 255, 0) 100%
		);
		z-index: -1;
	}

	.table-container::after {
		content: '';
		position: absolute;
		bottom: -20px;
		left: 0;
		width: 100%;
		height: 90px; /* control depth of fade */
		pointer-events: none;
		background: linear-gradient(
			to bottom,
			rgba(255, 255, 255, 0) 0%,
			rgba(255, 255, 255, 1) 80%,
			rgba(255, 255, 255, 1) 100%
		);
	}

	.plot-grid {
		margin-top: -50px;
	}

	.grid-overlay-text {
		top: 30%;
		width: min(80vw, 400px);
	}

	@media (max-width: 768px) {
		.plot-grid {
			margin-top: -20px;
		}

		.grid-overlay-text {
			top: 15%;
		}
	}

	:global(.opening-section .label p, .opening-section + div .label p) {
		color: #444 !important;
	}

	:global(.opening-section .barchart-svg rect, .opening-section + div .barchart-svg rect) {
		stroke: none !important;
	}
</style>
