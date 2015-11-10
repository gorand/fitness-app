;(function(){
    'use strict';
    
    console.log( 'Test!' );
    angular
        .module('fitness', [])
        .controller('MainCtrl', MainController);

    function MainController ($rootScope) {
        var that = this;

        $rootScope.root = 'Root 1';
    }

})();

;(function() {
	'use strict'
	console.log( 'About page' );
})();