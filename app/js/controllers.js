'use strict';

/* Controllers */

angular.module('ordersApp.controllers', []).
    controller('IndexCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {

        $scope.path = '/';

        if ($routeParams.path) {

            $scope.path = $routeParams.path;

        }

        $scope.add = function(){
            $scope.array = [];

        }
    }]);


