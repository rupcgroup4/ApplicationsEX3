using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using RupBNB.Models.DAL;

namespace server.Models.DAL
{
    public class RecipeServices
    {
        static IngredientServices ingSer = new IngredientServices();


        public List<Recipe> getAllRecipes()
        {
            SqlConnection con = SqlConnect.Connect();

            // Create Command
            SqlCommand command = CreateGetAllRecipes(con);

            SqlDataReader dr = command.ExecuteReader();

            List<Recipe> recipes = new List<Recipe>();
            while (dr.Read())
            {
                int id = Convert.ToInt32(dr["id"]);
                string name = dr["name"].ToString();
                int time = Convert.ToInt32(dr["time"]);
                string cookingMethod = dr["cookingMethod"].ToString();
                string img = dr["img"].ToString();

                recipes.Add(new Recipe(id,  name, ingSer.getIngredientByRecipeId(id), time, cookingMethod, img));
            }
            con.Close();

            return recipes;

        }

        private SqlCommand CreateGetAllRecipes(SqlConnection con)
        {
            SqlCommand command = new SqlCommand();

            command.CommandText = "sp_getAllRecipes";
            command.Connection = con;
            command.CommandType = System.Data.CommandType.StoredProcedure;
            command.CommandTimeout = 10; // in seconds

            return command;
        }


        public int addRecipe(Recipe recipe)
        {
            SqlConnection con = SqlConnect.Connect();

            // Create Command
            SqlCommand command = CreateAddRecipe(con, recipe);

            // Execute
            SqlDataReader dr = command.ExecuteReader();

            int id = 0;
            while (dr.Read())
            {
                id = Convert.ToInt32(dr["id"]);
            }
            // Close Connection
            con.Close();

            //if Recipe create insert the connection between recipe and his ingredients
            if (id > 0)
            {
                CreateAddIngredientsInRecipe(id, recipe.Ingredients);
            }

            return id;
        }

        //This function get Reservation and execute store procedure to insert new reservation
        private SqlCommand CreateAddRecipe(SqlConnection con, Recipe recipe)
        {

            SqlCommand command = new SqlCommand();

            command.Parameters.AddWithValue("@name", recipe.Name);
            command.Parameters.AddWithValue("@time", recipe.Time);
            command.Parameters.AddWithValue("@cookingMethod", recipe.CookingMethod);
            command.Parameters.AddWithValue("@img", recipe.Img);


            command.CommandText = "sp_insertNewRecipe";
            command.Connection = con;
            command.CommandType = System.Data.CommandType.StoredProcedure;
            command.CommandTimeout = 10; // in seconds

            return command;
        }

        //This function get Reservation and execute store procedure to insert new reservation
        private void CreateAddIngredientsInRecipe(int recipeId, List<Ingredient> ingredients)
        {

            foreach (Ingredient i in ingredients)
            {
                SqlConnection con = SqlConnect.Connect();
                SqlCommand command = new SqlCommand();

                command.Parameters.AddWithValue("@recipeId", recipeId);
                command.Parameters.AddWithValue("@ingredientId", i.Id);

                command.CommandText = "sp_addIngredientsInRecipe";
                command.Connection = con;
                command.CommandType = System.Data.CommandType.StoredProcedure;
                command.CommandTimeout = 10; // in seconds

                command.ExecuteReader();
                con.Close();
            }

        }

    }
}