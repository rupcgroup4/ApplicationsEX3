CREATE TABLE _ingredientsInRecipe (
	recipeId int foreign key references _recipes(id),
	ingredientId int foreign key references _ingredients(id)

	constraint pk1 primary key(recipeId,ingredientId)
)


INSERT INTO _ingredientsInRecipe(recipeId, ingredientId) VALUES (1,1)
INSERT INTO _ingredientsInRecipe(recipeId, ingredientId) VALUES (1,2)

SELECT * FROM _ingredientsInRecipe

