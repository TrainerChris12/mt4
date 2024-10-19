import React from 'react';
import './Landing.css';

function Landing() {

    return (
        <>
            <h2> Time 2000's </h2>
            <h1 className="mt4Title"> MT4 Club</h1>
            <h3 className="mt4Slogan"> Today's Tutors, Tomorrow's Math Teachers </h3>

            <div className="imageContainer">
                <div className="imageScroller">
                    <img src="/Carousel Image 3.jpg" alt="Image of Time 2000 Tutors"/>
                    <img src="/Carousel Image 2.jpg" alt="Image of Time 2000 Tutors"/>
                    <img src="/Carousel Image 4.jpg" alt="Image of Time 2000 Tutors"/>
                    <img src="/Carousel Image 1.jpg" alt="Image of Time 2000 Tutors"/>
                </div>

            </div>
        </>
    )
}

export default Landing;