;(function(){
  'use strict';

  angular
    .module('fitness.users')
    .factory('users', UserFactory)
  
  // @ngInject
  function UserFactory(dbc, $firebaseArray, $firebaseObject) {
    var fc = {};
    var ref = dbc.getRef();
    var usersRef = ref.child('users');

    var users = null;

    fc.getUsers = function() {
      return $firebaseArray(usersRef).$loaded(function(_data){
        // console.log(_data);
        return _data;
      });
    };
    
    fc.getUser = function(_id) {
      return $firebaseObject(usersRef.child(_id)).$loaded();
    }

    fc.createBlankUser = function() {
      return $firebaseArray(usersRef).$add({
        name: '',
        surname: ''
      }).then(function(_ref){
        return $firebaseObject(_ref).$loaded();
      })
    }
    return fc;
  }

})();
