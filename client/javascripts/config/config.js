angular.module('stacky-note',['ui.router','ui.bootstrap','stacky-note-contants','ui.tree','xeditable'])

.config(function($stateProvider, $urlRouterProvider,$locationProvider) {


        $stateProvider.state('/', {
            url: '/',
            templateUrl: 'templates/landingPage.html'
           // controller:'LoginCtrl'
        });

        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'templates/home.html',
             controller:'HomeCtrl'
        });

        $stateProvider.state('signup', {
            url: '/signup',
            templateUrl: 'templates/signup.html',
             controller:'SignUpCtrl'
        });

        $stateProvider.state('signin', {
            url: '/signin',
            templateUrl: 'templates/signin.html',
            controller:'SignInCtrl'
        });

        $urlRouterProvider.otherwise('/');

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false,
        });
    })

    .run(function($state,$rootScope,$log,editableOptions,editableThemes) {
/*

        $rootScope.firstAttempt=false;

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $log.log('state change');
            console.log(fromState);
            if((toState.name != 'login') && authInfo==null) {
                $state.go('login');

            }
        });*/
        editableOptions.theme = 'bs3';
      //  editableThemes['bs3'].buttonsTpl = [];
    })