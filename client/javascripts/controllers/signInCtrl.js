
angular.module('stacky-note')
    .controller('SignInCtrl',['$scope','$state','AuthenticationService','$interval',function($scope,$state,AuthenticationService,$interval) {

        $scope.showWrongUserAlert=false;
        $scope.showInputAlert=false;

        $scope.user={
            username:'',
            password:''
        }

        $scope.GotoSignUp=function(){
            $state.go('signup');
        }

        $scope.SignInUser=function(){
            if($scope.user.username=='' || $scope.user.password=='' ){
                $scope.showInputAlert=true;
                $interval(function() {
                    $scope.showInputAlert=false;
                }, 3000);
            }
            else
            {
                AuthenticationService.loginUser($scope.user).then(function(data){
                    console.log(data);
                    if(data.success==true){
                        $state.go('home');
                    }
                    else{
                        $scope.showWrongUserAlert=true;
                        $interval(function() {
                            $scope.showWrongUserAlert=false;
                        }, 3000);
                    }
                })
            }

        }

    }]);