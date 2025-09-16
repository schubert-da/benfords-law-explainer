<script>
	import FormulaBox from '$lib/components/FormulaBox.svelte';
</script>

<section class="title-section">
	<h2 class="text-4xl font-bold">Benford's Law Explainer</h2>
	<p>An exploration of how real-world data often deviates from randomness.</p>
</section>

<section class="introduction">
	<p>
		So what is Benford's Law and how does it magically govern the distributions of datasets in the
		wild? The basic principle of this law is that the leading digit of numbers in a dataset are more
		frequently smaller going to be small.
	</p>

	<p>“How small”, you ask? Well the math behind the exact probability of a leading digit is:</p>

	<FormulaBox formula="P(d) = \\log_{10}(d + 1) - \\log_{10}(d)"></FormulaBox>

	<p>
		where d is the digit we want to find the probability of. So essentially this boils down to the
		difference between the logarithm of the next digit and that of the current digit.
	</p>

	<p>When graphed, this formula produces the following distribution:</p>

	<div class="placeholder h-100">Graph of Benford's Law Distribution Here</div>

	<p>
		In an even distribution we would expect each to have a probability of 11.11%, but in practice
		Benford's law puts the odds of a leading digit of 1 to be 30.1% - almost three times more
		likely! Additionally, you are more than 6 times more likely to find a digit with a leading digit
		of 1 than a 9!
	</p>
</section>

<section class="deep-dive">
	<h2 class="text-4xl font-bold">The more interesting ones</h2>
</section>
