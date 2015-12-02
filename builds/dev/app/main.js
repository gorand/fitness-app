;(function(){
  'use strict';
  
  angular
    .module('fitness', [
      'ui.router',
      'ui.bootstrap',
      'fitness.home',
      'fitness.profile',
      'fitness.about',
      'fitness.users',
      'fitness.members',
      'fitness.workouts',
      'fitness.login'
    ])
    .constant('FDBURL', 'https://basecontacts.firebaseio.com/')
    .controller('MainCtrl', MainController)
    .config(MainConfig);


  // @ngInject
  function MainController ($rootScope) {
    var that = this;

    $rootScope.root = 'Root 1';
  }
  // @ngInject
  function MainConfig($urlRouterProvider){
    $urlRouterProvider.otherwise('/');
  }

})();
