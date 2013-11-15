'use strict';

/* Directives */

var app = angular.module('ordersApp.directives', []);

app.directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);

app.directive('counter', function() {
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

app.directive('counterCart', function() {
        return {
            template:
                '<span><input type="text" ng-model="num" class="counter">'+
                    '<i class="icon-arrow-up arrow-up-cart" ng-click="up()"></i><i class="icon-arrow-down arrow-down-cart"  ng-click="down()"></i></span>',

            replace: true,

            link: function(scope, element, attrs) {

                scope.num = scope.$parent.cart[attrs.itemIndex].count;
                scope.totalprice = scope.$parent.cart[attrs.itemIndex].price* scope.num;

                scope.up = function()
                {
                    scope.num = parseInt(scope.num);
                    scope.num ++;
                    scope.totalprice = scope.$parent.cart[attrs.itemIndex].price*scope.num;
                    scope.$parent.total += scope.$parent.cart[attrs.itemIndex].price;

                };
                scope.down = function()
                {
                    scope.num = parseInt(scope.num);
                    if(scope.num > 0)
                    {
                        scope.$parent.total -= scope.$parent.cart[attrs.itemIndex].price;
                        scope.num--;
                    }
                    else
                        scope.num = 0;

                    scope.totalprice = scope.$parent.cart[attrs.itemIndex].price*scope.num;
                };

            }
        }
    });