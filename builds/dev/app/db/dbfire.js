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

    return fc;
  }

})();