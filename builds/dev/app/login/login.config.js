;(function(){
  'use strict';

  angular
    .module('fitness.login', [
      'fitness.dbc'
    ])
    .config(loginConfig)

    //ngIngect
    function loginConfig($stateProvider) {
      $stateProvider
        .state( 'signup', {
          url: '/signup',
          templateUrl: 'app/login/signup.html',
          controller: 'LoginCtrl',
          controllerAs: 'lc'
        })
        .state( 'signin', {
          url: '/signin',
          templateUrl: 'app/login/signin.html',
          controller: 'LoginCtrl',
          controllerAs: 'lc'
        });
      }

})();