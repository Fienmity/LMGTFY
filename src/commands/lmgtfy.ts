import { ApplicationCommandInputType, ApplicationCommandOptionType, ApplicationCommandType, Command, EnmitySectionID } from "enmity-api/commands";

export const lmgtfyCommand: Command = {
	id: "lmgtfy-command",
	applicationId: EnmitySectionID,

	name: "lmgtfy",
	displayName: "lmgtfy",

	description: "Let me google that for you...",
	displayDescription: "Let me google that for you...",

	type: ApplicationCommandType.Chat,
	inputType: ApplicationCommandInputType.BuiltInText,

	options: [{
		name: "search",
		displayName: "search",

		description: "What they want to google",
		displayDescription: "What they want to google",

		type: ApplicationCommandOptionType.String,
		required: true
	},
	{
		name: "internetexplainer",
		displayName: "internetexplainer",

		description: "Whether or not to include internet explainer",
		displayDescription: "Whether or not to include internet explainer",

		type: ApplicationCommandOptionType.Boolean,
		required: false
	}],

	execute: function (args, _) {
		const search = args[0].value;
		const iie = args[1].value ?? false;

		return {
			content: `https://lmgtfy.app/?q=${encodeURIComponent(search)}&iie=${+ iie}`
		}
	}
}
