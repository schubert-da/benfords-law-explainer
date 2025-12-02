<script>
	import DialogNavbar from './DialogNavbar.svelte';
	import { diaglogBoxContent } from '$utils/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		diaglogBoxContent.set(DialogNavbar);
	});
</script>

<div class="dialog-box-container flex h-screen w-full items-end justify-center pb-3">
	<!-- <div class="dialog-box border-[1px] bg-white opacity-100">
		CURRENTLY IN SECTION: {index} - PROGRESS: {progress?.toFixed(2)}
	</div> -->
	<svelte:component this={$diaglogBoxContent} />
</div>
