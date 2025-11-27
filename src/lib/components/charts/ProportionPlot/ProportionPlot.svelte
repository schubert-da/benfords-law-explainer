<script>
	import * as d3 from 'd3';
	import { onMount } from 'svelte';

	export let data;

	const benfordProportions = [0.301, 0.176, 0.125, 0.097, 0.079, 0.067, 0.058, 0.051, 0.046];
	$: currentProportions = data?.first_digits_proportions || [];

	$: chartWidth = null;
	let shapePath = '';

	function getPathData(index, totalWidth = 500, borderWidth = 4) {
		let A, B, C, D;
		if (index === 0) {
			A = { x: 0 - borderWidth, y: 0 - borderWidth };
			B = { x: totalWidth + borderWidth, y: 0 - borderWidth };
		} else {
			const runningSumCurrentPrev = d3.sum(currentProportions.slice(0, index));
			const runningSumBenfordPrev = d3.sum(benfordProportions.slice(0, index));

			A = { x: -borderWidth, y: runningSumCurrentPrev * totalWidth };
			B = {
				x: totalWidth + borderWidth,
				y: runningSumBenfordPrev * totalWidth
			};
		}

		if (index === currentProportions.length - 1) {
			C = { x: totalWidth + borderWidth, y: totalWidth + borderWidth };
			D = { x: 0 - borderWidth, y: totalWidth + borderWidth };
		} else {
			const runningSumCurrent = d3.sum(currentProportions.slice(0, index + 1));
			const runningSumBenford = d3.sum(benfordProportions.slice(0, index + 1));

			C = { x: totalWidth + borderWidth, y: runningSumBenford * totalWidth };
			D = { x: 0 - borderWidth, y: runningSumCurrent * totalWidth };
		}

		const [topCP1, topCP2] = controlPoints(A, B);
		const [botCP2, botCP1] = controlPoints(D, C);

		let path =
			`M ${A.x},${A.y} ` +
			(A.y === B.y
				? ` L ${B.x},${B.y} `
				: ` C ${topCP1.x},${topCP1.y} ${topCP2.x},${topCP2.y} ${B.x},${B.y} `) +
			`L ${C.x},${C.y}` +
			(C.y === D.y
				? ` L ${D.x},${D.y} `
				: ` C ${botCP2.x},${botCP2.y} ${botCP1.x},${botCP1.y} ${D.x},${D.y} `) +
			`Z`;

		return path;
	}

	// Helper: get control points for Bezier curve
	function controlPoints(P1, P2, curvature = 0.03) {
		const dx = P2.x - P1.x;
		const dy = P2.y - P1.y;

		const len = Math.sqrt(dx * dx + dy * dy);

		// Midpoint
		const mx = (P1.x + P2.x) / 2;
		const my = (P1.y + P2.y) / 2;

		// Unit perpendicular vector
		const ux = -(dy / len);
		const uy = dx / len;

		// Scale by curvature factor * edge length
		const offset = len * curvature;

		// Single midpoint control, used twice
		const cp = { x: mx + ux * offset, y: my + uy * offset };

		return [cp, cp];
	}

	function getPathStyles(pathIndex, proportions) {
		let currentValue =
			Math.abs(proportions[pathIndex] - benfordProportions[pathIndex]) /
				benfordProportions[pathIndex] || 0;

		let index = 0;
		if (currentValue <= 0.05) {
			index = 0;
		} else if (currentValue <= 0.15) {
			index = 1;
		} else if (currentValue <= 0.25) {
			index = 2;
		} else if (currentValue <= 0.5) {
			index = 3;
		} else {
			index = 4;
		}

		let styleParams = {
			fill: `var(--color-scale-diverging-${index})`,
			borderWidth: index >= 2 ? 2 : 4,
			opacity: 1
		};

		return styleParams;
	}
</script>

<div
	class="proportion-plot relative w-full overflow-hidden rounded-md border-[1px] border-[#888] bg-gray-200"
	style:height={chartWidth + 'px'}
	bind:clientWidth={chartWidth}
>
	<svg
		class="proportion-plot-svg"
		width={chartWidth}
		height={chartWidth}
		viewBox={`0 0 ${chartWidth} ${chartWidth}`}
		preserveAspectRatio="xMidYMid meet"
	>
		{#each currentProportions as _, index}
			{@const pathStyles = getPathStyles(index, currentProportions)}
			{@const borderWidth = pathStyles?.borderWidth}
			<path
				d={getPathData(index, chartWidth, borderWidth)}
				class="{pathStyles} {index}"
				fill={pathStyles.fill}
				opacity={pathStyles.opacity}
				stroke={'#ffffff'}
				stroke-width={borderWidth}
			/>
		{/each}
	</svg>
</div>

<style>
	.proportion-plot::after {
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
