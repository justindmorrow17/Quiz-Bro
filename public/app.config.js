"use strict";

angular
  .module("App")
  .config(["$routeProvider", function($routeProvider) {
    $routeProvider
    .when("/welcome", {
      template: "<home></home>"
    })
    .when("/quiz", {
      template: "<quiz></quiz>"
    })
    .when("/scores", {
      template: "<scores></scores>"
    }).otherwise({ redirectTo: "/welcome"})

  }])