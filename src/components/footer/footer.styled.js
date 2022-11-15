import { Grid, Paper, Typography } from "@mui/material";
import styled from "styled-components";

export const StyledFooter = styled.footer`
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
`;

export const FooterTypography = styled(Typography)`
    text-align: center;
    vertical-align: middle;
`