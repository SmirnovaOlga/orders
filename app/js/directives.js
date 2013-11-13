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
        template:
            '<span><input type="text" ng-model="num" class="counter">'+
            '<i class="icon-arrow-up arrow-up" ng-click="up()"></i><i class="icon-arrow-down arrow-down"  ng-click="down()"></i></span>',

        replace: true,

        link: function(scope, element, attrs) {

			scope.num = scope.$parent.items[attrs.itemIndex].count;

            scope.up = function()
            {
                scope.num = parseInt(scope.num);
                scope.num ++;

				scope.$parent.items[attrs.itemIndex].count = scope.num;
            };

            scope.down = function()
            {
                scope.num = parseInt(scope.num);
                if(scope.num > 0)
                    scope.num--;
                else
                    scope.num = 0;

				scope.$parent.items[attrs.itemIndex].count =scope.num;
            };
        }
        }
    });