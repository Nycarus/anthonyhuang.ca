import React from "react"
import { Grid, Divider } from '@mui/material';
import { graphql, useStaticQuery } from 'gatsby';
import { ContentPaper, CategoryTypography, TechnologyTypography, TechnologyImage} from "./techStack.styled";

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
    const dataByTech = {};

    // Sorting data by it's category of technology
    data.allTechJson.edges.forEach(({node}) => {
        if (!dataByTech[node.type]) {
            dataByTech[node.type] = []
        }

        dataByTech[node.type].push(node);
    });

    // categories I want to show on the about page
    const categories = ['Language', 'Framework', 'Database', 'Version Control']

    return (
        <React.Fragment>
            <Grid container direction="column" justifyContent="center" alignItems="center" spacing={5}> {
                // Displaying the different technologies of every category
                categories.map((category) => {
                    return(
                        <Grid item key={"techStack_"+category}>
                            <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2}>
                                {/* name of the category */}
                                <Grid item>
                                    <CategoryTypography>
                                        {category}
                                    </CategoryTypography>
                                </Grid>

                                {/* list of technologies in the category */}
                                <Grid item>
                                    
                                    <Grid container direction="row" justifyContent="center" alignItems="center" item spacing={3}> {
                                        dataByTech[category].map((node) => {
                                            return(
                                                <Grid item key={"techStack_"+node.name}>
                                                    <ContentPaper>
                                                        <Grid item>
                                                            {node.image ? <TechnologyImage src={node.image.publicURL} loading="lazy"/> : <div/>}
                                                        </Grid>

                                                        <Divider style={{width:'100%'}}/>
                                                        
                                                        <Grid item>
                                                            <TechnologyTypography>
                                                                {node.name}
                                                            </TechnologyTypography>
                                                        </Grid>
                                                    </ContentPaper>
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
        </React.Fragment>
    )
}