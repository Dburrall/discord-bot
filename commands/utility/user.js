const { SlashCommandBuilder } = require("discord.js");

const random = Math.floor(Math.random() * 100) + 1;

module.exports = {
	data: new SlashCommandBuilder()
		.setName("user")
		.setDescription("Provides information about the user."),
	async execute(interaction) {
		const sweatyEmoji = "<:sweaty:1408991203629727826>";
		const user = interaction.user;
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		await interaction.reply(
			` Whats up ${user} Your last gay thought was ${random} days ago! ${sweatyEmoji} `
		);
	},
};
