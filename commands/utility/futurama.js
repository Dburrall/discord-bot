const { SlashCommandBuilder } = require("discord.js");

futurama = [
	{
		0: "You know what the worst part about being a slave is? They make you do all this work, but they never pay you or let you go ",
		1: "Have you ever tried simply turning off the TV, sitting down with your children, and hitting them?",
		2: "The alien mothership! If we hit that bullseye, the rest of the dominoes will fall like a house of cards. Checkmate.",
		3: "Scruffy's gonna die the way he lived *Flips through Zero G Jugs*",
		4: "I don't understand evolution, and I have to protect my kids from understanding it!",
		5: "The whole world must learn of our peaceful ways...by force!",
		6: " Fry, it's been years since medical school, so remind me. Disemboweling in your species, fatal or non-fatal? ",
		7: "Sir, it's not necessary, or wise, to be naked",
		8: "I'll make my own theme park, with blackjack and hookers!",
		9: "ow my sperm!",
		10: "It's like there's a party in my mouth and everybody's throwing up.",
		11: "What do we want? Fry's dog! When do we want it? Fry's dog!",
		12: "The spirit is willing but the flesh is spongy and bruised",
		13: "People said I was dumb, but I proved them! ",
		14: "If anyone needs me, I'll be in the Angry Dome",
	},
];

function getRandomfuturama() {
	const futuramaIndex = Math.floor(
		Math.random() * Object.keys(futurama[0]).length
	);
	return futurama[0][futuramaIndex];
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName("futurama")
		.setDescription("Gives you a random futurama quote"),
	async execute(interaction) {
		await interaction.reply(`${getRandomfuturama()}`);
	},
};
