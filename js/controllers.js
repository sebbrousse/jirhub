'use strict';

/* Controllers */

var jirhubControllers = angular.module('jirhubControllers', []);

jirhubControllers.controller('IndexCtrl', ['$scope', '$github'
  function($scope, $github) {
	var username = 'sebbrousse';
	var reponame = 'jirhub';
	$scope.issues = github.getIssues(username, reponame);
  }]);

jirhubControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);

jirhubControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);
