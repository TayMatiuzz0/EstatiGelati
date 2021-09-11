import {Container, HeaderStyled, MenuSuperior } from "./styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Logo from "../../../img/logo.png"

function Header(){
    return(
        <HeaderStyled>
           <Container>
				<div class="row">
					<div class="col-md-3 logo">
						<a href="#" title="Estati Gelati">
							<img src= {Logo} alt="Logo Estati Gelati" title="Estati Gelati" />
						</a>
					</div>
					<div class="col-md-7">
						<MenuSuperior>
							<div class="menu-menu-superior-container">
                                <ul class="menu-superior-ul">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Sabores</a></li>
                                    <li><a href="#">Gallery</a></li>
                                    <li><a href="#">Contato</a></li>
                                </ul>
                            </div>						
                         </MenuSuperior>
					</div>

					<div class="col-md-2">
						<div class="social-midias">
							<a href="https://www.instagram.com/" target="_blank">
								<FontAwesomeIcon icon={faFacebook} />
							</a>

							<a href="https://www.facebook.com/" target="_blank">
							<FontAwesomeIcon icon={faInstagram} />
							</a>

							<a href="https://www.linkedin.com/" target="_blank">
							<FontAwesomeIcon icon={faTwitter} />
							</a>
						</div>
					</div>
				</div>
           </Container>
        </HeaderStyled>
    )
}
export default Header;