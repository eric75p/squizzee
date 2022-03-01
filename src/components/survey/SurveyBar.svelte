<!-- ****************** script **************** -->
<script>

	// --------------------------------------- stores
	import { AppStore } from '../../stores/AppStore';

	// ------------------------------------------- children
	import CancelButton from '../quiz/CancelButton.svelte';


</script>

<!-- ****************** markup **************** -->
<!-- left -->
<div class="flex-none">
	<CancelButton />
</div>

<!-- middle -->
<div class="flex-1 px-2 mx-2 ">
	<span class="text-lg font-bold text-slate-300">{$AppStore.barTitle}</span>
</div>

