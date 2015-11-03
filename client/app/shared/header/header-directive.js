(function () {
  'use strict';

  angular.module('App.shared.header')
    .directive('appHeader', ['Config', function (Config) {

      function link(scope) {
        scope.navLinks = [
          {title: 'Home', href: 'home'},
          {title: 'Help', href: 'seed-help'}
        ];
      }

      return {
        templateUrl: Config.rootPath + 'shared/header/header-view.html',
        link: link,
        replace: true
      };
    }]);

}());