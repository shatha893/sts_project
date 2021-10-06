import React from 'react';
import classes from './footer.module.css';
import CopyrightIcon from '@mui/icons-material/Copyright';

const footer = (props) =>(
    <footer className={classes.Footer}>
        
        <p><CopyrightIcon style={{fontSize:13}}/> Company </p>
    </footer>
    
);

export default footer;