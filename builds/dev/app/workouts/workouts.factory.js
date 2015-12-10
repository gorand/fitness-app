;(function(){
  'use strict';

  angular
    .module('fitness.workouts')
    .factory('workouts', WorkoutFactory)
  
  // @ngInject
  function WorkoutFactory($q, dbc, $firebaseArray, $firebaseObject) {
    var fc = {};
    var ref = dbc.getRef();
    var workoutsRef = ref.child('workouts');

    var workouts = null;

    fc.getWorkouts = function() {
      return $firebaseArray(workoutsRef).$loaded(function(_d){
        return _d;
      });
    };

    fc.saveWorkout = function(_workout) {
      var workout = $firebaseObject(workoutsRef.child(_workout.id));
      return workout.$loaded(function(_dbworkout) {
        _dbworkout.name = _workout.name;
        _dbworkout.type = _workout.type;
        return _dbworkout.$save();
      });
    };

    fc.deleteWorkout = function(_workout) {
      return $firebaseObject(workoutsRef.child(_workout.id)).$remove();
    }

    fc.createBlankWorkout = function() {
      return $firebaseArray(workoutsRef).$add({
        id: null,
        name: null,
        type: null
      }).then(function(_ref) {
        return $firebaseObject(_ref).$loaded();
      });
    }
    
    return fc;
  }

})();
