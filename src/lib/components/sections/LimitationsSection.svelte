<script>
	import SectionTitle from '$components/common/SectionTitle.svelte';
	import columnData from '$assets/data/columns_overview.json';
	import ChartContainer from '$components/charts/ChartContainer.svelte';
	import { resetDialogBox } from '$utils/utils';

	const yearColumns = columnData.filter((c) => c.column.toLowerCase() === 'year').slice(0, 15);

	const COLS_WIDTH = 350;
	$: screenWidth = 1000;
</script>

<svelte:window bind:innerWidth={screenWidth} />

<section class="limitations">
	<SectionTitle title="Limitations" description="Where Benford' Law starts to fall apart"
	></SectionTitle>

	<p>
		While the previous examples showed you how well this works in practice, but there are a few
		exceptions to the rule. Benford’s law generally applies to data that fit some of the following
		guidelines:
	</p>

	<div class="limitation flex flex-col gap-4">
		<h3 class="text-xl leading-tight md:text-2xl">1. Data that is measured rather than assigned</h3>

		<p>
			Phone numbers in a state wouldn’t follow Benford’s law because being an assigned (and not
			“measured”), they would simply run down their list of available numbers causing numbers to be
			assigned with equal probabilities. Additionally they may even have a fixed area code as the
			prefix, further throwing off the leading digit distribution.
		</p>
	</div>

	<div class="limitation flex flex-col gap-4">
		<h3 class="text-xl leading-tight md:text-2xl">2. Ranges over orders of magnitudes</h3>

		<p>
			Another requirement is that the numerical values should span several ranges of magnitude. A
			good rule of thumb is that it should span at least 3 ranges of magnitude (eg. 1 to 1000 ie,
			10^0 to 10^3) - in general the more orders of magnitude, the more pronounced the effect is.
		</p>
		<p>
			You might have noticed that a column I routinely left out in all the datasets is the year - it
			has a very limited range in most datasets and it's not a naturally occurring “measured” value
			which grows exponentially. It is an assigned value and has a very limited range.
		</p>
	</div>
</section>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="plot-grid grid w-full justify-center gap-2"
	style:grid-template-columns="repeat({Math.ceil(screenWidth / 350)}, minmax(0, 1fr))"
	on:mouseleave={resetDialogBox}
>
	{#each yearColumns.slice() as column}
		<div class="proportion-plot-container w-full">
			<ChartContainer
				data={column}
				isCompact={true}
				maxWidth={COLS_WIDTH}
				enabledInteractions={true}
				chartType="proportion"
			></ChartContainer>
		</div>
	{/each}
</div>

<section>
	<div class="limitation flex flex-col gap-4">
		<h3 class="text-xl leading-tight md:text-2xl">
			3. Not artificially restricted by minimums or maximums
		</h3>
		<p>
			The dataset should be generated from a natural process. If it is restricted or forced to fit
			into a specific size or cutoff, it fails to follow Benford's Law
		</p>
	</div>

	<div class="limitation flex flex-col gap-4">
		<h3 class="text-xl leading-tight md:text-2xl">4. Larger datasets work better</h3>
		<p>
			Because when do they not. But yes, larger datasets tend to provide a more accurate
			representation of Benford's Law.
		</p>
	</div>
</section>
