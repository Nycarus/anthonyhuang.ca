import { Grid, Paper, Typography } from "@mui/material";
import styled from "styled-components";

export const StyledFooter = styled.footer`
    padding-bottom: 2px;
`;

export const FooterGrid = styled(Grid)`
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FooterPaper = styled(Paper)`
    width: 99%;
    height: 100%;
    border-radius: 4px;
    margin: 0 auto;
    border-style: solid;
    border-width: thin;
    display: flex;

    @media screen and (max-width:1000px) {
        justify-content: center;
        display: block;
    }
    
`;

export const FooterTypography = styled(Typography)`
    flex-grow: 1;
    display:flex;
    text-align:right;

    @media screen and (max-width:1000px) {
        justify-content: center;
    }

    @media screen and (min-width:1001px) {
        justify-content: right;
        transform: translateY(50%);
        padding-right: 5px;
    }
`