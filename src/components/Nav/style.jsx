import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#fff' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export const Nav = styled.nav`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

`


export const Ul = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  flex-flow: row nowrap;
  margin: 0;
  li {
    padding: 18px 20px;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    

    :hover{
      background-color: #F9DB79;
    }
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: rgba(251,106,133, 0.9);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    padding: 3.5rem 0;
    z-index: 2;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
      width: 100%;
      margin: 0;
      padding: 0;
    }
  }
`

export const Item = styled(AnchorLink)`
    cursor: pointer;
    transition: 0.5s;
    text-decoration: none;
    font-weight: normal;
    color: ${({ open }) => open ? '#fff' : '#000'};
    :hover{
      color: #000;
    }
`

export const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  @media (max-width: 768px) {
    width: 100%;
    height: 50vh;
    flex-direction: column;
    align-items: ${(props) => props.open ? 'center' : 'flex-start'};
    
  }
`

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65%;

  @media (max-width: 768px) {
    width: 100%;
    height: 50vh;
    flex-direction: column;
  }
`

export const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  @media (max-width: 768px) {
    width: 100%;
    height: 40vh;
    flex-direction: row;
  }
`

export const Logo = styled.img`

  width: 40%;
  @media (max-width: 768px) {
    width: 70%;
  }
`

export const Icon = styled.img `
  width: 40%;
`

export const MediaSocial = styled(FontAwesomeIcon)`
  color: #FDC685;
  font-size: 20px;
  transition: 0.3s;
  margin: 0 10px;
  cursor: pointer;

  :hover{
      color: #F9DB79;
  }
`