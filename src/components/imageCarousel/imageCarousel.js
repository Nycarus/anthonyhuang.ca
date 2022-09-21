import * as React from "react";
import {IconButton} from '@mui/material';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';

import {ContentPaper, ImageDiv, CarouselImage} from "./imageCarousel.styled";


export default class ImageCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentIndex: 0};
        this.swapToNextSlide = this.swapToNextSlide.bind(this);
        this.swapToPreviousSlide = this.swapToPreviousSlide.bind(this);
    }
    media
    swapToNextSlide(){
        this.setState({currentIndex: this.state.currentIndex === this.props.media.length - 1 ? 0 : this.state.currentIndex + 1});
    }
    swapToPreviousSlide(){
        this.setState({currentIndex: this.state.currentIndex === 0 ? this.props.media.length - 1 : this.state.currentIndex - 1});
    }

    render() {
        return(
            <React.Fragment>{
                this.props.media ?
                <ContentPaper>
                    
                    <IconButton onClick={this.swapToPreviousSlide}>
                        <ArrowCircleLeftRoundedIcon/>
                    </IconButton>
                    <ImageDiv>{
                        this.props.media.map((media, index) => {
                            if(media.image){
                                return (
                                    <ImageDiv>{
                                        index === this.state.currentIndex && (<CarouselImage src={media.image.publicURL} target="_blank" rel="noopener noreferrer"/>)
                                    }</ImageDiv>
                                );
                            }
                            else if (media.video_url){
                                return (
                                    <ImageDiv>
                                        {index === this.state.currentIndex && (<iframe src={media.video_url} title={media.title} frameborder="0" allowfullscreen style={{width: "800px", maxWidth:"100%", height:"550px", maxHeight:"100%"}}/>)}
                                    </ImageDiv>
                                );
                            }
                            else{
                                return (null);
                            }
                            
                        })
                    }</ImageDiv>

                    <IconButton onClick={this.swapToNextSlide}>
                        <ArrowCircleRightRoundedIcon/>
                    </IconButton>

                </ContentPaper>
                :
                null
            }</React.Fragment>
        );
    }
}