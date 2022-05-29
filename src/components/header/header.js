import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { StyledAppBar, TitleTypography, ButtonTypography, } from "./header.style"

export default class MainNavBar extends React.Component {
    render(){
        return (
            <div>
                <StyledAppBar>
                    <Toolbar variant="dense">
                        <TitleTypography variant="h6" noWrap component="a" href="/">
                            Anthony Huang
                        </TitleTypography>

                        <div>
                            <ButtonTypography variant="h6" noWrap component="a" href="/about">
                                About
                            </ButtonTypography>

                            <ButtonTypography variant="h6" noWrap component="a" href="/projects">
                                Projects
                            </ButtonTypography>
                        </div>
                    </Toolbar>
                </StyledAppBar>
            </div>
        );
    };
};