import React from "react";
import Contacts from "../contact/contact";
import { StyledFooter, FooterPaper, FooterGrid, FooterTypography } from "./footer.styled";

const Footer = (props) => {
    return(
        <StyledFooter>
            <FooterPaper>
                <FooterGrid>
                    <Contacts/>
                    <FooterTypography>
                        <b>ANTHONY HUANG</b> © 2022. Powered by Gatsby.
                    </FooterTypography>
                </FooterGrid>
            </FooterPaper>
        </StyledFooter>
    )
}

export default Footer;