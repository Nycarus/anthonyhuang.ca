import React, { useState } from 'react';
import {IconButton, Box, Grid, List, ListItem, ListItemButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { StyledAppBar, TitleTypography, ButtonTypography, StyledToolbar } from "./header.styled"
import DiamondIcon from '@mui/icons-material/Diamond';

const MainNavBar = (props) => {
    const [isDropDownMenuOpen, setDropDownMenuOpen] = useState(false);

    const toggleDropDownMenu = () => {
        setDropDownMenuOpen(!isDropDownMenuOpen)
    }

    if (props.isMobile) {

        // Mobile View
        return (
            <Box component="nav">
                <StyledAppBar>
                    <Grid container direction="column">
                        <StyledToolbar variant="dense">
                            <TitleTypography variant="h6" noWrap component="a" href="/#home">
                                <DiamondIcon/> Anthony Huang
                            </TitleTypography>

                            <div>
                                <IconButton size="large" edge="start" color="inherit" aria-label="menu" onClick={toggleDropDownMenu}>
                                    <MenuIcon />
                                </IconButton>
                            </div>

                            
                        </StyledToolbar>

                        
                        {
                            isDropDownMenuOpen ? 
                            <List>
                                <ListItem sx={{color:"text.primary"}}>
                                    <ListItemButton href="/#about" onClick={toggleDropDownMenu}>
                                        <ButtonTypography variant="h6" noWrap>
                                            About
                                        </ButtonTypography>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem sx={{color:"text.primary"}}>
                                    <ListItemButton href="/projects" onClick={toggleDropDownMenu}>
                                        <ButtonTypography variant="h6" noWrap>
                                            Projects
                                        </ButtonTypography>
                                    </ListItemButton>
                                </ListItem>
                            </List>
                            :
                            null
                        }
                    </Grid>
                </StyledAppBar>
            </Box>
        )
    }
    else{

        // Window View
        return(
            <Box component="nav">
                <StyledAppBar>
                    <StyledToolbar variant="dense">
                        <TitleTypography variant="h6" noWrap component="a" href="/#home">
                            <DiamondIcon/> Anthony Huang
                        </TitleTypography>

                        <div>
                            <ButtonTypography variant="h6" noWrap component="a" href="/#about">
                                About
                            </ButtonTypography>

                            <ButtonTypography variant="h6" noWrap component="a" href="/projects">
                                Projects
                            </ButtonTypography>
                        </div>
                    </StyledToolbar>
                </StyledAppBar>
            </Box>
        )
    }
};

export default MainNavBar;