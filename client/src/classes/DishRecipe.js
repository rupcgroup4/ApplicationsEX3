export default class DishRecipe {
  constructor(id, name, ingredients, time, cookingMethod, img) {
    this.Id = id;
    this.Name = name;
    this.Ingredients = ingredients;
    this.Time = time;
    this.CookingMethod = cookingMethod;
    this.Img = img;
  }

  getTotalCalories() {
    return this.Ingredients.reduce((partSum, ing) => partSum + ing.Calories, 0);
  }

  getIngredients() {
    return this.Ingredients;
  }
}
