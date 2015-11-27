;(function(){
  'use strict';

  angular
    .module('fitness.members')
    .factory('members', MemberFactory)
  
  // @ngInject
  function MemberFactory(dbc, $firebaseArray) {
    var fc = {};
    var ref = dbc.getRef();
    var usersRef = ref.child('users');

    var members = null;

    fc.getMembers = function(){
      return $firebaseArray(usersRef).$loaded(function(_d){
        // console.log(_d);
        return _d;
      });
    };
 
    return fc;
  }

})();
