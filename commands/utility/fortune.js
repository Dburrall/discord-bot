const { SlashCommandBuilder } = require("discord.js");

fortunes = [
	{
		0: "Don't sweat the petty things, just pet the sweaty things",
		1: "The party never stops for a true party worm like me! Let's keep groovin' and movin'!",
		2: "You gotta grab life by the disco ball and dance like there's no tomorrow, baby!",
		3: "If the pineapple ain't sweet, just put it down baby",
		4: "Fred Durst has had more of an impact on this world than you",
		5: "Remember, it's not the size of the party hat that matters, it's the size of the dance moves! So let's get funky!",
		6: "You will receive a standing ovation for your spectacular ability to microwave leftovers.",
		7: "In the future, your toaster will have more Twitter followers than you.",
		8: "You will discover that your car's GPS has developed a strong opinion on your driving skills.",
		9: "A new hobby or passion will ignite your soul and bring renewed energy into your life.",
		10: "Your hard work and perseverance will pay off handsomely in the near future.",
		11: "The world breaks everyone, and afterward, some are strong at the broken places.",
		12: "A journey of a thousand miles begins with a single step.",
		13: "Know yourself and know your enemy, and you will never be defeated in a hundred battles.",
		14: "Do not do unto others what you do not want done unto yourself.",
		15: "You're either a Smart Fella, or a Fart Smella",
		16: "Worm up, baby! We're about to dive into the party wormhole of a lifetime!",
		17: "Life's too short for boring parties, so let's make some noise and shake those antennae!",
		18: "Why settle for the ordinary when you can party with the extraordinary? Let's crank it up to 11!",
	},
];

function getRandomFortune() {
	const FortuneIndex = Math.floor(
		Math.random() * Object.keys(fortunes[0]).length
	);
	return fortunes[0][FortuneIndex];
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName("fortune")
		.setDescription("Gives you a Wisdom"),
	async execute(interaction) {
		await interaction.reply(`${getRandomFortune()}`);
	},
};
