import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`

export const HeaderStyled = styled.header`
    z-index: 999;
    width: 100%;
    background: transparent;
    color: black;
    padding: 10px 10px;

    .logo img{
        width: 50%;
    }

    .menu-superior {
        text-align: right;
    }

    .social-midias{
	margin-top: 35px;
    }

    .social-midias a{
        padding-right: 10px;
    }

`

export const MenuSuperior = styled.nav`
    margin-top: 20px;
	margin-right: 40px;
	width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    ul{
        
        margin-top: 6px;
        padding: 0;
        color: #676767;

        li{
            float: left;
            list-style: none;
            display: flex;
            justify-content: center;
            align-items: center;  
            position: relative;

            a{
                text-transform: none;
                text-decoration: none;
                color: black;
                display: block;
                font-size: 13px;
                font-weight: 600;
                padding: 12px 15px;
                /*display: grid;
                font-family: 'Open Sans', sans-serif;*/

                :hover{
                    background: #F9DB79;
                    color: #fff;
                    text-decoration: none;
                }
            }
        }
    }
`