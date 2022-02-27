<!-- ****************** script **************** -->
<script>
	// --------------------------------------- stores
	// import { AppStore } from '../../../stores/AppStore';

	// --------------------------------------- var
	let css_class = `link link-hover`;

	// ------------------------------------------- children
	import Separator from '../misc/Separator.svelte';

	// ------------------------------------------- import
	import { goto } from '$app/navigation';

	// ------------------------------------------- export
	export let handleClick;

	// ------------------------------------------- changePage()
	function changePage(page) {
		handleClick();
		goto(`/${page}`);
	}
</script>

<!-- ****************** markup **************** -->
<!-- MENU -->
<div class="drawer-side">
	<label for="my-drawer" class="drawer-overlay" />
	<ul class="py-4 overflow-y-auto menu w-60 bg-base-100">
		<div class="ml-2">
			<button class="mb-5 bg-transparent" on:click={handleClick}>
				<svg
					class="swap-on fill-current"
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 512 512"
					><polygon
						points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
					/></svg
				>
			</button>
			<li>
				<a href=" " on:click={() => changePage('')}>Accueil</a>
			</li>
			<Separator />
			<li><a class="text-slate-500" href=" " on:click={() => changePage('/')}>Mon compte</a></li>
			<Separator />
			<li><a class="text-slate-500" href=" " on:click={() => changePage('/')}>Enquêtes</a></li>
			<li>
				<a class="text-slate-500" href=" " on:click={() => changePage('/')}>Créer une enquête</a>
			</li>
			<Separator />
			<li><a class="text-slate-500" href=" " on:click={() => changePage('/')}>Quiz</a></li>
			<li><a class="text-slate-500" href=" " on:click={() => changePage('/')}>Créer un quiz</a></li>
			<Separator />
			<li><a class="text-slate-500" href=" " on:click={() => changePage('/')}>Sondages</a></li>
			<li>
				<a class="text-slate-500" href=" " on:click={() => changePage('/')}>Créer un sondage</a>
			</li>
			<Separator />
			<li>
				<a href=" " on:click={() => changePage('news')}
					>Les news</a
				>
			</li>
		</div>
	</ul>
</div>
