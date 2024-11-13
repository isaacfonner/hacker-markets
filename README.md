<h1 align="center">Kreva</h1>

<p align="center">
  <img width="460" height="460" src="https://github.com/kcoderhtml/kreva/raw/master/.github/images/logo.png">
</p>

Kreva is a simple slackbot to auto add me to new channels in the [Hackclub](https://hackclub.com/slack/) slack

---

![gif of the program in action](https://github.com/kcoderhtml/kreva/raw/master/.github/images/out.gif)

# Usage

Create a slack app as per the [manifest.yaml](manifest.yaml) and an env as below  

```bash
SLACK_BOT_TOKEN=xoxb-xxx-xxxx-xxxxxx
SLACK_USER_TOKEN=xoxp-xxx-xxxx-xxxxxx
SLACK_SIGNING_SECRET=xxxxxx
NODE_ENV=development
ADMINS=U062UG485EE
```

```bash
bun install
bun run index.ts
```

then start an ngrok

```bash
ngrok http --domain casual-renewing-reptile.ngrok-free.app 3000
```

## License

_© 2024 Kieran Klukas - Licensed under [AGPL 3.0](LICENSE.md)_  