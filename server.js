"use strict";

const express = require("express");
const app = express();
const questions = require("./routes/questions.routes");
const scores = require("./routes/scores.routes");

app.use(express.static("./public"));
app.use(express.json());
app.use("/", questions);
app.use("/", scores);

app.listen(8080, () => {
  console.log("Server is running OMG!")
});