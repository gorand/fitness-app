;(function() {
	'use strict';
	angular
		.module('fitness.home', [])
		.controller('HomeCtrl', HomeController)
		.config(HomeConfig);

  // @ngInject
	function HomeController() {
		var that = this;

		that.title = "Home Page";
		that.name = "LoftSchool";
		that.valuables = ['We are the best', 'We are awesome'];
		that.addValubles = function() {

		}
	};

  // @ngInject
	function HomeConfig($routeProvider) {
		console.log( 'Home config!' );
		$routeProvider
			.when('/', {
				templateUrl: 'app/home/home.html',
				controller: 'HomeCtrl'
			});
	};
})();