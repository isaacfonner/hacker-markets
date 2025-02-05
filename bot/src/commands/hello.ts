import type { SlackApp } from "slack-edge";
import { slackApp, slackClient } from "../..";
import type { Command } from "../modules/commandHandler";

let response: string;

fetch("http://localhost:3101/hello")
    .then((res: Response) => res.text()) // Change to text() to handle plain text response
    .then((data: string) => {
        response = data; // Directly assign the text response
    })
    .catch((error: any) => {
        console.error("Error fetching data:", error);
    });

const hello: Command = {
    name: "/hello",
    description: "Waves at you!",

    run(app: SlackApp<any>) {
        app.command(this.name, 
            async (req) => {},
            async ({ context: { respond } }) => {
                await respond({
                    text: response,
                });
            });
    }
};

export default hello;