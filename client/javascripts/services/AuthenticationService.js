angular.module('stacky-note')
    .service('AuthenticationService',['ApiUrl','$q','$log','$http',function(ApiUrl,$q,$log,$http) {

        return {
            createNewUser: function (user) {
                var deferred = $q.defer();
                $http.post(ApiUrl + "/signup", {
                    "fullName": user.fullName,
                    "username": user.username,
                    "password":user.password
                })
                    .success(function (data) {
                        $log.log(data);
                        deferred.resolve(data);
                    }).error(function (msg, code) {
                        deferred.reject(msg);
                        $log.log(msg);
                    });
                return deferred.promise;
            },
            loginUser: function (user) {
                var deferred = $q.defer();
                $http.post(ApiUrl + "/signin", {
                    "username": user.username,
                    "password":user.password
                })
                    .success(function (data) {
                        $log.log(data);
                        deferred.resolve(data);
                    }).error(function (msg, code) {
                        deferred.reject(msg);
                        $log.log(msg);
                    });
                return deferred.promise;
            }
        }
    }])

