angular.module('stacky-note')
    .controller('HomeCtrl',['$scope','$state','AuthenticationService','$interval',function($scope,$state,AuthenticationService,$interval) {

    $scope.LogOut= function () {
        AuthenticationService.logOut().then(function(){
            $state.go('/')
        })
    }

    }]);