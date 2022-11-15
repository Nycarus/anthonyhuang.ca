import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider, StyledEngineProvider  } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeContext } from '../../contexts/themeContext';

const lightTheme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    scrollBehavior: "smooth",
                    scrollPaddingTop: "60px"
                }
            }
        }
    },
    palette : {
        mode:"light",
        primary: {
            main:"#2979ff"
        },
        secondary: {
            main: '#f50057'
        }
    },
    contrastThreshold: 3,
    tonalOffset: 0.2
});

const darkTheme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    scrollBehavior: "smooth",
                    scrollPaddingTop: "60px"
                }
            }
        }
    },
    palette : {
        mode:"dark",
        primary: {
            main:"#2979ff"
        },
        secondary: {
            main: '#f50057'
        }
    },
    contrastThreshold: 3,
    tonalOffset: 0.2
});

const ThemeController = (props) => {
    const [theme, setTheme] = useState(null);

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
                setTheme("light");
            }
        }
    },[])

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