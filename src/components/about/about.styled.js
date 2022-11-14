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
    box-shadow: 0px 2px 2px rgba(140,140,140,0.9) !important;
`

export const AboutMeTypography = styled(Typography)`
    display: block;
    font-family: monospace !important;
    font-weight: 200 !important;
    font-size: 20px !important;
    justify-content: center;
`

export const AboutMeIntro = styled(AboutMeTypography)`
    text-align: center !important;
    padding-top: 30px !important;
`

export const AboutMeBody = styled(AboutMeTypography)`
    text-align: left !important;
    margin: 30px !important;
`

export const IconPointDiv = styled.div`
    padding-top: 5px !important;
    padding-bottom: 5px !important;
`

export const AboutMeDescriptionDiv = styled.div`
    padding-top: 20px !important;
    padding-bottom: 20px !important;
`

export const AboutMeParagraphDiv = styled.div`
    padding-top: 15px !important;
    padding-bottom: 15px !important;
`

export const TechStackDiv = styled.div`
    padding-top: 35px !important;
`

export const ProjectButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ProjectButton = styled(Button)`
    border: 3px solid !important;
`

export const AboutMeIcon = css`
    height: 40px !important;
    width: 40px !important;
    margin-right: 20px !important;
`

export const AboutMeSchoolIcon = styled(SchoolIcon)`
    ${AboutMeIcon}
    color: #673ab7 !important;
`

export const AboutMeLearningIcon = styled(LightbulbIcon)`
    ${AboutMeIcon}
    color: #ff9800 !important;
`

export const AboutMeCreatingIcon = styled(CodeIcon)`
    ${AboutMeIcon}
    color: #b2102f !important;
`;

export const AboutMeHobby = styled(AutoStoriesIcon)`
    ${AboutMeIcon}
    color: #2196f3 !important;
`;