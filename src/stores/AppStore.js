import { writable } from "svelte/store";
// ----------------------------------------------
export const AppStore = writable({
    "mainBarVisible": false,
    "quizBarVisible": false,
    "surveyBarVisible": false,
    "timerVisible": true,
    "barTitle": "",
    "countdown": 10,
})
