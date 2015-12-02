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
        .state( 'login', {
          url: '/signup',
          templateUrl: 'app/login/signup.html',
          controller: 'LoginCtrl',
          controllerAs: 'lc'
        });
      }

})();