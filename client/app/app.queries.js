(function () {
  'use strict';

  module.exports = ['$resource', 'Config', function ($resource, Config) {
    return {
      test: $resource(Config.apiPath + 'test', {}, {
        get: {method: 'GET'}
      })
    };
  }];

}());