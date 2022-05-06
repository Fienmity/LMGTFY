import { ApplicationCommandInputType, ApplicationCommandOptionType, ApplicationCommandType, Command, EnmitySectionID } from "enmity-api/commands";

export const googleCommand: Command = {
	id: "google-command",
	applicationId: EnmitySectionID,

	name: "google",
	displayName: "google",

	description: "Quickly generate & send a Google search URL",
	displayDescription: "Quickly generate & send a Google search URL",

	type: ApplicationCommandType.Chat,
	inputType: ApplicationCommandInputType.BuiltInText,

	options: [{
		name: "search",
		displayName: "search",

		description: "What to search for on Google",
		displayDescription: "What to search for on Google",

		type: ApplicationCommandOptionType.String,
		required: true
	}],

	execute: function (args, _) {
		const search = args[0].value;

		return {
			content: `https://google.com/search?q=${encodeURIComponent(search)}`
		}
	}
}
