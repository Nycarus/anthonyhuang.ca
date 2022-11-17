import * as React from "react"
import ProjectList from '../components/projectList/projectList';
import Layout from "../components/layout";
import Seo from "../components/seo";

const ProjectsPage = () => (
    <Layout>
        <ProjectList/>
    </Layout>
);

export const Head = () => (
    <Seo title="Projects"/>
);

export default ProjectsPage;