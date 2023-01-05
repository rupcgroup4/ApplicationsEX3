import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import Recepies from '../components/Recepies';
import DishRecipe from '../classes/DishRecipe';
import Ingredient from '../classes/Ingredient';
import { APIurl } from '../utils/constants';
import { Box, Typography } from '@mui/material';

const MyKitchen = () => {
  const [recipes, setRecipes] = useState(null);

  const createRecipes = (recipes) => {
    const newRecipes = recipes.map((recipe) => {
      const ingredients = recipe.Ingredients.map(
        (ing) => new Ingredient(ing.Id, ing.Name, ing.Img, ing.Calories)
      );

      return new DishRecipe(
        recipe.Id,
        recipe.Name,
        ingredients,
        recipe.Time,
        recipe.CookingMethod,
        recipe.Img
      );
    });

    return newRecipes;
  };

  const getData = useCallback(async () => {
    const res = await axios.get(`${APIurl}/Recipe`);
    const recipes = res.data;
    if (recipes) {
      setRecipes(createRecipes(recipes));
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Box textAlign={'center'}>
      <Typography variant='h4' pt={5} pb={2}>
        My Kitchen
      </Typography>
      <Recepies recipes={recipes} />
    </Box>
  );
};

export default MyKitchen;
