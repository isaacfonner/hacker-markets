import { Elysia } from "elysia";
import { join } from "path"
import { readFileSync } from "fs";

// Tell Bun it needs to look somewhere else than default for the environment files
const envPath = join(__dirname, "..", ".env");
const envConfig = readFileSync(envPath, "utf-8");
envConfig.split("\n").forEach(line => {
    const [key, value] = line.split("=");
    if (key && value) {
        process.env[key.trim()] = value.trim();
    }
});

const app = new Elysia().get("/hello", () => "yarrr~! Hello there 👋🏽 from hacker-market-api").listen(process.env.API_SERVER_PORT || 3101);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
