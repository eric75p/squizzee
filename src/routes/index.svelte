<!-- ---------------- script ---------------- -->
<script>
	// ------------------------------------------------ import
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	// --------------------------------------- stores
	import { AppStore } from '../stores/AppStore'

	// ------------------------------------------------ children
	import InfoCard from '../components/cards/InfoCard.svelte';
	function notImplementedYet() {
		// alert("Bientôt disponible")
	}

	// --------------------------------------- onMount()
	onMount(() => {
		$AppStore.mainBarVisible = true;
		$AppStore.quizBarVisible = false;
	});
</script>

<!-- ---------------- markup ---------------- -->
<section class="grid grid-cols-1 gap-4 place-items-center">
	<InfoCard
		title="Réseau social"
		buttonClick={notImplementedYet}
		buttonLabel="Créer un compte"
		text_color="text-info"
		buttonDisable={true}
	>
		<p>
			squizzee est un réseau social comportant différents types de relations : ami, contact
			professionnel, groupe privé...
		</p>
	</InfoCard>

	<InfoCard
		title="Quiz"
		buttonClick={() => goto('/sampleQuiz')}
		buttonLabel="Exemple"
		text_color="text-warning"
		buttonDisable={false}
	>
		<p>
			squizzee vous permet de répondre à des quiz, d’en créer de nouveaux, de participer à des
			concours...
		</p>
	</InfoCard>

	<InfoCard
		title="Enquêtes"
		buttonClick={notImplementedYet}
		buttonLabel="Exemple"
		text_color="text-success"
		buttonDisable={true}
	>
		<p>
			Avec squizzee, vous pouvez élaborer des enquêtes de satisfaction publiques ou réservées à un
			groupe privé d’utilisateurs...
		</p>
	</InfoCard>

	<InfoCard
		title="Sondages"
		buttonClick={notImplementedYet}
		buttonLabel="Exemple"
		text_color="text-secondary"
		buttonDisable={true}
	>
		<p>Concevez des sondages publics ou limités à un ensemble particulier de personnes...</p>
	</InfoCard>
</section>
