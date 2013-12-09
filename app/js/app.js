'use strict';


angular.module('ordersApp', [
        'ngRoute',
        'ordersApp.filters',
        'ordersApp.services',
        'ordersApp.directives',
        'ordersApp.controllers'
    ]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'partials/index.html', controller: 'IndexCtrl'});
        $routeProvider.when('/cart', {templateUrl: 'partials/cart.html', controller: 'CartCtrl'});
        $routeProvider.otherwise({redirectTo: '/'});
    }]);

