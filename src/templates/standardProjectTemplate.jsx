import React from "react";
import { graphql } from "gatsby";
import StandardProject from "../components/project/standardProject"
import Layout from "../components/layout";
import Seo from "../components/seo";

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

const StandardProjectTemplate = ({ data }) => {
    return (
        <Layout>
            <StandardProject data={data}/>
        </Layout>
    );
}

export const Head = ({data}) => (
    <Seo title={data.projectJson.title}/>
)

export default StandardProjectTemplate;