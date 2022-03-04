const pollData = {
	title: "Exemple de sondage",
	author: "squizzee",
	questions: [
		{
			text: "Quels aliments consommez-vous régulièrement ?",
			multiple: true,
			min: 0,
			max: 99999,
			choices: ["Céréales", "Fruits", "Légumes", "Produits laitiers", "Poisson", "Soja", "Viandes"]
		},
		{
			text: "Quel thème placeriez-vous en premier ?",
			multiple: false,
			choices: ["L’écologie", "Le pouvoir d’achat", "La sécurité de l’emploi", "La santé"]
		},
		{
			text: "Choisissez entre une et trois couleurs",
			multiple: true,
			min: 1,
			max: 3,
			choices: ["Bleu", "Jaune", "Orange", "Rouge", "Vert", "Violet"]
		},
	],
};

// ------------------------------------------------- get()
export async function get() {
	return {
		body: pollData
	};
}