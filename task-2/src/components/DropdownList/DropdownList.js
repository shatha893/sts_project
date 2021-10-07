import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import classes from './DropdownList.module.css';

const dropdownList = (props)=>{

   return(
      <Dropdown>
      <Dropdown.Toggle  id="dropdown-basic"
      fluid={+true}
      className={classes.dropdownList}>
        {props.text}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {props.children}
      </Dropdown.Menu>
      </Dropdown>
   );
}

export default dropdownList;
