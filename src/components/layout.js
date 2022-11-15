import React, { useLayoutEffect, useState } from 'react';
import MainNavBar from "./header/header";
import { DivMainContent } from "./header/header.styled";
import Footer from './footer/footer';
import ThemeController from './theme/theme';

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

    return (
        <React.Fragment>
            <ThemeController>
                <MainNavBar isMobile={width <= 1000}/>
                <DivMainContent> {
                    React.Children.map(props.children, (child) => {
                        return React.cloneElement(child, {isMobile: width <= 1000});
                    })
                }</DivMainContent>
                <Footer/>
            </ThemeController>
        </React.Fragment>
    )
};

export default Layout;