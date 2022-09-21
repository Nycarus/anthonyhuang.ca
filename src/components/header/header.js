import React from 'react';
import {IconButton, Box, Switch, Grid, List, ListItem, ListItemButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { StyledAppBar, TitleTypography, ButtonTypography, StyledToolbar } from "./header.style"
import DiamondIcon from '@mui/icons-material/Diamond';

export default class MainNavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {isDropDownMenuOpen: false}
        this.toggleDropDownMenu = this.toggleDropDownMenu.bind(this);
    }

    toggleDropDownMenu(){
        this.setState({isDropDownMenuOpen: !this.state.isDropDownMenuOpen})
    }

    render(){
        return (
            !this.props.isMobile ?
            <Box component="nav">
                <StyledAppBar>
                    <StyledToolbar variant="dense">
                        <TitleTypography variant="h6" noWrap component="a" href="/">
                            <DiamondIcon/> Anthony Huang
                        </TitleTypography>

                        <div>
                            <ButtonTypography variant="h6" noWrap component="a" href="/about">
                                About
                            </ButtonTypography>

                            <ButtonTypography variant="h6" noWrap component="a" href="/projects">
                                Projects
                            </ButtonTypography>

                            <Switch color="secondary" onChange={this.props.changeTheme} checked={this.props.themeColour === "light"}/>
                        </div>
                    </StyledToolbar>
                </StyledAppBar>
            </Box>

            :

            <Box component="nav">
                 <StyledAppBar>
                    <Grid container direction="column">
                        <StyledToolbar variant="dense">
                            <TitleTypography variant="h6" noWrap component="a" href="/">
                                <DiamondIcon/> Anthony Huang
                            </TitleTypography>

                            <div>
                                <Switch color="secondary" onChange={this.props.changeTheme}/>

                                <IconButton size="large" edge="start" color="inherit" aria-label="menu" onClick={this.toggleDropDownMenu}>
                                    <MenuIcon />
                                </IconButton>
                            </div>

                            
                        </StyledToolbar>

                        
                        {
                            this.state.isDropDownMenuOpen ? 
                            <List>
                                <ListItem sx={{color:"text.primary"}}>
                                    <ListItemButton href="/about">
                                        <ButtonTypography variant="h6" noWrap>
                                            About
                                        </ButtonTypography>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem sx={{color:"text.primary"}}>
                                    <ListItemButton href="/projects">
                                        <ButtonTypography variant="h6" noWrap>
                                            Projects
                                        </ButtonTypography>
                                    </ListItemButton>
                                </ListItem>
                            </List>
                            :
                            <div/>
                        }
                    </Grid>
                </StyledAppBar>
            </Box>
        );
    };
};