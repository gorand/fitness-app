;(function(){
  'use strict';

  angular
    .module('fitness.login')
    .factory('registration', LoginFactory)
  
  // @ngInject
  function LoginFactory(dbc, $firebaseObject) {
    var fc = {};
    
    return fc;
  }

})();
