import { Grid, Typography } from "@mui/material";
import styled from "styled-components";

export const ContentDiv = styled.div`
    max-width: 95%;
`

export const ContentGrid = styled(Grid)`
    justify-content: center !important;
    align-items: center !important;
    height: 100vh;
    max-height: 1500px;
    flex-direction: column !important;
    margin: 0 auto !important;
`;

export const TitleTypography = styled(Typography)`
    font-size: 60px !important;
    font-family: monospace !important;
    font-weight: 400 !important;
    text-align: center !important;
    letter-spacing: 7px !important;
`;

export const DescriptionTypography = styled(Typography)`
    font-size: 20px !important;
    font-family: monospace !important;
    font-weight: 400 !important;
    text-align: center !important;
    justify-content: center;
`;