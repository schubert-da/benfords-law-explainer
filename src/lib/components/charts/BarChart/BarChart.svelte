<script>
	import * as d3 from 'd3';

	export let data;
	export let customHeight = null;
	export let colorMapping = null;
	export let showAnnotations = false;

	const benfordProportions = [0.301, 0.176, 0.125, 0.097, 0.079, 0.067, 0.058, 0.051, 0.046];
	$: currentProportions = data?.first_digits_proportions || [];
	$: chartWidth = 100;
	$: chartHeight = customHeight || chartWidth * 0.8;

	$: xScale =
		currentProportions && chartWidth
			? d3
					.scaleBand()
					.domain(Array.from({ length: currentProportions.length }, (_, i) => i + 1)) // categories
					.range([0, chartWidth]) // pixel range
					.paddingInner(0.06) // gap between bars
			: null;

	$: yScale =
		currentProportions && chartHeight
			? d3
					.scaleLinear()
					.domain([0, d3.max(currentProportions)])
					.range([chartHeight, 0])
					.nice() // pixel range
			: null;

	function getPathStyles(pathIndex, proportions) {
		let currentValue =
			Math.abs(proportions[pathIndex] - benfordProportions[pathIndex]) /
				benfordProportions[pathIndex] || 0;

		let index = 0;
		if (currentValue <= 0.05) {
			index = 0;
		} else if (currentValue <= 0.15) {
			index = 1;
		} else if (currentValue <= 0.25) {
			index = 2;
		} else if (currentValue <= 0.5) {
			index = 3;
		} else {
			index = 4;
		}

		let styleParams = {
			fill: `var(--color-scale-diverging-${index})`,
			stroke: +index === 2 ? '#222' : 'transparent',
			annotationColor: index < 2 && proportions[pathIndex] > 0.06 ? '#fff' : '#444'
		};

		return styleParams;
	}
</script>

{#if xScale && yScale}
	<div
		class="barchart min-w-25 min-h-25 relative mb-2 w-full overflow-hidden rounded-md border-[1px] border-[#888]"
		style:height={chartHeight + 'px'}
		bind:clientWidth={chartWidth}
	>
		<svg
			class="barchart-svg"
			width={chartWidth}
			height={chartHeight}
			viewBox={`0 0 ${chartWidth} ${chartHeight}`}
			preserveAspectRatio="xMidYMid meet"
		>
			{#each currentProportions as _, index}
				{@const pathStyles = getPathStyles(index, currentProportions)}
				{@const currentProportionValue = currentProportions[index]}

				<rect
					x={xScale(index + 1)}
					y="0"
					width={xScale.bandwidth()}
					height={chartHeight}
					fill="#f5f5f5"
				></rect>

				<rect
					x={xScale(index + 1)}
					y={yScale(currentProportionValue)}
					width={xScale.bandwidth()}
					height={chartHeight - yScale(currentProportionValue)}
					stroke={colorMapping ? '#222' : pathStyles.stroke}
					stroke-width="0.6"
					fill={colorMapping ? colorMapping[index] : pathStyles.fill}
				></rect>
			{/each}
		</svg>

		<div
			class="plot-labels absolute bottom-2 left-0 mb-[-4px] flex w-full flex-row items-center justify-center"
		>
			{#each currentProportions as _, index}
				{@const pathStyles = getPathStyles(index, currentProportions)}
				{@const currentProportionValue = currentProportions[index]}
				<div class="label flex w-full items-center justify-center">
					<p
						class="text-xs font-semibold leading-[1] text-[#333] sm:text-sm"
						class:opacity-0={Math.floor(currentProportionValue * 100) === 0}
						style:color={colorMapping ? (index < 4 ? '#fff' : '#444') : pathStyles?.annotationColor}
					>
						{Math.floor(currentProportionValue * 100)}
					</p>
				</div>
			{/each}
		</div>

		{#if showAnnotations}
			<div
				class="plot-labels absolute right-2 top-2 mb-[-4px] flex w-full flex-row items-center justify-end"
			>
				<p
					class="block !max-w-[20ch] text-right text-xs font-semibold leading-[1.2] text-[#555] sm:text-sm"
				>
					Percentage of total having the given starting digit
				</p>
			</div>
		{/if}
	</div>

	<div class="plot-labels mb-[-4px] flex w-full flex-row items-center justify-center">
		{#each currentProportions as _, index}
			<div class="label flex w-full items-center justify-center">
				<p class="text-xs font-medium leading-[1] text-[#333] md:text-sm">{index + 1}</p>
			</div>
		{/each}
	</div>
{/if}

<style>
	.barchart::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		box-shadow: inset -4px 5px 7px rgba(0, 0, 0, 0.32);
	}

	svg {
		background-color: #fff;
	}
</style>
