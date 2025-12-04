<script>
	import ExplanationGrid from '$components/charts/ExplanationGrid.svelte';
	import SectionTitle from '$components/common/SectionTitle.svelte';

	$: interest = 5;

	const copyContent = {
		2: {
			interest: 2,
			description: 'a less-than-stellar'
		},
		5: {
			interest: 5,
			description: 'a good'
		},
		10: {
			interest: 10,
			description: 'a questionablely generous'
		},
		25: {
			interest: 25,
			description: 'a definitely fraudulent'
		}
	};
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
		deposit 100 dollars in a bank which gives you {copyContent[interest].description}
		<select
			class="bg-scale-diverging-0 inline w-fit rounded-md px-1 py-1 text-[17px] text-base text-white"
			bind:value={interest}
		>
			{#each Object.entries(copyContent) as [key, content], index}
				<option class="bg-white text-base text-[#444]" value={content.interest}>
					{content.interest}%
				</option>
			{/each}
		</select> interest per year. This is what the next 100 years would look like.
	</p>

	<ExplanationGrid {interest}></ExplanationGrid>

	<p>
		As you can see, multiplying by {interest}% generates a bunch of numbers starting with 1s, 2s but
		largely skips over the larger digits as the sequence progresses.
	</p>
</section>
