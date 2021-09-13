import styled from "styled-components";
import GelatoArtesanal from "../../../img/background-gelato-artesanal.png"

export const Container = styled.div`
    width: 100%;
    height: 140vh;
    padding: 90px 0;
    background-color: #F9DB79;

    @media (max-width: 768px){
        height: 40vh;
        padding: 65px 0;
    }
`

export const Background = styled.div`
    padding: 150px 0;
    background-image: url(${GelatoArtesanal});
    background-repeat: no-repeat;
    background-size: 70%;
    background-position: top;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h3{
        font-size: 100px;
        color: white;
        font-family: 'Impact', sans-serif;
    }

    h1{
        font-size: 250px;
        color: white;
        font-family: 'Impact', sans-serif;
    }

    @media (max-width: 768px){
        padding: 50px 0;
        h3{
            font-size: 30px;
        }

        h1{
            font-size: 80px;
        }
    }
   
`