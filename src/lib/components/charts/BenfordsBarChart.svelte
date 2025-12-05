<script>
	import { benfordProbabilities } from '$utils/utils';

	const chartHeight = 360;
</script>

<div class="chart-container mx-auto max-w-[1200px]">
	<div class="title-content mb-2">
		<h2 class="title !mb-2 text-4xl md:text-4xl">Benford’s Law</h2>
		<p
			class="subtitle block !max-w-[60ch] text-pretty text-lg leading-tight text-[#444] md:text-xl"
		>
			In a distribution of naturally occurring values, the <span class="font-semibold"
				>leading digit is more likely to be a smaller digit</span
			>.
		</p>
	</div>

	<div class="chart flex w-full flex-col gap-0.5 sm:gap-1">
		<div
			class="chart-content relative top-0 h-full w-full border-b-[3px] border-b-[#363636]"
			style:height="{chartHeight}px"
		>
			<div
				class="y-axis absolute right-0 top-0 z-0 flex h-full max-h-full w-full flex-col items-center"
				style:height="{chartHeight}px"
			>
				{#each [40, 30, 20, 10] as value, index}
					<div
						class="band flex h-full w-full flex-col items-end border-t border-dashed border-t-[#a9a9a9]
"
					>
						<span class="axis-label text-lg text-[#a9a9a9]">{value}%</span>
					</div>
				{/each}
			</div>

			<div
				class="y-annotation absolute right-0 z-0 flex w-full flex-col items-center"
				style:bottom="{(11 * 100) / 40}%"
			>
				<div
					class="band flex w-full flex-col items-end
"
				>
					<span
						class="axis-label max-w-[20ch] text-right text-base font-medium text-[#666] sm:max-w-full md:text-lg"
						>If all probabilities were equal ({11}%)</span
					>
					<div class="axis-line h-[2px] w-full flex-col items-end border-t-2 border-t-[#666]"></div>
				</div>
			</div>

			<div class="text-annotation absolute right-0 top-4 z-0 flex w-full flex-col items-start">
				<p
					class="axis-label !max-w-[30ch] text-base font-normal leading-[1.2] text-[#444444] md:text-lg"
				>
					<span class="font-semibold">Almost half</span> of all numbers will either start with a one
					or two.
				</p>
			</div>

			<div class="bar-list relative z-10 flex h-full w-full flex-row items-end gap-0.5">
				{#each benfordProbabilities as value}
					{@const isHighlightedBar = value > 0.15}
					<div
						class="bar flex w-full flex-1 flex-col items-center justify-end bg-[#D0D6D7] pb-1"
						style:height="{(value / 0.4) * 100}%; background-color: {isHighlightedBar
							? 'var(--color-scale-diverging-0)'
							: '#D0D6D7'}"
					>
						<span
							class="bar-value text-center text-base font-semibold sm:text-xl"
							style:color={isHighlightedBar ? '#fff' : '#444444'}>{(value * 100).toFixed(1)}</span
						>
					</div>
				{/each}
			</div>
		</div>

		<div class="x-axis flex w-full flex-row items-center justify-between">
			{#each benfordProbabilities as _, index}
				<span class="block w-full text-center text-base font-medium text-[#333] sm:text-xl"
					>{index + 1}</span
				>
			{/each}
		</div>
	</div>
</div>

<style>
</style>
