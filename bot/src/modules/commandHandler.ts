import type { SlackApp } from "slack-edge";
import { slackApp } from "../../index";
import { readdirSync } from "fs";
import path from "path";

export let dir: string = path.join(__dirname, "../commands");

export interface Command {
    run(app: SlackApp<any>): void;
    onload?: () => void;
    name: string;
    description: string;
    is_event?: boolean;
    usage?: string;
    custom_properties?: {
      [k: string]: any;
    };
}

function getFiles(): string[] {
    return readdirSync(dir);
}

export async function loadCommands() {
    const files = getFiles();

    for (const file of files) {
        try {
            const commandPath = path.join(dir, file);
            const commandModule = require(commandPath);
            const cmd: Command = commandModule.default || commandModule;
            cmd.run(slackApp);
            console.log(`✅ Loaded command ${file}`);
        } catch (e) {
            console.error(e);
            console.error(`❎ Failed to load command ${file}`);
        }
    }
}