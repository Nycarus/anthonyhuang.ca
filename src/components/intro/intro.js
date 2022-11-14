import * as React from "react";
import { Grid } from '@mui/material';

import Contacts from "../contact/contact";
import {ContentDiv, ContentGrid, TitleTypography, DescriptionTypography} from "./intro.styled"

const Intro = () => {
    return(
        <ContentDiv>
            <ContentGrid container spacing={2}>   
                {/* Title */}
                <Grid item>
                    <TitleTypography>Anthony Huang</TitleTypography>
                </Grid>

                {/* Description */}
                <Grid item>
                    <DescriptionTypography>Recent Computer Science Graduate From Ontario Tech University</DescriptionTypography>
                </Grid>
                <Contacts/>
            </ContentGrid>
        </ContentDiv>
    )
}

export default Intro;