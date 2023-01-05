using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using server.Models;

namespace server.Controllers
{
    public class IngredientController : ApiController
    {
        // GET: api/ingredient
        public IHttpActionResult Get()
        {
            try
            {

                List<Ingredient> inglst = new Ingredient().getAllIngredients();

                if (inglst == null)
                {
                    return Content(HttpStatusCode.NotFound, "No Recipes Found");
                }
                return Ok(inglst);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        public IHttpActionResult Post([FromBody] Ingredient ingredient)
        {
            try
            {
                ingredient.Id = ingredient.addIngredient();
                return Created(new Uri(Request.RequestUri.AbsoluteUri), ingredient);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }



    }
}
