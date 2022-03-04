<!-- ******************** module ***************** -->
<script context="module">
	export async function load({ fetch }) {
		const uri = '/api/samplePoll';
		const resp = await fetch(uri);

		if (resp.ok) {
			const poll = await resp.json();
			return {
				props: {
					poll: poll
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
	import PollResults from '../components/poll/PollResults.svelte';

	// ------------------------------------------ data
	export let poll: any;

	// ------------------------------------------ const
	const green_text = 'text-success';
	const gray_text = 'text-slate-400';

	// --------------------------------------- poll data
	let currentQuestionIndex = 0;
	let pollVisible = true;
	let pollResultsVisible = false;
	let results = [];

	// --------------------------------------- radio buttons
	let radioButtonValue: number;
	let radioButtonsVisible = false;
	let radioColors = [];
	$: {
		if (radioButtonValue >= 0 && radioButtonsVisible) {
			setControlButtonToNext();
		}
	}
	$: radioColors;
	$: {
		if (radioButtonsVisible) {
			radioColors = [];
			for (let i = 0; i < poll.questions[currentQuestionIndex].choices.length; i++) {
				if (radioButtonValue === i) {
					radioColors.push(green_text);
				} else {
					radioColors.push(gray_text);
				}
			}
		}
	}

	// --------------------------------------- check boxes
	let checkBoxesVisible = false;
	let checkedBoxes = [];
	let checkBoxesColors = [];
	let checBoxesStyles = [];
	$: checkBoxesColors;
	$: {
		if (checkBoxesVisible && currentQuestionIndex !== poll.questions.length) {
			checkBoxesColors = [];
			checBoxesStyles = [];
			for (let i = 0; i < poll.questions[currentQuestionIndex].choices.length; i++) {
				if (checkedBoxes.includes(i)) {
					checkBoxesColors.push(green_text);
					checBoxesStyles.push('checkbox-accent');
				} else {
					checkBoxesColors.push(gray_text);
					checBoxesStyles.push('');
				}
			}
		}
	}
	$: {
		if (checkBoxesVisible && currentQuestionIndex !== poll.questions.length) {
			if (
				checkedBoxes.length >= poll.questions[currentQuestionIndex].min &&
				checkedBoxes.length <= poll.questions[currentQuestionIndex].max
			) {
				setControlButtonToNext();
			} else {
				disableControlButton();
			}
		}
	}

	// --------------------------------------- control button
	let controlButtonLabel: String;
	let controlButtonAction: any;
	let buttonDisable: String;
	let controlButtonColor: String;

	// --------------------------------------- processQuit() - OK
	function processQuit() {
		goto(`/`);
	}

	// --------------------------------------- init() - OK
	function init() {
		$AppStore.mainBarVisible = false;
		$AppStore.quizBarVisible = false;
		$AppStore.surveyBarVisible = true;
		$AppStore.barTitle = poll.title;
		processFirstQuestion();
	}
	init();

	// --------------------------------------- initRadioQuestion() - OK
	function initRadioQuestion() {
		radioButtonsVisible = true;
		checkBoxesVisible = false;
		radioColors = [];
		for (let i = 0; i < poll.questions[currentQuestionIndex].choices.length; i++) {
			radioColors.push('text-white-400');
		}
		radioButtonValue = -1;
		disableControlButton();
	}

	// --------------------------------------- initCheckBoxesQuestion() - OK
	function initCheckBoxesQuestion() {
		checkedBoxes = [];
		radioButtonsVisible = false;
		checkBoxesVisible = true;
		disableControlButton();
	}

	// --------------------------------------- processFirstQuestion() < init() - OK
	function processFirstQuestion() {
		if (!poll.questions[currentQuestionIndex].multiple) {
			initRadioQuestion();
		} else {
			initCheckBoxesQuestion();
		}
	}

	// --------------------------------------- processNextQuestion()
	function processNextQuestion() {
		if(!poll.questions[currentQuestionIndex].multiple) {
			processRadioChoice();
		}
		else {
			processCheckBoxesChoice();
		}
		currentQuestionIndex += 1;
		if (currentQuestionIndex === poll.questions.length) {
			processPollResults();
		} else {
			if (!poll.questions[currentQuestionIndex].multiple) {
				initRadioQuestion();
			} else {
				initCheckBoxesQuestion();
			}
		}
	}

	// --------------------------------------- processRadioChoice() - OK
	function processRadioChoice() {
		results.push(radioButtonValue);
	}

	// --------------------------------------- processCheckBoxesChoice() - OK
	function processCheckBoxesChoice() {
		results.push(checkedBoxes);
	}

	// --------------------------------------- disableControlButton() - OK
	function disableControlButton() {
		controlButtonLabel = 'Valider';
		buttonDisable = 'btn-disabled';
		controlButtonColor = 'text-slate-500';
		controlButtonAction = undefined;
	}

	// --------------------------------------- setControlButtonToNext() - OK
	function setControlButtonToNext() {
		controlButtonLabel = 'Valider';
		buttonDisable = '';
		controlButtonColor = '';
		controlButtonAction = processNextQuestion;
	}

	// --------------------------------------- setControlButtonToQuit()
	function setControlButtonToQuit() {
		controlButtonLabel = 'Quitter';
		buttonDisable = '';
		controlButtonColor = '';
		controlButtonAction = processQuit;
	}

	// --------------------------------------- processPollResults()
		function processPollResults() {
		pollVisible = false;
		pollResultsVisible = true;
		controlButtonLabel = 'Quitter';
		controlButtonAction = processQuit;
	}
</script>

<!-- ---------------- markup ---------------- -->
<section class="grid grid-cols-1 gap-4 mt-5 place-items-center">
	{#if pollVisible}
		<!-- Question -->
		<div class="badge badge-lg">
			Question {`${currentQuestionIndex + 1}/${poll.questions.length}`}
		</div>

		<div class="alert shadow-lg">
			<div>
				<span class="text-xl">{poll.questions[currentQuestionIndex].text}</span>
			</div>
		</div>

		<!-- Radio Buttons -->
		{#if radioButtonsVisible}
			<table>
				{#each poll.questions[currentQuestionIndex].choices as choice, i}
					<tr
						><td>
							<input
								type="radio"
								name="radio-6"
								bind:group={radioButtonValue}
								class="radio checked:bg-success"
								value={i}
							/>
						</td><td>
							<span class={`label-text text-xl ml-3 ${radioColors[i]}`}>{choice}</span>
						</td></tr
					>
				{/each}
			</table>
		{/if}

		<!-- Check Boxes -->
		{#if checkBoxesVisible}
			<table>
				{#each poll.questions[currentQuestionIndex].choices as choice, i}
					<tr
						><td>
							<input
								type="checkbox"
								class={`checkbox ${checBoxesStyles[i]}`}
								bind:group={checkedBoxes}
								value={i}
							/>
						</td><td>
							<span class={`label-text text-xl ml-3 ${checkBoxesColors[i]}`}>{choice}</span>
						</td></tr
					>
				{/each}
			</table>
		{/if}
	{/if}

	{#if pollResultsVisible}
			<PollResults {poll}/>
	{/if}

	<!-- Control-->
	<div class="w-full border-t border-gray-500" />

	<button
		class={`btn btn-outline ${buttonDisable} ${controlButtonColor}`}
		on:click={controlButtonAction}>{controlButtonLabel}</button
	>
</section>
