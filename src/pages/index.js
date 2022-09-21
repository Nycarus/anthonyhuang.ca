import * as React from "react";
import Layout from '../components/layout';
import { Grid, IconButton, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// markup
export default function IndexPage () {
    return (
        <Layout>
            <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2} style = {{ paddingTop: 50, minHeight: "50vh"}}>   
                {/* Title */}
                <Grid item>
                    <Typography align="center" style={{fontSize:60, fontFamily:"monospace", fontWeight: 100, letterSpacing:7}}>Anthony Huang</Typography>
                </Grid>

                {/* Description */}
                <Grid item>
                    <Typography align="center" style={{fontSize:20, fontFamily:"monospace", fontWeight: 200, justifyContent:"center"}}>Recent Computer Science Graduate From Ontario Tech University</Typography>
                </Grid>
                
                {/* Contact Info */}
                {/* TODO: Clean up code */}
                <Grid container direction="row" justifyContent="center" alignItems="center" item spacing={3} style={{
                        paddingTop: 40,
                    }}>
                    <Grid item>
                        <IconButton aria-label="Person">
                            <a href="about" rel="noreferrer noopener" target="_blank" aria-label="Person">
                                <PersonIcon fontSize="large" color="primary"></PersonIcon>
                            </a>
                            
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton aria-label="Email" >
                            <a href="mailto:huang.anthony@outlook.com" rel="noreferrer noopener" target="_blank" aria-label="Email">
                                <EmailIcon fontSize="large" color="primary"></EmailIcon>
                            </a>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton aria-label="Github">
                            <a href="https://github.com/Nycarus" rel="noreferrer noopener" target="_blank" aria-label="Github">
                                <GitHubIcon fontSize="large" color="primary"></GitHubIcon>
                            </a>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton aria-label="Linkedin">
                            <a href="https://www.linkedin.com/in/anthony-huang-0/" rel="noreferrer noopener" target="_blank" aria-label="Linkedin">
                                <LinkedInIcon fontSize="large" color="primary"></LinkedInIcon>
                            </a>
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </Layout>
    );
};