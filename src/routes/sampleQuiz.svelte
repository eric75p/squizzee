<!-- ******************** module ***************** -->
<script context="module">
	export async function load({ fetch }) {
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
	}
</script>

<!-- ******************** script ***************** -->
<script lang="ts">
	// --------------------------------------- import
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	// --------------------------------------- stores
	import { AppStore } from '../stores/AppStore';

	// --------------------------------------- children
	import QuizButton from '../components/utils/QuizButton.svelte';
	import QuizResults from '../components/quiz/QuizResults.svelte';

	// ------------------------------------------ data
	export let quiz;
	let average = 55;

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
	let answerButtonDisabled = ''
	$: buttonColors;
	let selectedId;
	//
	let controlButtonColor: String;
	let controlButtonDisabled: String;
	let controlButtonLabel;
	let controlButtonAction = processValidation;

	// ----------------------------------- timer
	let timer;
	$: {
		if ($AppStore.countdown === 0) {
			if (timer) {
				clearInterval(timer);
				timer = null;
				selectedId = 100;
				controlButtonColor = '';
				controlButtonDisabled = '';
				processValidation();
			}
		}
	}

	// ----------------------------------- startTimer()
	function startTimer() {
		timer = setInterval(() => {
			$AppStore.countdown -= 1;
		}, 1000);
	}

	// ----------------------------------- stopTimer()
	function stopTimer() {
		if (timer) {
			clearInterval(timer);
			timer = null;
		}
	}

	// --------------------------------------- onMount()
	onMount(() => {
		$AppStore.mainBarVisible = false;
		$AppStore.quizBarVisible = true;
		$AppStore.surveyBarVisible = false;
		$AppStore.barTitle = quiz.title;
	});

	// --------------------------------------- quit()
	function quit() {
		goto(`/`);
	}

	// --------------------------------------- action()
	function action(buttonId) {
		selectedId = buttonId;
		let tab = [];
		for (let i = 0; i < nbrOfAnswers; i++) {
			if (buttonId === i) {
				tab.push('alert-info');
			} else {
				tab.push('');
			}
		}
		buttonColors = tab;
		controlButtonColor = '';
		controlButtonDisabled = '';
	}

	// --------------------------------------- processButtons()
	function processButtons() {
		let tab = [];
		for (let i = 0; i < nbrOfAnswers; i++) {
			if (valids[i]) {
				tab.push('alert-success');
			} else if (i === selectedId && !valids[selectedId]) {
				tab.push('alert-error');
			} else {
				tab.push('');
			}
		}
		buttonColors = tab;
	}

	// --------------------------------------- init() -- (1)
	function init() {
		console.clear();
		nbrOfQuestions = quiz.questions.length;
		initQuestion();
		initButtons();
		$AppStore.timerVisible = true;
	}
	init();

	// --------------------------------------- initQuestion()
	function initQuestion() {
		question = quiz.questions[currentQuestionIndex];
		nbrOfAnswers = quiz.questions[currentQuestionIndex].answers.length;
		let tab = [];
		for (let i = 0; i < nbrOfAnswers; i++) {
			tab.push(question.answers[i].text);
		}
		labels = tab;
		tab = [];
		for (let i = 0; i < nbrOfAnswers; i++) {
			tab.push(question.answers[i].valid);
		}
		valids = tab;
		controlButtonAction = processValidation;
		controlButtonColor = 'text-slate-500';
		controlButtonDisabled = 'btn-disabled';
		$AppStore.countdown = quiz.questions[currentQuestionIndex].duration;
		answerButtonDisabled = ''
		startTimer();
	}

	// --------------------------------------- initButtons()
	function initButtons() {
		let tab = [];
		for (let i = 0; i < nbrOfAnswers; i++) {
			tab.push('');
		}
		buttonColors = tab;
		controlButtonLabel = 'Valider';
	}

	// --------------------------------------- processValidation()
	function processValidation() {
		if (selectedId != undefined) {
			answerButtonDisabled = 'btn-disabled'
			stopTimer();
			processButtons();
			controlButtonLabel = 'Suivant';
			controlButtonAction = processNextQuestion;
			if (valids[selectedId]) {
				score++;
			}
		}
	}

	// --------------------------------------- processNextQuestion()
	function processNextQuestion() {
		currentQuestionIndex += 1;
		if (currentQuestionIndex === nbrOfQuestions) {
			quizResults();
		} else {
			initButtons();
			initQuestion();
		}
	}

	// --------------------------------------- quizResults()
	function quizResults() {
		$AppStore.timerVisible = false;
		controlButtonLabel = 'Quitter';
		controlButtonAction = quit;
		quizVisible = false;
		quizResultsVisible = true;
	}
</script>

<!-- ---------------- markup ---------------- -->
<section class="grid grid-cols-1 gap-4 p-5 place-items-center">
	{#if quizVisible}
		<!-- Question -->
		<div class="badge badge-lg">Question {`${currentQuestionIndex + 1}/${nbrOfQuestions}`}</div>

		<h1 class="text-xl">{question.text}</h1>

		<!-- Answers -->
		<div class="p-4">
			{#each labels as label, id}
				<QuizButton {label} buttonId={id} {action} color={buttonColors[id]} disabled={answerButtonDisabled}/>
			{/each}
		</div>
	{/if}

	{#if quizResultsVisible}
		<QuizResults {score} {nbrOfQuestions} {average} />
	{/if}
	<div class="w-full border-t border-gray-500" />

	<!-- Control-->
	<button
		class={`btn btn-outline ${controlButtonDisabled} ${controlButtonColor}`}
		on:click={controlButtonAction}>{controlButtonLabel}</button
	>
</section>
