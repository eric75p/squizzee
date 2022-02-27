<!-- ****************** script **************** -->
<script>

	// --------------------------------------- stores
	import { AppStore } from '../../stores/AppStore';

	// ------------------------------------------- children
	import CancelButton from './CancelButton.svelte';
	import Timer from './Timer.svelte';


</script>

<!-- ****************** markup **************** -->
<!-- left -->
<div class="flex-none">
	<CancelButton />
</div>

<!-- middle -->
<div class="flex-1 px-2 mx-2 ">
	<span class="text-lg font-bold text-info">{$AppStore.barTitle}</span>
</div>

<!-- right -->
<div class="flex-none  px-2 mx-2 lg:flex">
	<Timer />
</div>
