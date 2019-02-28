"use strict";

const quiz = {
  templateUrl: "app/quiz.html",
  controller: ["QuizService", function (QuizService) {
    const vm = this;

    QuizService.getQuestions().then(function (response) {
      console.log(response);
      vm.allQuestions = response.data
      vm.questionSelection = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
      vm.questionList = []

      for (let i = 0; i < 2; i++) {
        let randNum = Math.floor(Math.random() * vm.questionSelection.length);
        vm.questionList.push(vm.allQuestions[vm.questionSelection[randNum]])
        vm.questionSelection.splice(randNum, 1)
      }

    })

    vm.submitAnswer = function (question, answer) {
      vm.answerList = []
      question.clicked = true;

      if (vm.answerList.length === 0) {
        vm.answerList.push({
          question: question,
          answer: answer
        })
      } else {
          if (question.clicked) {
            vm.answerList.splice(i, 1, {
              question: question,
              answer: answer
            })
          } else {
            vm.answerList.push({
              question: question,
              answer: answer
            })
          }
        }
    }

  }]
}

angular
  .module("App")
  .component("quiz", quiz);