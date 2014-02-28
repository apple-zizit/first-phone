
'use strict';




var phoneApp = angular.module('phoneApp', [
  'ui.router'
]);

// var phoneApp = angular.module('phoneApp', [
//   'ui.router', 
//   'myPhoneAppServices',
//   'myPhoneControllers'
// ]);

phoneApp.controller('registerCtrl', ['$scope', '$state', '$http', registerCtrl]);


phoneApp.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('app/register');

  $stateProvider
    .state('app', {
      abstract: true, 
      url: '/app',
      views: {
        'header@': {
          templateUrl: 'partials/header.html'
          // controller: 'headerVM'
        },
        'footer@': {
          templateUrl: 'partials/footer.html'
        }
      }
    })
    .state('app.register', {
      url: '/register',
      views: {
        'content@': {
          templateUrl: 'partials/register.html',
          controller: 'registerCtrl'
        }
      }
    })
    // .state('app.phone', {
    //   abstract: true, 
    //   url: '/phone',
    // })
    // .state('app.phone.dailer', {
    //   url: '/dailer', 
    //   views: {  
    //     'content@': {
    //       templateUrl: 'partials/phone.dailer.html',
    //       controller: 'dailerVM'
    //     }
    //   }
    // })  
    // .state('app.phone.outgoing', {
    //   url: '/outgoing/:phoneNumber', 
    //   views: {
    //     'content@': {
    //       templateUrl: 'partials/phone.outgoingcall.html',
    //       controller: 'outgoingcallVM'
    //     }
    //   }
    // })
    // .state('app.phone.incall', {
    //   url: '/incall', 
    //   views: {
    //     'content@': {
    //       templateUrl: 'partials/phone.incall.html',
    //       controller: 'incallVM'
    //     }
    //   }
    // });

});



