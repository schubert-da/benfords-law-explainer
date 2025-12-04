<script>
	import DialogBox from '$components/DialogBox/DialogBox.svelte';
	import OpeningSection from '$components/OpeningSection/OpeningSection.svelte';
	import DeepDiveSection from '$components/sections/DeepDiveSection.svelte';
	import ExplanationSection from '$components/sections/ExplanationSection.svelte';
	import HowToSection from '$components/sections/HowToSection.svelte';
	import LimitationsSection from '$components/sections/LimitationsSection.svelte';
	import TitleSection from '$components/sections/TitleSection.svelte';
	import SectionTitle from '$lib/components/common/SectionTitle.svelte';
	import FormulaBox from '$lib/components/FormulaBox.svelte';
	import Scroller from '@sveltejs/svelte-scroller';
	import { scrollerState } from '$utils/stores';

	// params for scroller
	let count;
	let index;
	let offset;
	let progress;
	let top = 0;
	let threshold = 0.4;
	let bottom = 0.9;
</script>

<Scroller
	{top}
	{threshold}
	{bottom}
	bind:count
	bind:index={$scrollerState.index}
	bind:offset
	bind:progress={$scrollerState.progress}
>
	<div slot="foreground" class="pb-50 relative z-10">
		<OpeningSection></OpeningSection>

		<TitleSection></TitleSection>

		<ExplanationSection></ExplanationSection>

		<HowToSection></HowToSection>

		<DeepDiveSection></DeepDiveSection>

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

	<div slot="background" class="relative z-50"></div>
</Scroller>
