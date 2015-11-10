;(function(){
    'use strict';
    
    angular
        .module('fitness', [
            'ngRoute',
            'fitness.home'
        ])
        .controller('MainCtrl', MainController);

    function MainController ($rootScope) {
        var that = this;

        $rootScope.root = 'Root 1';
    }

})();
