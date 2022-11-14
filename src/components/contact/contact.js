import * as React from "react";
import { IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import {ContactGrid} from "./contact.styled"

const Contacts = () => {
    return(
        <ContactGrid container item>
            <IconButton aria-label="Person">
                <a href="about" rel="noreferrer noopener" target="_blank" aria-label="Person">
                    <PersonIcon fontSize="large" color="primary"></PersonIcon>
                </a>
                
            </IconButton>
            <IconButton aria-label="Email" >
                <a href="mailto:huang.anthony@outlook.com" rel="noreferrer noopener" target="_blank" aria-label="Email">
                    <EmailIcon fontSize="large" color="primary"></EmailIcon>
                </a>
            </IconButton>
            <IconButton aria-label="Github">
                <a href="https://github.com/Nycarus" rel="noreferrer noopener" target="_blank" aria-label="Github">
                    <GitHubIcon fontSize="large" color="primary"></GitHubIcon>
                </a>
            </IconButton>
            <IconButton aria-label="Linkedin">
                <a href="https://www.linkedin.com/in/anthony-huang-0/" rel="noreferrer noopener" target="_blank" aria-label="Linkedin">
                    <LinkedInIcon fontSize="large" color="primary"></LinkedInIcon>
                </a>
            </IconButton>
        </ContactGrid>
    )
}

export default Contacts;