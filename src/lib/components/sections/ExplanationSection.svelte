<script>
	import ExplanationGrid from '$components/charts/ExplanationGrid.svelte';
	import SectionTitle from '$components/common/SectionTitle.svelte';
</script>

<section class="deep-dive">
	<SectionTitle title="An Explanation"></SectionTitle>

	<p>
		There are several explanations for this, some more mathematically involved than the others. But
		I want to stick to a more intuitive explanation for Benford’s Law. Many real-world examples of
		Benford's Law are affected by multiplicative growth - e.g. money compounds, populations change
		exponentially with each generation, prices are influenced by a percentage of inflation, etc.
	</p>

	<p>
		What we find in multiplicative growth is that the leading digit tends to stick around at lower
		values for a lot longer than digits on the higher end of the range. For example, suppose you
		deposit 100 dollars in a bank which gives you a [questionably generous] [10% - dropdown to
		change value] interest per year. This is what the next 100 years would look like.
	</p>

	<ExplanationGrid></ExplanationGrid>

	<p>
		As you can see in the range [100, … 10 digits ] multiplying by [x] generates a bunch of 1s, 2s
		but largely skips over the larger digits.
	</p>
</section>
