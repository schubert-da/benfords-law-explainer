import { diaglogBoxContent } from "./stores.js"

export const benfordProbabilities = [0.301, 0.176, 0.125, 0.097, 0.079, 0.067, 0.058, 0.051, 0.046]

export function resetDialogBox() {
    diaglogBoxContent.set(null)
}