<!-- ******************** module ***************** -->
<script context="module">
	export async function load({ fetch }) {
		const uri = '/api/sampleSurvey';
		const resp = await fetch(uri);

		if (resp.ok) {
			const survey = await resp.json();
			return {
				props: {
					survey: survey
				}
			};
		}
		return {
			status: resp.status,
			error: new Error('Could not fetch the data from ' + uri)
		};
	}
</script>

<!-- ******************** script ***************** -->
<script lang="ts">
	// --------------------------------------- import
	import { goto } from '$app/navigation';

	// --------------------------------------- stores
	import { AppStore } from '../stores/AppStore';

	// --------------------------------------- children
	import SurveyResults from '../components/survey/SurveyResults.svelte';

	// ------------------------------------------ data
	export let survey;

	// --------------------------------------- survey data
	let labels = ['Indiquez votre choix', 'Mauvais', 'Passable', 'Moyen', 'Bon', 'Très bon'];
	let nbrOfQuestions: number;
	let currentQuestionIndex = 0;
	let surveyVisible = true;
	let surveyResultsVisible = false;
	//
	let question: any;
	let score = 0;
	//
	let controlButtonLabel: String;
	let controlButtonAction;
	let buttonDisable: String;
	let controlButtonColor: String;
	//
	let badgeColor: String;
	let starColor: String;
	$: {
		if (score === 0) {
			starColor = 'bg-slate-200';
		} else if (score === 1) {
			starColor = 'bg-error';
		} else if (score === 2) {
			starColor = 'bg-warning';
		} else if (score === 3) {
			starColor = 'bg-info';
		} else if (score === 4) {
			starColor = 'bg-lime-400';
		} else {
			starColor = 'bg-green-500';
		}
		if (score != 0) {
			controlButtonLabel = 'Valider';
			buttonDisable = '';
			controlButtonColor = '';
		}
	}

	// -------------------------------------- mockScores()
	let scores = [];
	// sera par la suite calculé via la base de données
	function mockScores() {
		for (let i = 0; i < 5; i++) {
			let score = 1 + Math.random() * 4;
			score = Math.round(score * 10) / 10;
			scores.push(score);
		}
	}
	mockScores();

	// --------------------------------------- quit()
	function quit() {
		goto(`/`);
	}

	// --------------------------------------- init()
	function init() {
		nbrOfQuestions = survey.questions.length;
		initQuestion();
		$AppStore.mainBarVisible = false;
		$AppStore.quizBarVisible = false;
		$AppStore.surveyBarVisible = true;
		$AppStore.barTitle = survey.title;
	}
	init();

	// --------------------------------------- initQuestion()
	function initQuestion() {
		score = 0;
		question = survey.questions[currentQuestionIndex];
		controlButtonAction = processNextQuestion;
		controlButtonLabel = 'Valider';
		buttonDisable = 'btn-disabled';
		controlButtonColor = 'text-slate-500';
		badgeColor = '';
	}

	// --------------------------------------- processNextQuestion()
	function processNextQuestion() {
		currentQuestionIndex += 1;
		if (currentQuestionIndex === nbrOfQuestions) {
			processSurveyResults();
		} else {
			scores.push(score);
			initQuestion();
		}
	}

	// --------------------------------------- processSurveyResults()
	function processSurveyResults() {
		surveyVisible = false;
		surveyResultsVisible = true;
		controlButtonLabel = 'Quitter';
		controlButtonAction = quit;
	}
</script>

<!-- ---------------- markup ---------------- -->
<section class="grid grid-cols-1 gap-4 mt-5 place-items-center">
	{#if surveyVisible}
		<!-- Question -->
		<div class="badge badge-lg">Question {`${currentQuestionIndex + 1}/${nbrOfQuestions}`}</div>

		<div class="alert shadow-lg">
			<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="stroke-current flex-shrink-0 h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
						/></svg
					>
					<span class="text-xl">{question.text}</span>
			</div>
		</div>

		<!-- Answers -->
		<div class="p-4">
			<div class="rating">
				<input
					type="radio"
					bind:group={score}
					name="scoops"
					class={`mask mask-star ${starColor}`}
					value={1}
				/>
				<input
					type="radio"
					bind:group={score}
					name="scoops"
					class={`mask mask-star ${starColor}`}
					value={2}
				/>
				<input
					type="radio"
					bind:group={score}
					name="scoops"
					class={`mask mask-star ${starColor}`}
					value={3}
				/>
				<input
					type="radio"
					bind:group={score}
					name="scoops"
					class={`mask mask-star ${starColor}`}
					value={4}
				/>
				<input
					type="radio"
					bind:group={score}
					name="scoops"
					class={`mask mask-star ${starColor}`}
					value={5}
				/>
			</div>
		</div>
		<div class={`badge ${badgeColor} gap-2`}>
			{labels[score]}
		</div>
	{/if}

	{#if surveyResultsVisible}
		<SurveyResults attendees={37} {scores} questions={survey.questions} />
	{/if}

	<!-- Control-->
	<div class="w-full border-t border-gray-500" />

	<button
		class={`btn btn-outline ${buttonDisable} ${controlButtonColor}`}
		on:click={controlButtonAction}>{controlButtonLabel}</button
	>
</section>
