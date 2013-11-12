'use strict';

/* Directives */

angular.module('ordersApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);

angular.module('ordersApp.directives', []).
    directive('counter', function() {
    return {
        template:  '<p class="article">Count'+
            '<input type="text" ng-model="num" class="counter" value={{num}}>'+
            '<i class="icon-arrow-up arrow-up" ng-click="up()"></i><i class="icon-arrow-down arrow-down"  ng-click="down()"></i></p>',

        replace: false,

        link: function(scope, element, controller) {
            scope.num = 1;
            scope.up = function()
            {
                scope.num = parseInt(scope.num);
                scope.num ++;
            }

            scope.down = function()
            {
                scope.num = parseInt(scope.num);
                if(scope.num > 0)
                    scope.num--;
                else
                    scope.num = 0;
            }
        }
        }
    });