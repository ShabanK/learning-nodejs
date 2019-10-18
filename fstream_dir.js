const fs = require("fs");

//reating some files in a folder

fs.mkdir("my folder", err => {
  if (err) console.log(err);
  else console.log(`created dir`);
});

fs.writeFile("./my folder/file1.js", "console.log('yeet')", err => {
  if (err) console.log(err);
  else console.log(`created file`);
});

fs.writeFile("./my folder/file2.js", "console.log('yeet')", err => {
  if (err) console.log(err);
  else console.log(`created file`);
});

//deleting the folder and files

// fs.readdir("my folder", (err, folder) => {
//   if (err) console.log(err);
//   else {
//     console.log(folder);
//     for (let file of folder) {
//       fs.unlink(`./my folder/${file}`, err => {
//         if (err) console.log(err);
//         else console.log(`deleted ${file}`);
//       });
//     }
//     fs.rmdir("my folder", err => {
//       if (err) console.log(err);
//       else console.log(`created file`);
//     });
//   }
// });
