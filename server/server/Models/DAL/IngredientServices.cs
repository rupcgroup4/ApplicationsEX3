using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using RupBNB.Models.DAL;

namespace server.Models.DAL
{
    public class IngredientServices
    {
        public List<Ingredient> getAllIngredients()
        {
            return getIngredients("sp_getAllIngredients", 0);
        }

        public List<Ingredient> getIngredientByRecipeId(int id)
        {
            return getIngredients("sp_getIngredintInRecipe", id);
        }

        public List<Ingredient> getIngredients(string storedProcedure, int id)
        {
            SqlConnection con = SqlConnect.Connect();

            // Create Command
            SqlCommand command = CreateGetAllIngredients(con, storedProcedure, id);

            SqlDataReader dr = command.ExecuteReader();

            List<Ingredient> ingredients = new List<Ingredient>();
            while (dr.Read())
            {
                int idd = Convert.ToInt32(dr["id"]);
                string name = dr["name"].ToString();
                string img = dr["img"].ToString();
                int calories = Convert.ToInt32(dr["calories"]);

                ingredients.Add(new Ingredient(idd, name, img, calories));
            }
            con.Close();

            return ingredients;

        }

        private SqlCommand CreateGetAllIngredients(SqlConnection con, string storedProcedure, int id)
        {
            SqlCommand command = new SqlCommand();

            if(id > 0)
            {
                command.Parameters.AddWithValue("@id", id); 
            }

            command.CommandText = storedProcedure;
            command.Connection = con;
            command.CommandType = System.Data.CommandType.StoredProcedure;
            command.CommandTimeout = 10; // in seconds

            return command;
        }




        public int addIngredient(Ingredient ingredient)
        {
            SqlConnection con = SqlConnect.Connect();

            // Create Command
            SqlCommand command = CreateAddIngredient(con, ingredient);

            // Execute
            SqlDataReader dr = command.ExecuteReader();

            int id = 0;
            while (dr.Read())
            {
                id = Convert.ToInt32(dr["id"]);
            }

            // Close Connection
            con.Close();

            return id;
        }

        //This function get Reservation and execute store procedure to insert new reservation
        private SqlCommand CreateAddIngredient(SqlConnection con, Ingredient ingredient)
        {

            SqlCommand command = new SqlCommand();

            command.Parameters.AddWithValue("@name", ingredient.Name);
            command.Parameters.AddWithValue("@img", ingredient.Img);
            command.Parameters.AddWithValue("@calories", ingredient.Calories);

            command.CommandText = "sp_insertNewIngredient";
            command.Connection = con;
            command.CommandType = System.Data.CommandType.StoredProcedure;
            command.CommandTimeout = 10; // in seconds

            return command;
        }
    }
}