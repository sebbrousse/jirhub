'use strict';

/* App Module */

var jirhubApp = angular.module('jirhubApp', [
  'ngRoute',
  'jirhubAppControllers',
  'jirhubAppFilters',
  'jirhubAppServices',
  'pascalprecht.github-adapter'
]);

jirhubApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      when('/', {
        templateUrl: 'partials/index.html',
        controller: 'IndexCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

/*
jirhubApp.config(function ($githubProvider) {
  $githubProvider.username('YOUR_USERNAME');
  $githubProvider.password('YOUR_PASSWORD');
  $githubProvider.authType('basic');
}); 
*/
