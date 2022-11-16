import React from "react"
import { graphql, useStaticQuery } from 'gatsby';

import DesktopProjectListView from "./desktopProjectListView";
import MobileProjectListView from "./mobileProjectListView";
import { ContentDiv } from "./projectList.styled";
import { DeviceContext } from "../../contexts/appConfigContext";

const ProjectList = (props) => {

    const query = graphql`
        query GetAllProjectItems {
            allProjectJson {
                edges {
                    node {
                        title
                        project_type {
                            name
                        }
                        item_category
                        tags {
                            name
                        }
                        slug
                        source
                        images {
                            image {
                                publicURL
                            }
                        }
                        videos {
                            video_url
                            title
                        }
                        format_type
                        status
                        description
                    }
                }
            }
        }
    `
    const data = useStaticQuery(query);

    return(
        <DeviceContext.Consumer>
            {({isMobile}) => (
                <ContentDiv>{
                    /* Window View of the project list */
                    isMobile ? <MobileProjectListView data={data}/> : <DesktopProjectListView data={data}/>
                }</ContentDiv>
            )}
        </DeviceContext.Consumer>
    );
}

export default ProjectList;