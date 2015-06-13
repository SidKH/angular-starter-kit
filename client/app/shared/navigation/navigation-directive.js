(function () {
  'use strict';

  module.exports = ['Config', '$location', function (Config, $location) {

    function link(scope) {

      // Set key to watch for active class
      scope.item.active = false;

      /**
       * Check if passed href is a location of current page
       * @param  {String}  href - href of the link
       * @return {Boolean}
       */
      function isActive(href) {
        return '/' + href === $location.path();
      }

      /**
       * Assign checked expression to the item active key
       */
      function check() {
        scope.item.active = isActive(scope.item.href);
      }

      // Set watcher onRouteChangeSuccess and destroyer for it
      var destroyWatcher = scope.$on('$routeChangeSuccess', check);

      // Initial check for active link
      check();

      // Clean up
      scope.$on('$destroy', destroyWatcher);
    }

    return {
      templateUrl: Config.rootPath + 'shared/navigation/navigation-view.html',
      link: link,
      sope: {},
      replace: true
    };
  }];

}());