'use strict';

var phoneApp = angular.module('phoneApp', ['ui.router']);


phoneApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/index");

   // $stateProvider
   //  .state('index', {
   //    url: "",
   //    views: {
   //      "viewRegister": { templateUrl: "partials/register.html" }
   //      // "viewB": { template: "index.viewB" }
   //    }
   //  })
});
