<!-- ------------------ script ---------------------- -->
<script lang="ts">
	import { page } from '$app/stores';
	import { setLocale, locale } from '../i18n/i18n-svelte';
	import type { Locales } from '../i18n/i18n-types';
	import { locales } from '../i18n/i18n-util';
	import { loadLocaleAsync } from '../i18n/i18n-util.async';
	import { replaceLocaleInUrl } from '../utils';

	const switchLocale = async (newLocale: Locales, updateHistoryState = true) => {
		if (!newLocale || $locale === newLocale) return;

		// load new dictionary from server
		await loadLocaleAsync(newLocale);

		// select locale
		setLocale(newLocale);

		// update `lang` attribute
		document.querySelector('html').setAttribute('lang', newLocale);

		if (updateHistoryState) {
			// update url to reflect locale changes
			history.pushState(
				{ locale: newLocale },
				'',
				replaceLocaleInUrl(location.pathname, newLocale)
			);
		}
	};

	// update locale when navigating via browser back/forward buttons
	const handlePopStateEvent = async ({ state }: PopStateEvent) => switchLocale(state.locale, false);

	// update locale when page store changes
	$: switchLocale($page.params.lang as Locales, false);
</script>

<!-- ------------------ markup ---------------------- -->
<svelte:window on:popstate={handlePopStateEvent} />

<!-- ------------------ lang dropdown ---------------------- -->
<div class="dropdown">
	<button class="btn btn-default dropdown-toggle" data-bs-toggle="dropdown">
		<span class="menu">lang</span><span class="caret red"></span>
	</button>
	<ul class="dropdown-menu">
		{#each locales as loc}
			<li>
				<button class:active={loc === $locale} on:click={() => switchLocale(loc)}>
					{loc}
				</button>
			</li>
		{/each}
	</ul>
</div>

  


<!-- ------------------ style ---------------------- -->
<style>
/* 	.menu {
		color: rgba(165, 152, 152, 0.488);
	} */

</style>
