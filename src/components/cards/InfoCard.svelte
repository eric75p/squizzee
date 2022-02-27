<!-- ---------------- script ---------------- -->
<script lang="ts">
	// ---------------------------------------- export
	export let title = 'Titre';
	export let buttonLabel = 'label';
	export let text_color = 'text-warning';
	export let buttonClick = {};
	export let buttonDisable: boolean = false;
	export let buttonVisible = true;

	// ---------------------------------------- var
	let disabled;
	$: {
		if (buttonDisable) {
			disabled = 'btn-disabled text-slate-500';
		} else {
			disabled = '';
		}
	}
</script>

<!-- ---------------- markup ---------------- -->
<div class={`card w-96 shadow-xl align-middle bg-base-300`}>
	<div class="card-body">
		<h2 class={`card-title ${text_color}`}>{title}</h2>
		<div class=""><slot /></div>
		{#if buttonVisible}
			<div class="justify-end card-actions mt-5">
				<button on:click={buttonClick} class={`btn btn-sm btn-outline ${disabled}`}>
					{buttonLabel}</button
				>
			</div>
		{/if}
	</div>
</div>
