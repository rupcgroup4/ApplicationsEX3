export default class Ingredient {
  constructor(id, name, img, calories) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.calories = calories;
  }

  get Calories() {
    return this.calories;
  }
}
