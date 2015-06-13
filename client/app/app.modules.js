(function () {
  'use strict';

  angular.module('app', [
    'ngRoute',
    'ngResource',
    require('./components').name,
    require('./shared').name
  ])
    .config(require('./app.routes'))
    .service('Query', require('./app.queries'));

}());