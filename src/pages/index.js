import * as React from "react";
import AboutMe from "../components/about/about";
import Intro from "../components/intro/intro"
import { Divider } from "@mui/material";

// markup
export default function IndexPage () {
    return (
        <React.Fragment>
            <section id="home">
                <Intro/>
            </section>
            
            <section id="about">
                <Divider/>
                <AboutMe/>
            </section>
        </React.Fragment>
    );
};