'use strict';

/* Controllers */

var app = angular.module('ordersApp.controllers', []);

app.controller('IndexCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {


//            $scope.items = menuList;

		$scope.items = [
			{id: 1, title: 'i-Twister', price: 44, spices: 'off', count: 1, image: "img/Hydrangeas.jpg", description: "This is fresh salad with tasty chiken"},
			{id: 2, title: 'Твистер из тостера', price: 103, spices: 'off', count: 1, image: "img/Lighthouse.jpg", description: "This is fresh salad with tasty pork"},
            {id: 3, title: 'Биггер', price: 148, spices: 'off', count: 1, image: "img/Lighthouse.jpg", description: "This is fresh salad with tasty beef"}
		];

        $scope.amount = 0;
		$scope.selectedItems = [];

        $scope.add = function(index) {
            $scope.sum = 0;
            $scope.amount = 0;
            var len = $scope.selectedItems.length;

            for (var i = 0; i < len; i++)
            {
                if($scope.items[index].id == $scope.selectedItems[i].id)
                {
                    $scope.selectedItems.splice(i,1);
                    break;
                }
            }
            $scope.selectedItems.push($scope.items[index]);
            console.log($scope.selectedItems);

            for (var j = 0; j < $scope.selectedItems.length; j++)
            {
                $scope.sum +=  $scope.selectedItems[j].price * $scope.selectedItems[j].count;
                $scope.amount += $scope.selectedItems[j].count;
            }
            console.log($scope.sum);
        }


    }]);

app.controller('CartCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {

        $scope.cart = [
            {id: 1, title: 'i-Twister', price: 44,  count: 2, image: "img/Hydrangeas.jpg"},
            {id: 3, title: 'Биггер', price: 148,  count: 3, image: "img/Lighthouse.jpg"}
        ];
    $scope.total = 0;

    for(var i = 0; i < $scope.cart.length; i++)
    {
        $scope.total += $scope.cart[i].price*$scope.cart[i].count;
        console.log($scope.total);
    }

        $scope.check = function() {
//            var postData = {p_flow_id: $('#pFlowId').val(),
//                p_flow_step_id: $('#pFlowStepId').val(),
//                p_instance: $('#pInstance').val(),
//                x01: $scope.cart
//            };
//            $http.post("wwv_flow.show", postData
//                ).success(function(data, status, headers, config){
//
//            });

            console.log($scope.cart);
        }


    }]);