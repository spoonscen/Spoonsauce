'use strict';

/* Controllers */

var sauceRecipeControllers = angular.module('sauceRecipeControllers', []);



sauceRecipeControllers.controller('NavbarCtrl', 
  function($scope, $location) {
    'use strict';
    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path().substr(0, viewLocation.length);

    };
});

sauceRecipeControllers.controller('CarouselCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $scope.myInterval = 5000;
    $http.get('recipes/' + $routeParams.sauceId + '.json').success(function(data){
      $scope.slides = data.images;
      $scope.caption = data.caption;
    });
}]);


sauceRecipeControllers.controller('CarouselPepperCtrl', ['$scope', '$routeParams', '$http', 
  function($scope, $routeParams, $http) {
    $scope.myInterval = 5000;
    $http.get('peppers/' + $routeParams.pepperId + '.json').success(function(data){
      $scope.slides = data.images;
      $scope.caption = data.caption;
    });
}]);

// Controller for the main Sauce page
sauceRecipeControllers.controller('RecipePageCtrl', ['$scope', 'Recipe', 
  function($scope, Recipe) {
    $scope.sauces = Recipe.query();
    $scope.orderProp = "spice";
}]);

//controller for the idividual pepper pages
sauceRecipeControllers.controller('RecipeDetailCtrl', ['$scope', '$routeParams', '$http', 
  function($scope, $routeParams, $http) {
    $http.get('recipes/' + $routeParams.sauceId + '.json').success(function(data){
      $scope.sauce = data;
    });
}]);

// placeholder controller for the home page
sauceRecipeControllers.controller('HomePageCtrl', ['$scope', 'Recipe', 'Pepper',
  function($scope, Recipe, Pepper) {
    $scope.sauces = Recipe.query();
    $scope.peppers = Pepper.query();
  }]);

//Controller for the peppers list page
sauceRecipeControllers.controller('PepperPageCtrl', ['$scope', 'Pepper', 
  function($scope, Pepper) {
      $scope.peppers = Pepper.query();
      $scope.orderProp = "spice";
    
}]);

//Controller for the pepper details page
sauceRecipeControllers.controller('PepperDetailCtrl', ['$scope', '$routeParams', '$http', 
  function($scope, $routeParams, $http) {
    $http.get('peppers/' + $routeParams.pepperId + '.json').success(function(data){
      $scope.pepper = data;
    });
}]);


//placeholder controller for the bio page
sauceRecipeControllers.controller('AboutPageCtrl', ['$scope', 
  function($scope) {}
]);
