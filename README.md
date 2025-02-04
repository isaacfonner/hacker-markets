# Hacker Market
A Slackbot made entirely for Hack Club's next big YSWS. More details will follow soon!

Built by Charmunk (@isaacfonner) and Mart (@ThatFrogDev)

## Usage
1. Create a new slack app @ https://api.slack.com/apps (By the way, I'd advice you to be a collaborator in the Slack app instead, it's a ton easier, ask us for the env and skip to step 4)
2. Select "From a manifest" and use the [manifest.yaml](manifest.yaml). If you want to develop a specific command, add it to your app with the name and description the same as in the `commands` folder. The API endpoint should be `https://your-server/slack/events` (get one from NGROK in step 5)
3. Add a `.env` file and put the following content in it, replacing the top three with your own content of course!

```bash
SLACK_BOT_TOKEN=xoxb-xxx-xxxx-xxxxxx
SLACK_USER_TOKEN=xoxp-xxx-xxxx-xxxxxx
SLACK_SIGNING_SECRET=xxxxxx
NODE_ENV=development
ADMINS=U062UG485EE
```

4. Run the following commands for developing!

```bash
bun install
bun run index.ts
```

5. To make it work inside Slack, you have to get your own NGROK domain, and then forward your local development port to it. So this usually would be `ngrok http --url=YOUR_URL 3000` for port 3000 and url YOUR_URL.
