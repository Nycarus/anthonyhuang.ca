import { Paper, Typography } from '@mui/material';
import styled, {keyframes} from "styled-components";

const highlight = keyframes`
    0% {
        transform: scale(1);
        box-shadow: none;
    }

    100% {
        transform: scale(1.5);
        box-shadow: 0.2rem 0.2rem black, -0.2rem -0.2rem #ccc;
    }
`

export const ContentPaper = styled(Paper)`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 5px;
    border-style: solid;
    border-width: thin;

    &:hover{
        animation: ${highlight} ease-in-out 0.2s forwards;
    }
`;

export const TechStackTypography = styled(Typography)`
    font-family: monospace;
    color: inherit;
`;

export const CategoryTypography = styled (TechStackTypography)`
    font-size: 24px;
    font-weight: 550;
`

export const TechnologyTypography = styled (TechStackTypography)`
    font-size: 18px;
    font-weight: 450;
`

export const TechnologyImage = styled.img`
    width: 50px;
    height: 50px;
`