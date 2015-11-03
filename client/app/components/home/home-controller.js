(function () {
  'use strict';

  angular.module('App.components.home')
	  .controller('home', ['$scope', function ($scope) {
	    $scope.text = 'Lorem ipsum';
	  }]);

}());