<script>
	// --------------------------------------- import
	import { goto } from '$app/navigation';

	// ------------------------------------------- children
	import ButtonMenu from './ButtonMenu.svelte';
	/* 	import Avatar from '../misc/Avatar.svelte';
	 */

	// ------------------------------------------- export
	export let handleClick;
</script>

<!-- ****************** script **************** -->

<!-- ****************** markup **************** -->
<div class="flex-none">
	<ButtonMenu action={handleClick} />
</div>

<!-- Home button -->
<span on:click={() => goto(`/`)}>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="h-5 w-5"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		><path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
		/></svg
	>
</span>
<div class="flex-1 px-2 mx-2">
	<span class="text-lg font-bold text-sky-400">s</span>
	<span class="text-lg font-bold">quiz</span>
	<span class="text-lg  font-bold text-sky-400">zee</span>
</div>
<div class="mr-3">
	<img class="mask mask-circle" src="https://api.lorem.space/image/face?w=48" />
</div>

<!-- <div class="flex-none  px-2 mx-2 lg:flex">
	<Avatar letters="GB" />
</div> -->
