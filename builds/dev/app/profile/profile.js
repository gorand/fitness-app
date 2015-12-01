;(function() {
  'use strict'
  angular
    .module('fitness.profile', [])
    .controller('ProfileCtrl', ProfileController)
    .config(ProfileConfig)

  // @ngInject
  function ProfileController() {
    console.log( 'Profile Page' );
  }

  // @ngInject
  function ProfileConfig($stateProvider) {
    $stateProvider
      .state('profile', {
        url: '/profile',
        templateUrl: 'app/profile/profile.html',
        controller: 'ProfileCtrl'
      });
  }

})();