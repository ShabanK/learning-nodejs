const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("TOMARE TOKI O");
});

app.listen(3000);
