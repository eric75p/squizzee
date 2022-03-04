<!-- ***************** script ***************** -->
<script lang="ts">
	// -------------------------------------- export
	export let question: any;

	// -------------------------------------- children
	import ChoicePercent from './ChoicePercent.svelte';
	import PercentBadge from './PercentBadge.svelte';

	// -------------------------------------- buildMockData()
	let percents = [];
	function buildMockData() {
		if (question.multiple) {
			checkboxesMockData();
		} else {
			radioMockData();
		}
	}

	// -------------------------------------- radioMockData()
	function radioMockData() {
		let percent = Math.random() * 30;
		percents.push(percent);
		for (let i = 1; i < question.choices.length - 1; i++) {
			let total = 0;
			for (let j = 0; j < percents.length; j++) {
				total += percents[j];
			}
			percent = Math.random() * (100 - total);
			percents.push(percent);
		}
		// calcul du dernier élément
		let total = 0;
		for (let j = 0; j < percents.length; j++) {
			total += percents[j];
		}
		percents.push(100 - total);
	}

	// -------------------------------------- checkboxesMockData()
	function checkboxesMockData() {
		for (let i = 0; i < question.choices.length; i++) {
			percents.push(Math.random() * 100);
		}
	}
	buildMockData();
</script>

<!-- ***************** markup ***************** -->
<div>
	<div class="card bg-base-300 shadow-xl my-4">
		<div class="card-body">
			<h2 class="card-title">{question.text}</h2>

			<div class="overflow-x-auto">
				<!-- 				<table class="table w-full">
 -->
				<div class="grid grid-col-1">
					{#each question.choices as choice, i}
						<div>{choice}&nbsp;<PercentBadge value={percents[i]} /></div>
						<div class="mb-5"><ChoicePercent value={percents[i]} /></div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
