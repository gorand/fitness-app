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

    return fc;
  }

})();