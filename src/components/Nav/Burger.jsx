import React, { useState } from 'react';

import LeftNav from './LeftNav';
import {StyledBurger} from './style'; 

const Burger = ( ) => {
    const [open, setOpen] = useState(false)
    
    return (
      <>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>
        <LeftNav open={open}/>
      </>
    )
};
  
export default Burger;