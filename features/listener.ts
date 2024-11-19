import { slackApp, slackClient } from "../index";

async function listener() {
	slackApp.event("channel_created", async ({ context, payload }) => {
		console.log(`A new channel ${payload.channel.name} was created`);
		await slackClient.conversations.invite({
			channel: payload.channel.id,
			users: process.env.ADMINS?.split(",") || [],
		});
	});
}

export default listener;
