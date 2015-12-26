;(function(){
  'use strict';

  angular
    .module('fitness.crud', [])
    .directive('ftCrud', crud);

  // @ngInject
  function crud() {
    return {
      restrict: 'AE',
      require: 'ngModel',
      scope: {
        initVal: '@crudInitVal',
        name: '@crudTitle',
        crudTitle: '=ngModel'
      },
      templateUrl: 'app/directive/crud.html',
      link: function(scope, elem, attr, ngModel) {
        var value,
            title;

        value = attr.crudInitVal;
        title = attr.crudTitle;
        scope.clickCrud = function() {
          console.log( scope.crudTitle );
        }
      }
    }
  }

})();
