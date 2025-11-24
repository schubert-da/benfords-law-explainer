<script>
	import ProportionPlot from './ProportionPlot/ProportionPlot.svelte';

	export let data;

	function getResultStyling(result) {
		let styleParams = {};

		if (result === 'Non-conformity') {
			styleParams = {
				background: 'var(--color-scale-diverging-4)',
				text: '#ffffff'
			};
		} else if (result === 'Acceptable conformity') {
			styleParams = {
				background: 'var(--color-scale-diverging-2)',
				text: '#222222'
			};
		} else {
			styleParams = {
				background: 'var(--color-scale-diverging-0)',
				text: '#fff'
			};
		}

		return styleParams;
	}
</script>

<div class="chart-container max-w-90 rounded-2xl border-[1px] border-[#ccc] px-4 py-4">
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

			{#if data.mad_first_category}
				{@const resultStyling = getResultStyling(data.mad_first_category)}
				<div
					class="chart-details-result flex min-w-40 items-center justify-center rounded-sm border-[1px] border-[#444] px-4 py-1"
					style="background: {resultStyling.background};"
				>
					<p
						style="color: {resultStyling.text}"
						class="font-display whitespace-nowrap text-nowrap text-center text-[16px] tracking-wide text-white"
					>
						{data.mad_first_category}
					</p>
				</div>
			{/if}
		</div>
	</div>

	<div class="chart relative w-full overflow-hidden rounded-md border-[1px] border-[#888]">
		<ProportionPlot {data} />
	</div>
</div>

<style>
	.chart-container {
		box-shadow:
			rgba(0, 0, 0, 0.12) 0px 1px 3px,
			rgba(0, 0, 0, 0.24) 0px 1px 2px;
	}

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
