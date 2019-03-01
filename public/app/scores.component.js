"use strict";

const scores = {
  templateUrl: "app/scores.html",
  controller: ["QuizService", function (QuizService){
    const vm = this;

    QuizService.getScores().then(function(response) {
      vm.scoreboard = response.data;
    })
  }]
}

angular 
  .module("App")
  .component("scores", scores);