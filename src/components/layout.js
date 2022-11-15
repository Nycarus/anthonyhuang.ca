import React, { useEffect, useState } from 'react';
import MainNavBar from "./header/header";
import { DivMainContent } from "./header/header.styled";
import Footer from './footer/footer';
import ThemeController from './theme/theme';
import { DeviceContext } from '../contexts/appConfigContext';

const Layout = (props) => {
    const [isMobile, setMobile] = useState(null);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1000){
                setMobile(true);
            }
            else{
                setMobile(false);
            }
        }

        if (typeof window !== 'undefined'){
            window.addEventListener("resize", handleResize)
            handleResize()
            return () => {window.removeEventListener("resize", handleResize)}
        }
    },[])

    return (
        <React.Fragment>
            <DeviceContext.Provider value={{isMobile}}>
                <ThemeController>
                    <MainNavBar isMobile={isMobile}/>
                    <DivMainContent>
                        {props.children}
                    </DivMainContent>
                    <Footer/>
                </ThemeController>
            </DeviceContext.Provider>
        </React.Fragment>
    )
};

export default Layout;