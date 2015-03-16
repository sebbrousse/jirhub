'use strict';

/* Services */

var jirhubServices = angular.module('jirhubServices', ['ngResource']);

jirhubServices.factory('Issue', ['$resource',
  function($resource){
    return $resource('issues/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);
