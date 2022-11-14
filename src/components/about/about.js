import * as React from "react"
import { Divider } from '@mui/material';
import TechStack from '../techStack/techStack'

import { AboutMeCard, AboutMeIntro, AboutMeBody, ContentDiv, IconPointDiv, AboutMeDescriptionDiv, AboutMeParagraphDiv, TechStackDiv, ProjectButtonDiv, ProjectButton} from "./about.styled";
import {AboutMeSchoolIcon, AboutMeLearningIcon, AboutMeCreatingIcon, AboutMeHobby} from "./about.styled"

export default function AboutMe () {
    return (
        <ContentDiv>
            <AboutMeCard>
                {/* about-me dialogue */}
                <AboutMeIntro>
                    Who am I?
                </AboutMeIntro>

                <AboutMeBody>
                    <IconPointDiv>
                        <AboutMeSchoolIcon/>
                        I am a recent gradute from Ontario Tech University.
                    </IconPointDiv>

                    <IconPointDiv>
                        <AboutMeLearningIcon/>
                        Continuously improving through learning new skills and technologies.
                    </IconPointDiv>

                    <IconPointDiv>
                        <AboutMeCreatingIcon/>
                        Passionate towards creating various apps and software.
                    </IconPointDiv>

                    <IconPointDiv>
                        <AboutMeHobby/>
                        Interested in cooking, gaming, and reading.
                    </IconPointDiv>

                    <AboutMeDescriptionDiv>
                        <AboutMeParagraphDiv>
                            I am currently seeking professional experience to apply my skills and learn.
                        </AboutMeParagraphDiv>

                        <AboutMeParagraphDiv>
                            I was first inspired to become a developer in 2015 when I made my first game in Pygame. 
                            I enjoyed creating different applications and solving coding challenges as it allowed me 
                            to explore my creativity by turning ideas into working software that serves a purpose.
                        </AboutMeParagraphDiv>
                    </AboutMeDescriptionDiv>

                    <ProjectButtonDiv>
                        <ProjectButton component="a" href="/projects">
                            Check out my past projects
                        </ProjectButton>
                    </ProjectButtonDiv>
                </AboutMeBody>
            </AboutMeCard>

            <Divider style={{paddingTop:35}}/>

            {/* List of technologies I have used */}
            <TechStackDiv>
                <TechStack/>
            </TechStackDiv>
        </ContentDiv>
    );
};