import React from 'react';
import MainNavBar from "./header/header";
import CssBaseline from '@mui/material/CssBaseline';
import { DivMainContent } from "./header/header.style";

import ThemeController from "../components/theme/theme";

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {width: 1001}
        this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this)
    }

    componentDidMount(){
        this.handleWindowSizeChange()
        if (typeof window !== `undefined`){
            window.addEventListener('resize', this.handleWindowSizeChange)
        }
    }

    componentWillUnmount(){
        if (typeof window !== `undefined`){
            window.removeEventListener('resize', this.handleWindowSizeChange)
        }
    }

    handleWindowSizeChange() {
        if (typeof window !== `undefined`){
            this.setState({width: window.innerWidth});
        }
    }

    render() {
        return (
            <React.Fragment>
                <ThemeController>
                    <CssBaseline/>
                    <MainNavBar isMobile={this.state.width <= 1000}/>
                    <DivMainContent> {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {isMobile: this.state.width <= 1000});
                        })
                    }</DivMainContent>
                </ThemeController>
            </React.Fragment>
        )
    }
};