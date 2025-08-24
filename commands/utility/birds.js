const { birdToken } = require("../../config.json");
const { SlashCommandBuilder } = require("discord.js");

async function getRandomBird() {
	try {
		const response = await fetch(
			"https://api.ebird.org/v2/data/obs/US-OH/recent",
			{
				headers: {
					"X-eBirdApiToken": birdToken,
				},
			}
		);

		if (!response.ok) {
			throw new Error(`error fetching birds`);
		}
		const birds = await response.json();
		const birdLength = birds.length;
		const randomBird = birds[Math.floor(Math.random() * birdLength)];

		return randomBird.comName;
	} catch (error) {
		console.log("Error catching birds");
	}
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName("birds")
		.setDescription("Gives you a random Ohio bird that could fight you"),

	async execute(interaction) {
		const birdName = await getRandomBird();
		await interaction.reply(` ${birdName} wants to fight you!`);
	},
};
