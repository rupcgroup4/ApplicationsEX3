using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using server.Models.DAL;

namespace server.Models
{
    public class Ingredient
    {   
        static IngredientServices ingSer = new IngredientServices();
        public int Id { get; set; }
        public string Name { get; set; }
        public string Img { get; set; }
        public int Calories { get; set; }

        public Ingredient() {}

        public Ingredient(int id, string name, string img, int calories)
        {
            this.Id = id;
            this.Name = name;
            this.Img = img;
            this.Calories = calories;
        }

        public List<Ingredient> getAllIngredients()
        {
            return ingSer.getAllIngredients();
        }
        public List<Ingredient> getIngredientByRecipeId(int id)
        {
            return ingSer.getIngredientByRecipeId(id);
        }
        public int addIngredient()
        {
            return ingSer.addIngredient(this);
        }


    }
}