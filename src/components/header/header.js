import React, { useState, useContext } from 'react';
import { Link } from "gatsby";
import {IconButton, Box, Grid, ListItem} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { StyledAppBar, TitleTypography, ButtonTypography, StyledToolbar, ThemeSwitch, StyledList, StyledButton, StyledListItemButton } from "./header.styled"
import DiamondIcon from '@mui/icons-material/Diamond';
import { ThemeContext } from '../../contexts/themeContext';

const MainNavBar = (props) => {
    const [isDropDownMenuOpen, setDropDownMenuOpen] = useState(false);
    const {theme, toggleTheme} = useContext(ThemeContext);

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
                            <StyledButton component={Link} to="/#home">
                                <TitleTypography variant="h6" noWrap component={Link} to="/#home">
                                    <DiamondIcon/> Anthony Huang
                                </TitleTypography>
                            </StyledButton>

                            <div>
                                <ThemeSwitch color="secondary" onChange={toggleTheme} checked={theme === "light"} themeType={theme}/>

                                <IconButton size="large" edge="start" color="inherit" aria-label="menu" onClick={toggleDropDownMenu}>
                                    <MenuIcon />
                                </IconButton>
                            </div>

                            
                        </StyledToolbar>

                        {
                            isDropDownMenuOpen &&
                            <StyledList>
                                <ListItem sx={{color:"text.primary"}}>
                                    <StyledListItemButton to="/#about" onClick={toggleDropDownMenu} component={Link}>
                                        <ButtonTypography variant="h6" noWrap>
                                            About
                                        </ButtonTypography>
                                    </StyledListItemButton>
                                </ListItem>
                                <ListItem sx={{color:"text.primary"}}>
                                    <StyledListItemButton to="/projects" onClick={toggleDropDownMenu} component={Link}>
                                        <ButtonTypography variant="h6" noWrap>
                                            Projects
                                        </ButtonTypography>
                                    </StyledListItemButton>
                                </ListItem>
                            </StyledList>
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
                        <StyledButton component={Link} to="/#home">
                            <TitleTypography variant="h6" noWrap>
                                <DiamondIcon/> Anthony Huang
                            </TitleTypography>
                        </StyledButton>

                        <div>
                            <StyledButton component={Link} to="/#about">
                                <ButtonTypography variant="h6" noWrap>
                                    About
                                </ButtonTypography>
                            </StyledButton>

                            <StyledButton component={Link} to="/projects">
                                <ButtonTypography variant="h6" noWrap>
                                    Projects
                                </ButtonTypography>
                            </StyledButton>

                            <ThemeSwitch color="secondary" onChange={toggleTheme} checked={theme === "light"} themeType={theme}/>
                        </div>
                    </StyledToolbar>
                </StyledAppBar>
            </Box>
        )
    }
};

export default MainNavBar;