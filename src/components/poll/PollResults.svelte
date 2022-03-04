<!-- ***************** script ***************** -->
<script lang="ts">
	// -------------------------------------- children
	import CardPollResult from './CardPollResult.svelte';

	// -------------------------------------- export
	export let poll: any;
</script>

<!-- ***************** markup ***************** -->
<div>
	Résultats du sondage <span class="text-slate-500">(données générées aléatoirement)</span>
	{#each poll.questions as question}
		<CardPollResult {question} />
	{/each}
</div>
