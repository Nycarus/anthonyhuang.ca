import { Grid, Typography } from "@mui/material";
import styled, {keyframes} from "styled-components";

const fadeInandSlideIn = keyframes`
    0% {
        transform: translateY(5%);
        opacity: 0;
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
`

export const ContentDiv = styled.div`
    max-width: 95%;
    animation: 1s ease-out 0s 1 ${fadeInandSlideIn};
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