<script>
	import { scrollerState } from '$utils/stores';
	import toggleBarchartImage from '$assets/image/toggle-barchart.jpg';
	import toggleProportionImage from '$assets/image/toggle-proportions.jpg';

	let selectedChartType = 'bar';
</script>

<div class="navbar pointer-events-auto w-full">
	<div
		class="title-row flex w-full items-center justify-between border-b-[1px] border-b-[#555] px-4 py-2 pr-2"
	>
		<div class="title-content">
			<h2 class="title mb-0.5 text-5xl">Benford’s Law</h2>
			<p class="subtitle text-[17px] text-[#444]">A visual explainer by Schubert de Abreu</p>
		</div>

		<div class="chart-toggle relative mt-1 flex flex-col items-end gap-1 shadow-sm">
			<span
				style="top: -2px; "
				class="absolute right-2 top-0 -translate-y-1/2 bg-white px-1 text-base font-medium leading-[1] text-[#555]"
			>
				Chart Toggle
			</span>
			<div
				class="chart-type-picker flex items-center justify-center gap-1.5 rounded border-[1px] border-[#888] p-1.5 pt-2"
			>
				<button
					class="chart-type-button relative h-20 w-20 overflow-hidden rounded border-[1px] border-[#555] bg-gray-400 text-base"
					class:selected={selectedChartType === 'bar'}
					on:click={() => (selectedChartType = 'bar')}
				>
					<img src={toggleBarchartImage} alt="Bar Chart" />
				</button>

				<button
					class="chart-type-button relative h-20 w-20 overflow-hidden rounded border-[1px] border-[#555] bg-gray-400 text-base"
					class:selected={selectedChartType === 'proportion'}
					on:click={() => (selectedChartType = 'proportion')}
				>
					<img src={toggleProportionImage} alt="Proportion Chart" />
				</button>
			</div>
		</div>
	</div>

	<div class="progress-bar h-3 w-full bg-[#eee]">
		<div
			class="bar h-full"
			style="width: {$scrollerState.progress * 100 +
				1}%; background-color: var(--color-scale-diverging-0); opacity: {0.75 +
				$scrollerState.progress * 0.25}"
		></div>
	</div>
</div>

<style>
	.bar {
		transition: width 0.25s ease-out;
	}

	button.chart-type-button::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		box-shadow: inset -4px 5px 7px rgba(0, 0, 0, 0.32);
	}
</style>
