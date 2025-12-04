<script>
	import workforceProportionImage from '$assets/image/proportion-plot-workforce.jpg';
	import exampleProportionImage from '$assets/image/proportion-plot-example.jpg';
	import porportionExampleGood from '$assets/image/proportion-example-good.jpg';
	import porportionExampleBad from '$assets/image/proportion-example-bad.jpg';
	import proportionExampleColors from '$assets/image/proportion-example-colors.jpg';
	import proportionGoodEnough from '$assets/image/proportion-good-enough.jpg';

	import { chosenChart } from '$utils/stores';
	import toggleBarchartImage from '$assets/image/toggle-barchart.jpg';
	import toggleProportionImage from '$assets/image/toggle-proportions.jpg';
</script>

<div class="bento-grid w-full">
	<div class="bento-card bg-gray-300" style="grid-row: 1 / 2; grid-column: 1 / 6;">
		<div
			class="card-content flex h-full flex-row-reverse items-stretch justify-between gap-4 md:flex-row"
		>
			<img
				src={workforceProportionImage}
				alt="proportion plot showing the differences in the nature of male and female employment"
				class="mx-auto max-w-[100%] rounded border-[1px] border-[#555] object-contain"
			/>
			<div class="title-content h-full">
				<h2 class="!mb-4">Proportion Plots</h2>

				<div class="description-text-content flex flex-1 flex-col justify-between gap-5">
					<p class="description-text mb-auto">
						Proportion plots take a look at two different distributions and show how the same value
						deviates in different scenarios. The following chart shows the difference in women's
						representation in labour force vs men's.
					</p>

					<p class="description-text !text-sm opacity-90">
						Source: Periodic Labour Force Survey 2023-2024, National Sample Surveys, National
						Statistics Office via <span class="font-medium">Data For India</span>
					</p>
				</div>
			</div>
		</div>
	</div>

	<div class="bento-card bg-gray-300" style="grid-row: 2 / 4; grid-column: 1 / 6;">
		<div class="title-content">
			<h2>So what does this mean for us?</h2>
		</div>

		<div class="card-content flex h-full w-full flex-row items-stretch justify-between gap-4">
			<div class="text-col">
				<p class="description-text !max-w-[30ch] text-pretty text-right">
					The digits on the left are share of leading digits from our observed distribution, from 1
					to 9.
				</p>
			</div>
			<div class="image-container h-full max-h-full w-[65%] rounded border-[1px] border-[#555]">
				<img
					src={exampleProportionImage}
					alt="example of how a proportion looks with all annotations"
					class="mx-auto h-full w-full max-w-[400px] object-contain"
				/>
			</div>
			<div class="text-col flex h-full flex-col justify-between">
				<p class="description-text !max-w-[30ch]">
					Those on the right are the expected proportion according to Benford’s Law.
				</p>

				<p class="description-text !max-w-[30ch]">
					Sloping lines between the two sides indicates that there is some deviation from the
					expected behaviour.
				</p>
			</div>
		</div>
	</div>

	<div class="bento-card bg-gray-300" style="grid-row: 4 / 7; grid-column: 1 / 3;">
		<div class="title-content">
			<h2>The Good and the Bad...</h2>
		</div>

		<div class="card-content flex w-full flex-col gap-5">
			<p class="description-text">
				If the distribution fits Benford’s Law you will see largely horizontal bands across the
				chart as opposed to heavily sloping bands when the two sides don't match.
			</p>

			<div class="flex flex-row justify-center gap-3">
				<div
					class="image-container h-full max-h-full w-1/2 !max-w-[200px] overflow-hidden rounded border-[1px] border-[#555]"
				>
					<img
						src={porportionExampleGood}
						alt="example of a good proportion plot"
						class="mx-auto h-full w-full object-contain"
					/>
				</div>
				<div
					class="image-container h-full max-h-full w-1/2 !max-w-[200px] overflow-hidden rounded border-[1px] border-[#555]"
				>
					<img
						src={porportionExampleBad}
						alt="example of a bad proportion plot"
						class="mx-auto h-full w-full object-contain"
					/>
				</div>
			</div>

			<p class="description-text">
				Often, colour will be used to denote how closely the band for a specific number lines up
				with it’s expected proportion.
			</p>

			<div class="flex flex-row gap-3">
				<div
					class="image-container h-full max-h-full w-1/2 overflow-hidden rounded border-[1px] border-[#555]"
				>
					<img
						src={proportionExampleColors}
						alt="example of how colours are used in proportion plot"
						class="mx-auto h-full w-full max-w-[400px] object-contain"
					/>
				</div>

				<div class="legend flex flex-col items-start justify-center gap-[1px]">
					<h3 class="legend-title font-body !mb-1 block text-[14px] !font-semibold uppercase">
						Legend
					</h3>
					<div class="legend-item flex flex-row items-center gap-2">
						<div
							class="h-[20px] !w-4 border-[1px] border-[#444] bg-[var(--color-scale-diverging-0)]"
						></div>
						<span class="whitespace-nowrap text-[14px]">Good fit</span>
					</div>
					<div class="legend-item flex flex-row items-center gap-2">
						<div
							class="h-[20px] !w-4 border-[1px] border-[#444] bg-[var(--color-scale-diverging-1)]"
						></div>
					</div>
					<div class="legend-item flex flex-row items-center gap-2">
						<div
							class="h-[20px] !w-4 border-[1px] border-[#444] bg-[var(--color-scale-diverging-2)]"
						></div>
						<span class="whitespace-nowrap text-[14px]">Acceptable</span>
					</div>
					<div class="legend-item flex flex-row items-center gap-2">
						<div
							class="h-[20px] !w-4 border-[1px] border-[#444] bg-[var(--color-scale-diverging-3)]"
						></div>
					</div>
					<div class="legend-item flex flex-row items-center gap-2">
						<div
							class="h-[20px] !w-4 border-[1px] border-[#444] bg-[var(--color-scale-diverging-4)]"
						></div>
						<span class="whitespace-nowrap text-[14px]">Major deviation</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="bento-card bg-gray-300" style="grid-row: 4 / 7; grid-column: 3 / 6;">
		<div class="title-content">
			<h2>... and the good enough</h2>
		</div>

		<div class="card-content flex w-full flex-col gap-5">
			<p class="description-text">
				You will see these labels throughout the course of the explainer.
			</p>

			<div class="button-row flex flex-row items-center justify-center gap-1">
				<span
					class="border-1 font-display rounded-sm border-[#444] bg-[var(--color-scale-diverging-1)] px-2 py-1 text-sm text-white"
					>Conforms</span
				>
				<span
					class="border-1 font-display rounded-sm border-[#444] bg-[var(--color-scale-diverging-2)] px-2 py-1 text-sm text-[#444]"
					>Acceptable</span
				>
				<span
					class="border-1 font-display rounded-sm border-[#444] bg-[var(--color-scale-diverging-4)] px-2 py-1 text-sm text-white"
					>Non-conformity</span
				>
			</div>

			<p class="description-text">
				I use the Mean Absolute Deviation (MAD) score to measure how close the distribution is to
				Benford’s distribution. While this is standard practice, it is still quite rigorous leading
				to many seemingly close results failing the test:
			</p>

			<div class="flex flex-col items-center gap-3 md:flex-row">
				<div class="image-container h-full max-h-full w-1/2 overflow-hidden">
					<img
						src={proportionGoodEnough}
						alt="example of a convincingly close benford's graph which fails the test"
						class="mx-auto h-full w-full max-w-[400px] object-contain"
					/>
				</div>

				<p class="description-text !max-w-[30ch] text-pretty">
					For example this falls under “Doesn’t conform”
				</p>
			</div>

			<p class="description-text">
				While I will still show these results, I urge you to eyeball the chart and decide if you
				still feel that that the general takeaway of <span class="italic"
					>“smaller numbers are more likely”</span
				> feels apt.
			</p>
		</div>
	</div>
	<div class="bento-card bg-gray-300" style="grid-row: 7 / 8; grid-column: 3/ 6;">
		<div class="title-content">
			<h2>Flipping the Switch</h2>

			<p class="description-text">
				There is no one-size fits all here, so if you’re more comfortable with a bar chart you can
				toggle between it and the proportion plot here and in the navbar below.
			</p>
		</div>

		<div
			class="chart-type-picker flex items-center justify-center gap-1.5 rounded border-[1px] border-[#888] p-1 pt-1.5 sm:p-1.5 sm:pt-2"
		>
			<button
				class="chart-type-button w-15 h-15 relative cursor-pointer overflow-hidden rounded border-[1px] border-[#888] bg-gray-400 text-base hover:border-2 hover:border-gray-500 md:h-20 md:w-20"
				class:selected={$chosenChart === 'barchart'}
				on:click={() => ($chosenChart = 'barchart')}
			>
				<img src={toggleBarchartImage} alt="Bar Chart" />
			</button>

			<button
				class="chart-type-button w-15 h-15 relative cursor-pointer overflow-hidden rounded border-[1px] border-[#888] bg-gray-400 text-base hover:border-2 hover:border-gray-500 md:h-20 md:w-20"
				class:selected={$chosenChart === 'proportion'}
				on:click={() => ($chosenChart = 'proportion')}
			>
				<img src={toggleProportionImage} alt="Proportion Chart" />
			</button>
		</div>
	</div>
</div>

<style>
	.bento-grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: 300px repeat(5, 200px) auto;
		gap: 12px;
	}

	.bento-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		gap: 12px;

		padding: 12px 16px;
		background-color: #fff;
		border: 1px solid #555;
		border-radius: 8px;
	}

	.bento-card h2 {
		margin-bottom: 8px;

		font-size: 26px;
		text-align: center;
		line-height: 1.2;
	}

	.bento-card p {
		font-size: 17px;
		line-height: 1.25;
		color: #555;
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

	button.chart-type-button:not(.selected) {
		opacity: 0.6;
	}

	@media (max-width: 850px) {
		.bento-grid {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}

		.bento-card {
			width: 100%;
			padding: 8px 12px;
		}

		.bento-card .card-content {
			flex-direction: column;
			justify-content: start;
			align-items: stretch;

			width: 100%;
			max-width: unset;
		}
		.bento-card .card-content {
			flex-direction: column;
			justify-content: start;
			align-items: stretch;

			width: 100%;
			max-width: unset;
		}

		.bento-card .card-content div,
		.bento-card .card-content p {
			width: 100% !important;
			max-width: 100% !important;
		}

		.bento-card .card-content p {
			font-size: 16px;
		}
	}
</style>
