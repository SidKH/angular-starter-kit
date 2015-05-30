module.exports = angular.module('shared', [
  require('./header').name,
  require('./navigation').name
])
  .constant('Config', require('./config'));