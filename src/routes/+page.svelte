<script>
	import FormulaBox from '$lib/components/FormulaBox.svelte';
</script>

<section class="title-section">
	<h2>Benford's Law Explainer</h2>
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
</section>
