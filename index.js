// const express = require("express");
// const mongoose = require("mongoose");

// const app = express();
// app.use(express.json());

// app.listen(3000, () => {
//   console.log(`Server Started at ${3000}`);
// });

var express = require("express");
let app = express();

app.get("/bilal", function (req, res) {
  res.send("Hello World!");
});

app.listen(3000);
