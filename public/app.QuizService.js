"use strict";

function QuizService($http) {
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

  self.addScore = function() {
    return $http({
      method: "POST",
      url: "/scores"
    });
  };
};
// QuizService contains these three methods:
// addScore
// addScores
// getQuestions



angular 
  .module("App")
  .service("QuizService", QuizService);