const app = require("express")();
const bodyParser = require("body-parser");
const knex = require("./knex");
const log = require("bole")(__filename);

app.get("/", async (req, res) => {
  const rows = await knex
    .select()
    .from("posts")
    .orderBy("id");
  res.send(rows);
});

app.post("/", bodyParser.json(), async (req, res) => {
  const post = req.body;
  const rows = await knex
    .insert(post)
    .into("posts")
    .returning(["id", "title", "author", "content"]);
  res.status(201);
  res.send(rows[0]);
});

app.get("/:postId", async (req, res) => {
  const rows = await knex
    .select()
    .from("posts")
    .where({ id: req.params.postId });
  if (rows.length < 1) {
    res.status(404);
    res.send();
    return;
  }
  res.send(rows[0]);
});

app.delete("/:postId", async (req, res) => {
  log.debug(`DELETE ${req.params.postId}`);
  await knex
    .delete()
    .from("posts")
    .where({ id: req.params.postId });
  res.send();
});

module.exports = app;
