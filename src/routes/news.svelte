<!-- ---------------- script ---------------- -->
<script>
	// ------------------------------------------------ import
	import { goto } from '$app/navigation';

	// ------------------------------------------------ children

	import InfoCard from '../components/cards/InfoCard.svelte';
	function notImplementedYet() {
		// alert("Bientôt disponible")
	}
</script>

<!-- ---------------- markup ---------------- -->
<section class="grid grid-cols-1 gap-4 place-items-center">
	<InfoCard
		title="27 février 2022 &#10003;"
		buttonLabel="Créer un compte"
		text_color="text-success"
		buttonVisible={false}
	>
		<div class="text-sm">
			<p>Version bêta 0.1</p>
			<p>Aspect général de l’interface utilisateur</p>
			<p>Exemple de quiz</p>
		</div>
	</InfoCard>

	<InfoCard
		title="1er Mars 2022 &#10003;"
		buttonLabel="Créer un compte"
		text_color="text-success"
		buttonVisible={false}
	>
		<div class="text-sm">
			<p>Version bêta 0.1.1</p>
			<p>Amélioration du quiz exemple</p>
			<p>Exemple d’enquête de satisfaction</p>
		</div>
	</InfoCard>

	<InfoCard
		title="Mars 2022"
		buttonLabel="Créer un compte"
		text_color="text-info"
		buttonVisible={false}
	>
		<div class="text-slate-500 text-sm">
			<p>Version bêta 0.1.2</p>
			<p>Exemple de sondage</p>
		</div>
	</InfoCard>

	<InfoCard
		title="Mars 2022"
		buttonLabel="Créer un compte"
		text_color="text-info"
		buttonVisible={false}
	>
		<div class="text-slate-500 text-sm">
			<p>Version bêta 0.1.3</p>
			<p>Possibilité de créer un compte utilisateur</p>
		</div>
	</InfoCard>

	<InfoCard
		title="Mars/Avril 2022"
		buttonLabel="Créer un compte"
		text_color="text-neutral-focus"
		buttonVisible={false}
	>
		<div class="text-slate-500 text-sm">
			<p>Version bêta 0.1.4</p>
			<p>Possibilité de créer un quiz</p>
		</div>
	</InfoCard>

	<InfoCard
		title="Mars/Avril 2022"
		buttonLabel="Créer un compte"
		text_color="text-neutral-focus"
		buttonVisible={false}
	>
		<div class="text-slate-500 text-sm">
			<p>Version bêta 0.1.5</p>
			<p>Possibilité de créer une enquête de satisfaction</p>
		</div>
	</InfoCard>
</section>
