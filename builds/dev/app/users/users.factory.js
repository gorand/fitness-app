;(function(){
  'use strict';

  angular
    .module('fitness.users')
    .factory('users', UserFactory)
  
  // @ngInject
  function UserFactory(dbc, $firebaseArray) {
    var fc = {};
    var ref = dbc.getRef();
    var usersRef = ref.child('users');

    var users = null;

    fc.getUsers = function(){
      return $firebaseArray(usersRef).$loaded(function(_data){
        // console.log(_data);
        return _data;
      });
    };
 
    return fc;
  }

})();
