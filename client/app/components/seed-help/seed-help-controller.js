(function () {
  'use strict';

  module.exports = ['$scope', 'Query', function ($scope, Query) {
    Query.test.get(function (res) {
      $scope.text = res.data;
    });
  }];

}());