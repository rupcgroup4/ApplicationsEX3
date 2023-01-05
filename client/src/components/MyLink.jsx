import React from 'react';
import {Link} from 'react-router-dom';
import { Button } from '@mui/material';

const MyLink = ({to, text}) => {
  return (
    <Link to={to} style={{textDecoration: 'none'}}>
      <Button sx={{ my: 2, color: 'white', display: 'block' }}>
        {text}
      </Button>
    </Link>
  )
}

export default MyLink;