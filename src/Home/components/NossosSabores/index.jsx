import {Container, HalfBackground, Sabores, Menu} from "./styled"
import NossosSaboresImg from "../../../img/background-nossos-sabores.png"

function NossosSabores(){
    return(
        <>

        <Container id="sabores">
            <div className="row">
                <HalfBackground className="col-md-6">
                    <img src={NossosSaboresImg} alt="" />
                </HalfBackground>
                
                <Sabores className="col-md-6">
                    <h2>Nossos Sabores</h2>
                    <h4>Novos e Deliciosos!</h4>

                    <p>
                    Lorem ipsum dolor sit amet, consectetu <br />
                    elitr adipiscing elit. <br />
                    Aenean vitae mi nec justo cursus <br />
                    bibendum quis ac magna.
                    </p>

                    <Menu href="#">Menu</Menu>

                </Sabores>
            </div>
        </Container>
        </>
    )
}
export default NossosSabores;