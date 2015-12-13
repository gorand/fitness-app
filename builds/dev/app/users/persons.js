;(function() {
  'use strict';

  angular
    .module('fitness.persons', [])
    .controller('PersonCtrl', PersonController)

  // @ngInject
  function PersonController() {
    var sc = this;
    var person = [];

    angular.forEach(listJson, function(item){
      var date = +new Date(item.registered);
      item.registered = date;
      person.push(item);
    });

    sc.users = person;
  }
})();