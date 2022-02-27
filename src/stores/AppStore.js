import { writable } from "svelte/store";
// ----------------------------------------------
export const AppStore = writable({
    "mainBarVisible": false,
    "quizBarVisible": false,
    "barTitle": "",
    "countdown": 10,
})
