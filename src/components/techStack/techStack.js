import React from "react"
import { Grid } from '@mui/material';
import { graphql, useStaticQuery } from 'gatsby';
import { CategoryTypography, TechnologyTypography } from "./techStack.style";

export default function TechStack() {
    const query = graphql`
        query GetAllTechStackItems {
            allTechJson {
                edges {
                    node {
                        name
                        type
                        image {
                            publicURL
                        }
                    }
                }
            }
        }
    `
    const data = useStaticQuery(query);
    const dataByTech = new Object();

    // Sorting data by it's category of technology
    data.allTechJson.edges.map(({node}) => {
        if (!dataByTech[node.type]) {
            dataByTech[node.type] = new Array()
        }

        dataByTech[node.type].push(node);
    });

    // categories I want to show on the about page
    const categories = ['Language', 'Framework', 'Database', 'Version Control']

    return (
        <div>
            <Grid container direction="column" justifyContent="center" alignItems="center" spacing={5}> {
                // Displaying the different technologies of every category
                categories.map((category) => {
                    return(
                        <Grid item>
                            <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2}>
                                <Grid item>
                                    <CategoryTypography>
                                        {category}
                                    </CategoryTypography>
                                </Grid>
                                <Grid item>
                                    <Grid container direction="row" justifyContent="center" alignItems="center" item spacing={3}> {
                                        // Iterating through every technology to be displayed
                                        dataByTech[category].map((node) => {
                                            return(
                                                <Grid item>
                                                    <Grid container direction="column" justifyContent="center" alignItems="center">
                                                        <Grid item>
                                                            {node.image ? <img src={node.image.publicURL} width="50px" height="50px" alt="image" loading="lazy"/> : <div/>}
                                                        </Grid>
                                                        <Grid item>
                                                            <TechnologyTypography>
                                                                {node.name}
                                                            </TechnologyTypography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            )
                                        })
                                    }</Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    )
                })
            }</Grid>
        </div>
    )
}