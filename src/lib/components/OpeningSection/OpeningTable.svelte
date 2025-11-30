<script>
	export let data;

	$: dataRows = data?.data.slice(0, 7);
	$: headers = dataRows.length ? Object.keys(data.data[0]) : [];

	const COL_WIDTH = 180;
</script>

<div
	class="grid-table shadow-lg"
	style:--num-cols={headers.length}
	style:--col-width="{COL_WIDTH}px"
>
	<!-- Column Headers -->
	{#each headers as col}
		<div
			class="header bg-scale-diverging-0 overflow-hidden overflow-ellipsis whitespace-nowrap px-2 py-1 text-lg font-semibold uppercase text-white"
			style:max-width="{COL_WIDTH}px"
		>
			{col}
		</div>
	{/each}

	<!-- Data Rows -->
	{#each dataRows as row, rowIndex}
		{#each headers as col}
			<div
				class="cell overflow-hidden overflow-ellipsis whitespace-nowrap px-2 py-1 text-lg"
				class:even-row={rowIndex % 2 === 0}
			>
				{row[col]}
			</div>
		{/each}
	{/each}
</div>

<style>
	.grid-table {
		display: grid;
		grid-template-columns: repeat(var(--num-cols), minmax(0, var(--col-width)));
		justify-content: center;
		border-collapse: collapse;
		overflow: hidden;
		gap: 0px;

		width: fit-content;
		margin: 0 auto;
		border: 1px solid #555;
		border-radius: 8px;
	}

	.cell.even-row {
		background-color: #eeeeee;
	}
</style>
