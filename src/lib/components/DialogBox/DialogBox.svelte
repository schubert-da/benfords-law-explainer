<script>
	import DialogNavbar from './DialogNavbar.svelte';
	import ChartDetails from './ChartDetails.svelte';
	import { diaglogBoxContent } from '$utils/stores';
	import { onMount } from 'svelte';

	$: elementHeight = 150;
	$: scrollY = 0;
	$: screenHeight = 500;
</script>

<svelte:window bind:scrollY bind:innerHeight={screenHeight} />

<div
	class="dialog-box pointer-events-none absolute left-1/2 z-50 -translate-x-1/2 -translate-y-[100%] overflow-hidden rounded border-[1px] border-[#666] bg-white shadow-lg"
	style="height: {elementHeight}px; top: {screenHeight + scrollY - 8}px; "
>
	<div class="content-wrapper h-fit w-full" bind:clientHeight={elementHeight}>
		{#if $diaglogBoxContent && $diaglogBoxContent?.component !== null}
			<svelte:component this={$diaglogBoxContent?.component} />
		{:else}
			<DialogNavbar />
		{/if}
	</div>
</div>

<style>
	.dialog-box {
		width: min(1100px, 90vw);
		transition: height 0.3s ease-in-out;
	}
</style>
