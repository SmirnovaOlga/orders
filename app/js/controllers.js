'use strict';

/* Controllers */

var app = angular.module('ordersApp.controllers', []);
app.controller('IndexCtrl', ['$scope', '$routeParams', '$location', '$http', function ($scope, $routeParams, $location, $http) {


    $scope.items = menuList;

//        $scope.items = [
//            {id: 1, title: 'i-Twister', price: 44, spices: 'off', count: 1, image: "img/Hydrangeas.jpg", description: "This is fresh salad with tasty chiken"},
//            {id: 2, title: 'Твистер из тостера', price: 103, spices: 'off', count: 1, image: "img/Lighthouse.jpg", description: "This is fresh salad with tasty pork"},
//            {id: 3, title: 'Биггер', price: 148, spices: 'off', count: 1, image: "img/Lighthouse.jpg", description: "This is fresh salad with tasty beef"}
//        ];

    $scope.amount = 0;
    $scope.selectedItems = [];

    $scope.cart = function () {
        $scope.itemscart = [];

        for (var i = 0; i < $scope.selectedItems.length; i++) {
            $scope.itemscart.push("" + $scope.selectedItems[i].id + ";" + $scope.selectedItems[i].count + ";" + $scope.selectedItems[i].spices + "");
        }

        var postData = {p_flow_id: $('#pFlowId').val(),
            p_flow_step_id: $('#pFlowStepId').val(),
            p_instance: $('#pInstance').val(),
            x01: $('#P20_EVENT_ID').val(),
            x02: $scope.itemscart,
            p_request: "APPLICATION_PROCESS=Check Out Order"
        };
        $http.post("wwv_flow.show", postData
            ).success(function (data, status, headers, config) {
                $scope.data = data || "Request failed";
                if ($scope.data.ERR == "0") {
                    $location.path('/cart');
                }
                else
                    alert($scope.data.error);
            });
        console.log($scope.itemscart);

    }

    $scope.add = function (index) {
        $scope.sum = 0;
        $scope.amount = 0;
        var len = $scope.selectedItems.length;

        for (var i = 0; i < len; i++) {
            if ($scope.items[index].id == $scope.selectedItems[i].id) {
                $scope.selectedItems.splice(i, 1);
                break;
            }
        }
        $scope.selectedItems.push($scope.items[index]);

        for (var j = 0; j < $scope.selectedItems.length; j++) {
            $scope.sum += $scope.selectedItems[j].price * $scope.selectedItems[j].count;
            $scope.amount += $scope.selectedItems[j].count;
        }

    }


}]);

app.controller('CartCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {


    $scope.cart = menuList;

//        $scope.cart = [
//            {id: 1, title: 'i-Twister', price: 44, count: 2, image: "img/Hydrangeas.jpg"},
//            {id: 3, title: 'Биггер', price: 148, count: 3, image: "img/Lighthouse.jpg"}
//        ];
    $scope.total = 0;

    for (var i = 0; i < $scope.cart.length; i++) {
        $scope.total += $scope.cart[i].price * $scope.cart[i].count;
    }

    $scope.check = function () {
        $scope.totalcart = [];

        for (var i = 0; i < $scope.cart.length; i++) {
            $scope.totalcart.push("" + $scope.cart[i].id + ";" + $scope.cart[i].count + "");
        }
        var postData = {p_flow_id: $('#pFlowId').val(),
            p_flow_step_id: $('#pFlowStepId').val(),
            p_instance: $('#pInstance').val(),
            x01: $('#P35_EVENT_ID').val(),
            x02: $scope.totalcart
//            p_request: "APPLICATION_PROCESS="
        };
        $http.post("wwv_flow.show", postData
            ).success(function (data, status, headers, config) {
                if (data.ERR == "0") {
                    $location.path('/cart');
                }
                else
                    console.log(data.ERR_TEXT);
            });
        console.log($scope.totalcart);
    }

}]);