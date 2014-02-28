'use strict';

//var phoneControllers = angular.module('phoneControllers', []);

var registerCtrl =  function($scope, $state, $http) {

	$scope.register = function () {
    	$http({
		    method: 'POST',
		    url: '/api/register',
		    data: "name=" + $scope.currentName,
		    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		});
    }

    setInterval(function () {
    	$http.get('/api/online').success(function(users) {
      	$scope.onlineUsers = users;
    });
    }, 2000);

};

// myPhoneControllers.controller('loginVM', ['$scope', '$state', function($scope, $state) {

// 	$scope.login = function () {

// 		if (angular.isUndefined($scope.email)) { return false };
// 		if (angular.isUndefined($scope.password)) { return false };

// 		$state.go('app.phone.dailer');
// 		return true;
// 	}

// }]);

// myPhoneControllers.controller('dailerVM', ['$scope', '$state', function($scope, $state) {

// 	$scope.call = function () {
// 		$state.transitionTo('app.phone.outgoing', {phoneNumber: $scope.phoneNumber});
// 	}

// }]);

// myPhoneControllers.controller('outgoingcallVM', [
// 	'$scope', 
// 	'$state', 
// 	'$stateParams',
// 	'CallService', 
// 	'SharedData',
// 	function($scope, $state, $stateParams, CallService, SharedData) {

// 	$scope.callStatus = "calling...";
// 	$scope.phoneNumber = $stateParams.phoneNumber;

// 	var outGoingCall = CallService.makeCall(
// 		$scope.phoneNumber, callStausEventHandler);

// 	function callStausEventHandler (call) {
// 		$scope.callStatus = call.status;	
// 		$scope.$apply();
// 		SharedData.setData(call);

// 		if (call.status==="accepted") {
// 			$state.transitionTo('app.phone.incall');	
// 		};
// 	}

// }]);

// myPhoneControllers.controller('incallVM', [
// 	'$scope', 
// 	'$state', 
// 	'CallService', 
// 	'SharedData',
// 	function($scope, $state, CallService, SharedData) {

// 	if (SharedData.getData() !== undefined) {
// 		$scope.phoneNumber = SharedData.getData().phoneNumber;	
// 	}
// 	else {
// 		$state.transitionTo('app.phone.dailer');	
// 	}
	
// }]);

