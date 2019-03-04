"use strict";

const quiz = {
  templateUrl: "app/quiz.html",
  controller: ["QuizService", function (QuizService) {
    const vm = this;
    vm.answerList = [false, false, false, false, false]; //starting array with all answers unselected

      //retrieves the 20 questions from our database
    QuizService.getQuestions().then(function (response) {
      vm.allQuestions = response.data;
      vm.questionSelection = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]; //index of our question database
      vm.questionList = [];     //array for our 5 random questions

      for (let i = 0; i < 5; i++) {                          //chooses 5 questions at random from our database
        let randNum = Math.floor(Math.random() * vm.questionSelection.length);
        vm.questionList.push(vm.allQuestions[vm.questionSelection[randNum]])
        vm.questionSelection.splice(randNum, 1)
      }
    });
//when answer selected the value in the answerList array is spliced out and the answer from the quiz replaces it
    vm.submitAnswer = (question, answer, index) => {
      vm.answerList.splice(index, 1, {question: question, answer: answer})
    };
//
    vm.submitForm = () => {
      let submit = true
//ensures all the questions have been answered before submitting is possible
      for (let i=0; i<vm.answerList.length; i++) {
        if (vm.answerList[i] === false) {
          submit = false
        }
      }
      //once all 5 questions are answered, submits to check the score
      if (submit){
        vm.showSubmit = true
        vm.userScore = QuizService.checkScore(vm.answerList)
      }
    };
//once all questions have been checked the score with player_name is submitted
    vm.submitScore = (userName) => {
      QuizService.addScore(userName, vm.userScore)
    };
  }]
};

angular
  .module("App")
  .component("quiz", quiz);