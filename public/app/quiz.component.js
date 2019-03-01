"use strict";

const quiz = {
  templateUrl: "app/quiz.html",
  controller: ["QuizService", function (QuizService) {
    const vm = this;
    vm.answerList = [false, false, false, false, false]

    QuizService.getQuestions().then(function (response) {
      vm.allQuestions = response.data
      vm.questionSelection = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
      vm.questionList = []

      for (let i = 0; i < 5; i++) {
        let randNum = Math.floor(Math.random() * vm.questionSelection.length);
        vm.questionList.push(vm.allQuestions[vm.questionSelection[randNum]])
        vm.questionSelection.splice(randNum, 1)
      }

    })

    vm.submitAnswer = function (question, answer, index) {
      vm.answerList.splice(index, 1, {question: question, answer: answer})
    }

    vm.submitForm = function() {
      let submit = true

      for (let i=0; i<vm.answerList.length; i++) {
        if (vm.answerList[i] === false) {
          submit = false
        }
      }

      if (submit){
        vm.userScore = QuizService.checkScore(vm.answerList)
      }
    }

    vm.submitScore = (userName) => {
      QuizService.addScore(userName, vm.userScore)
    }

  }]
}

angular
  .module("App")
  .component("quiz", quiz);