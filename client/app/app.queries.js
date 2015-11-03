(function () {
  'use strict';

  angular.module('App')
    .service('Query', ['$resource', 'Config', function ($resource, Config) {
      return {
        test: $resource(Config.apiPath + 'test', {}, {
          get: {method: 'GET'}
        })
      };
    }]);

}());