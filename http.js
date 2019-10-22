const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello i am bimba.js");
  } else {
    res.write("Hello i am yattazo.js");
  }
  res.end();
});

server.listen(4000);
