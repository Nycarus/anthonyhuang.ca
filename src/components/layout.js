import React, { useLayoutEffect, useState } from 'react';
import MainNavBar from "./header/header";
import CssBaseline from '@mui/material/CssBaseline';
import { DivMainContent } from "./header/header.styled";
import { createTheme , ThemeProvider } from '@mui/material/styles';
import Footer from './footer/footer';

const Layout = (props) => {
    const [width, setWidth] = useState(null);

    const handleResize = () => {
        setWidth(window.innerWidth)
    }

    useLayoutEffect(() => {
        if (typeof window !== 'undefined'){
            window.addEventListener("resize", handleResize)
            handleResize()
            return () => {window.removeEventListener("resize", handleResize)}
        }
    },[])

    const darkTheme = createTheme({
        palette : {
            mode:"dark",
            primary: {
                main:"#2979ff"
            },
            secondary: {
                main: '#f50057',
            }
        },
        contrastThreshold: 3,
        tonalOffset: 0.2
    });

    return (
        <React.Fragment>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline/>
                <MainNavBar isMobile={width <= 1000}/>
                <DivMainContent> {
                    React.Children.map(props.children, (child) => {
                        return React.cloneElement(child, {isMobile: width <= 1000});
                    })
                }</DivMainContent>
                <Footer/>
            </ThemeProvider>
        </React.Fragment>
    )
};

export default Layout;