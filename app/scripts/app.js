'use strict';

angular.module('angular2App', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/chuck.html',
        controller: 'ChuckCtrl'
      })
      .when('/chuck', {
        templateUrl: 'views/chuck.html',
        controller: 'ChuckCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
