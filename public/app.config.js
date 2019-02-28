"use strict";

angular
  .module("App")
  .config(["$routeProvider", function($routeProvider) {
    $routeProvider
    .when("/quiz", {
      template: "<quiz></quiz>"
    })
    .when("/scores", {
      template: "<scores></scores>"
    })

  }])