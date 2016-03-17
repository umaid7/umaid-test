angular.module('stacky-note',['ui.router','ui.bootstrap'])

.config(function($stateProvider, $urlRouterProvider) {


        $stateProvider.state('landingPage', {
            url: '/landingPage',
            templateUrl: 'templates/landingView.html'
           // controller:'LoginCtrl'
        });

        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'templates/home.html'
          //  controller:'HomeCtrl'
        });

        $urlRouterProvider.otherwise('/landingPage');

    })

    .run(function($state,$rootScope,$log) {
/*
        var ref = new Firebase('https://boiling-fire-1862.firebaseio.com/');
        var authInfo = null;
        $firebaseAuth(ref).$onAuth(function (authData) {
            authInfo=authData;
            if (!authData) {
                $state.go('login');
            }
        });


        $rootScope.firstAttempt=false;

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $log.log('state change');
            console.log(fromState);
            if((toState.name != 'login') && authInfo==null) {
                $state.go('login');

            }
        });*/

    })