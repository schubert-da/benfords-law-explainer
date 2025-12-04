<script>
	import { diaglogBoxContent } from '$utils/stores';

	$: chartData = $diaglogBoxContent?.data;
	$: screenWidth = 1000;
</script>

<svelte:window bind:innerWidth={screenWidth} />

<div class="navbar flex w-full flex-col items-stretch justify-between gap-2 p-2 sm:flex-row">
	<div
		class="text-content shadow-internal flex w-full flex-col items-start justify-between gap-4 overflow-hidden rounded border-[1px] border-[#555] p-2 pb-1 sm:max-w-[60%]"
	>
		<div class="title-content">
			<h2 class="colname border-b-[1px] pb-1 leading-tight">{chartData?.column}</h2>
			<h3
				class="title font-body !mt-1 text-base !font-semibold uppercase leading-tight !tracking-tight text-[#444]"
			>
				{chartData?.title}
			</h3>
			<p class="description text-base leading-snug text-[#444] sm:text-[17px]">
				{chartData?.description}
			</p>
		</div>

		<div class="details-list w-full">
			<div
				class="detail line-clamp-1 flex flex-row items-baseline justify-between gap-2 overflow-hidden text-ellipsis whitespace-nowrap border-b-[1px] py-[1px]"
			>
				<span class="detail-label text-base font-semibold uppercase text-[#444] sm:text-[17px]"
					>Source:</span
				>
				<span
					class="detail-value overflow-hidden text-ellipsis whitespace-nowrap text-base text-[#444] sm:text-[17px]"
					>{chartData?.source}</span
				>
			</div>

			{#if chartData?.data_range_min !== undefined && chartData?.data_range_max !== undefined}
				<div
					class="detail line-clamp-1 flex flex-row items-baseline justify-between gap-2 overflow-hidden text-ellipsis whitespace-nowrap border-b-[1px] py-[1px]"
				>
					<span class="detail-label text-base font-semibold uppercase text-[#444] sm:text-[17px]"
						>RANGE OF VALUES:</span
					>
					<span
						class="detail-value overflow-hidden text-ellipsis whitespace-nowrap text-base text-[#444] sm:text-[17px]"
						>{chartData?.data_range_min.toFixed(2)} - {chartData?.data_range_max.toFixed(2)}</span
					>
				</div>
			{/if}
			<div
				class="detail line-clamp-1 flex flex-row items-baseline justify-between gap-2 overflow-hidden text-ellipsis whitespace-nowrap py-[1px]"
			>
				<span class="detail-label text-base font-semibold uppercase text-[#444] sm:text-[17px]">
					{screenWidth < 650 ? 'Conforms:' : "Conforms to Benford's Law:"}
				</span>
				<span
					class="detail-value overflow-hidden text-ellipsis whitespace-nowrap text-base text-[#444] sm:text-[17px]"
					>{chartData?.mad_first_category}</span
				>
			</div>
		</div>
	</div>

	<div
		class="chart-content shadow-internal flex w-full flex-col items-start justify-between gap-4 overflow-hidden rounded border-[1px] border-[#555] p-0 sm:max-w-[500px]"
	>
		<div class="values-grid w-full">
			<div class="header flex h-7 items-center justify-center border-b-2 border-b-[#555] px-1">
				<span class="text-[15px] font-medium uppercase text-[#444]">Digit</span>
			</div>
			<div class="header flex h-7 items-center justify-center border-b-2 border-b-[#555] px-1">
				<span class="text-[15px] font-medium uppercase text-[#444]">Count</span>
			</div>
			<div class="header flex h-7 items-center justify-center border-b-2 border-b-[#555] px-1">
				<span class="text-[15px] font-medium uppercase text-[#444]">Percentage</span>
			</div>

			{#each Array(9) as _, index}
				{@const percentage = chartData?.first_digits_proportions[index] * 100}
				{@const maxValue = Math.max(...chartData?.first_digits_proportions, 0.35) * 100}
				<div class="cell flex items-center justify-center border-b-[1px] border-[#999]">
					<span class="text-right text-base text-[#555] sm:text-[17px]">{index + 1}</span>
				</div>

				<div class="cell flex items-center justify-end border-b-[1px] border-[#999]">
					<span class="text-right text-base text-[#555] sm:text-[17px]"
						>{chartData?.first_digits_counts?.[index]}</span
					>
				</div>

				<div class="cell flex items-center justify-end border-b-[1px] border-[#999] pl-2">
					<div class="bar-container h-full w-full bg-[#EFEFEF] pb-0.5">
						<div
							class="bar bg-scale-diverging-1 h-full pl-2"
							style:width={(percentage * 100) / maxValue + '%'}
						>
							<span class="text-base font-medium {percentage < 5 ? 'text-black' : 'text-white'}"
								>{Math.round(percentage)}%</span
							>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.values-grid {
		display: grid;
		grid-template-columns: 1fr 2fr 8fr;
		gap: 0;
	}

	.bar {
		transition: width 0.2s ease-in;
	}
</style>
