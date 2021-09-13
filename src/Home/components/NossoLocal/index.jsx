import {Container, HalfBackground, Sabores, LeiaMais} from "./styled"
import NossoLocalImg from "../../../img/nosso-lugar.webp"

function NossoLocal(){
    return(
        <>

        <Container className="container-fluid" id="local">
            <div className="row">
                <Sabores className="col-md-6">
                    <h2>Nosso Local</h2>
                    <h4>Sorvete em boa companhia</h4>

                    <p>
                    Lorem ipsum dolor sit amet, consectetu
                    elitr adipiscing elit.
                    Aenean vitae mi nec justo cursus 
                    bibendum quis ac magna.
                    </p>

                    <LeiaMais href="#">Leia Mais</LeiaMais>

                </Sabores>

                <HalfBackground className="col-md-6">
                    <img src={NossoLocalImg} alt="" />
                </HalfBackground>
            </div>
        </Container>

        </>
    )
}
export default NossoLocal;