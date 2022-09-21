import React from "react"

import { Box, Paper } from '@mui/material';

import { ContentTitle, ContentGrid, ProjectButton, ProjectTypography, ProjectPaperWithoutImage } from "./mobileProjectListView.style";

export default function MobileProjectListView(props) {

    return(
        <React.Fragment>
            <ContentTitle>Projects</ContentTitle>
            <ContentGrid container>{
                props.data.allProjectJson.edges.map(({node}) => (
                    <Box key={node.title + "mobile"}>{
                        node.images ?
                        <ProjectButton href={`/project/${node.slug}`} target="_blank" rel="noopener noreferrer">
                            <Paper style={{display:"flex", justifyContent:"center", alignItems:"center", backgroundImage:`linear-gradient(rgba(255,255,255,.4), rgba(255,255,255,.8)), url(${node.images[0].image.publicURL})`, backgroundSize: "cover", height: "45vw", width:"45vw"}}>
                                <ProjectTypography>
                                    {node.title}
                                </ProjectTypography>
                            </Paper>
                        </ProjectButton>
                        :
                        <ProjectButton href={`/project/${node.slug}`} target="_blank" rel="noopener noreferrer">
                            <ProjectPaperWithoutImage>
                                <ProjectTypography>
                                    {node.title}
                                </ProjectTypography>
                            </ProjectPaperWithoutImage>
                        </ProjectButton>
                    }</Box>
                ))
            }</ContentGrid>
        </React.Fragment>
    );
}