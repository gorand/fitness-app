;(function(){
  'use strict';

  angular
    .module('fitness.members', [
      'fitness.dbc'
    ])
    .config(memberConfig)

    //ngIngect
    function memberConfig($routeProvider) {
      $routeProvider
        .when( '/members', {
          templateUrl: 'app/users/members.html',
          controller: 'MemberCtrl',
          controllerAs: 'mc'
        });
      }

})();