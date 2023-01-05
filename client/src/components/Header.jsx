import React from 'react';
import {AppBar, Box, Container, Toolbar, Avatar} from '@mui/material';
import MyLink from './MyLink'

const Header = () => {
    return (
      <AppBar position="static">
        <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar src='./logo.png' variant="square" sx={{ width: 50, height: 50 }}/>
          <Box display={'flex'} mx={2}>
            <MyLink to='/' text='My Kitchen'/>
            <MyLink to='/ingredient' text='Create new ingredient'/>
            <MyLink to='/recipe' text='Create new recipe'/>
          </Box>
          </Toolbar>
        </Container>
      </AppBar>
    )
}

export default Header