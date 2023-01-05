import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FormButtons from '../components/FormButtons';
import SelectIngredients from '../components/SelectIngredients';
import Ingredient from '../classes/Ingredient';
import { APIurl } from '../utils/constants';
import { Box, Typography, Stack, TextField } from '@mui/material';

const NewRecipe = () => {
  const [recipeName, setRecipeName] = useState('');
  const [cookingMethod, setCookingMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [recipeImg, setRecipeImg] = useState('');

  const [ingredients, setIngredients] = useState(null);
  const [ingredientsInRecipe, setIngredientsInRecipe] = useState([]);

  const createNewRecipe = async (e) => {
    e.preventDefault();

    if (!recipeName | !cookingMethod | !cookingTime | !recipeImg) return;

    const res = await axios.post(`${APIurl}/Recipe`, {
      Name: recipeName,
      Ingredients: ingredientsInRecipe,
      Time: cookingTime,
      CookingMethod: cookingMethod,
      Img: recipeImg,
    });

    if (res.status === 201) {
      //present message Ok
      alert('Recipe added');
    } else {
      //messgae error
      alert('Some error');
    }

    clearForm();
  };

  const clearForm = () => {
    setRecipeName('');
    setCookingMethod('');
    setCookingTime('');
    setRecipeImg('');
  };

  const getIngredients = async () => {
    const res = await axios.get('http://localhost:49807/api/Ingredient');
    const ingredients = res.data.map(
      (ing) => new Ingredient(ing.Id, ing.Name, ing.Img, ing.Calories)
    );
    setIngredients(ingredients);
  };

  useEffect(() => {
    getIngredients();
  }, []);

  return (
    <Box textAlign={'center'}>
      <Typography variant='h4' py={5}>
        New Recipe
      </Typography>
      <Stack
        component='form'
        onSubmit={createNewRecipe}
        spacing={2}
        px={{ sx: 5, md: 50 }}
      >
        <TextField
          label='Recipe Name'
          variant='outlined'
          required
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
        />
        <TextField
          label='Cooking method'
          variant='outlined'
          required
          value={cookingMethod}
          onChange={(e) => setCookingMethod(e.target.value)}
        />
        <TextField
          type='number'
          label='Cooking time (minutes)'
          variant='outlined'
          required
          value={cookingTime}
          onChange={(e) => setCookingTime(e.target.value)}
        />
        <TextField
          label='Image URL'
          variant='outlined'
          required
          value={recipeImg}
          onChange={(e) => setRecipeImg(e.target.value)}
        />
        <SelectIngredients
          ingredients={ingredients}
          setIngredientsInRecipe={setIngredientsInRecipe}
        />
        <FormButtons buttonLabel={'Create new Recipe'} clear={clearForm} />
      </Stack>
    </Box>
  );
};

export default NewRecipe;
