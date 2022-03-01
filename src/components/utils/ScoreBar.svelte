<!-- ****************** script **************** -->
<script>
	// ------------------------------------------------- export
	export let score;
	export let max;

	// ------------------------------------------------- processColor()
	let color;
	function processColor() {
		if (score <= 5 ) {
			color = 'progress-error';
		} else if (score <= 10) {
			color = 'progress-warning';
		} else if (score <= 14) {
			color = 'progress-info';
		} else if (score <= 17) {
			color = 'progress-accent';
		} else  {
			color = 'progress-success';
		}
	}
	processColor();
</script>

<!-- ****************** markup **************** -->
<progress class={`progress ${color} w-56`} value={score} max={max}></progress>
&nbsp;<div class="badge badge-outline">{score}/{max}</div>
