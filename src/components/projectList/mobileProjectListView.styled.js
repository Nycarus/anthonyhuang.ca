import styled, { keyframes } from "styled-components";
import { Typography, IconButton, Grid, Paper, Box } from "@mui/material";

export const ContentGrid = styled(Grid)`
    direction: row;
    justify-content: center;
`;

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`

export const ProjectBox = styled(Box)`
    margin: 1px;
    animation: ${props=> props.index * 0.5 + "s"} ease-out 0s 1 ${fadeIn};
`;

export const ProjectButton = styled(IconButton)`
`;

export const ProjectTypography = styled(Typography)`
    text-align: center;
    margin-left: 3px;
    margin-right: 3px;
    text-overflow: ellipsis;
    overflow: hidden;
    color: white;
    font-size: 20px;
    font-weight: 600;
`;

export const ProjectPaper = styled(Paper)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45vw;
    width: 45vw;
    background-size: cover;
    background-image: url(${props => props.imageURL});
    background-color: rgba(0, 0, 0, .65);
    background-blend-mode: darken;
`;