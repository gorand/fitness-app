;(function() {
  'use strict'
  angular
    .module('fitness.about', [
      'ngRoute'
    ])
    .controller('AboutCtrl', AboutController)
    .config(AboutConfig)

    function AboutController() {
      console.log( 'About Page' );
    }
    function AboutConfig($routeProvider) {
      console.log( 'AboutConfig' );
      $routeProvider
        .when('/about', {
          templateUrl: 'app/about/about.html',
          controller: 'AboutCtrl'
        });
    }

})();