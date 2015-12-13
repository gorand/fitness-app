;(function(){
  'use strict';

  angular
    .module('fitness.dbc', [
      'firebase'
    ])
    .factory('dbc', dbcFactory)

  // @ngInject
  function dbcFactory(FDBURL, $firebaseAuth) {
    var fc = {};
    var ref = new Firebase(FDBURL);
    var auth = $firebaseAuth(ref);

    fc.getRef = function() {
      return ref;
    }

    fc.get$Auth = function() {
      return auth;
    }

    fc.isLogin = function() {
      return auth.$getAuth();
    }

    return fc;
  }

})();