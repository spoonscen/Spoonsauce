'use strict';

/* App Module */

var spoonSauceApp = angular.module('spoonSauceApp', [
  'ngRoute',
  'ui.bootstrap',
  'sauceRecipeControllers',
  'spoonsauceServices'
  ]);

spoonSauceApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/recipes', {
        templateUrl: 'template/recipe-list.html',
        controller: 'RecipePageCtrl'
      }).
      when('/recipes/:sauceId', {
        templateUrl: 'template/recipe.html',
        controller: 'RecipeDetailCtrl'
      }).
        when('/home', {
        templateUrl: 'template/home.html',
        controller: 'HomePageCtrl'
      }).
        when('/peppers', {
        templateUrl: 'template/peppers-list.html',
        controller: 'PepperPageCtrl'
      }).
        when('/peppers/:pepperId', {
        templateUrl: 'template/pepper.html',
        controller: 'PepperDetailCtrl'
      }).
        when('/about', {
        templateUrl: 'template/about.html',
        controller: 'AboutPageCtrl'
      }).        
      otherwise({
        redirectTo: '/home'
      });
  }]);
