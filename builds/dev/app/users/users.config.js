;(function(){
  'use strict';

  angular
    .module('fitness.users', [
      'fitness.dbc'
    ])
    .config(userConfig)

    //ngIngect
    function userConfig($stateProvider) {
      $stateProvider
        .state( 'users', {
          url: '/users',
          templateUrl: 'app/users/users.html',
          controller: 'UserCtrl',
          controllerAs: 'uc',
          registered: true
        });
      }

})();