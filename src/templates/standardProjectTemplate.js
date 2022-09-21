import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import StandardProject from "../components/project/standardProject"

export const query = graphql`
    query($slug: String!){
        projectJson(slug: {eq: $slug}) {
            title
            project_type {
                name
            }
            item_category
            tags {
                name
            }
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
`;

export default function StandardProjectTemplate ({ data }) {
    return (
        <Layout>
            <StandardProject data={data}/>
        </Layout>
    );
}