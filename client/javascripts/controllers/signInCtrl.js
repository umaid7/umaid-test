
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
                    if(data.messageCode==1){
                        $scope.showCreatedUserAlert=true;
                        $interval(function() {
                            $scope.showCreatedUserAlert=false;
                        }, 3000);
                        $state.go('home');
                    }
                    else if(data.messageCode==2){
                        $scope.showAlreadyUserAlert=true;
                        $interval(function() {
                            $scope.showAlreadyUserAlert=false;
                        }, 3000);
                    }
                })
            }

        }

    }]);