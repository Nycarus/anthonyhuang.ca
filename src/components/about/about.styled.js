import { Button, Card, Typography } from "@mui/material";
import styled, {css} from "styled-components";

import SchoolIcon from '@mui/icons-material/School';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CodeIcon from '@mui/icons-material/Code';

export const ContentDiv = styled.div`
    padding-top: 50px;
`

export const AboutMeCard = styled(Card)`
    padding-top: 100;
    max-width: 1000px;
    width: 90%;
    min-width: 200px;
    min-height: 200px;
    margin: 0 auto;
    padding-right: 20px;
    padding-left: 20px;
    box-shadow: 0px 2px 2px rgba(140,140,140,0.9);
`

export const AboutMeTypography = styled(Typography)`
    display: block;
    font-family: monospace;
    font-weight: 200;
    font-size: 20px;
    justify-content: center;
`

export const AboutMeIntro = styled(AboutMeTypography)`
    text-align: center;
    padding-top: 30px;
`

export const AboutMeBody = styled(AboutMeTypography)`
    text-align: left;
    margin: 30px;
`

export const IconPointDiv = styled.div`
    padding-top: 5px;
    padding-bottom: 5px;
`

export const AboutMeDescriptionDiv = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
`

export const AboutMeParagraphDiv = styled.div`
    padding-top: 15px;
    padding-bottom: 15px;
`

export const TechStackDiv = styled.div`
    padding-top: 35px;
`

export const ProjectButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ProjectButton = styled(Button)`
    border: 3px solid;
`

export const AboutMeIcon = css`
    height: 40px;
    width: 40px;
    margin-right: 20px;
`

export const AboutMeSchoolIcon = styled(SchoolIcon)`
    ${AboutMeIcon}
    color: #673ab7;
`

export const AboutMeLearningIcon = styled(LightbulbIcon)`
    ${AboutMeIcon}
    color: #ff9800;
`

export const AboutMeCreatingIcon = styled(CodeIcon)`
    ${AboutMeIcon}
    color: #b2102f;
`;

export const AboutMeHobby = styled(AutoStoriesIcon)`
    ${AboutMeIcon}
    color: #2196f3;
`;