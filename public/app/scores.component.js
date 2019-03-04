"use strict";

const scores = {
  templateUrl: "app/scores.html",
  controller: ["QuizService", function(QuizService) {
    const vm = this;

  // retrieves the score data from our database  
    QuizService.getScores().then(function(response) {
      vm.scoreboard = response.data;
    });
//play again function
    vm.playAgain = () => {
      QuizService.playAgain();
    };
  }]
};

angular 
  .module("App")
  .component("scores", scores);