<script>
	import BenfordsBarChart from '$components/charts/BenfordsBarChart.svelte';
	import SectionTitle from '$components/common/SectionTitle.svelte';
	import FormulaBox from '$components/FormulaBox.svelte';
</script>

<section class="title-section">
	<SectionTitle
		title="Benford's Law Explainer"
		subtitle="An exploration of how real-world data often deviates from randomness."
	></SectionTitle>

	<p>
		So what is Benford's Law and how does it magically govern the distributions of datasets in the
		wild? The basic principle of this law is that the leading digit of numbers in a dataset are more
		frequently going to be small.
	</p>

	<p>“How small”, you ask? Well Benford's Law puts the probability of a leading digit as:</p>

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
		likely! Additionally, you are more than 6 times more likely to find a digit with a leading digit
		of 1 than a 9!
	</p>
</section>
