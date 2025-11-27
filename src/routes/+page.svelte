<script>
	import OpeningSection from '$components/OpeningSection/OpeningSection.svelte';
	import SectionTitle from '$lib/components/common/SectionTitle.svelte';
	import FormulaBox from '$lib/components/FormulaBox.svelte';
	import Scroller from '@sveltejs/svelte-scroller';

	// params for scroller
	let count;
	let index;
	let offset;
	let progress;
	let top = 0;
	let threshold = 0.4;
	let bottom = 0.9;
</script>

<Scroller {top} {threshold} {bottom} bind:count bind:index bind:offset bind:progress>
	<div slot="foreground" class="relative z-10">
		<OpeningSection></OpeningSection>

		<section class="title-section">
			<SectionTitle
				title="Benford's Law Explainer"
				subtitle="An exploration of how real-world data often deviates from randomness."
			></SectionTitle>

			<p>
				So what is Benford's Law and how does it magically govern the distributions of datasets in
				the wild? The basic principle of this law is that the leading digit of numbers in a dataset
				are more frequently smaller going to be small.
			</p>

			<p>“How small”, you ask? Well the math behind the exact probability of a leading digit is:</p>

			<FormulaBox formula="P(d) = \\log_10(d + 1) - \\log_10(d)"></FormulaBox>

			<p>
				where d is the digit we want to find the probability of. So essentially this boils down to
				the difference between the logarithm of the next digit and that of the current digit.
			</p>

			<p>When graphed, this formula produces the following distribution:</p>

			<div class="placeholder h-100">Graph of Benford's Law Distribution</div>

			<p>
				In an even distribution we would expect each to have a probability of 11.11%, but in
				practice Benford's law puts the odds of a leading digit of 1 to be 30.1% - almost three
				times more likely! Additionally, you are more than 6 times more likely to find a digit with
				a leading digit of 1 than a 9!
			</p>
		</section>

		<section class="deep-dive">
			<SectionTitle title="An Explanation"></SectionTitle>

			<p>
				There are several explanations for this, some more mathematically involved than the others.
				But I want to stick to a more intuitive explanation for Benford’s Law. Many real-world
				examples of Benford's Law are affected by multiplicative growth - e.g. money compounds,
				populations change exponentially with each generation, prices are influenced by a percentage
				of inflation, etc.
			</p>

			<p>
				What we find in multiplicative growth is that the leading digit tends to stick around at
				lower values for a lot longer than digits on the higher end of the range. For example,
				suppose you deposit 100 dollars in a bank which gives you a [questionably generous] [10% -
				dropdown to change value] interest per year. This is what the next 100 years would look
				like.
			</p>

			<div class="placeholder h-100">grid of 100 values with the leading digits highlighted</div>
			<div class="placeholder h-40">corresponding leading digits distribution</div>

			<p>
				As you can see in the range [100, … 10 digits ] multiplying by [x] generates a bunch of 1s,
				2s but largely skips over the larger digits.
			</p>
		</section>

		<section class="deep-dive">
			<SectionTitle title="A Deeper Dive"></SectionTitle>

			<p>
				Here are a couple more examples where Benford’s law holds true in the wild. Most importantly
				I need to figure out how to segue into the whole "let's look at other datasets that will
				surely make you start to understand that this is a thing" bit.
			</p>

			<div class="placeholder h-100 flex w-full !max-w-none flex-col items-center justify-center">
				<h2>Explorer showing different datasets and how closely they obey Benford's Law</h2>
			</div>
		</section>

		<section class="deep-dive">
			<SectionTitle title="Limitations" description="Where Benford' Law starts to fall apart"
			></SectionTitle>

			<p>
				While the previous examples showed you how well this works in practice, but there are a few
				exceptions to the rule. Benford’s law generally applies to data that fit some of the
				following guidelines:
			</p>

			<ul class="list-inside list-disc">
				<li class="">Quantitative data.</li>
				<li class="">Data that are measured rather than assigned.</li>
				<li class="">Ranges over orders of magnitudes.</li>
				<li class="">Not artificially restricted by minimums or maximums.</li>
				<li class="">Mixed populations.</li>
				<li class="">Larger datasets are better.</li>
			</ul>

			<p>
				So does this always hold true? Not really - there are a few key things we need to look out
				for when trying to check for Benford’s law. Particularly, this only applies to quantitative
				data that is measured rather than assigned.
			</p>

			<p>
				Phone numbers in a state wouldn’t follow Benford’s law because being an assigned (and not
				“measured”), they would simply run down their list of available numbers causing numbers to
				be assigned with equal probabilities. Additionally they may even have a fixed area code as
				the prefix, further throwing off the leading digit distribution.
			</p>

			<div class="placeholder flex h-40 w-full !max-w-none flex-col items-center justify-center">
				<h2>Graphic Explaining assigned values and Benford's Law</h2>
			</div>

			<p>
				Another requirement is that the numerical values should span several ranges of magnitude. A
				good rule of thumb is that it should span at least 3 ranges of magnitude (eg. 1 to 1000 ie,
				10^0 to 10^3) - in general the more orders of magnitude, the more pronounced the effect is.
			</p>
			<p>
				You might have noticed that a column I routinely left out in all the datasets is the year -
				it has a very limited range in most datasets and it's not a naturally occurring “measured”
				value which grows exponentially.
			</p>

			<div class="placeholder flex h-40 w-full !max-w-none flex-col items-center justify-center">
				<h2>All columns with years and dates</h2>
			</div>
		</section>

		<section class="deep-dive">
			<SectionTitle title="Applications" description="So what can I do with this?"></SectionTitle>

			<p>
				Naturally occurring datasets which fit the above criteria can be expected to have their
				first digits follow Benford’s Law. The key word being “naturally occurring” here -
				fabricated or randomly generated data will often not follow this principle.
			</p>

			<p>
				This leads to it often being applied in fraud detection. From fake election data to
				accounting fraud, Benford’s Law is applied by testing the first digits of the data.
			</p>

			<div class="placeholder h-100 flex w-full !max-w-none flex-col items-center justify-center">
				<h2>Examples of fraud detection</h2>
			</div>

			<p>
				Remember that while it is helpful, this is by no means a sure way to detect manipulation, it
				is merely indicative of foul play.
			</p>
		</section>
	</div>

	<div slot="background" class="relative z-50">
		<div class="dialog-box-container flex h-screen w-full items-end justify-center pb-3">
			<div class="dialog-box border-[1px] bg-white opacity-100">
				CURRENTLY IN SECTION: {index} - PROGRESS: {progress?.toFixed(2)}
			</div>
		</div>
	</div>
</Scroller>
