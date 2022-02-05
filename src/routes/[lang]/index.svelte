<!-- ---------------- script ---------------- -->
<script lang="ts">
	import Clock from '../../lib/Clock.svelte';
	import LL from '../../i18n/i18n-svelte';
</script>

<!-- ---------------- markup ---------------- -->
<h2 class="title1">
	{$LL.hello()}
</h2>


<div class="d-flex justify-content-center">
		<Clock />
</div>

<h3 class="secondary">{$LL.explain()}</h3>

<!-- ---------------- style ---------------- -->
<style>

	.title1 {
		margin-top: 50px;
	}

	h2 {
		color: var(--blue);
	}

	h3 {
		font-style: italic;
		margin-bottom: 20px;
		color: var(--green);
	}

</style>
