(function () {
  'use strict';

  angular.module('App.components.seedHelp')
    .controller('seedHelp', function ($scope, Query) {
      Query.test.get(function (res) {
        $scope.text = res.data;
      });
    });

}());