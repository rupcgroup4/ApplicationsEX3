import React from 'react';
import Recipe from './Recipe';
import { Container, Grid } from '@mui/material';

const Recepies = ({ recipes }) => {
  return (
    <Container maxWidth={'md'}>
      <Grid container display={'flex'} justifyContent={'center'}>
        {recipes?.map((recipe, idx) => (
          <Grid key={idx} item xs={12} md={4} m={1}>
            <Recipe recipe={recipe} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Recepies;
