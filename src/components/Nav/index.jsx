import React from 'react';
import Burger from './Burger';

import {Nav, Logo, Left} from './style';
import LogoEstatiGelati from "../../img/logo.png"

const Navbar = () => {
  return (
    <Nav>
      <Left>
        <Logo src={LogoEstatiGelati} alt="Logo Estati Gelati" title="Estati Gelati" />
      </Left>
      
      <Burger/>
    </Nav>
  )
}

export default Navbar