;(function(){
  'use strict';

  angular
    .module('fitness.members')
    .controller('MemberCtrl', MemberController)
  
     function MemberController(members) {
      var sc = this;
      sc.members = [];
      members.getMembers().then(function(_data) {
        sc.members = _data;
        console.log( _data );
      });
    }

})();
