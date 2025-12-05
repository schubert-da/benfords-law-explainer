<script>
	import BenfordsBarChart from '$components/charts/BenfordsBarChart.svelte';
	import SectionTitle from '$components/common/SectionTitle.svelte';
	import FormulaBox from '$components/FormulaBox.svelte';
	import OpeningBackground from '$assets/image/opening-background.svg?raw';
</script>

<section class="title-section relative !overflow-visible">
	<div
		class="background-container absolute bottom-0 left-1/2 h-[90vw] w-[90vw] -translate-x-1/2 translate-y-[5%]"
		style="z-index: -1;"
	>
		{@html OpeningBackground}
	</div>

	<SectionTitle
		title="Benford's Law"
		subtitle="An exploration of how real-world data often deviates from randomness."
	></SectionTitle>

	<p>
		So what is Benford's Law and how does it magically govern the distributions of datasets in the
		wild? The basic principle of this law is that the leading digit of numbers in a dataset are more
		frequently going to be small.
	</p>

	<p>“How frequently”, you ask? Well Benford's Law puts the probability of a leading digit as:</p>

	<p class="mx-auto block">P(d) = log<sub>10</sub>(d + 1) − log<sub>10</sub>(d)</p>

	<p>
		where d is the leading digit we want to find the probability of. So essentially this boils down
		to the difference between the logarithm of the next digit and that of the current digit.
	</p>

	<p>When graphed, this formula produces the following distribution:</p>

	<BenfordsBarChart></BenfordsBarChart>

	<p>
		In an even distribution we would expect each to have a probability of 11.11%, but in practice
		Benford's law puts the odds of a leading digit of 1 to be 30.1% - almost three times more
		likely! Additionally, you are more than <span class="font-semibold"
			>6 times more likely to find a leading digit of 1 than a 9</span
		>!
	</p>
</section>

<style>
	.title-section {
		margin-top: -60px;
	}

	@media (max-width: 640px) {
		.title-section {
			margin-top: -20px;
		}
	}

	.title-section::before {
		content: '';
		position: absolute;
		left: 50%;
		top: 0;
		transform: translate(-50%, -100%);
		width: 100vw;
		height: 50vh;
		pointer-events: none;
		background: linear-gradient(
			to top,
			rgba(255, 255, 255, 1) 0%,
			rgba(255, 255, 255, 0.5) 40%,
			rgba(255, 255, 255, 0) 100%
		);
		z-index: -1;
	}
</style>
