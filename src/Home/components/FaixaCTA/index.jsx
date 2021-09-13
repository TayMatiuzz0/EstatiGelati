import { Container, ImageContainer, Image } from "./styled"
import ImgFaixa1 from "../../../img/faixa_cta-1.jpg"
import ImgFaixa2 from "../../../img/faixa_cta-2.jpg"
import ImgFaixa3 from "../../../img/faixa_cta-3.jpg"
import ImgFaixa4 from "../../../img/faixa_cta-4.jpg"


function FaixaCTA(){
    return(
        <Container className="container-fluid">
            <div className="row">
                <ImageContainer className="col-md-3">
                    <Image src= {ImgFaixa1}/>
                </ImageContainer>


                <ImageContainer className="col-md-3">
                    <Image src= {ImgFaixa2}/>
                </ImageContainer>


                <ImageContainer className="col-md-3">
                    <Image src= {ImgFaixa3}/>
                </ImageContainer>


                <ImageContainer className="col-md-3">
                    <Image src= {ImgFaixa4}/>
                </ImageContainer>
        
            </div>
        </Container>
    )
}

export default FaixaCTA;