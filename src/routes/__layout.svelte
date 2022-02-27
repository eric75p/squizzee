<!-- ------------------ script ---------------------- -->
<script lang="ts">
	// --------------------------------------- import
	import '../app.css';
	// import '../app.postcss';

	// --------------------------------------- children
	import NavBar from '../components/header/menu/NavBar.svelte';
	import Footer from '../components/footer/Footer.svelte';
</script>

<!-- ------------------ head ---------------------- -->
<svelte:head>
	<title>squizzee</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<!-- ------------------ markup ---------------------- -->
<div class="max-w-6xl mx-auto shadow-xl drawer rounded-box">
	<NavBar>
		<main>
			<slot />
		</main>
		<Footer />
	</NavBar>
</div>
