using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using server.Models.DAL;

namespace server.Models
{
    public class Recipe
    {   
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Ingredient> Ingredients { get; set; }
        public int Time { get; set; }
        public string CookingMethod { get; set; }
        public string Img { get; set; }

        private static RecipeServices rs = new RecipeServices();


        public Recipe() { 
            
        }

        public Recipe(int id, string name, List<Ingredient> ingredients, int time, string cookingMethod, string img)
        {
            this.Id = id;
            this.Name = name;
            this.Ingredients = ingredients;
            this.Time = time;
            this.CookingMethod = cookingMethod;
            this.Img = img;
        }

        public List<Recipe> getAllRecipes()
        {
            return rs.getAllRecipes();
        }


        public int addRecipe()
        {
            return rs.addRecipe(this);
        }


    }
}