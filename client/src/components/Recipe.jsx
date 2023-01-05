import React, { useState } from 'react';
import IngredientsModal from './IngredientsModal';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from '@mui/material';

const Recipe = ({ recipe }) => {
  const [open, setOpen] = useState(false);

  const openIngredientsModal = () => {
    setOpen(true);
  };
  const closeIngredientsModal = () => {
    setOpen(false);
  };
  return (
    <Box>
      <IngredientsModal
        open={open}
        handleClose={closeIngredientsModal}
        ingredients={recipe.Ingredients}
      />
      <Card>
        <CardMedia component='img' height='140' image={recipe.Img} />
        <CardContent>
          <Typography variant='h6'>{recipe.Name}</Typography>
          <Typography variant='subtitle1'>
            Cooking time: {recipe.Time} mintues
          </Typography>
          <Typography variant='subtitle1'>
            Cooking method: {recipe.CookingMethod}
          </Typography>
          <Typography variant='subtitle1'>
            Total calories: {recipe.getTotalCalories()}
          </Typography>
          <Button variant='outlined' onClick={openIngredientsModal}>
            See ingredients
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Recipe;
