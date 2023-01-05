import React, { useState } from 'react';
import axios from 'axios';
import FormButtons from '../components/FormButtons';
import { APIurl } from '../utils/constants';
import { Box, Typography, Stack, TextField } from '@mui/material';

const NewIngredient = () => {
  const [ingredientName, setIngredintName] = useState('');
  const [ingredientImg, setIngredintImg] = useState('');
  const [ingredientCalories, setIngredintCalories] = useState('');

  const createNewIngredient = async (e) => {
    e.preventDefault();
    if (!ingredientName || !ingredientImg || !ingredientCalories) return;

    const res = await axios.post(`${APIurl}/Ingredient`, {
      Name: ingredientName,
      Img: ingredientImg,
      Calories: ingredientCalories,
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
    setIngredintName('');
    setIngredintImg('');
    setIngredintCalories('');
  };

  return (
    <Box textAlign={'center'}>
      <Typography variant='h4' py={5}>
        New Ingredient
      </Typography>
      <Stack
        component='form'
        onSubmit={createNewIngredient}
        spacing={2}
        px={{ sx: 5, md: 50 }}
      >
        <TextField
          label='Ingreditent Name'
          variant='outlined'
          required
          value={ingredientName}
          onChange={(e) => setIngredintName(e.target.value)}
        />
        <TextField
          label='Image URL'
          variant='outlined'
          required
          value={ingredientImg}
          onChange={(e) => setIngredintImg(e.target.value)}
        />
        <TextField
          label='Calories'
          variant='outlined'
          required
          value={ingredientCalories}
          onChange={(e) => setIngredintCalories(e.target.value)}
        />
        <FormButtons buttonLabel={'Create new ingredient'} clear={clearForm} />
      </Stack>
    </Box>
  );
};

export default NewIngredient;
