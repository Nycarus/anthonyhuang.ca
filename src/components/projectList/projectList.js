import React from "react"
import { graphql, useStaticQuery } from 'gatsby';

import DesktopProjectListView from "./desktopProjectListView";
import MobileProjectListView from "./mobileProjectListView";

export default function ProjectList(props) {

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
        <div style={{paddingTop:"40px"}}>{
            /* Window View of the project list */
            !props.isMobile ? <DesktopProjectListView data={data}/> : <MobileProjectListView data={data}/>
        }</div>
    );
}