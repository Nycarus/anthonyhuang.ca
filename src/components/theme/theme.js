import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeContext } from '../../contexts/themeContext';

const htmlConfig = {
    scrollBehavior: "smooth",
    scrollPaddingTop: "60px"
}

const lightTheme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: htmlConfig
            }
        }
    },
    palette : {
        mode:"light",
        primary: {
            main:"#5c6bc0",
            contrastText: '#fff'
        },
        secondary: {
            main: '#301b70',
            contrastText: '#fff'
        }
    },
    contrastThreshold: 3,
    tonalOffset: 0.2
});

const darkTheme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: htmlConfig
            }
        }
    },
    palette : {
        mode:"dark",
        primary: {
            main:"#5c6bc0",
            contrastText: '#fff'
        },
        secondary: {
            main: '#301b70',
            contrastText: '#fff'
        }
    },
    contrastThreshold: 3,
    tonalOffset: 0.2
});

const ThemeController = (props) => {
    const [theme, setTheme] = useState(null);

    const systemDarkTheme = useMediaQuery("(prefers-color-scheme: dark)");

    const toggleTheme = () => {
        console.log("toggled");
        if (theme === "light") {
            setTheme("dark");
            localStorage.setItem("themeValue", "dark");
        }
        else {
            setTheme("light");
            localStorage.setItem("themeValue", "light");
        }
    }

    useEffect(()=>{
        if (typeof window !== 'undefined') {
            let localTheme = localStorage.getItem("themeValue");
            
            if (localTheme){
                setTheme(localTheme);
            }
            else{
                if (systemDarkTheme){
                    setTheme("dark");
                    localStorage.setItem("themeValue", "dark");
                }
                else{
                    setTheme("light");
                    localStorage.setItem("themeValue", "light");
                }
            }
        }
    },[systemDarkTheme])

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
                    <CssBaseline/>
                    {props.children}
                </ThemeProvider>
            </StyledEngineProvider>
        </ThemeContext.Provider>
    )
}

export default ThemeController;