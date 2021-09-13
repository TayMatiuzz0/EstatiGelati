import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    @media (max-width: 768px){
        padding: 0;
        margin: 0;

        .row{
            width: 100%;
        }
    }
`

export const FooterStyled = styled.footer`
    padding: 120px 0;
    background-color: #F2BD62;
    display: flex;
    justify-content: center;
    align-items: center;
    h3{
        color: white;

            ::after{
                content: '';
                display: block;
                width: 100%;
                background: white;
                height: 2px;
                margin: 0 auto;
                margin-top: 5px;
                text-align: center;
                font-size: 51px;
            }
    }

    p{
        color: white;
        margin-top: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
    }


    @media (max-width: 768px){
        padding: 50px 75px 0 75px;

        p{
            margin-top: 20px;
            margin-bottom: 50px;
        }
    }
`

export const FooterInfo = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    flex-direction: column;
    

    .center{
        display: grid;
        grid-template-columns: 5% 95%;
        justify-content: center;
        align-items: center;
        grid-column-gap: 10px;
    }
`

export const CopyrigthFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 0 0 0;
    background-color: #F2BD62;
    border-top: 1px solid #FCF2D3;
    font-size: 12px;
    color: white;
`