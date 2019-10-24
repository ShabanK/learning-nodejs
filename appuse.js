const express = require("express");
const path = require("path");
const app = express();

app.use("/public", express.static(path.join(__dirname, "static"))); //symbolises the use of middleware

app.get("/", (req, res) => {
  //   res.sendFile(path.join(__dirname, "static", "index.html"));
  res.sendFile(__dirname + "/static/index.html");
});

app.listen(3000);
