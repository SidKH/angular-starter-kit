(function () {
  'use strict';

  angular.module('App')
    .config(function ($routeProvider, Config) {
      $routeProvider
        .when('/home', {
          templateUrl: Config.rootPath + 'components/home/home-view.html',
          controller: 'home'
        })
        .when('/seed-help', {
          templateUrl: Config.rootPath + 'components/seed-help/seed-help-view.html',
          controller: 'seedHelp'
        })
        .otherwise({
          redirectTo: '/home'
        });
    });

}());