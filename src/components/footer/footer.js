import React from "react";
import Contacts from "../contact/contact";
import { StyledFooter, FooterPaper, FooterTypography } from "./footer.styled";
import { DeviceContext } from "../../contexts/appConfigContext";

const Footer = () => {
    return(
        <DeviceContext.Consumer>
            {({isMobile}) => (
                <StyledFooter>
                    <FooterPaper isMobile={isMobile}>
                        <div>
                            <Contacts/>
                        </div>
                        <div style={{flexGrow:"1"}}>
                            <FooterTypography>
                                <b>ANTHONY HUANG</b> © 2022. Powered by Gatsby.
                            </FooterTypography>
                        </div>
                    </FooterPaper>
                </StyledFooter>
            )}
        </DeviceContext.Consumer>
    )
}

export default Footer;