<script>
	import { scrollerState, chosenChart } from '$utils/stores';
	import toggleBarchartImage from '$assets/image/toggle-barchart.jpg';
	import toggleProportionImage from '$assets/image/toggle-proportions.jpg';

	let selectedChartType = 'bar';
	$: screenWidth = 1000;
</script>

<svelte:window bind:innerWidth={screenWidth} />

<div class="navbar pointer-events-auto w-full">
	<div
		class="title-row flex min-h-[95px] w-full items-center justify-between gap-2 border-b-[1px] border-b-[#555] px-2 py-2 pr-2 md:px-4"
	>
		{#if !(screenWidth < 600 && ($scrollerState.index === 2 || $scrollerState.index === 4 || $scrollerState.index === 7))}
			<div class="title-content">
				<h2 class="title !mb-0.5 text-[22px] leading-[1.2] md:text-3xl lg:text-4xl">
					Benford’s Law
				</h2>
				<p class="subtitle text-[15px] leading-[1.2] text-[#444] md:text-[17px]">
					A visual explainer by Schubert de Abreu
				</p>
			</div>
		{/if}

		{#if $scrollerState.index === 2}
			<div
				class="chart-toggle relative {screenWidth < 600
					? 'mx-auto'
					: 'ml-auto'} mt-1 flex flex-col items-end gap-1 shadow-sm"
			>
				<div
					class="legend-container shadow-internal relative flex items-center justify-center gap-1.5 rounded border-[1px] border-[#888] p-1 pt-2 sm:p-1.5 sm:pt-2"
				>
					<span
						style="top: -4px; "
						class="absolute right-2 top-0 -translate-y-1/2 whitespace-nowrap bg-white px-1 text-sm font-medium leading-[1] text-[#555] md:text-base"
					>
						Leading digit is
					</span>

					<div class="legend flex w-full flex-row items-stretch gap-1">
						<div
							class="bar shadow-inset bg-scale-diverging-0 h-15 w-13 flex items-center justify-center overflow-hidden rounded border-[1px] border-[#888] lg:h-20 lg:w-20"
						>
							<span class="w-fit text-center text-sm font-medium text-white sm:text-base"
								>1 or 2</span
							>
						</div>
						<div
							class="bar shadow-inset bg-scale-diverging-1 h-15 w-13 flex items-center justify-center overflow-hidden rounded border-[1px] border-[#888] lg:h-20 lg:w-20"
						>
							<span class="w-fit text-center text-sm font-medium text-white sm:text-base"
								>3 or 4</span
							>
						</div>
						<div
							class="bar shadow-inset bg-scale-diverging-2 h-15 w-13 flex items-center justify-center overflow-hidden rounded border-[1px] border-[#888] lg:h-20 lg:w-20"
						>
							<span class="w-fit text-center text-sm font-medium text-[#333] sm:text-base">5</span>
						</div>
						<div
							class="bar shadow-inset bg-scale-diverging-3 h-15 w-13 flex items-center justify-center overflow-hidden rounded border-[1px] border-[#888] lg:h-20 lg:w-20"
						>
							<span class="w-fit text-center text-sm font-medium text-white sm:text-base"
								>6 or 7</span
							>
						</div>
						<div
							class="bar shadow-inset bg-scale-diverging-4 h-15 w-13 flex items-center justify-center overflow-hidden rounded border-[1px] border-[#888] lg:h-20 lg:w-20"
						>
							<span class="w-fit text-center text-sm font-medium text-white sm:text-base"
								>8 or 9</span
							>
						</div>
					</div>
				</div>
			</div>
		{:else if $scrollerState.index === 4 || $scrollerState.index === 7}
			<div
				class="chart-toggle relative {screenWidth < 600
					? 'mx-auto'
					: 'ml-auto'} mt-1 flex flex-col items-end gap-1 shadow-sm"
			>
				<div
					class="legend-container shadow-internal relative flex items-center justify-center gap-1.5 rounded border-[1px] border-[#888] p-1 pt-2 sm:p-1.5 sm:pt-2"
				>
					<span
						style="top: -3px; "
						class="absolute right-2 top-0 -translate-y-1/2 whitespace-nowrap bg-white px-1 text-sm font-medium leading-[1] text-[#555] md:text-base"
					>
						How close to Benford's expected value?
					</span>

					<div class="legend flex w-full flex-row items-stretch gap-0.5">
						<div
							class="bar shadow-inset bg-scale-diverging-0 h-15 flex w-14 items-center justify-center overflow-hidden rounded border-[1px] border-[#888] lg:h-20 lg:w-20"
						>
							<span class="w-fit text-center text-[10px] font-medium text-white sm:text-base"
								>Good Fit</span
							>
						</div>
						<div
							class="bar shadow-inset bg-scale-diverging-1 h-15 flex w-14 items-center justify-center overflow-hidden rounded border-[1px] border-[#888] lg:h-20 lg:w-20"
						>
							<span class="w-fit text-center text-[10px] font-medium text-white sm:text-base"
							></span>
						</div>
						<div
							class="bar shadow-inset bg-scale-diverging-2 h-15 flex w-14 items-center justify-center overflow-hidden rounded border-[1px] border-[#888] lg:h-20 lg:w-20"
						>
							<span class="w-fit text-center text-[10px] font-medium text-[#333] sm:text-base"
								>Okay</span
							>
						</div>
						<div
							class="bar shadow-inset bg-scale-diverging-3 h-15 flex w-14 items-center justify-center overflow-hidden rounded border-[1px] border-[#888] lg:h-20 lg:w-20"
						>
							<span class="w-fit text-center text-[10px] font-medium text-white sm:text-base"
							></span>
						</div>
						<div
							class="bar shadow-inset bg-scale-diverging-4 h-15 flex w-14 items-center justify-center overflow-hidden rounded border-[1px] border-[#888] lg:h-20 lg:w-20"
						>
							<span class="w-fit text-center text-[10px] font-medium text-white sm:text-base"
								>Bad Fit</span
							>
						</div>
					</div>
				</div>
			</div>
		{:else if $scrollerState.index >= 3}
			<div class="chart-toggle relative mt-1 flex flex-col items-end gap-1 shadow-sm">
				<span
					style="top: -2px; "
					class="absolute right-2 top-0 -translate-y-1/2 whitespace-nowrap bg-white px-1 text-sm font-medium leading-[1] text-[#555] md:text-base"
				>
					Chart Toggle
				</span>
				<div
					class="chart-type-picker shadow-internal flex items-center justify-center gap-1.5 rounded border-[1px] border-[#888] p-1 pt-1.5 sm:p-1.5 sm:pt-2"
				>
					<button
						class="chart-type-button w-15 h-15 relative cursor-pointer overflow-hidden rounded border-[1px] border-[#888] bg-white text-base hover:border-2 hover:border-gray-500 md:h-20 md:w-20"
						class:selected={$chosenChart === 'barchart'}
						on:click={() => ($chosenChart = 'barchart')}
					>
						<img class="" src={toggleBarchartImage} alt="Bar Chart" />
					</button>

					<button
						class="chart-type-button w-15 h-15 relative cursor-pointer overflow-hidden rounded border-[1px] border-[#888] bg-white text-base hover:border-2 hover:border-gray-500 md:h-20 md:w-20"
						class:selected={$chosenChart === 'proportion'}
						on:click={() => ($chosenChart = 'proportion')}
					>
						<img class="" src={toggleProportionImage} alt="Proportion Chart" />
					</button>
				</div>
			</div>
		{/if}
	</div>

	<div class="progress-bar h-2.5 w-full bg-[#eee] sm:h-3">
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
		box-shadow: inset 1px 1px 6px rgba(0, 0, 0, 0.2);
	}
	button.chart-type-button.selected {
		border: 2px solid oklch(55.1% 0.027 264.364);
	}

	button.chart-type-button:not(.selected) img {
		opacity: 0.3;
	}
	button.chart-type-button:not(.selected)::after {
		display: none;
	}
</style>
