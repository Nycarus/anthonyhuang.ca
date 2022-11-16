import React from "react";
import { Link } from "gatsby";

import { ContentPaper, ContentBox, ContentGrid, ProjectInfoBox, ProjectTitle,
    ProjectTypeGrid, ProjectTypeGridItem, ProjectTypeBox, ProjectTypeTypography,
    ProjectButtonGrid, ProjectButtonBox, ProjectButtonGridItem, ProjectButtonTypography,
    ProjectDescriptionBox, ProjectDescriptionTypography,
    ProjectImageBoxOuter, ProjectImage, ProjectIconButton } from './desktopProjectListView.styled'

export default function DesktopProjectListView(props) {
    return(
        <ContentGrid>{
            props.data.allProjectJson.edges.map(({node}, index) => {
                return(
                    <ContentPaper key={node.title + "desktop"} index={index}>
                        <ContentBox>
                            {/* Project Image */}
                            <ProjectImageBoxOuter>
                            {
                                node.images ? <ProjectImage src={node.images[0].image.publicURL}/> : <div/>
                            }
                            </ProjectImageBoxOuter>
                            
                            <ProjectInfoBox>
                                {/* Project Title */}
                                <ProjectTitle>{node.title}</ProjectTitle>

                                {/* Project Type */}
                                <ProjectTypeGrid container>{
                                    node.project_type ?
                                    node.project_type.map((type) => {
                                        return(
                                            <ProjectTypeGridItem item key={"desktopProject_type_"+type.name}>
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
                                            <ProjectTypeGridItem item key={"desktopProject_tag_"+tag.name}>
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
                                        <ProjectIconButton component={Link} to={`/projects/${node.slug}`}>
                                            <ProjectButtonBox bgcolor="warning.main">
                                                <ProjectButtonTypography>
                                                    More Information
                                                </ProjectButtonTypography>
                                            </ProjectButtonBox>
                                        </ProjectIconButton>
                                    </ProjectButtonGridItem>
                                    
                                    {
                                        /* Github link if there's one*/
                                        node.source ?
                                        <ProjectButtonGridItem item>
                                            <ProjectIconButton href={node.source} target="_blank" rel="noopener noreferrer">
                                                <ProjectButtonBox bgcolor="warning.main">
                                                    <ProjectButtonTypography>
                                                        Github
                                                    </ProjectButtonTypography>
                                                </ProjectButtonBox>
                                            </ProjectIconButton>
                                        </ProjectButtonGridItem>
                                        :
                                        null
                                    }
                                </ProjectButtonGrid>

                                {/* Project Description */}
                                <ProjectDescriptionBox>
                                    <ProjectDescriptionTypography>
                                        {node.description}
                                    </ProjectDescriptionTypography>
                                </ProjectDescriptionBox>
                            </ProjectInfoBox>
                        </ContentBox>
                    </ContentPaper>
                )
            })
        }</ContentGrid>
    );
}