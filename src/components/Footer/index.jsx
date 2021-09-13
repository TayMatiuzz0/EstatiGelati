import {Container, FooterStyled, FooterInfo, CopyrigthFooter} from "./styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faMobileAlt, faClock } from '@fortawesome/free-solid-svg-icons'

function Footer(){
    return(
        <>
            <FooterStyled>
            <Container className="container-fluid" >
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-3">
                            <FooterInfo>
                                <h3>Endereço</h3>
                                
                                <div className="center">
                                    <p><FontAwesomeIcon icon={faMapMarkerAlt} /></p>
                                    <p>Av. Paulista, 105
                                        SP  <br/> 12345-678</p>
                                </div>

                            </FooterInfo>
                        </div>

                        <div className="col-md-1"></div>
                        <div className="col-md-3">
                            <FooterInfo>
                                <h3>Contact</h3>

                                <div className="center">
                                    <p><FontAwesomeIcon icon={faMobileAlt} /></p>
                                    <p>info@estatigelati.com <br/>
                                    Tel: (11) 3456-7890</p>
                                </div>
                            </FooterInfo>
                        </div>
                        <div className="col-md-1"></div>

                        <div className="col-md-3">
                            <FooterInfo>
                                <h3>Horários</h3>

                                <div className="center">
                                    <p><FontAwesomeIcon icon={faClock} /></p>
                                    <p>
                                    ABERTO TODOS OS DIAS <br/>
                                    10:00 - 22:00
                                    </p>
                                </div>
                            </FooterInfo>
                        </div>
                        
                    </div>
            </Container>
        </FooterStyled>

        <CopyrigthFooter>
            <p>© 2021 por Taynara Matiuzzo</p>
        </CopyrigthFooter>
        </>
    )
}
export default Footer;