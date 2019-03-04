"use strict";

angular
  .module("App")
  .config(["$routeProvider", function($routeProvider) {
    $routeProvider
    .when("/welcome", {              //paths to welcome page
      template: "<home></home>"
    })
    .when("/quiz", {                 //paths to quiz page
      template: "<quiz></quiz>"
    })
    .when("/scores", {                //paths to score page
      template: "<scores></scores>"
    }).otherwise({ redirectTo: "/welcome"}) //paths to the home page under all conditions where quiz page or scores page isnt selected
  }]);