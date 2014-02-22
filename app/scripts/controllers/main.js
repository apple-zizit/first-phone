'use strict';

angular.module('avnerPhone3App')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/some_data').success(function(someData) {
      $scope.someData = someData;
    });
  });
