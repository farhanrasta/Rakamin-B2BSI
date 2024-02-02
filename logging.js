let fs = require("fs");

let data = "arva ganteng";

fs.writeFile("log.txt", data, (err) => {
  if (err) console.log(err);
  console.log("Success Written File");
});
