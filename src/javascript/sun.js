var app = angular.module("theSun",['ui.router','ngSanitize']);


app
  .config(["$stateProvider","$locationProvider","$urlRouterProvider",function($stateProvider,$locationProvider,$urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home',{
        url: '/',
        templateUrl: 'partials/home.html'
      })
      .state('recipes',{
        url: '/recipes',
        templateUrl: 'partials/recipes.html'
      })
      .state('recipe',{
        url: '/recipes/:id',
        templateUrl: 'partials/recipe.html',
        controller: 'RecipeController'
      })
      .state('about-me',{
        url: '/about',
        templateUrl: 'partials/about-me.html'
      })
      .state('users',{
        url: '/users',
        templateUrl: 'partials/users.html'
      })
      .state('users.signup',{
        templateUrl: 'partials/users/signup.html'
      })
      .state('users.signin',{
        templateUrl: 'partials/users/signin.html'
      })
    $locationProvider.html5Mode(true);
}]);
