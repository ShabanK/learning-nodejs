const fs = require("fs");

const readstream = fs.ReadStream("./readme.md", "utf8");
const writestream = fs.WriteStream("./clonereadme.md");

readstream.on("data", data => {
  console.log(data);
  writestream.write(data);
});
