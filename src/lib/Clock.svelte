<script>
	import { onMount } from 'svelte';

	let time = new Date();

	// these automatically update when `time`
	// changes, because of the `$:` prefix
	$: hours = time.getHours();
	$: minutes = time.getMinutes();
	$: seconds = time.getSeconds();

	onMount(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<!-- ------------------ markup ----------------- -->
<svg viewBox="-50 -50 100 100">
	<circle class="frame" r="49"/>

	<circle class="clock-face" r="47" />

	<text class="txt" dominant-baseline="middle" y="12">squizzee</text>
	<!-- markers -->
	{#each [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55] as minute}
		<line class="major" y1="38" y2="45" transform="rotate({30 * minute})" />

		{#each [1, 2, 3, 4] as offset}
			<line class="minor" y1="42" y2="45" transform="rotate({6 * (minute + offset)})" />
		{/each}
	{/each}

	<!-- hour hand -->
	<line class="hour" y1="2" y2="-23" transform="rotate({30 * hours + minutes / 2})" />

	<!-- minute hand -->
	<line class="minute" y1="4" y2="-31" transform="rotate({6 * minutes + seconds / 10})" />

	<!-- second hand -->
	<g transform="rotate({6 * seconds})">
		<line class="second" y1="10" y2="-33" />
		<line class="second-counterweight" y1="10" y2="2" />
	</g>
</svg>

<!-- ------------------ style ----------------- -->
<style>
	svg {
		width: 35%;
		height: 35%;
	}

	.frame {
		fill:rgba(0, 0, 0, 0.2);
	}

	.clock-face {
		fill: rgba(255, 255, 255, 0.917);
	}

	.minor {
		stroke: rgb(130, 128, 128);
		stroke-width: 0.5;
	}

	.major {
		stroke: #333;
		stroke-width: 1;
	}

	.hour {
		stroke: rgb(73, 73, 73);
		stroke-width: 1.4;
	}

	.minute {
		stroke: rgb(73, 73, 73);
		stroke-width: 0.9;
	}

	.second,
	.second-counterweight {
		stroke: var(--red);
	}

	.second-counterweight {
		stroke-width: 3;
	}

	svg .txt {
		font-size: 5px;
		text-anchor: middle;
	}
</style>
