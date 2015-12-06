;(function(){
  'use strict';
  
  angular
    .module('fitness', [
      'ui.router',
      'ui.bootstrap',
      'fitness.home',
      'fitness.profile',
      'fitness.about',
      'fitness.persons',
      'fitness.users',
      'fitness.members',
      'fitness.workouts',
      'fitness.login'
    ])
    .constant('FDBURL', 'https://basecontacts.firebaseio.com/')
    .controller('MainCtrl', MainController)
    .run(MainRun)
    .config(MainConfig);

  // @ngInject
  function MainController($rootScope) {
    var that = this;

    $rootScope.root = 'Root 1';
  }
  
  // @ngInject
  function MainConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }

  // @ngInject
  function MainRun($rootScope, dbc) {
    $rootScope.logout = function() {
      console.log( 'logout' );
      dbc.get$Auth.$unauth();
    };
  }

})();
