'use strict';

/* Controllers */

angular.module('ordersApp.controllers', []).
    controller('IndexCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {

        $scope.path = '/';

        if ($routeParams.path) {

            $scope.path = $routeParams.path;

        }

        function spinner(){
            var spinner = $( "#spinner" ).spinner();
            $( "#disable" ).click(function() {
                if ( spinner.spinner( "option", "disabled" ) ) {
                    spinner.spinner( "enable" );
                } else {
                    spinner.spinner( "disable" );
                }
            });
            $( "#destroy" ).click(function() {
                if ( spinner.data( "ui-spinner" ) ) {
                    spinner.spinner( "destroy" );
                } else {
                    spinner.spinner();
                }
            });
            $( "#getvalue" ).click(function() {
                alert( spinner.spinner( "value" ) );
            });
            $( "#setvalue" ).click(function() {
                spinner.spinner( "value", 5 );
            });
        }

    }]);

