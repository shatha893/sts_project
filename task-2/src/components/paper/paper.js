import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import classes from './paper.module.css';

const SimplePaper = (props) => {

 
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width:200,
          height: 190
        },
      }} >
        {
            props.papers.map((paper)=>{

                return( <Paper elevation={2} className={classes.box} key={paper.id}>
                    <h5>{paper.fullname}</h5>
                    <h6 className={classes.subtitle}>Heard about us from {paper.resource}</h6>
                    <Button color="inherit" className={classes.viewButton} onClick={()=>props.handleViewClick(paper.id)}>View</Button>
                    <Button color="inherit" className={classes.deleteButton} onClick={()=>props.handleDelete(paper.id)}>delete</Button>
                </Paper>);
            })
        }
    </Box>
  );
}

export default SimplePaper;