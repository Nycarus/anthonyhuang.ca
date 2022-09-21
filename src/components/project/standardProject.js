import React from "react";
import { Grid } from '@mui/material';
import ImageCarousel from "../imageCarousel/imageCarousel";

import {ContentBox, ProjectTitleTypography, TagGrid, TagBox, TagText, TitleToBodyDivider, DescriptionBox, DescriptionTypography, ProjectInfoBox} from "./standardProject.style";

export default function StandardProject(props) {
    return (
        <ContentBox>
            {/* Project Title */}
            <ProjectTitleTypography>
                {props.data.projectJson.title}
            </ProjectTitleTypography>

            {/* Project Stack */}
            <TagGrid container spacing={1}>
                {
                    props.data.projectJson.project_type ?
                    props.data.projectJson.tags.map((tag) => {
                        return(
                        <Grid item>
                            <TagBox bgcolor="secondary.main">
                                <TagText>{tag.name}</TagText>
                            </TagBox>
                        </Grid>
                        )
                    })
                    :
                    null
                }
            </TagGrid>

            <TitleToBodyDivider/>

            {/* Project Description */}
            <DescriptionBox>
                <DescriptionTypography>
                    {props.data.projectJson.description}
                </DescriptionTypography>
            </DescriptionBox>

            {/* Project Info */}
            <ProjectInfoBox>
                {
                    props.data.projectJson.source ?
                    <DescriptionTypography>
                        Github Repository: <a href={props.data.projectJson.source}>here</a>
                    </DescriptionTypography>
                    :
                    null
                }

                <DescriptionTypography>
                    Project Status: {props.data.projectJson.status}
                </DescriptionTypography>
            </ProjectInfoBox>

            {/* Images */}
            {
                props.data.projectJson.videos ?
                <ImageCarousel media={props.data.projectJson.videos.concat(props.data.projectJson.images)}/>
                :
                <ImageCarousel media={props.data.projectJson.images}/>
            }
            
        </ContentBox>
    );
}