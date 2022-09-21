import React from 'react';
import MainNavBar from "./header/header";
import CssBaseline from '@mui/material/CssBaseline';
import { DivMainContent } from "./header/header.style";

import ThemeController from "../components/theme/theme";


export default function Layout ({ children }) {

    var isMobile = false;

    let defaultWidth;

    if (typeof window !== `undefined`){
        defaultWidth = window.innerWidth
    }

    const [width, setWidth] = React.useState(defaultWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    React.useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, [handleWindowSizeChange]);

    isMobile = width <= 1000;

    return (
        <React.Fragment>
            <ThemeController>
                <CssBaseline/>
                <MainNavBar isMobile={isMobile}/>
                <DivMainContent> {React.cloneElement(children, {isMobile: isMobile})}</DivMainContent>
            </ThemeController>
        </React.Fragment>
    )
};