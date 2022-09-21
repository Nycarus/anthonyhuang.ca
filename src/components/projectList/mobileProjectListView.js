import React from "react"

import { Box, Paper } from '@mui/material';

import { ContentTitle, ContentGrid, ProjectButton, ProjectTypography, ProjectPaperWithoutImage } from "./mobileProjectListView.styled";

export default function MobileProjectListView(props) {

    return(
        <React.Fragment>
            <ContentTitle>Projects</ContentTitle>
            <ContentGrid container>{
                props.data.allProjectJson.edges.map(({node}) => (
                    <Box key={node.title + "mobile"}>{
                        node.images ?
                        <ProjectButton href={`/project/${node.slug}`}>
                            <Paper style={{display:"flex", justifyContent:"center", alignItems:"center", backgroundImage:`linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.8)), url(${node.images[0].image.publicURL})`, backgroundSize: "cover", height: "40vw", width:"40vw"}}>
                                <ProjectTypography>
                                    {node.title}
                                </ProjectTypography>
                            </Paper>
                        </ProjectButton>
                        :
                        <ProjectButton href={`/project/${node.slug}`}>
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