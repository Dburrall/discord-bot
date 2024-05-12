const { SlashCommandBuilder } = require("discord.js");

fortunes = [
	{
		0: "Don't sweat the petty things, just pet the sweaty things",
		1: "It's not illegal in 7 states to have sex with a sheep",
		2: "Your future is brighter than 1000 suns",
		3: "If the pineapple ain't sweet, just put it down baby",
		4: "Fred Durst has had more of an impact on this world than you",
		5: "Life is meaningless.",
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
