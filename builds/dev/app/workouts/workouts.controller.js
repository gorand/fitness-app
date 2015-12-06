;(function(){
  'use strict';

  angular
    .module('fitness.workouts')
    .controller('WorkoutCtrl', WorkoutController)
  
     function WorkoutController(workouts) {
      var sc = this;

      sc.editWorkout = function(_workout) {
        console.log( _workout );
        sc.editingWorkout = {
          name: _workout.name,
          type: _workout.type
        };
      };



      sc.createWorkout = function() {
        workouts.createBlankWorkout().then(function(_data) {
          console.log( _data );
          sc.editWorkout(_data);
        })
      };

      sc.workouts = [];
      workouts.getWorkouts().then(function(_data) {
        console.log( _data );
        sc.workouts = _data;
      });


    }

})();
