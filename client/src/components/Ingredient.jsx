import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const Ingredient = ({ ingredient }) => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardMedia component='img' height='140' image={ingredient.img} />
      <CardContent>
        <Typography variant='h6'>{ingredient.name}</Typography>
        <Typography variant='subtitle1'>
          Calories: {ingredient.calories}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Ingredient;
