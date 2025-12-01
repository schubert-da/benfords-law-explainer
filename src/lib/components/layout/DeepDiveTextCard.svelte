<script>
	export let text;
	export let maxwWidth = 400;
</script>

<div
	class="chart-container compact-chart flex h-full flex-col items-center justify-center rounded-2xl border-[1px] border-[#ccc] px-4 py-4"
	style:max-width="{maxwWidth}px"
>
	<p class="text-lg">
		{@html text}
	</p>
</div>
