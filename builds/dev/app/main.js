;(function(){
  'use strict';
  
  angular
    .module('fitness', [
      'ngRoute',
      'ui.bootstrap',
      'fitness.home',
      'fitness.profile',
      'fitness.about',
      'fitness.users',
      'fitness.members',
      'fitness.workouts'
    ])
    .constant('FDBURL', 'https://basecontacts.firebaseio.com/')
    .controller('MainCtrl', MainController);

  // @ngInject
  function MainController ($rootScope) {
    var that = this;

    $rootScope.root = 'Root 1';
  }
})();
