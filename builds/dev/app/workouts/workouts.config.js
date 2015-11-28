;(function(){
  'use strict';

  angular
    .module('fitness.workouts', [
      'fitness.dbc'
    ])
    .config(workoutConfig)

    //ngIngect
    function workoutConfig($routeProvider) {
      $routeProvider
        .when( '/workouts', {
          templateUrl: 'app/workouts/workouts.html',
          controller: 'WorkoutCtrl',
          controllerAs: 'wc'
        });
      }

})();