;(function() {
  'use strict'
  angular
    .module('fitness.about', [])
    .controller('AboutCtrl', AboutController)
    .config(AboutConfig)

    function AboutController() {
      console.log( 'About Page' );
    }
    function AboutConfig($stateProvider) {
      console.log( 'AboutConfig' );
      $stateProvider
        .state('about', {
          url: '/about',
          templateUrl: 'app/about/about.html',
          controller: 'AboutCtrl'
        });
    }

})();