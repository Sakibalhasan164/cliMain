const prompt = require("prompt");

prompt.start();

prompt.get(["What is your name", "email"], function (err, result) {
  if (err) {
    return onErr(err);
  }
  console.log("Command-line input received:");
  console.log("  Your name: " + result["What is your name"]);
  console.log("  Email: " + result.email);
});

function onErr(err) {
  console.log(err);
  return 1;
}
