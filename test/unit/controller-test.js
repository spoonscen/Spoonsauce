describe('RecipePageCtrl', function(){

	it('should create a "sauces" model with 2 sauces', function() {
		var scope = {},
			ctrl = new RecipePageCtrl(scope);

		expect(scope.sauces.length).toBe(2);
	});
});