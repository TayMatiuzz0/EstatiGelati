import styled from "styled-components";



export const Container = styled.div`
    width: 100%;
    margin: 0;
    padding: 0;

    .row{
        width: 100% !important;
        margin: 0;
        padding: 0;
    }
`

export const HalfBackground = styled.div`
    margin: 0;
    padding: 0;
    img{
        width: 100%;
    }
    
    @media (max-width: 768px){
        width: 100%;
        margin: 0;
        padding: 0;
    }

    
`

export const Sabores = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 0 ;


    h2{
        font-size: 50px;
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
    }

    h4{
        margin: 0;
        font-size: 41px;
        font-family: 'Freestyle Script', sans-serif;
    }

    p{
        font-size: 25px;
        font-weight: 400;
        font-family: 'Poppins', sans-serif;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 70px;
        padding: 0 90px;
    }

    @media (max-width: 768px){

        padding: 70px 0;

        h2{
            text-align: center;
            font-size: 35px;
        }

        h4{
            font-size: 31px;
        }

        p{
            font-size: 18px;
            padding: 0 20px;
        }
    }
`

export const LeiaMais = styled.a`
    text-decoration:none;
    text-transform: uppercase;
    padding: 18px 82px;
    border: 5px solid black;
    font-size: 20px;
    color: black;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    margin-top: 50px;
    transition: 0.3s;

    :hover{
        color: #FDC685;
        border-color: #FDC685;
    }

    @media (max-width: 768px){
        padding: 12px 50px;
        font-size: 16px;
    }
`