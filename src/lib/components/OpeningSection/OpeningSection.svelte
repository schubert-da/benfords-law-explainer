<script>
	import OpeningTable from './OpeningTable.svelte';
	import tableData from '$assets/data/opening-table-samples.json';

	$: chosenDataset = tableData['deaths-in-armed-conflicts'];
</script>

<section class="opening-section !mt-[25vh]">
	<p>
		This is a story about how numbers in the wild follow certain unexpected patterns. For example,
		if I were to give you this dataset of the [areas of water bodies across the globe]
	</p>

	<div class="table-container relative">
		<OpeningTable data={chosenDataset}></OpeningTable>
	</div>

	<p>
		and asked you what was the distribution of the leading digits of all the [areas], would you say
		that it was:
	</p>

	<div class="placeholder h-100">two options</div>

	<p>
		So the numbers do pool around a certain value and their probability drops off as you move away
		from that digit. We could have gotten lucky here, so let's try again with another dataset. This
		time we're looking at the [ages of all buildings in Narnia]
	</p>

	<div class="placeholder h-100">
		“another dataset” results in the middle, old result moved to the side
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
