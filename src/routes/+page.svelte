<script>
	import OpeningSection from '$components/OpeningSection/OpeningSection.svelte';
	import LimitationsSection from '$components/sections/LimitationsSection.svelte';
	import TitleSection from '$components/sections/TitleSection.svelte';
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

		<TitleSection></TitleSection>

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

		<section>
			<SectionTitle title="Reading the charts"></SectionTitle>
			<div class="placeholder h-100 flex w-full !max-w-none flex-col items-center justify-center">
				<h2>Carousel showing how to work the charts</h2>
			</div>
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

		<LimitationsSection></LimitationsSection>

		<section class="applications">
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
