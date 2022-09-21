import styled from "styled-components";
import {IconButton, Paper} from '@mui/material';

export const ContentPaper = styled(Paper)`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-content: center;
    height: 80vh;
    border: 1px solid;
`

export const ImageDiv = styled.div`
    display: flex;
    align-items: center;
`

export const CarouselImage = styled.img`
    display: inline-block;
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
`

export const CarouselButton = styled(IconButton)`
    position:absolute;
`