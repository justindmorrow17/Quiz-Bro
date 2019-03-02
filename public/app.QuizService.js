"use strict";

function QuizService($http, $location) {
  const self = this;

  self.getQuestions = function() {
    return $http({
      method: "GET",
      url: "/questions"
    });
  };

  self.getScores = function() {
    return $http({
      method: "GET",
      url: "/scores"
    });
  };

  self.addScore = function(player_name, score) {
    $location.path("/scores")
    return $http({
      method: "POST",
      url: "/scores",
      data: {player_name: player_name, score: score}
    });
  };

  self.checkScore = function(answers) {
    let score = 0
    for (let i = 0; i<answers.length; i++) {
      if (answers[i].question.answer === answers[i].answer){
        score++
      }
    }
    return score;
  }

  self.startGame = function () {
    $location.path("/quiz")
  }

  self.playAgain = function() {
    $location.path("/quiz")

  }
};
// QuizService contains these three methods:
// addScore
// addScores
// getQuestions



angular 
  .module("App")
  .service("QuizService", QuizService);