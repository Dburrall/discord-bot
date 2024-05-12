const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("slurm")
		.setDescription("Gives you a warm slurming"),
	async execute(interaction) {
		await interaction.reply(
			`Whats up ${interaction.user.username}! Wiggity Wam Wam Wozzle!`
		);
	},
};
