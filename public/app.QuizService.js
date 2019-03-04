"use strict";
//inject $http in the function QuizService to make the requests
function QuizService($http, $location) {
  const self = this;
//method that is used to retrieve questions value from our server
  self.getQuestions = () => {
    return $http({
      method: "GET",
      url: "/questions"   //URI endpoint, identifier of location for the questions resource
    });
  };
//method that is used to retrieve scoress value from our server
  self.getScores = () => {
    return $http({
      method: "GET",
      url: "/scores"   //URI endpoint, identifier of location for the scores resource
    });
  };
//method that is used to add a value to our server, player_name and score are the parameters passing thru the method
  self.addScore = (player_name, score) => {
    $location.path("/scores")
    return $http({
      method: "POST",
      url: "/scores",  //URI endpoint, identifier of location for the scores resource
      data: {player_name: player_name, score: score} //represents data posted to the server
    });
  };
//method that is used generate the score value, compares answer selected to the answers in our database
  self.checkScore = (answers) => {
    let score = 0
    for (let i = 0; i<answers.length; i++) {
      if (answers[i].question.answer === answers[i].answer){
        score++
      };
    };
    return score;
  };
//method used to activate the quiz part of the game
  self.startGame = () => {
    $location.path("/quiz")
  };
//method used to replay the quiz
  self.playAgain = () => {
    $location.path("/quiz")
  };
};
// QuizService contains these three methods:
// addScore
// addScores
// getQuestions



angular 
  .module("App")
  .service("QuizService", QuizService);