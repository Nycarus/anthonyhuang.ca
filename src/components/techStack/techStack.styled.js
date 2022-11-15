import { Typography } from '@mui/material';
import styled from "styled-components";

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