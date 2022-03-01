const quizData = {
	title: "Quiz de culture générale",
	author: "squizzee",
	questions: [
		{
			text: "Quelle est la planète la plus proche du soleil ?",
			duration: 20,
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
			duration: 20,
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
			duration: 20,
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
			text: "Molière n’a pas écrit :",
			duration: 24,
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
			text: "Le théorème de Pythagore concerne :",
			duration: 15,
			answers: [
				{
					text: "Les polyèdres",
					valid: false,
				},
				{
					text: "Les triangles rectangles",
					valid: true,
				},
				{
					text: "Les cercles",
					valid: false,
				},
				{
					text: "Les hyperboles",
					valid: false,
				},
			],
		},
		{
			text: "L’univers a environ :",
			duration: 22,
			answers: [
				{
					text: "1 milliard d’années",
					valid: false,
				},
				{
					text: "4,5 milliards d’années",
					valid: false,
				},
				{
					text: "14 milliards d’années",
					valid: true,
				},
				{
					text: "20 milliards d’années",
					valid: false,
				},
			],
		},
		{
			text: "Harrison Ford n’a pas joué dans :",
			duration: 18,
			answers: [
				{
					text: "Apocalypse Now",
					valid: false,
				},
				{
					text: "Blade Runner",
					valid: false,
				},
				{
					text: "Piège de Cristal",
					valid: true,
				},
				{
					text: "Star Wars",
					valid: false,
				},
			],
		},
		{
			text: "Qu'est-ce que le pistil ?",
			duration: 22,
			answers: [
				{
					text: "L’appareil reproducteur femelle des fleurs",
					valid: true,
				},
				{
					text: "L’appareil reproducteur mâle des fleurs",
					valid: false,
				},
				{
					text: "La partie florale en forme de tige",
					valid: false,
				},
				{
					text: "La partie qui protège la fleur en développement",
					valid: false,
				},
			],
		},
		{
			text: "Le premier iPhone date de :",
			duration: 18,
			answers: [
				{
					text: "1997",
					valid: false,
				},
				{
					text: "2007",
					valid: true,
				},
				{
					text: "2010",
					valid: false,
				},
				{
					text: "2012",
					valid: false,
				},
			],
		},
		{
			text: "Vitesse de la lumière dans le vide ?",
			duration: 20,
			answers: [
				{
					text: "95 792 458 m/s",
					valid: false,
				},
				{
					text: "107 792 458 m/s",
					valid: false,
				},
				{
					text: "199 792 458 m/s",
					valid: false,
				},
				{
					text: "299 792 458 m/s",
					valid: true,
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