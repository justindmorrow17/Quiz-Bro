"use strict";

const express = require("express");
const questions = express.Router();
const pool = require("./connection");

// const testItem = [
//   {name: "kangaroo"},
//   {name: "penguin"}
// ]

function selectAll(req, res){
  pool.query("select * from questionlist").then(function(result) {
    res.send(result.rows);
  });
}

questions.get("/questions", (req, res) => {
  selectAll(req, res);
  // res.send(testItem);
  console.log("GET req made");
});

module.exports = questions;