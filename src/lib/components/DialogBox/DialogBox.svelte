<script>
	import DialogNavbar from './DialogNavbar.svelte';
	import ChartDetails from './ChartDetails.svelte';
	import { diaglogBoxContent } from '$utils/stores';
	import { onMount } from 'svelte';

	$: elementHeight = 150;
</script>

<div class="dialog-box-container flex h-screen w-full items-end justify-center pb-2">
	<div
		class="dialog-box pointer-events-none overflow-hidden rounded border-[1px] border-[#666] bg-white shadow-lg"
		style="height: {elementHeight}px;"
	>
		<div class="content-wrapper h-fit w-full" bind:clientHeight={elementHeight}>
			{#if $diaglogBoxContent && $diaglogBoxContent?.component !== null}
				<svelte:component this={$diaglogBoxContent?.component} />
			{:else}
				<DialogNavbar />
			{/if}
		</div>
	</div>
</div>

<style>
	.dialog-box {
		width: min(1100px, 90vw);
		transition: height 0.3s ease-in-out;
	}
</style>
