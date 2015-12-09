;(function(){
  'use strict';

  angular
    .module('fitness.workouts')
    .controller('WorkoutCtrl', WorkoutController)
  
     function WorkoutController(workouts) {
      var sc = this;

      sc.editWorkout = function(_workout) {
        console.log( _workout );
        sc.showForm = true;
        sc.editingWorkout = {
          id: _workout.$id,
          name: _workout.name,
          type: _workout.type
        };
      };

      sc.saveWorkout = function() {
        workouts.saveWorkout(sc.editingWorkout).then(function() {
        });
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
