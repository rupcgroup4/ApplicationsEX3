import React from 'react';
import Ingredient from './Ingredient';
import { Modal, Box, Grid } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: '50%',
  overflowY: 'scroll',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const IngredientsModal = ({ open, handleClose, ingredients }) => {
  console.log(ingredients);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style} width={{ xs: 300, md: '30%' }}>
        <Grid container display={'flex'} justifyContent={'center'}>
          {ingredients?.map((ing, idx) => (
            <Grid key={idx} item xs={8} md={4} m={1}>
              <Ingredient ingredient={ing} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Modal>
  );
};

export default IngredientsModal;
