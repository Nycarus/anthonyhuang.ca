import styled from "styled-components";
import {Box, Grid, Typography, Divider} from '@mui/material';

export const ContentBox = styled(Box)`
    max-width: 95vw;
    width: 1000px;
    margin: auto;
`;

export const ProjectTitleTypography = styled(Typography)`
    text-align: center;
    font-size: 40px;
`

export const TagGrid = styled(Grid)`
    direction: row;
    padding-top: 20px;
    justify-content: center;
`

export const TagBox = styled(Box)`
    width: fit-content;
    margin: 1px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 20px;
`

export const TagText = styled(Typography)`
    color: #fff;
    padding: 5px;
    font-size: 18px;
    font-weight: 650;
`

export const TitleToBodyDivider = styled(Divider)`
    padding-bottom: 20px;
`

export const DescriptionBox = styled(Box)`
    padding-top: 30px;
    padding-bottom: 50px;
`

export const DescriptionTypography = styled(Typography)`
    font-size: 18px;
    white-space: normal;
    word-wrap: break-word;
    white-space: pre-wrap;
`

export const ProjectInfoBox = styled(Box)`
    padding-bottom: 10px;
`