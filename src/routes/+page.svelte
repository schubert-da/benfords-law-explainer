<script>
	import OpeningSection from '$components/OpeningSection/OpeningSection.svelte';
	import ExplanationSection from '$components/sections/ExplanationSection.svelte';
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

		<ExplanationSection></ExplanationSection>

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
