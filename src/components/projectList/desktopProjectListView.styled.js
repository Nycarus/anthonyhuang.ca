import styled from "styled-components";

import { Box, Typography, Grid } from "@mui/material";

export const ContentBox = styled(Box)`
    max-width: 95vw;
    width: 2000px;
    margin: 0 auto;
`;

export const ContentTitle = styled(Typography)`
    text-align: left;
    font-weight: 500 !important;
    font-size: 28px !important;
    padding-bottom: 30px;
`;

export const ContentGrid = styled(Grid)`
    direction: column;
`;

export const ContentGridItem = styled(Grid)`
    padding-top: 10px;
    padding-bottom: 60px;
`;

export const ProjectGrid = styled(Grid)`
    direction: row;
    justify-content: space-between;
`;

export const ProjectInfoBox = styled(Box)`
    max-width: 60vw;
    max-height: 30vh;
    min-height: 300px;
    width: 1400px;
    height: 400px;
    padding-right: 20px;
`;

export const ProjectTitle = styled(Typography)`
    text-align: left;
    font-weight: 550 !important;
    font-size: 32px !important;
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
    border-radius: 2px !important;
`

export const ProjectTypeTypography = styled(Typography)`
    color: #fff;
    padding: 5px;
    font-size: 13px !important;
    font-weight:650 !important;
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
    border-radius: 8px !important;
    box-shadow: 2px 2px !important;
`

export const ProjectButtonTypography = styled(Typography)`
    text-align: center;
    color: #fff;
    font-size: 15px !important;
    font-weight: 650 !important;
`;

export const ProjectDescriptionBox = styled(Box)`
    padding-top: 5px;
    padding-bottom: 8px;
    padding-left: 10px;
`;

export const ProjectDescriptionTypography = styled(Typography)`
    font-size: 15px !important;
    max-width: 800px;
`

export const ProjectImageBoxOuter = styled(Box)`
    display: flex;
    max-height: 30vh;
    max-width: 30vw;
    min-height: 300px;
    width: 400px;
    height: 400px;
    justify-content: center; 
`;

export const ProjectImage = styled.img`
    position: relative !important;
    width: fit-content;
    height: fit-content;
    max-width: 100%;
    max-height: 100%;
    float: right;
    top: 50%;
    transform: translateY(-50%);
    object-fit: scale-down;
`;