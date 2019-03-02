"use strict"

const home = {
    templateUrl: "/app/home.html",
    controller: ["QuizService", function(QuizService){
        const vm= this;
        vm.startGame = function() {
            QuizService.startGame()
        }
    }]
}

angular
    .module("App")
    .component("home", home)