const surveyData = {
	title: "Enquête de satisfaction",
	author: "squizzee",
	questions: [
		{
			text: "Comment jugez-vous l’accueil téléphonique ?",
			nbrOfStars: 5
		},
	],
};

// ------------------------------------------------- get()
export async function get() {
	return {
		body: surveyData
	};
}