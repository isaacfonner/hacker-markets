import type { SlackApp } from "slack-edge";
import type { Command } from "../modules/commandHandler";

const anotherTest: Command = {
    name: "/anotherTest",
    description: "another test!!!1 yay",

    run(app: SlackApp<any>) {
        app.command(this.name, 
            async (req) => {},
            async ({ context: { respond } }) => {
                await respond({
                    text: `TESTING YOU IDIOTTTTTTTTTTTT!!!!!!111111`
                });
            });
    }
};

export default anotherTest;