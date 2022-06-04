import * as React from "react"
import Layout from '../components/layout'
import { Typography, Divider } from '@mui/material';

import TechStack from '../components/techStack/techStack'

export default function AboutPage () {
    return (
        <Layout>
            <div style = {{ paddingTop: 100, paddingLeft: "20%", paddingRight: "20%", minHeight: "50vh"}}>
                <Typography align="center" display="block" style={{fontSize:20, fontFamily:"monospace", fontWeight: 200, justifyContent:"center"}}>
                    Hello, I am Anthony.
                    <br/>
                    <br/>
                    I am a hobbyist who has recently graduated from Ontario Tech University as a computer scientist. 
                    I love to create various software and applications, learning new skills and technologies to accomplish this goal.
                    I was first inspired to become a developer back in 2015 and have been programming since.
                    Now, I am seeking professional experience to continue developing and applying my skills.
                    <br/>
                    <br/>
                    Some of my projects can be viewed in the Projects page. You may see some technologies I have worked with in the past, down below.
                    <br/>
                    <br/>
                    This website was created using React, Gatsby, Graphql, and Material UI.
                </Typography>

                <Divider style={{paddingTop:35}}/>

                <div style={{paddingTop:35}}>
                    <TechStack/>
                </div>
            </div>
        </Layout>
    );
};