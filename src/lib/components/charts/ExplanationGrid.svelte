<script>
	import BarChart from './BarChart/BarChart.svelte';

	export let start = 1.0;
	export let interest = 10;

	const numTiles = 50;

	$: computedValues = Array.from(
		{ length: numTiles },
		(_, i) => start * Math.pow(1 + interest / 100, i)
	);

	$: firstDigitsList = computedValues.map((v) => getFirstDigit(v));

	$: gridWidth = 1000;
	$: tileHeight = gridWidth / 10;

	function getTileStyling(value) {
		const firstDigit = getFirstDigit(value);

		let styleParam = {};

		if (!firstDigit) {
			return;
		} else if (firstDigit < 3) {
			styleParam = {
				color: 'var(--color-scale-diverging-0)',
				borderWidth: 2
			};
		} else if (firstDigit < 5) {
			styleParam = {
				color: 'var(--color-scale-diverging-1)',
				borderWidth: 1
			};
		} else if (firstDigit === 5) {
			styleParam = {
				color: 'var(--color-scale-diverging-2)',
				borderWidth: 1
			};
		} else if (firstDigit < 8) {
			styleParam = {
				color: 'var(--color-scale-diverging-3)',
				borderWidth: 1
			};
		} else {
			styleParam = {
				color: 'var(--color-scale-diverging-4)',
				borderWidth: 2
			};
		}

		return styleParam;
	}

	function getProportionsData(numbers) {
		const percentages = Object.values(
			numbers.reduce((acc, num) => {
				acc[num] = (acc[num] || 0) + 1;
				return acc;
			}, {})
		).map((count) => count / numTiles);

		return percentages;
	}

	function getFirstDigit(value) {
		return +value.toString().replace(/[.0]/g, '')[0];
	}

	$: colorMapping = Array.from({ length: 9 }).map((value, index) => {
		return getTileStyling(index + 1).color;
	});
</script>

<div class="charts flex flex-col items-center justify-center gap-5">
	<div class="values-grid" bind:clientWidth={gridWidth}>
		{#each computedValues as tile}
			{@const tileStyling = getTileStyling(tile)}
			<div
				class="tile flex items-center justify-center rounded border-[1px]"
				style="height: min({tileHeight}px, 70px); background: {tileStyling?.color}; border: {tileStyling?.borderWidth}px solid black;"
			>
				<span
					class="text-lg font-medium text-[#333] first-letter:text-xl first-letter:font-semibold first-letter:text-gray-800"
					>{tile.toFixed(2).toString()}</span
				>
			</div>
		{/each}
	</div>

	<div
		class="custom-barchart-container flex w-full max-w-[600px] flex-col items-center justify-center"
	>
		<h3 class="!mb-2 block">Distribution of Leading Digits</h3>

		<BarChart
			customHeight="200"
			{colorMapping}
			data={{ first_digits_proportions: getProportionsData(firstDigitsList) }}
		></BarChart>
	</div>
</div>

<style>
	.values-grid {
		display: grid;
		grid-template-columns: repeat(10, minmax(0, 70px));
		justify-content: center;
		gap: 4px;
	}

	:global(.custom-barchart-container .barchart::after) {
		display: none;
	}
</style>
