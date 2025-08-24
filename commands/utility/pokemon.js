const { SlashCommandBuilder } = require("discord.js");
const axios = require("axios");

async function getRandomPokemon() {
	try {
		const total = 720;
		const randomId = Math.floor(Math.random() * total) + 1;
		const response = await axios.get(
			`https://pokeapi.co/api/v2/pokemon/${randomId}`
		);
		return response.data;
	} catch (error) {
		console.error("Error fetching random Pokémon:", error);
		throw error;
	}
}

getRandomPokemon()
	.then((pokemon) => {
		// console.log(`You got ${pokemon.name}!`);
	})
	.catch((error) => {
		console.error("An error occurred:", error);
	});

module.exports = {
	data: new SlashCommandBuilder()
		.setName("pokemon")
		.setDescription("Catches you a Pokemon!"),
	async execute(interaction) {
		try {
			const pokemon = await getRandomPokemon();
			const imageUrl = pokemon.sprites.front_default;
			await interaction.reply({
				content: `${interaction.user.username} caught a ${pokemon.name}!`,
				files: [imageUrl],
			});
		} catch (error) {
			await interaction.reply(
				"An error occurred while fetching a Pokémon. Please try again later."
			);
			console.error("Error executing command:", error);
		}
	},
};
