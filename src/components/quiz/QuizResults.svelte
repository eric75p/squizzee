<!-- ******************** script ***************** -->
<script>
	// -------------------------------------- export
	export let score = 12;
	export let nbrOfQuestions = 20;
	export let average = 55;

	// -------------------------------------- var
	export let successRate = Math.round((score / nbrOfQuestions) * 100);
	export let color = 'text-primary';

	// -------------------------------------- processColor
	function processColor() {
		if (successRate < 25) {
            color = 'text-error'
		} else if (successRate < 50) {
            color = 'text-warning'
		} else if (successRate < 75) {
            color = 'text-info'
		} else {
            color = 'text-success'
        }
	}
    processColor()
</script>

<!-- ******************** markup ***************** -->
<div class="shadow stats stats-vertical mb-5">
	<div class="stat flex flex-col justify-center items-center">
		<div class="stat-title">Bonnes réponses</div>
		<div class="stat-value">{score}</div>
		<div class="stat-desc">sur un total de {nbrOfQuestions}</div>
	</div>

	<div class="stat flex flex-col justify-center items-center">
		<div class="stat-title mb-2 ">Taux de réussite</div>
		<div class={`radial-progress ${color}`} style={`--value:${successRate}`}>{successRate}%</div>
	</div>

	<div class="stat flex flex-col justify-center items-center">
		<div class="stat-title mb-2">Moyenne des utilisateurs</div>
		<div class="radial-progress" style={`--value:${average}`}>{average}%</div>
	</div>
</div>
