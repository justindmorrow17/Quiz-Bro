"use strict";

const quiz = {
  templateUrl: "app/quiz.html",
  controller: ["QuizService", function (QuizService) {
    const vm = this;
    vm.answerList = [false, false, false, false, false];

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

    vm.submitAnswer = (question, answer, index) => {
      vm.answerList.splice(index, 1, {question: question, answer: answer})
    };

    vm.submitForm = () => {
      let submit = true

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

    vm.submitScore = (userName) => {
      QuizService.addScore(userName, vm.userScore)
    };
  }]
}

angular
  .module("App")
  .component("quiz", quiz);