var spoonsauceServices = angular.module('spoonsauceServices', ['ngResource']);

spoonsauceServices.factory('Recipe', ['$resource',
	function($resource){
		return $resource('recipes/:recipeId.json', {}, {
			query: {method:'GET', params:{recipeId:'recipes'}, isArray:true}
		});
	}]);


spoonsauceServices.factory('Pepper', ['$resource', 
	function($resource){
		return $resource('peppers/:pepperId.json', {}, {
			query: {method:'GET', params:{pepperId:'peppers'}, isArray:true}
		});
	}]);