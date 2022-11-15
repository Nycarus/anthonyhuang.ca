import AppBar from '@mui/material/AppBar';
import styled from "styled-components";
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

export const StyledAppBar = styled(AppBar)`
    position: fixed;
`

export const StyledToolbar = styled(Toolbar)`
    justify-content: space-between;
    height: 60px;
`

export const AppBarTypography = styled(Typography)`
    text-decoration: none;
    font-family: monospace;
    color: inherit;
`

export const TitleTypography = styled(AppBarTypography)`
    padding-left: 3%;
    font-size: 18px;
    font-weight: 600;
`

export const ButtonTypography = styled(AppBarTypography)`
    text-align: center;
    padding: 10px;
    font-size: 15px;
    font-weight: 400;
    padding-right: 28px;
`

export const DivMainContent = styled.div`
    padding-top: 60px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    vertical-align: middle;
`