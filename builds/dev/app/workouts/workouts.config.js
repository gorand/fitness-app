;(function(){
  'use strict';

  angular
    .module('fitness.workouts', [
      'fitness.dbc'
    ])
    .config(workoutConfig)

    //ngIngect
    function workoutConfig($stateProvider) {
      $stateProvider
        .state( 'workouts', {
          url: '/workouts',
          templateUrl: 'app/workouts/workouts.html',
          controller: 'WorkoutCtrl',
          controllerAs: 'wc'
        });
      }

})();