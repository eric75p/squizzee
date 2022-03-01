<!-- ****************** script **************** -->
<script>
	// ------------------------------------------------- export
	export let name = '';
	export let score;

	// ------------------------------------------------- var
	const masks = [
		'mask-half-1',
		'mask-half-2',
		'mask-half-1',
		'mask-half-2',
		'mask-half-1',
		'mask-half-2',
		'mask-half-1',
		'mask-half-2',
		'mask-half-1',
		'mask-half-2'
	];

	// ------------------------------------------------- processCheck()
	let checks = [];
	function processCheck() {
		for (let i = 0; i < 10; i += 0.5) {
			if ((i + 0.5 <=  score) && (score < i+1)) {
				checks.push(true);
			} else {
				checks.push(false);
			}
		}
	}
	processCheck();

	// ------------------------------------------------- processColor()
	let color;
	function processColor() {
		if (score < 1.5) {
			color = 'bg-red-500';
		} else if (score < 2) {
			color = 'bg-red-400';
		} else if (score < 2.5) {
			color = 'bg-orange-300';
		} else if (score < 2.5) {
			color = 'bg-orange-400';
		} else if (score < 3) {
			color = 'bg-yellow-400';
		} else if (score < 3.5) {
			color = 'bg-blue-400';
		} else if (score < 4) {
			color = 'bg-lime-500';
		} else if (score < 4.5) {
			color = 'bg-lime-400';
		} else {
			color = 'bg-green-500';
		}
	}
	processColor();
</script>

<!-- ****************** markup **************** -->
<div class="rating rating-md rating-half">
	{#each masks as mask, i}
		<input type="radio" {name} class={`${color} mask mask-star-2 ${mask}`} checked={checks[i]} />
	{/each}
	&nbsp; <div class="badge badge-outline">{score}</div>
	
</div>
