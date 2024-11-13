import { slackApp, userSlackClient } from "../index";

async function listener() {
	slackApp.event("channel_created", async ({ context, payload }) => {
		console.log(`A new channel ${payload.channel.name} was created`);
		await userSlackClient.conversations.join({
			channel: payload.channel.id,
		});

		await userSlackClient.chat.postMessage({
			channel: payload.channel.id,
			text: `Hi <@${payload.channel.creator}> and <#${payload.channel.id}>!`,
		});
	});
}

export default listener;
