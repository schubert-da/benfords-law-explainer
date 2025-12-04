<script>
	import SectionTitle from '$components/common/SectionTitle.svelte';
</script>

<section class="methodology">
	<SectionTitle title="Methodology"></SectionTitle>

	<p>
		<span class="font-semibold">The Data</span>: The bulk of the data was used from
		<a href="https://ourworldindata.org/" target="_blank">Our World in Data</a> and their Grapher
		Chart API. For a random selection of datasets, I used a python script to select featured
		datasets on OWID's data page and then pull in the actual data via their API. In total 139
		columns, from 41 datasets were analysed and charted in some capacity throughout the project. The
		proportion plot example uses data from National Sample Surveys, National Statistics Office via
		<a href="https://www.dataforindia.com/" target="_blank">Data For India</a>.
	</p>

	<p>
		<span class="font-semibold">Benford's Law Analysis</span>: Every column in the previous
		collection was tested for Benford's Law on both its first digits and last digits (although this
		was not included in the explainer). To mathematically test how close the data was to Benford's
		expected distribution, I used the Chi-Squared Goodness of Fit test. However due to large sample
		sizes in our datasets, the Chi-Squared test often indicated significant differences even when
		the distributions visually appeared close.
	</p>

	<p>
		I then moved on to using Mean Absolute Deviation (MAD), with <a
			href="https://nigrini.com/benfords-law/"
			target="_blank">Nigrini</a
		>'s thresholds as a baseline for conformity. While this worked better than Chi-Squared, there
		were still quite a few datasets which looked close but had high MAD values. So I ultimately
		decided to visualize each of the datasets and let the reader decided if "smaller leading digits
		do occur more frequently than larger ones".
	</p>

	<p>
		<span class="font-semibold">Development:</span> This explainer was built using Sveltekit. All of
		the code used to scrape and analyse the data are publicly available on
		<a href="https://github.com/schubert-da/benfords-law-explainer" target="_blank">GitHub</a>. I am
		still in the process of cleaning up the codebase (said every dev ever...), but rest assured that
		all the frontend and analysis code is available there.
	</p>

	<p>
		<span class="font-semibold">AI Usage:</span> In general I use coding Github Copilot as a coding assistant
		to speed through the boilerplate parts of the code and analysis. No LLMs were used in the writing
		of this text content or research and analysis.
	</p>

	<p class="mx-auto text-center text-lg opacity-90">
		P.S. I am by no means a statistics expert, I just get easily distracted by pointless math. If
		you spot any issues feel free to reach out to me on any of my socials!
	</p>

	<p class="mx-auto text-center text-lg opacity-90">
		Schubert de Abreu | <a href="https://schubertcreates.xyz/" target="_blank">Personal site</a> |
		<a href="https://bsky.app/profile/schubert-da.bsky.social" target="_blank">BlueSky</a> |
		<a href="https://x.com/schubertda1" target="_blank">Twitter</a> |
		<a href="https://www.linkedin.com/in/schubert-de-abreu-47a56037/" target="_blank">LinkedIn</a>
	</p>
</section>
