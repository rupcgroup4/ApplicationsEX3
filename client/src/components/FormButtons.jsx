import React from 'react';
import { Stack, Button } from '@mui/material';

const FormButtons = ({buttonLabel, clear}) => {
  return (
    <Stack direction="row" spacing={2} pt={2}>
        <Button variant="outlined" type="submit">{buttonLabel}</Button>
        <Button variant="outlined" color='error' onClick={clear}>Clear Form</Button>
    </Stack>
  )
}

export default FormButtons