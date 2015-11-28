;(function(){
  'use strict';

  angular
    .module('fitness.workouts')
    .controller('WorkoutCtrl', WorkoutController)
  
     function WorkoutController(workouts) {
      var sc = this;
      sc.workouts = [];
      workouts.getWorkouts().then(function(_data) {
        console.log( _data );
        sc.workouts = _data;
      });
    }

})();
