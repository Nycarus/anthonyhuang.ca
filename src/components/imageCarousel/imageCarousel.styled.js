import styled from "styled-components";
import {IconButton, Paper} from '@mui/material';

export const ContentPaper = styled(Paper)`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-content: center;
    height: "800px";
    width: "auto";
    border: 1px solid;
    background: rgba(0, 0, 0, 0.7);
`

export const MediaDiv = styled.div`
    display: flex;
    align-items: center;
`

export const ImageDiv = styled.div`
    display: flex;
    align-items: center;
`

export const CarouselImage = styled.img`
    display: inline-block;
    max-width:100%;
    max-height:100%;
    vertical-align: middle;
    object-fit: cover;
`

export const CarouselButton = styled(IconButton)`
    position:absolute;
`