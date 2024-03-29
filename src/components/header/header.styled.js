import AppBar from '@mui/material/AppBar';
import styled, {keyframes} from "styled-components";
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import { Switch, Button, List, ListItemButton } from '@mui/material';

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

const highlight = keyframes`
    0% {
        box-shadow: none;
    }

    100% {
      box-shadow: 0 0 50px #ccc;
    }
`

export const StyledButton = styled(Button)`
  margin: 5px;
  &:hover{
    animation: ${highlight} ease-in-out 0.3s forwards;
  }
`;

export const StyledListItemButton = styled(ListItemButton)`
  &:hover{
    animation: ${highlight} ease-in-out 0.3s forwards;
  }
`;

export const TitleTypography = styled(AppBarTypography)`
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    text-align: center;
`

export const ButtonTypography = styled(AppBarTypography)`
    text-align: center;
    font-size: 15px;
    font-weight: 400;
    color: #fff;
`

export const DivMainContent = styled.div`
    padding-top: 30px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    vertical-align: middle;
`

const dropDown = keyframes`
    0% {
        transform: scaleY(0);
        opacity: 0;
    }
    70% {
        transform: scaleY(1.1);
    }
    85% {
        transform: scaleY(0.9);
        opacity: 1;
    }
    100% {
        transform: scaleY(1);
    }
`;

export const StyledList = styled(List)`
  animation: ${dropDown} 0.3s ease-in-out forwards;
`;

export const ThemeSwitch = styled(Switch)((props) => ({
    width: 62,
    height: 34,
    padding: 7,
    animation: `$switchThemes`,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg style="color: white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun" viewBox="0 0 16 16"> <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" fill="white"></path> </svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: '#fff',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: props.themeType === "dark" ? '#001e3c' : '#aab4be',
      width: 32,
      height: 32,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg style="color: white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-stars-fill" viewBox="0 0 16 16"> <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" fill="white"></path> <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" fill="white"></path> </svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: '#aab4be',
      borderRadius: 20,
    },
  }));