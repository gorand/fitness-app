;(function(){
  'use strict';
  
  angular
    .module('fitness', [
      'ngRoute',
      'ui.bootstrap',
      'fitness.home',
      'fitness.about'
    ])
    .controller('MainCtrl', MainController);

  function MainController ($rootScope) {
    var that = this;

    $rootScope.root = 'Root 1';
  }
})();

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
;(function() {
	'use strict';
	angular
		.module('fitness.home', [])
		.controller('HomeCtrl', HomeController)
		.config(HomeConfig);

	function HomeController() {
		console.log( 'Home controller' );
	};

	function HomeConfig($routeProvider) {
		console.log( 'Home config!' );
		$routeProvider
			.when('/', {
				templateUrl: 'app/home/home.html',
				controller: 'HomeCtrl'
			});
	};
})();