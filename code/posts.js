const app = require("express")();

app.post("/", (req, res) => {
  res.status(201);
  res.send({ placeholder: true });
});

module.exports = app;
