import { Grid, Typography } from "@mui/material";
import styled from "styled-components";

export const ContentDiv = styled.div`
    max-width: 95%;
`

export const ContentGrid = styled(Grid)`
    justify-content: center;
    align-items: center;
    height: 100vh;
    max-height: 1500px;
    flex-direction: column;
    margin: 0 auto;
`;

export const TitleTypography = styled(Typography)`
    font-size: 60px;
    font-family: monospace;
    font-weight: 400;
    text-align: center;
    letter-spacing: 7px;
`;

export const DescriptionTypography = styled(Typography)`
    font-size: 20px;
    font-family: monospace;
    font-weight: 400;
    text-align: center;
    justify-content: center;
`;