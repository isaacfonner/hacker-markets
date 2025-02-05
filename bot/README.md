# Hacker Market Slack Bot
This is the Slack endpoint for the `hacker-market-api`.

## Usage
1. Create a new slack app @ https://api.slack.com/apps (By the way, I'd advice you to be a collaborator in the Slack app instead, it's a ton easier, ask us for the env and skip to step 4)
2. Select "From a manifest" and use the [manifest.yaml](manifest.yaml). If you want to develop a specific command, add it to your app with the name and description the same as in the `commands` folder. The API endpoint should be `https://your-server/slack/events` (get one from NGROK in step 5)
3. Add a `.env` file (in root of this project) and put the following content in it, replacing the top three with your own content of course! You can also change the ports if you wish.

```bash
SLACK_BOT_TOKEN=xoxb-xxx-xxxx-xxxxxx
SLACK_USER_TOKEN=xoxp-xxx-xxxx-xxxxxx
SLACK_SIGNING_SECRET=xxxxxx
NODE_ENV=development
SLACK_API_ENDPOINT_PORT=3000
API_SERVER_PORT=3101
ADMINS=U062UG485EE
```

4. Run the following commands for developing!

```bash
bun install
bun run index.ts
```

5. To make it work inside Slack, you have to get your own NGROK domain, and then forward your local development port to it. So this usually would be `ngrok http --url=YOUR_URL 3000` for port 3000 and url YOUR_URL.
