const fs = require("fs");

//create a file
// fs.writeFile(
//   "myFile.txt",
//   "Text that i wanted to write in here",
//   (err, file) => {
//     if (err) {
//       console.log(err);
//     } else {
//       //reading the file
//       fs.readFile("myFile.txt", "utf8", (err, file) => {
//         if (err) {
//           console.log(err);
//         } else {
//           //the file is in the file variable
//           console.log(file);
//         }
//       });
//     }
//   }
// );

//renaming the file

// fs.rename("myFile.txt", "jk you still my file.txt", (err, file) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("yay it changed");
//   }
// });

// fs.appendFile("woah.txt", "append this \n", err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("yay it changed");
//   }
// });

fs.unlink("woah.txt", err => {
  if (err) {
    console.log(err);
  } else {
    console.log("oh no hes dead omg why");
  }
});
