<script>
	import ChartDetails from '$components/DialogBox/ChartDetails.svelte';
	import BarChart from './BarChart/BarChart.svelte';
	import ProportionPlot from './ProportionPlot/ProportionPlot.svelte';
	import { diaglogBoxContent } from '$utils/stores';
	import { resetDialogBox } from '$utils/utils';

	export let data;
	export let isCompact = false;
	export let showTitle = false;
	export let maxWidth = 400;
	export let chartType = 'proportion';
	export let colorMapping = null;
	export let enabledInteractions = false;

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

	function handleMouseOver() {
		if (!enabledInteractions) return;
		if (
			$diaglogBoxContent?.data.column === data.column &&
			$diaglogBoxContent?.data.title === data.title
		)
			return;
		diaglogBoxContent.set({ component: ChartDetails, data: data });
	}
</script>

<div
	class:compact-chart={isCompact}
	class="chart-container hover:hovered-chart flex h-full flex-col justify-between rounded-2xl border-[1px] border-[#ccc] px-4 py-4"
	style:max-width="{maxWidth}px"
	role="region"
	aria-label="Chart container"
	on:mouseover={handleMouseOver}
	on:focus={handleMouseOver}
>
	<div class="title-content min-w-0">
		<div class="title-wrapper w-full border-b-[3px] border-b-[#363636] pb-1.5">
			{#if showTitle === true}
				<h2
					class="title mb-1 !line-clamp-2 min-w-0 overflow-hidden whitespace-normal text-[26px] leading-[1.15]"
				>
					{data.title}
				</h2>
			{:else}
				<h2
					class="title mb-1 !line-clamp-2 min-w-0 overflow-hidden whitespace-normal text-[26px] leading-[1.15]"
				>
					{data.column}
					<span class=" text-base text-[#333]"> {isCompact ? `(${data.title})` : ''}</span>
				</h2>
			{/if}
		</div>

		{#if isCompact === false}
			<div class="chart-details mb-2 flex flex-col items-start justify-between gap-2">
				<div class="chart-details-text">
					<p
						class="content-clamp block text-pretty border-b-[1px] border-b-[#444] py-1 text-sm uppercase leading-snug text-[#444]"
					>
						{data.title}
					</p>

					<p
						class="content-clamp block text-pretty py-1 text-sm uppercase leading-snug text-[#444]"
					>
						{data.source}
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
		{/if}
	</div>

	<div class="chart relative w-full">
		{#if chartType === 'proportion'}
			<ProportionPlot {data} />
		{:else if chartType === 'barchart'}
			<BarChart {colorMapping} {data}></BarChart>
		{/if}
	</div>
</div>

<style>
	.chart-container {
		box-shadow:
			rgba(0, 0, 0, 0.12) 0px 1px 3px,
			rgba(0, 0, 0, 0.24) 0px 1px 2px;
	}

	.chart-container.compact-chart {
		padding: 12px;
	}

	.chart-container.compact-chart .title-wrapper {
		border: none;
	}
	.chart-container.compact-chart .title {
		line-height: 1.1;
		font-size: 18px;
	}
	.chart-container.compact-chart .title span {
		line-height: 1.1;
	}

	:global(.chart-container.compact-chart .plot-labels .label) {
		opacity: 1;
	}
</style>
