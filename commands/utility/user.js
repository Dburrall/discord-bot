const { SlashCommandBuilder, GuildMember } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("user")
		.setDescription("Provides information about the user."),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		await interaction.reply(
			`${interaction.user.username} hasn't had a gay thought since ${interaction.member.joinedAt}. ${GuildMember.bannable}`
		);
	},
};
