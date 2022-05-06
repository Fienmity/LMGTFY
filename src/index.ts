import { Plugin, registerPlugin } from "enmity-api/plugins";
import { LMGTFYCommands } from "./commands";

const LMGTFY: Plugin = {
  name: "LMGTFY",
  // @ts-ignore
  author: 'Fiery',
  version: '1.2.0',
  description: "Let me google that for you...",
  color: "#4285F4",
  authors: [
    {
      name: 'Fiery',
      id: '890228870559698955'
    }
  ],
  commands: [],

  onStart() {
    this.commands = LMGTFYCommands
  },

  onStop() {
    this.commands = []
  }
}

registerPlugin(LMGTFY);
