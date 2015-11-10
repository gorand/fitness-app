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