import styled from "styled-components";


function responsive(open){
    if(open){
        return ` @media (max-width: 768px){
            position: relative;
            .icon{
                position: absolute;
                right: 0;
                top: 0;
    
            }
            a{
                float: none;
                display: block;
            }
        }`
    }

    return ``
}


export const Container = styled.div`
    width: 100%;
`

export const HeaderStyled = styled.header`
    height: 15vh;
`

export const MenuSuperior = styled.nav`
    display: grid;
    grid-template-columns: 20% 20% 20% 20%;
    justify-content: center;
    align-items: center;
    overflow: hidden;

        ${(props) => responsive(props.open)}

`

export const NavLink = styled.a`
    height: 15vh;
    background-color: transparent;
    padding: 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    text-decoration: none;
    color: black;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;

    :hover{
        background-color: #F9DB79;
        color: white;
    }


    @media (max-width: 768px){
        a{
            display: none;
        }

        .icon{
            display: block;
            float: right;
            position: absolute;
            color: black;
        }
    }
`

export const MediaSocial = styled.div`
    display: grid;
    grid-template-columns: 15% 15% 15%;
    justify-content: center;
    align-items: center;
    padding: 30px 0;

    a{
        color: #FDC685;
        font-size: 20px;
        transition: 0.3s;

        :hover{
            color: #F9DB79;
        }
        
    }

    @media (max-width: 768px){
        display: none;
    }
`
export const LogoLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px){
        justify-content: flex-start;
    }
`

export const Logo = styled.img`
    width: 60%;
`