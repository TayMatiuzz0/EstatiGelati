import styled from "styled-components";
import TemosDelivery from "../../../img/temos-delivery.jpg"


export const Background = styled.div`
    padding: 120px 0;
    background-image: url(${TemosDelivery});
    background-repeat: no-repeat;
    background-size: 100%;
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
        background-size: cover;
        h3{
            font-size: 30px;
        }

        h1{
            font-size: 80px;
        }
    }
   
`

export const Pedido = styled.a`
    text-decoration:none;
    text-transform: uppercase;
    padding: 18px 82px;
    border: 5px solid white;
    font-size: 20px;
    color: white;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    margin-top: 50px;
    transition: 0.3s;

    :hover{
        color: white;
        border-color: #fb9900;
        background-color: #fb9900;
    }

    @media (max-width: 768px){
        padding: 12px 50px;
        font-size: 16px;
    }


`