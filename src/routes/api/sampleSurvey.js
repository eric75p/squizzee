const surveyData = {
	title: "Enquête de satisfaction restaurant Miam Miam",
	author: "squizzee",
	questions: [
		{
			text: "Comment jugez-vous l’accueil téléphonique ?",
		},
		{
			text: "Comment jugez-vous l’accueil à la reception ?",
		},
		{
			text: "Comment jugez-vous le service en salle ?",
		},
		{
			text: "Comment jugez-vous la qualité des plats servis ?",
		},
		{
			text: "Rapport qualité prix ?",
		},
	],
};

// ------------------------------------------------- get()
export async function get() {
	return {
		body: surveyData
	};
}