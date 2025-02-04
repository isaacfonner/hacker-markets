import { SlackApp } from "slack-edge";

import * as features from "./src/modules/index";

const { version, name } = require("./package.json");
const environment = process.env.NODE_ENV;

console.log(
	`----------------------------------\n${name} server\n----------------------------------\n`,
);
console.log(`🏗️  Starting ${name}...`);
console.log("📦 Loading Slack App...");
console.log("🔑 Loading environment variables...");

if (
	!process.env.SLACK_BOT_TOKEN ||
	!process.env.SLACK_SIGNING_SECRET ||
	!process.env.SLACK_USER_TOKEN ||
	!process.env.ADMINS
) {
	const missingEnvVars = [
		!process.env.SLACK_BOT_TOKEN && "SLACK_BOT_TOKEN",
		!process.env.SLACK_SIGNING_SECRET && "SLACK_SIGNING_SECRET",
		!process.env.SLACK_USER_TOKEN && "SLACK_USER_TOKEN",
		!process.env.ADMINS && "ADMINS",
	].filter(Boolean);

	throw new Error(
		`Missing required environment variables: ${missingEnvVars.join(", ")}`,
	);
}

const slackApp = new SlackApp({
	env: {
		SLACK_BOT_TOKEN: process.env.SLACK_BOT_TOKEN,
		SLACK_SIGNING_SECRET: process.env.SLACK_SIGNING_SECRET,
		SLACK_LOGGING_LEVEL: "INFO",
	},
	startLazyListenerAfterAck: true,
});
const slackClient = slackApp.client;

const userSlackApp = new SlackApp({
	env: {
		SLACK_BOT_TOKEN: process.env.SLACK_USER_TOKEN,
		SLACK_SIGNING_SECRET: process.env.SLACK_SIGNING_SECRET,
		SLACK_LOGGING_LEVEL: "INFO",
	},
});
const userSlackClient = userSlackApp.client;

console.log(`⚒️  Loading ${Object.entries(features).length} features...`);
for (const [feature, handler] of Object.entries(features)) {
	console.log(`📦 ${feature} loaded`);
	if (typeof handler === "function") {
		handler();
	}
}

export default {
	port: process.env.PORT || 3000,
	async fetch(request: Request) {
		const url = new URL(request.url);
		const path = url.pathname;

		switch (path) {
			case "/":
				return new Response(`Hello World from ${name}@${version}`);
			case "/health":
				return new Response("OK");
			case "/slack":
				return slackApp.run(request);
			default:
				return new Response("404 Not Found", { status: 404 });
		}
	},
};

console.log(
	`🚀 Server Started in ${Bun.nanoseconds() / 1000000} milliseconds on version: ${version}!\n\n----------------------------------\n`,
);

export { slackApp, slackClient, userSlackClient, version, name, environment };
