<!-- ------------------ script ---------------------- -->
<script lang="ts">
	import { locale } from '../i18n/i18n-svelte';
	import logo from './logo.png';

	// ---------------------------------------- children
	import LocaleSwitcher from './LocaleSwitcher.svelte';
</script>

<!-- ------------------ markup ---------------------- -->
<header>
	<!-- ------------------ logo ---------------------- -->
	<a href="/{$locale}">
		<img src={logo} height="20" alt="squizzee" />
	</a>


	<LocaleSwitcher />
</header>
