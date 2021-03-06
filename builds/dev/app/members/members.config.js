;(function(){
  'use strict';

  angular
    .module('fitness.members', [
      'fitness.dbc'
    ])
    .config(memberConfig)

    //ngIngect
    function memberConfig($stateProvider) {
      $stateProvider
        .state( 'members', {
          url: '/members',
          templateUrl: 'app/members/members.html',
          controller: 'MemberCtrl',
          controllerAs: 'mc'
        });
      }

})();