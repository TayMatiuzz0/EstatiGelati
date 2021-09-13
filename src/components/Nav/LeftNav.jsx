import React, { useState } from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { Item, Ul, Right, Left, Center } from './style';

const LeftNav = ({ open}) => {





    return (
        <Ul open={open}>

          <Left>
              <Item href='#' className="home">
               
              </Item>
          </Left>

            <Center>
                <li>
                    <Item open={open} href="#">Home</Item>
                </li>
                <li>
                    <Item open={open} href="#">Sabores</Item>
                </li>
                <li>
                    <Item  open={open} href="#">Nosso Local</Item>
                </li>
                <li>
                    <Item  open={open} href="#">Contato</Item>
                </li>
            </Center>

            <Right>
                
            </Right>
           
        </Ul>
    )
}

export default LeftNav;
