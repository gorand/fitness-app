;(function() {
  'use strict'
  angular
    .module('fitness.profile', [
      'ngRoute'
    ])
    .controller('ProfileCtrl', ProfileController)
    .config(ProfileConfig)

    function ProfileController() {
      console.log( 'Profile Page' );
    }
    function ProfileConfig($routeProvider) {
      $routeProvider
        .when('/profile', {
          templateUrl: 'app/profile/profile.html',
          controller: 'ProfileCtrl'
        });
    }

})();