"use strict";

const express = require("express");  //const express that requires the express module
const scores = express.Router();    //returns an object that this router makes and stores in scores
const pool = require("./connection");  //setting up the scores.routes.js to use the credentials object

// const testScores = [      ***Testing object****
//   {Name: "Tyler"},
//   {Name: "Justin"}
// ];

//creating a selectAll function to replace repetitve code in our pool.query
//limited to 10 with high scores listed first
function selectAll(req, res){
  pool.query("select * from scores order by score desc limit 10").then(function(result) {
    res.send(result.rows);
  });
};

//make a get request to the colors route endpoint
scores.get("/scores", (req, res) => {
  selectAll(req,res);
  // res.send(testScores);
  console.log("GET scores made");
});

//adds new information/data to the array, then displays array
scores.post("/scores", (req, res) => {
  pool.query("insert into scores (player_name, score) values ($1::text, $2::int)", [req.body.player_name, req.body.score]).then(function() {
    selectAll(req, res)
  });
  // res.send(testScores);
  console.log("POST scores made");
});

//module exporting the scores object, returning the object scores in the required call
module.exports = scores;