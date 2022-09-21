import { Typography } from '@mui/material';
import styled from "styled-components";

export const TechStackTypography = styled(Typography)`
    font-family: monospace;
    color: inherit;
`;

export const CategoryTypography = styled (TechStackTypography)`
    font-size: 24px !important;
    font-weight: 550 !important;
`

export const TechnologyTypography = styled (TechStackTypography)`
    font-size: 18px !important;
    font-weight: 450 !important;
`

export const TechnologyImage = styled.img`
    width: 50px;
    height: 50px;
`