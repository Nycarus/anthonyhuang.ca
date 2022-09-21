import React from "react"
import { Grid, Paper, IconButton } from '@mui/material';

import { ContentBox, ContentTitle, ContentGrid, ContentGridItem,ProjectGrid, ProjectInfoBox, ProjectTitle,
    ProjectTypeGrid, ProjectTypeGridItem, ProjectTypeBox, ProjectTypeTypography,
    ProjectButtonGrid, ProjectButtonBox, ProjectButtonGridItem, ProjectButtonTypography,
    ProjectDescriptionBox, ProjectDescriptionTypography,
    ProjectImageBoxOuter, ProjectImage } from './desktopProjectListView.styled'

export default function DesktopProjectListView(props) {
    return(
        <ContentBox>
            <ContentTitle>Projects</ContentTitle>
            <ContentGrid container>{
                props.data.allProjectJson.edges.map(({node}) => {
                    return(
                        <ContentGridItem item key={node.title + "desktop"}>
                            
                                <ProjectGrid container>
                                    <Grid item>
                                    <Paper>
                                        <ProjectInfoBox>
                                            {/* Project Title */}
                                            <ProjectTitle>{node.title}</ProjectTitle>

                                            {/* Project Type */}
                                            <ProjectTypeGrid container>{
                                                node.project_type ?
                                                node.project_type.map((type) => {
                                                    return(
                                                        <ProjectTypeGridItem item>
                                                            <ProjectTypeBox bgcolor="primary.main">
                                                                <ProjectTypeTypography >{type.name}</ProjectTypeTypography>
                                                            </ProjectTypeBox>
                                                        </ProjectTypeGridItem>
                                                    )
                                                })
                                                :
                                                null
                                            }</ProjectTypeGrid>

                                            {/* Project Tags */}
                                            <ProjectTypeGrid container>{
                                                node.tags ?
                                                node.tags.map((tag) => {
                                                    return(
                                                        <ProjectTypeGridItem item>
                                                            <ProjectTypeBox bgcolor="secondary.main">
                                                                <ProjectTypeTypography>{tag.name}</ProjectTypeTypography>
                                                            </ProjectTypeBox>
                                                        </ProjectTypeGridItem>
                                                    )
                                                })
                                                :
                                                null
                                            }</ProjectTypeGrid>

                                            {/* View Project Buttons */}
                                            <ProjectButtonGrid container>
                                                <ProjectButtonGridItem item>
                                                    <IconButton href={`/project/${node.slug}`}>
                                                        <ProjectButtonBox bgcolor="warning.main">
                                                            <ProjectButtonTypography>
                                                                More Information
                                                            </ProjectButtonTypography>
                                                        </ProjectButtonBox>
                                                    </IconButton>
                                                </ProjectButtonGridItem>
                                                
                                                {
                                                    /* Github link if there's one*/
                                                    node.source ?
                                                    <ProjectButtonGridItem item>
                                                        <IconButton href={node.source} target="_blank" rel="noopener noreferrer">
                                                            <ProjectButtonBox bgcolor="warning.main">
                                                                <ProjectButtonTypography>
                                                                    Github
                                                                </ProjectButtonTypography>
                                                            </ProjectButtonBox>
                                                        </IconButton>
                                                    </ProjectButtonGridItem>
                                                    :
                                                    null
                                                }
                                            </ProjectButtonGrid>

                                            {/* Project Description */}
                                            <ProjectDescriptionBox>
                                                <ProjectDescriptionTypography noWrap>
                                                    {node.description}
                                                </ProjectDescriptionTypography>
                                            </ProjectDescriptionBox>
                                        </ProjectInfoBox>
                                        </Paper>
                                    </Grid>
                                    {/* Project Image */}
                                    <Grid item>
                                        <Paper>
                                        <ProjectImageBoxOuter>
                                        {
                                            node.images ? <ProjectImageBoxOuter><ProjectImage src={node.images[0].image.publicURL}/></ProjectImageBoxOuter> : <div/>
                                        }
                                        </ProjectImageBoxOuter>
                                        </Paper>
                                    </Grid>
                                </ProjectGrid>
                        </ContentGridItem>
                    )
                })
            }</ContentGrid>
        </ContentBox>
    );
}