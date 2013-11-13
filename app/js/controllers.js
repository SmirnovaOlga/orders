'use strict';

/* Controllers */

angular.module('ordersApp.controllers', []).
    controller('IndexCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {

//        $http.get('server').success(function(data)
//        {
//            $scope.items = data;
//        });

		$scope.items = [
			{id: 1, title: 'product1', price: 20, spices: 'off', count: 1, image: "img/Hydrangeas.jpg"},
			{id: 2, title: 'product2', price: 30, spices: 'off', count: 1, image: "img/Lighthouse.jpg"},
			{id: 3, title: 'product3', price: 40, spices: 'off', count: 1, image: "img/Lighthouse.jpg"}
		];

		$scope.cart = [];

        $scope.add = function(index) {

            var len = $scope.cart.length;

            for (var i = 0; i < len; i++)
            {
                if($scope.items[index].id == $scope.cart[i].id)
                {
                    $scope.cart.splice(i,1);
                    break;
                }
            }
            $scope.cart.push($scope.items[index]);
            console.log($scope.cart);
        }
    }]);