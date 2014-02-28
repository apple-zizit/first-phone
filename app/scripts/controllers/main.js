'use strict';

angular.module('avnerPhone3App')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/some_data').success(function(someData) {
      $scope.someData = someData;
    });

    $scope.post_data = function () {
    	$http({
		    method: 'POST',
		    url: '/api/update_value',
		    data: "name=" + $scope.name,
		    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		});
    }

  });
