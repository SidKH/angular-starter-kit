/*jslint unparam:true*/
module.exports = ['Config', function (Config) {

  function link(scope, element, attrs) {
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
}];