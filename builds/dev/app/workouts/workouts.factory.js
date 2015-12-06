;(function(){
  'use strict';

  angular
    .module('fitness.workouts')
    .factory('workouts', WorkoutFactory)
  
  // @ngInject
  function WorkoutFactory(dbc, $firebaseArray, $firebaseObject) {
    var fc = {};
    var ref = dbc.getRef();
    var workotsRef = ref.child('workouts');

    var workouts = null;

    fc.getWorkouts = function() {
      return $firebaseArray(workotsRef).$loaded(function(_d){
        return _d;
      });
    };

    fc.createBlankWorkout = function() {
      return $firebaseArray(workotsRef).$add({
        name: '',
        type: ''
      }).then(function(_ref) {
        return $firebaseObject(_ref).$loaded();
      });
    }
 
    return fc;
  }

})();
