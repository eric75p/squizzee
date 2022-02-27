const quizData = {
	title: "Quiz de culture générale",
	author: "squizzee",
	questions: [
		{
			text: "Quelle est la planète la plus proche du soleil ?",
			duration: 30,
			answers: [
				{
					text: "Mars",
					valid: false,
				},
				{
					text: "Mercure",
					valid: true,
				},
				{
					text: "Neptune",
					valid: false,
				},
				{
					text: "Vénus",
					valid: false,
				},
			],
		},
		{
			text: "Quelle est la capitale de la Suisse ?",
			duration: 30,
			answers: [
				{
					text: "Bâle",
					valid: false,
				},
				{
					text: "Berne",
					valid: true,
				},
				{
					text: "Genève",
					valid: false,
				},
				{
					text: "Lausanne",
					valid: false,
				},
			],
		},
		{
			text: "Louis XV a vécu au :",
			duration: 30,
			answers: [
				{
					text: "XVe siècle",
					valid: false,
				},
				{
					text: "XVIe siècle",
					valid: false,
				},
				{
					text: "XVIIe siècle",
					valid: false,
				},
				{
					text: "XVIIIe siècle",
					valid: true,
				},
			],
		},
		{
			text: "Molière n'a pas écrit :",
			duration: 30,
			answers: [
				{
					text: "L’Avare",
					valid: false,
				},
				{
					text: "Le Misanthrope",
					valid: false,
				},
				{
					text: "Le Cid",
					valid: true,
				},
				{
					text: "Dom Juan ou le Festin de Pierre ",
					valid: false,
				},
			],
		},
		{
			text: "N’est pas un élément chimique :",
			duration: 30,
			answers: [
				{
					text: "L’hypérium",
					valid: true,
				},
				{
					text: "Le palladium",
					valid: false,
				},
				{
					text: "Le polonium",
					valid: false,
				},
				{
					text: "Le zirconium",
					valid: false,
				},
			],
		},
	],
};

// ------------------------------------------------- get()
export async function get() {
	return {
		body: quizData
	};
}