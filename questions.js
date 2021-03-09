const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let Name;

rl.question("What is your name ?", (name) => {
  Name = name;
  rl.close();
});

rl.on("close", () => {
  console.log(`hello there ${Name}`);
  process.exit(0);
});
