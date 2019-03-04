"use strict"

const home = {
    templateUrl: "/app/home.html",
    controller: ["QuizService", function(QuizService) {
        const vm= this;

        vm.startGame = () => {
            QuizService.startGame();
        };
    }]
};

angular
    .module("App")
    .component("home", home);