import React from 'react';
import './Landing.css';

import image1 from "../../Assets/Carousel-Image-1.jpg";
import image2 from "../../Assets/Carousel Image 2.jpg";
import image3 from "../../Assets/Carousel Image 3.jpg";
import image4 from "../../Assets/Carousel Image 4.jpg";
import {ImageSlider} from "./ImageSlider.js";

const IMAGES = [image1, image2, image3, image4]


function Landing() {

    return (
        <>
            <h2> TIME<span className="bold2000">2000's</span> </h2>
            <h1 className="mt4Title"> MT4 Club</h1>
            <h3 className="mt4Slogan"> Today's Tutors, Tomorrow's Math Teachers </h3>
            <ImageSlider images={IMAGES} />
        </>
    )
}

export default Landing;