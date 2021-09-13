import {Container, HeaderStyled, MenuSuperior, Logo, MediaSocial, LogoLink, NavLink } from "./styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBars } from "@fortawesome/free-solid-svg-icons"
import LogoEstatiGelati from "../../img/logo.png"
import { useState } from "react"

function Header(){

	const [open, setOpen] = useState(false);


    return(
        <HeaderStyled>
           <Container className="container-fluid" >
				<div className="row">
					<div className="col-md-3">
						<LogoLink href="#" title="Estati Gelati">
							<Logo src= {LogoEstatiGelati} alt="Logo Estati Gelati" title="Estati Gelati" />
						</LogoLink>
					</div>
					<div className="col-md-7">
						<MenuSuperior open={open}>
							<NavLink href="#">Home</NavLink>
							<NavLink href="#">Sabores</NavLink>
							<NavLink href="#">Nosso Local</NavLink>
							<NavLink href="#">Contato</NavLink>		


							<NavLink href="#" onClick={() => setOpen(!open)}>
								<FontAwesomeIcon icon={faBars} className="icon"/>
							</NavLink>		



                         </MenuSuperior>
					</div>

					<div className="col-md-2">
						<MediaSocial>
							<a href="https://www.instagram.com/" target="_blank">
								<FontAwesomeIcon icon={faFacebook} />
							</a>

							<a href="https://www.facebook.com/" target="_blank">
							<FontAwesomeIcon icon={faInstagram} />
							</a>

							<a href="https://www.linkedin.com/" target="_blank">
							<FontAwesomeIcon icon={faTwitter} />
							</a>
						</MediaSocial>
					</div>
				</div>
           </Container>
        </HeaderStyled>
    )
}
export default Header;