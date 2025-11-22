<script>
	export let title;
	export let subtitle;
</script>

<div class="section-title flex w-full flex-col items-center gap-2 text-center">
	<h2 class="text-[42px] font-bold">{title}</h2>
	{#if subtitle}
		<p class="max-w-[30ch] text-balance">{subtitle}</p>
	{/if}
</div>
