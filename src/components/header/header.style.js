import AppBar from '@mui/material/AppBar';
import styled from "styled-components";
import Typography from '@mui/material/Typography';

export const StyledAppBar = styled(AppBar)`
    position: static;
    height:45px;
`

export const AppBarTypography = styled(Typography)`
    flex-grow: 1;
    text-decoration: none;
    font-family: monospace;
    color: inherit;
`

export const TitleTypography = styled(AppBarTypography)`
    padding-left: 3%;
    font-size: 18px !important;
    font-weight: 600 !important;
`

export const ButtonTypography = styled(AppBarTypography)`
    text-align: center;
    padding: 10px;
    font-size: 15px !important;
    font-weight: 400 !important;
    padding-right: 28px !important;
`

export const DivMainContent = styled.div`
    margin-top: 45px;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    vertical-align:middle;
    align-items: center;
`