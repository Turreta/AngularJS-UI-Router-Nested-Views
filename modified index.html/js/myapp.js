(function() {
    
    // Instantiate our main module and pass ngRoute
    var myapp = angular.module('myapp', ['ui.router']);
    
    
    // Define the routes here
    myapp.config(function ($stateProvider, $urlRouterProvider) {
        
        // The "root" or default route uses the content of main.html for display
        var main = {
            name: 'main',
            url: '/',
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        };
        
         // The "second" route uses the content of second.html for display
        var second = {
            name: 'second',
            url: '/second',
            templateUrl: 'pages/second.html',
            controller: 'secondController',
        };
        
        // First nested view in second.html for display
        var second1 = {
            name: 'second.second-one',
            url: '/second-one',
            templateUrl: 'pages/second-first.html',
            controller: function($scope) {
                $scope.nestedViewData = 'This is the second-first.html page';
            }
        };
        
        // Second nested view in second.html for display
        var second2 = {
            name: 'second.second-two',
            url: '/second2',
            templateUrl: 'pages/secondsecond.html',
            controller: function($scope) {
                $scope.nestedViewData = 'This is the secondsecond.html page';
            }
        };
        
         $stateProvider.state(main);
         $stateProvider.state(second);
         $stateProvider.state(second1);
         $stateProvider.state(second2);
        
         // Set the default or initial URL
         $urlRouterProvider.otherwise("/");
    });
    
    // This ties up to "/" route
    myapp.controller('mainController', ['$scope', '$log', function($scope, $log) {
        $scope.name = 'Main';
    }]);

    // This ties up to "/second" route
    myapp.controller('secondController', ['$scope', '$log', '$state', function($scope, $log, $state) {
        $scope.name = 'Second';
        //$state.go('second.second-one');
    }]);
})();
