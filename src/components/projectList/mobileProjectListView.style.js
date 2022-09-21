import styled from "styled-components";
import { Typography, IconButton, Grid, Paper } from "@mui/material";

export const ContentTitle = styled(Typography)`
    text-align: center;
    font-weight: 500;
    font-size: 28px;
    padding-bottom: 30px;
`;

export const ContentGrid = styled(Grid)`
    direction: row;
    justify-content: center;
`;

export const ProjectButton = styled(IconButton)`
    height: 45vw;
    width: 45vw;
    margin: 2vw;
`;

export const ProjectTypography = styled(Typography)`
    text-align: center;
    margin-left: 3px;
    margin-right: 3px;
    text-overflow: ellipsis;
    overflow: hidden;
    color: black;
    font-size: 20px;
    font-weight: 600;
`;

export const ProjectPaperWithoutImage = styled(Paper)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45vw;
    width: 45vw;
    background-color: white;
`