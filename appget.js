const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("HOME");
});
app.get("/yoyo", (req, res) => {
  res.send("yo yo");
});

app.get("/yoyo/:name/:age", (req, res) => {
  res.send(`${req.params.name} and ${req.params.age}`);
  console.log(req.query);
});

app.listen(3000);
