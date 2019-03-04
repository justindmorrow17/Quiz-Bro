"use strict";

const express = require("express");  //const express that requires the express module
const questions = express.Router();   //returns an object that this router makes and stores in questions
const pool = require("./connection");   //setting up the questions.routes.js to use the credentials object

// const testItem = [           ****Testing object******
//   {name: "kangaroo"},
//   {name: "penguin"}
// ]

//creating a selectAll function to replace repetitve code in our pool.query
function selectAll(req, res){
  pool.query("select * from questionlist").then(function(result) {
    res.send(result.rows);
  });
}

//make a get request to the questions route endpoint
questions.get("/questions", (req, res) => {
  selectAll(req, res);
  // res.send(testItem);
  console.log("GET req made");
});

//module exporting the scores object, returning the object scores in the required call
module.exports = questions;