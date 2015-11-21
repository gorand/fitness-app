;(function() {
  'use strict'
  angular
    .module('fitness.profile', [
      'ngRoute'
    ])
    .controller('ProfileCtrl', ProfileController)
    .config(ProfileConfig)

  // @ngInject
  function ProfileController() {
    console.log( 'Profile Page' );
  }

  // @ngInject
  function ProfileConfig($routeProvider) {
    $routeProvider
      .when('/profile', {
        templateUrl: 'app/profile/profile.html',
        controller: 'ProfileCtrl'
      });
  }

})();