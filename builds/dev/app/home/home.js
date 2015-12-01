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
	function HomeConfig($stateProvider) {
		console.log( 'Home config!' );
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'app/home/home.html',
				controller: 'HomeCtrl',
				controllerAs: 'hc'
			});
	};
})();