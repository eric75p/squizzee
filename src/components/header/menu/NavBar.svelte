<!-- ****************** script **************** -->
<script>
	// --------------------------------------- stores
	import {AppStore} from '../../../stores/AppStore';

	// ------------------------------------------- children
	import MainBar from './MainBar.svelte';
	import QuizBar from '../../quiz/QuizBar.svelte';
	import Menu from './LeftMenu.svelte';

	// ------------------------------------------- handleClick()
	let checked = '';
	function handleClick() {
		checked == 'checked' ? (checked = '') : (checked = 'checked');
	}
</script>

<!-- ****************** markup **************** -->
<input id="my-drawer" type="checkbox" class="drawer-toggle" bind:checked />

<div class="flex flex-col drawer-content">
	<div class={`w-full navbar text-neutral-content border-b-2 border-base-300`}>
		{#if $AppStore.mainBarVisible}
			<MainBar {handleClick} />
		{/if}
		{#if $AppStore.quizBarVisible}
			<QuizBar />
		{/if}
	</div>

	<!-- Page content -->
	<div class="container pt-6">
		<slot />
	</div>
</div>

<!--  Left Menu -->
<Menu {handleClick} />
