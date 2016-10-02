var app = angular.module("theSun",['ui.router']);


app
  .config(["$stateProvider","$locationProvider","$urlRouterProvider",function($stateProvider,$locationProvider,$urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home',{
        url: '/',
        templateUrl: 'partials/home.html'
      })
    $locationProvider.html5Mode(true);
  }]);
