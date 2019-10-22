// const fs = require("fs");
// const zlib = require("zlib"); //compresses data
// // const gzip = zlib.createGzip();
// const gunzip = zlib.createGunzip();

// // const read = fs.createReadStream("./example.txt", "utf8");
// // const writer = fs.createWriteStream("cloneExample.txt.gz");
// const read = fs.createReadStream("./cloneExample.txt.gz");
// const writer = fs.createWriteStream("txext.txt");

// // read.pipe(gzip).pipe(writer); //creates a compressed file
// read.pipe(gunzip).pipe(writer); // uncompresses the file and creates a file
