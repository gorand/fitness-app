;(function(){
  'use strict';

  angular
    .module('fitness.workouts')
    .factory('workouts', WorkoutFactory)
  
  // @ngInject
  function WorkoutFactory(dbc, $firebaseArray) {
    var fc = {};
    var ref = dbc.getRef();
    var workotsRef = ref.child('workout');

    var workouts = null;

    fc.getWorkouts = function(){
      return $firebaseArray(workotsRef).$loaded(function(_d){
        return _d;
      });
    };
 
    return fc;
  }

})();
