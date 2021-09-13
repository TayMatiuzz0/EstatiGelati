import React from 'react';

import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import IconGelato from '../../img/icon-gelato.png'


import { Item, Ul, Right, Left, Center, MediaSocial, Icon } from './style';

const LeftNav = ({ open }) => {

    return (
        <Ul open={open}>
            {
                open ? 
                <Left open={open}>
                    <Icon src={IconGelato} />
                </Left> 
                : ''
            }
            

            <Center>
                <li>
                    <Item open={open} href="#home">Home</Item>
                </li>
                <li>
                    <Item open={open} href="#sabores">Sabores</Item>
                </li>
                <li>
                    <Item  open={open} href="#local">Nosso Local</Item>
                </li>
                <li>
                    <Item  open={open} href="#contato">Contato</Item>
                </li>
            </Center>

            <Right>
                <MediaSocial icon={faFacebook} />
                <MediaSocial icon={faInstagram} />
                <MediaSocial icon={faTwitter} />      
            </Right>
           
        </Ul>
    )
}

export default LeftNav;
