import * as React from "react";
import AboutMe from "../components/about/about";
import Intro from "../components/intro/intro"
import { Divider } from "@mui/material";
import Layout from "../components/layout";

// markup
export default function IndexPage () {
    return (
        <Layout>
            <section id="home">
                <Intro/>
            </section>
            
            <section id="about">
                <Divider/>
                <AboutMe/>
            </section>
        </Layout>
    );
};