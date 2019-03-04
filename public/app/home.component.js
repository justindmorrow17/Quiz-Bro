"use strict"

const home = {
    templateUrl: "/app/home.html",
    controller: ["QuizService", function(QuizService) {
        const vm= this;
// function to start the game
        vm.startGame = () => {
            QuizService.startGame();
        };
    }]
};

angular
    .module("App")
    .component("home", home);