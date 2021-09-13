import {Container, Background} from "./styled"


function Banner(){
    return(
        <>
            <Container className="container-fluid">
                <Background>
                    <h3>Gelato</h3>
                    <h1>Artesanal</h1>
                </Background>
            </Container>
        </>
    )
}
export default Banner;