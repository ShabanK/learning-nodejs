var http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    const read = fs.createReadStream("./httpFsExample/readme.md");
    res.writeHead(200, { "Content-type": "text/plain" });
    read.pipe(res);
  })
  .listen(3000);
