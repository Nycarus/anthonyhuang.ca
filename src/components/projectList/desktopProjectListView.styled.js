import styled from "styled-components";

import { Box, Typography, Grid, Paper} from "@mui/material";

export const ContentBox = styled(Box)`
    display: flex;
`;

export const ContentPaper = styled(Paper)`
    margin: 20px;
`;

export const ContentGrid = styled(Grid)`
    direction: column;
    max-width: 2000px;
    margin: 0 auto;
    justify-content: center;
`;

export const ProjectInfoBox = styled(Box)`
    flex-shrink: 1;
    height: 300px;
    width: auto;
    border-style: solid;
    border-width: thin;
`;

export const ProjectTitle = styled(Typography)`
    text-align: left;
    font-weight: 550;
    font-size: 32px;
    padding-left: 10px;
`;

export const ProjectTypeGrid = styled(Grid)`
    direction: row;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
`

export const ProjectTypeGridItem = styled(Grid)`
    padding-right: 8px;
`;

export const ProjectTypeBox = styled(Box)`
    width: fit-content;
    margin: 1px;
    border-radius: 2px;
`

export const ProjectTypeTypography = styled(Typography)`
    color: #fff;
    padding: 5px;
    font-size: 13px;
    font-weight:650;
`

export const ProjectButtonGrid = styled(Grid)`
    direction: row;
`;

export const ProjectButtonGridItem = styled(Grid)`
    padding-right: 8px;
`;

export const ProjectButtonBox = styled(Box)`
    display: flex;
    min-width: 200px;
    min-height: 50px;
    width: fit-content;
    height: fit-content;
    margin: 1px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    box-shadow: 2px 2px rgba(140,140,140,0.9);
`

export const ProjectButtonTypography = styled(Typography)`
    text-align: center;
    color: #fff;
    font-size: 15px;
    font-weight: 650;
`;

export const ProjectDescriptionBox = styled(Box)`
    padding-top: 5px;
    padding-bottom: 8px;
    padding-left: 10px;
`;

export const ProjectDescriptionTypography = styled(Typography)`
    font-size: 15px;
    max-height: 100px;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    
    text-overflow: ellipsis;

    white-space: normal;
    word-wrap: break-word;
    white-space: pre-wrap;
`

export const ProjectImageBoxOuter = styled(Box)`
    display: flex;
    max-height: 300px;
    max-width: 300px;
    min-width: 300px;
    min-height: 300px;
    background: rgba(0, 0, 0, 0.5);
    justify-content: center; 
    border-radius: 4px 0px 0px 4px;
    border-style: solid;
    border-width: thin;
`;

export const ProjectImage = styled.img`
    position: relative;
    width: fit-content;
    height: fit-content;
    max-width: 100%;
    max-height: 100%;
    float: right;
    top: 50%;
    transform: translateY(-50%);
    object-fit: scale-down;
`;