import express from "express";
import usersOauth from "./users/oauth";
import redis from "./redis";

const app = express();

app.get("/", (_, res) => {
  res.send("api up and running!");
});

app.get("/users/oauth", usersOauth);

app.get("/users/set", (_, res) => {
  redis.set("my-key", "hello-world");
  res.send("SUCCESS");
});

if (!process.env.SK) {
  const port = process.env.PORT || 4000;

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

export default app;
