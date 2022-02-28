<!-- ******************** module ***************** -->
<script context="module">
/* 	export async function load({ fetch }) {
		const uri = '/api/sampleQuiz';
		const resp = await fetch(uri);

		if (resp.ok) {
			const quiz = await resp.json();
			return {
				props: {
					quiz: quiz
				}
			};
		}
		return {
			status: resp.status,
			error: new Error('Could not fetch the data from ' + uri)
		};
	} */
</script>

<!-- ******************** script ***************** -->
<script lang="ts">
	// --------------------------------------- import
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	// --------------------------------------- stores
	import { AppStore } from '../stores/AppStore';

	// --------------------------------------- children
/* 	import QuizButton from '../components/utils/QuizButton.svelte';
	import QuizResults from '../components/quiz/QuizResults.svelte'; */

	// ------------------------------------------ data
	export let survey;

	// --------------------------------------- quiz data
	let nbrOfQuestions;
	let currentQuestionIndex = 0;
	let score = 0;
	let quizVisible = true;
	let quizResultsVisible = false;
	//
	let question;
	let nbrOfAnswers;
	//
	let labels;
	let valids;
	let buttonColors = [];
	$: buttonColors;
	let selectedId;
	//
	let controlButtonLabel;
	// let controlButtonAction = processValidation;

	// --------------------------------------- onMount()
	onMount(() => {
		$AppStore.mainBarVisible = false;
		$AppStore.quizBarVisible = false;
		$AppStore.barTitle = "titre bidon";
	});

	// --------------------------------------- quit()
	function quit() {
		goto(`/`);
	}

</script>

<!-- ---------------- markup ---------------- -->
<section class="grid grid-cols-1 gap-4 p-5 place-items-center">
	Enquête de satisfaction
</section>
