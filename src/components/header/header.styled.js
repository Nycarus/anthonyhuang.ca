import AppBar from '@mui/material/AppBar';
import styled from "styled-components";
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

export const StyledAppBar = styled(AppBar)`
    position: static !important;
`

export const StyledToolbar = styled(Toolbar)`
    justify-content: space-between;
    height: 60px;
`

export const AppBarTypography = styled(Typography)`
    text-decoration: none !important;
    font-family: monospace !important;
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
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    min-height: 100vh !important;
    vertical-align: middle;
`