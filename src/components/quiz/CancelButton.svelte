<!-- ****************** script **************** -->
<script>
	// ------------------------------------------- import
	import { goto } from '$app/navigation';


	// ------------------------------------- cancelAction()
	function cancelAction() {
		console.log('cancelAction()');
		goto(`/`);
	}
</script>

<!-- ****************** markup **************** -->
<!-- Cancel Button -->
<label for="my-modal" class="btn btn-circle modal-button bg-slate-700">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="h-6 w-6"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		><path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M6 18L18 6M6 6l12 12"
		/></svg
	>
</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal" class="modal-toggle" />
<div class="modal">
	<div class="modal-box">
		<h3 class="font-bold text-lg">Voulez-vous quitter ?</h3>
		<div class="modal-action">
			<label for="my-modal" on:click={cancelAction} class="btn">Oui</label>
			<label for="my-modal" class="btn">Non</label>
		</div>
	</div>
</div>
