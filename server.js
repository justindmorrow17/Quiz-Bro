"use strict";

const express = require("express");  //const express that requires the express module
const app = express();   //express server stored inside a variable called app
const questions = require("./routes/questions.routes"); //setting a variable called questions to require the module routes
const scores = require("./routes/scores.routes");   //setting a variable called scores to require the module routes

app.use(express.static("./public"));  //hosting the public folder, all the front end content
app.use(express.json());  //must have in order to accept data into the application, converts the data into a json format to utilize in the requests
app.use("/", questions);  //allows our server to use the routing object questions
app.use("/", scores);  //allows our server to use the routing object scores

app.listen(8080, () => {        //defines the port and runs the server 
  console.log("Server is running OMG!")
});