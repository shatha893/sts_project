import cssClasses from './header.module.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const DenseAppBar = (props)=> {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">
        <Toolbar variant="dense" className={cssClasses.Toolbar}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className={cssClasses.title}>
            ABC Blog
          </Typography>
          <Button 
          color="inherit" 
          className={cssClasses.button}
          onClick={props.showRegModal}>Add New entry</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default DenseAppBar;
