<!-- ******************** script ***************** -->
<script lang="ts">

	// -------------------------------------- children
	import Stars from "../utils/Stars.svelte"
	import ScoreBar from '../utils/ScoreBar.svelte';

	// -------------------------------------- export
	export let scores: any;
	export let questions: any;
	export let attendees: number
	export let startTime = "12/01/2022"

	// -------------------------------------- computeAverage()
 	let average = 5;
	function computeAverage() {
		let total = 0;
		for(let i=0; i<scores.length; i++) {
			total += scores[i]
		}
		total = total / scores.length
		average = Math.round(total * 4);
	}
	computeAverage()

</script>

<!-- ******************** markup ***************** -->


<div class="shadow stats stats-vertical mb-5">
	<div class="stat flex flex-col justify-center items-center bg-slate-800">
		<p>Moyenne des résultats de l’enquête</p>
		<p>Nombre de participants : {attendees}</p>
		<p>Depuis le : {startTime}</p>

	</div>
	<div class="stat flex flex-col justify-center items-center bg-slate-700">
		<div class="overflow-x-auto">
			<table class="table w-full">
				<!-- tbody -->
				<tbody>
					{#each questions as question, i}
						<tr>
							<td>{question.text}</td>
						</tr>
						<tr>
							<td><Stars score={scores[i]} name={`name-${i}`}/></td>
						</tr>
					{/each}

					<tr><td>Note globale &nbsp; <ScoreBar score={average} max={20}/></td></tr>
					<tr><td></td></tr>
				</tbody>
			</table>
		</div>
	</div>
</div>
