const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  const first = result;
  readFile("./content/first.txt", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    const second = result;

    writeFile(
      "./content/result-sync.txt",
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});

console.log("starting new task");
