import React, { useState } from "react";
import {IconButton} from '@mui/material';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';

import {ContentPaper, ImageDiv, CarouselImage, MediaDiv} from "./imageCarousel.styled";


const ImageCarousel = (props) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const swapToNextSlide = () => {
        setCurrentIndex(currentIndex === props.media.length - 1 ? 0 : currentIndex + 1);
    }

    const swapToPreviousSlide = () => {
        setCurrentIndex(currentIndex === 0 ? props.media.length - 1 : currentIndex - 1);
    }

    return(
        <React.Fragment>{
            props.media ?
            <ContentPaper>
                
                <IconButton onClick={swapToPreviousSlide}>
                    <ArrowCircleLeftRoundedIcon/>
                </IconButton>
                <MediaDiv>{
                    props.media.map((media, index) => {
                        if(media.image){
                            return (
                                <ImageDiv key={"imageCarousel_image" + index}>{
                                    index === currentIndex && (<CarouselImage src={media.image.publicURL} target="_blank" rel="noopener noreferrer"/>)
                                }</ImageDiv>
                            );
                        }
                        else if (media.video_url){
                            return (
                                <ImageDiv key={"imageCarousel_video" + index}>
                                    {index === currentIndex && (<iframe src={media.video_url} title={media.title} frameborder="0" allowfullscreen style={{width: "800px", maxWidth:"100%", height:"550px", maxHeight:"80vh"}}/>)}
                                </ImageDiv>
                            );
                        }
                        else{
                            return (null);
                        }
                        
                    })
                }</MediaDiv>

                <IconButton onClick={swapToNextSlide}>
                    <ArrowCircleRightRoundedIcon/>
                </IconButton>

            </ContentPaper>
            :
            null
        }</React.Fragment>
    );
};

export default ImageCarousel;