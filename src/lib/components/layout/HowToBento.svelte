<div class="bento-grid w-full">
	<div class="bento-card bg-gray-300" style="grid-row: 1 / 2; grid-column: 1 / 6;">
		<div class="title-content">
			<h2>Proportion Plots</h2>
		</div>

		<div class="card-content flex h-full flex-row items-stretch justify-between gap-4">
			<div class="placeholder"></div>
			<p class="description-text">
				Proportion plots take a look at two different distributions and show how the same value
				deviates in different scenarios. The following chart shows the difference in women's
				representation in STEM vs in the overall population.
			</p>
		</div>
	</div>

	<div class="bento-card bg-gray-300" style="grid-row: 2 / 4; grid-column: 1 / 6;">
		<div class="title-content">
			<h2>So what does this mean for us?</h2>
		</div>

		<div class="card-content flex w-full flex-row items-stretch justify-between gap-4">
			<div class="text-col">
				<p class="description-text !max-w-[30ch] text-pretty text-right">
					This is the share of leading digits from our distribution, from 1 to 9.
				</p>
			</div>
			<div class="placeholder w-50 h-80"></div>
			<div class="text-col flex h-full flex-col justify-between">
				<p class="description-text !max-w-[30ch]">
					This is the expected proportion according to Benford’s Law.
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
				chart as opposed to heavily sloping bands when the are large deviations.
			</p>

			<div class="flex flex-row gap-3">
				<div class="placeholder h-35"></div>
				<div class="placeholder h-35"></div>
			</div>

			<p class="description-text">
				Often, colour will be used to denote how closely the band for a specific number lines up
				with it’s expected proportion.
			</p>

			<div class="flex flex-row gap-3">
				<div class="placeholder h-35"></div>

				<div class="legend flex flex-col items-start justify-center gap-[1px]">
					<h3 class="legend-title font-body !mb-1 block text-[14px] !font-semibold uppercase">
						Legend
					</h3>
					<div class="legend-item flex flex-row items-center gap-2">
						<div
							class="h-[20px] w-4 border-[1px] border-[#444] bg-[var(--color-scale-diverging-0)]"
						></div>
						<span class="whitespace-nowrap text-[14px]">Good fit</span>
					</div>
					<div class="legend-item flex flex-row items-center gap-2">
						<div
							class="h-[20px] w-4 border-[1px] border-[#444] bg-[var(--color-scale-diverging-1)]"
						></div>
					</div>
					<div class="legend-item flex flex-row items-center gap-2">
						<div
							class="h-[20px] w-4 border-[1px] border-[#444] bg-[var(--color-scale-diverging-2)]"
						></div>
						<span class="whitespace-nowrap text-[14px]">Acceptable</span>
					</div>
					<div class="legend-item flex flex-row items-center gap-2">
						<div
							class="h-[20px] w-4 border-[1px] border-[#444] bg-[var(--color-scale-diverging-3)]"
						></div>
					</div>
					<div class="legend-item flex flex-row items-center gap-2">
						<div
							class="h-[20px] w-4 border-[1px] border-[#444] bg-[var(--color-scale-diverging-4)]"
						></div>
						<span class="whitespace-nowrap text-[14px]">Major deviation</span>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="bento-card bg-gray-300" style="grid-row: 4 / 6; grid-column: 3 / 6;">
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

			<div class="flex flex-row gap-3">
				<div class="placeholder h-35"></div>

				<p class="description-text !max-w-[30ch]">
					Sloping lines between the two sides indicates that there is some deviation from the
					expected behaviour.
				</p>
			</div>
		</div>
	</div>
	<div class="bento-card bg-gray-300" style="grid-row: 6 / 7; grid-column: 3/ 6;">
		<div class="title-content">
			<h2>Flipping the Switch</h2>

			<p class="description-text">
				There is no one-size fits all here, so if you’re more comfortable with a bar chart you can
				toggle between it and the proportion plot here.
			</p>
		</div>

		<div
			class="card-content flex h-full w-full flex-row items-center justify-center gap-2 rounded border-[1px] bg-[var(--color-scale-diverging-1)]"
		>
			<button
				class="border-1 min-w-50 font-display rounded-sm border-[#444] bg-[var(--color-scale-diverging-4)] px-2 py-1 text-[18px] text-white"
				>Proportion Plot</button
			>
			<button
				class="border-1 min-w-50 font-display rounded-sm border-[#444] bg-[var(--color-scale-diverging-2)] px-2 py-1 text-[18px] text-[#444]"
				>Bar Chart</button
			>
		</div>
	</div>
</div>

<style>
	.bento-grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: 300px repeat(5, 200px);
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
</style>
