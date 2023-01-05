using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using server.Models;

namespace server.Controllers
{
    public class RecipeController : ApiController
    {
        // GET: api/Recipe
        public IHttpActionResult Get()
        {
            try
            {
                
                List<Recipe> rl = new Recipe().getAllRecipes();

                if (rl == null)
                {
                    return Content(HttpStatusCode.NotFound, "No Recipes Found");
                }
                return Ok(rl);
            } 
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        public IHttpActionResult Post([FromBody] Recipe recipe)
        {
            try
            {
                recipe.Id = recipe.addRecipe();
                return Created(new Uri(Request.RequestUri.AbsoluteUri), recipe);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
