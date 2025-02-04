import type { SlackApp } from "slack-edge";
import { slackApp, slackClient } from "../..";
import type { Command } from "../modules/commandHandler";

const hello: Command = {
    name: "/hello",
    description: "Waves at you!",

    run(app: SlackApp<any>) {
        app.command(this.name, 
            async (req) => {},
            async ({ context: { respond } }) => {
                await respond({
                    text: `yarrr~! Hello there 👋🏽`
                })
            })
    }
};

export default hello;