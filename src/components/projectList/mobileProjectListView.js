import React from "react";
import { Link } from "gatsby";

import { ContentGrid, ProjectBox, ProjectButton, ProjectTypography, ProjectPaper } from "./mobileProjectListView.styled";

export default function MobileProjectListView(props) {

    return(
        <React.Fragment>
            <ContentGrid container>{
                props.data.allProjectJson.edges.map(({node}) => (
                    <ProjectBox key={node.title + "mobile"}>{
                        <ProjectButton component={Link} to={`/projects/${node.slug}`}>
                            <ProjectPaper imageURL={node.images[0].image.publicURL}>
                                <ProjectTypography>
                                    {node.title}
                                </ProjectTypography>
                            </ProjectPaper>
                        </ProjectButton>
                    }</ProjectBox>
                ))
            }</ContentGrid>
        </React.Fragment>
    );
}