"use strict";

const express = require("express");
const scores = express.Router();
const pool = require("./connection");

// const testScores = [
//   {Name: "Tyler"},
//   {Name: "Justin"}
// ];

function selectAll(req, res){
  pool.query("select * from scores order by score desc limit 10").then(function(result) {
    res.send(result.rows);
  });
};

scores.get("/scores", (req, res) => {
  selectAll(req,res);
  // res.send(testScores);
  console.log("GET scores made");
});

scores.post("/scores", (req, res) => {
  pool.query("insert into scores (player_name, score) values ($1::text, $2::int)", [req.body.player_name, req.body.score]).then(function() {
    selectAll(req, res)
  });
  // res.send(testScores);
  console.log("POST scores made");
});


module.exports = scores;