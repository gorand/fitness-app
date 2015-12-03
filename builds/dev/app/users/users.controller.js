;(function(){
  'use strict';

  angular
    .module('fitness.users')
    .controller('UserCtrl', UserController)
  
     function UserController(users) {
      var sc = this;
      sc.users = [];
      users.getUsers().then(function(_data) {
        sc.users = _data;
        console.log( _data );
      });
    }

})();
