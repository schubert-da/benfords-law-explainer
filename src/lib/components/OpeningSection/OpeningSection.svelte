<script>
	import OpeningTable from './OpeningTable.svelte';
	import tableData from '$assets/data/opening-table-samples.json';
	import ChartContainer from '$components/charts/ChartContainer.svelte';

	$: chosenIndex = 0;

	$: chosenDataset = tableData[Object.keys(tableData)[chosenIndex]];
</script>

<section class="opening-section flecol !gap-25 !mt-[25vh] flex">
	<p>
		This is a story about how numbers in the wild follow certain unexpected patterns. For example,
		if I were to give you this dataset of the [areas of water bodies across the globe]
	</p>

	<div class="table-container relative">
		<OpeningTable data={chosenDataset}></OpeningTable>
	</div>

	<p>
		If I were to ask you how often the [area] would start with a 2, what would you say? Would your
		answer change if I asked the same those starting with a 9? There is no reason why the leading
		digit wouldn't be random so all 9 digits (0 isn't a valid starting digit) should be equal right?
		Except in the real world it looks a bit more like this:
	</p>

	<div class="barchart-container relative flex w-full items-center justify-center">
		<ChartContainer
			isCompact={true}
			showTitle={true}
			chartType={'barchart'}
			data={{ ...chosenDataset }}
		></ChartContainer>
	</div>

	<p>
		So the numbers do pool around a certain value and their probability drops off as you move away
		from that digit. We could have gotten lucky here, so let's try again with another dataset. This
		time we're looking at the [ages of all buildings in Narnia]
	</p>

	<div class="barchart-container relative flex w-full items-center justify-between gap-4">
		<div class="wrapper h-full w-1/2">
			<ChartContainer isCompact={true} showTitle={true} chartType={'barchart'} data={chosenDataset}
			></ChartContainer>
		</div>
		<div class="wrapper h-full w-1/2">
			<ChartContainer
				isCompact={true}
				showTitle={true}
				chartType={'barchart'}
				data={tableData[Object.keys(tableData)[(chosenIndex + 1) % 3]]}
			></ChartContainer>
		</div>
	</div>

	<p>
		Once more the first digits in the dataset are biased towards a certain digit. The thing is that
		if we look at a couple more datasets, you will find similar behaviour. The fact that the numbers
		are more likely to have a certain leading digit isn’t very surprising - sometimes numbers can
		fall into ranges which have the same leading digit or sometimes it's just a quirk of how they
		are recorded. What is surprising however, is that however many datasets you look at - the
		distribution stays roughly the same…
	</p>

	<div class="placeholder h-100">
		Fill out the entire grid with benford’s charts - Parallax w/ title
	</div>
</section>

<style>
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
</style>
