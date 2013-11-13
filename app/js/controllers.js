'use strict';

/* Controllers */

angular.module('ordersApp.controllers', []).
    controller('IndexCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {


//            $scope.items = menuList;

		$scope.items = [
			{id: 1, title: 'i-Twister', price: 44, spices: 'off', count: 1, image: "img/Hydrangeas.jpg", description: "This is fresh salad with tasty chiken"},
			{id: 2, title: 'Твистер из тостера', price: 103, spices: 'off', count: 1, image: "img/Lighthouse.jpg", description: "This is fresh salad with tasty pork"},
            {id: 3, title: 'Биггер', price: 148, spices: 'off', count: 1, image: "img/Lighthouse.jpg", description: "This is fresh salad with tasty beef"}
		];

        $scope.sum = 0;
        $scope.amount = 0;
		$scope.cart = [];

        $scope.add = function(index) {
            $scope.sum = 0;
            $scope.amount = 0;
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

            for (var j = 0; j < $scope.cart.length; j++)
            {
                $scope.sum +=  $scope.cart[j].price * $scope.cart[j].count;
                $scope.amount += $scope.cart[j].count;
            }

            console.log($scope.sum);
        }

        $scope.check = function() {
            var postData = {p_flow_id: $('#pFlowId').val(),
                p_flow_step_id: $('#pFlowStepId').val(),
                p_instance: $('#pInstance').val(),
                x01: self.search_field.val().toLowerCase(),
                x02: this.id,
                x03: $('#' + self.form_field.id).chosen_value().join(',')
            };
            $http.post("wwv_flow.show", postData
                ).success(function(data, status, headers, config){

            }).error(function(data, status, headers, config) {

            });
        }


    }]);