<script>
    // --------------------------------------- var
    let css_link = "link link-hover link-accent text-zinc-500"
	let css_txt = "text-zinc-500"
</script>



<!-- ********************* markup ********************* -->
<footer class="mt-6 p-6 footer bg-base-100 text-neutral-content">
	<!-- Front-end -->
	<div>
		<span class="footer-title">Front-end</span>
		<a target="_blank" href="https://svelte.dev" class={css_link}>Svelte</a>
		<a target="_blank" href="https://kit.svelte.dev/" class={css_link}>Sveltekit</a>
		<a target="_blank" href="https://tailwindcss.com/" class={css_link}>Tailwindcss</a>
		<a target="_blank" href="https://daisyui.com/" class={css_link}>daisyUI</a>
	</div>

	<!-- Back-end -->
	<div>
		<span class="footer-title">Back-end</span>
		<a target="_blank" href="https://www.mongodb.com/" class={css_link}>MongoDB</a>
		<a target="_blank" href="https://graphql.org/" class={css_link}>GraphQL</a>
	</div>

	<!-- Company -->
	<div>
		<span class="footer-title">Company</span>
		<a href="mailto:eric75p@protonmail.com" class={css_link}>Contact</a>
		<span class={css_txt}>2022 © squizzee bêta 0.1.1</span>
	</div>
</footer>
