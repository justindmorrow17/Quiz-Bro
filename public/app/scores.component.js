"use strict";

const scores = {
  templateUrl: "app/scores.html",
  controller: ["QuizService", function (QuizService){
    const vm = this;
  }]
}

angular 
  .module("App")
  .component("scores", scores);