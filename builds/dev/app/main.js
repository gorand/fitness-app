;(function(){
  'use strict';
  
  angular
    .module('fitness', [
      'ngRoute',
      'ui.bootstrap',
      'fitness.home',
      'fitness.profile',
      'fitness.about',
      'fitness.users'
    ])
    .controller('MainCtrl', MainController);

  // @ngInject
  function MainController ($rootScope) {
    var that = this;

    $rootScope.root = 'Root 1';
  }
})();
