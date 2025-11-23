<script>
	import ProportionPlot from './ProportionPlot/ProportionPlot.svelte';

	export let data;

	console.log(data);
</script>

<div class="chart-container max-w-90 rounded-2xl border-[1px] border-[#aaa] px-4 py-4">
	<div class="title-content">
		<h2
			class="title clamp-content mb-1 !line-clamp-3 border-b-[3px] border-b-[#363636] pb-1.5 text-[26px] leading-[1.1]"
		>
			{data.title}
		</h2>

		<div class="chart-details mb-2 flex flex-col items-start justify-between gap-2">
			<div class="chart-details-text">
				<p
					class="content-clamp block text-pretty border-b-[1px] border-b-[#444] py-1 text-sm uppercase leading-snug text-[#444]"
				>
					{data.source}
				</p>
				<p class="content-clamp block text-pretty py-1 text-sm uppercase leading-snug text-[#444]">
					COLUMN: {data.column}
				</p>
			</div>

			<div
				class="chart-details-result flex min-w-40 items-center justify-center rounded-sm bg-[#ED6E43] px-4 py-1"
			>
				<p class="font-display whitespace-nowrap text-nowrap text-center text-[16px] text-white">
					{data.mad_first_category}
				</p>
			</div>
		</div>
	</div>

	<div class="chart relative w-full overflow-hidden rounded-md border-[1px] border-[#444444]">
		<ProportionPlot {data} />
	</div>
</div>

<style>
	.chart::after {
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
