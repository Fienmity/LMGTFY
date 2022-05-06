import { Plugin, registerPlugin } from "enmity-api/plugins";
import { LMGTFYCommands } from "./commands";
import Manifest from "./manifest.json";

const LMGTFY: Plugin = {
  name: Manifest.name,
  // @ts-ignore
  description: Manifest.description,
  authors: Manifest.authors,
  version: Manifest.version,
  color: Manifest.color,
  commands: [],

  onStart() {
    this.commands = LMGTFYCommands
  },

  onStop() {
    this.commands = []
  }
}

registerPlugin(LMGTFY);
