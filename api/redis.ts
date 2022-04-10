import { createClient } from "redis";

const client = createClient({
  url: process.env.REDIS_CONNECTION,
});

client.on("error", (e) => {
  console.log("error while logging to upstash: ", e);
});

(async () => {
  await client.connect();
})();

export default client;
