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

// sauceRecipeControllers.controller('ModalCtrl', ['$scope', 
//   function($scope){
//     $scope.modal = function(){
//       $scope.src = $('.photo').attr('src');
//       $scope.img = '<img src="' + $scope.src + '" class="img-responsive"/>';

//       $('#photoModal .modal-body').html($scope.img);
//       $('#photoModal').modal();
      
//       $('#photoModal').on('hidden.bs.modal', function(){
//         $('#photoModal .modal-body').html('');
//       });
//     };
// }]);

// placeholder controller for the home page
sauceRecipeControllers.controller('HomePageCtrl', ['$scope', 
  function($scope) {}
]);

//Controller for the peppers list page
sauceRecipeControllers.controller('PepperPageCtrl', ['$scope', '$http', 
  function($scope, $http) {
    $http.get('peppers/peppers.json').success(function(data) {
      $scope.peppers = data;
    });
  
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
sauceRecipeControllers.controller('BioPageCtrl', ['$scope', 
  function($scope) {}
]);
