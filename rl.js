const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answer = "kono dio da";

rl.question("Hello, whats your name?\n", userInput => {
  console.log(userInput);
  if (answer == userInput.trim()) {
    rl.close();
  } else {
    rl.setPrompt("MONKEY NANDAYOOOO \n");
    rl.prompt();
    rl.on("line", userInput => {
      if (answer == userInput.trim()) {
        rl.close();
      } else {
        rl.setPrompt("MONKEY NANDAYOO \n");
        rl.prompt();
      }
    });
  }
});
