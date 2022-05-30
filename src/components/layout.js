import React from 'react';
import MainNavBar from "./header/header";
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme , ThemeProvider } from '@mui/material/styles';
import { DivMainContent } from "./header/header.style"

export default function Layout ({ children }) {

    const theme = createTheme({
        palette : {
            primary : {
                main : '#6200EE',
            },
            secondary : {
                main : '#1466ce',
                paper : '#fff',
            }
        },
    });

    return (
        <React.Fragment>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <MainNavBar/>
                <DivMainContent> {children} </DivMainContent>
            </ThemeProvider>
        </React.Fragment>
    )
};