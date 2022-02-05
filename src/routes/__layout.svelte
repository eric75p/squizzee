<!-- ------------------ module ---------------------- -->
<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import type { Locales } from '../i18n/i18n-types';
	import { replaceLocaleInUrl } from '../utils';
	import { baseLocale, locales } from '../i18n/i18n-util';
	import type { SessionPayload } from '../hooks';
	import { loadLocaleAsync } from '../i18n/i18n-util.async';

	type LoadInput = {
		pageParams: { lang?: Locales };
		session: SessionPayload;
	};

	// ----------------------------------------------------- load()
	export const load: Load<LoadInput> = async ({ url, session, params }) => {
		// fallback needed because of https://github.com/sveltejs/kit/issues/3647
		const lang = params.lang || (url.pathname.split('/')[1] as Locales);

		// redirect to preferred language if user comes from page root
		if (!lang) {
			return {
				status: 302,
				redirect: `/${session.locale}`
			};
		}

		// redirect to base locale if language is not present
		if (!locales.includes(lang)) {
			return {
				status: 302,
				redirect: replaceLocaleInUrl(url.pathname, baseLocale)
			};
		}

		// delete session locale since we don't need it to be sent to the client
		delete session.locale;
		await loadLocaleAsync(lang);
		return { props: { locale: lang } };
	};
</script>

<!-- ------------------ script ---------------------- -->
<script lang="ts">
	import Header from '$lib/Header.svelte';
	import { setLocale } from '../i18n/i18n-svelte';
	export let locale: Locales;
	setLocale(locale);
</script>

<!-- ------------------ head ---------------------- -->
<svelte:head>
	<meta name="robots" content="noindex" />
	<link
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
		rel="stylesheet"
		integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
		crossorigin="anonymous"
	/>
	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
		crossorigin="anonymous"></script>
</svelte:head>

<!-- ------------------ markup ---------------------- -->
<Header />
<main>
	<slot />
</main>

<!-- ------------------ style ---------------------- -->
<style lang="scss" global>
	@import '../styles/global.scss';
</style>
