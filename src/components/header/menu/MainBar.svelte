<script>
	// ------------------------------------------- children
	import ButtonMenu from './ButtonMenu.svelte';
	import Avatar from '../misc/Avatar.svelte';
	// ------------------------------------------- export
	export let handleClick;
</script>

<!-- ****************** script **************** -->

<!-- ****************** markup **************** -->
<div class="flex-none">
	<ButtonMenu action={handleClick} />
</div>
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
