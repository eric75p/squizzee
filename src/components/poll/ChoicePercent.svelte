<!-- ***************** script ***************** -->
<script lang="ts">
	// -------------------------------------- export
	export let value;

	let color: String;
	$: {
		if(value < 25) {
			color = "progress-error"
		}
		else if (value < 50) {
			color = "progress-warning"
		}
		else if (value < 75) {
			color = "progress-info"
		}
		else {
			color = "progress-success"
		}
	}

	$: roundValue = Math.round(value);

</script>

<!-- ***************** markup ***************** -->
<progress class={`progress ${color} w-56`} value={roundValue} max="100"></progress>

