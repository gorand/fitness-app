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
  function MainRun($rootScope, $state, $stateParams, dbc) {
    $rootScope.logout = function() {
      console.log( 'logout' );
      dbc.get$Auth.$unauth();
    };

    $rootScope.$on('$stateChangeStart',
      function(event, toState, toParams, fromState, fromParams) {
        if(toState.authenticate && !dbc.isLogin()) {
          $state.transitionTo('about');
          event.preventDefault();
          console.log( "Transition To about page" );
        }
      });

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  }

  // @ngInject
  function MainConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }

})();
