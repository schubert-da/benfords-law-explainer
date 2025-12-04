import { writable } from "svelte/store";

export let diaglogBoxContent = new writable(null);
export let scrollerState = new writable({
    progress: 0,
    index: 0
});

export let chosenChart = new writable("barchart");