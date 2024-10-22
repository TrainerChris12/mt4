import React from 'react';
import './About.css';
import useIntersectionObserver from "./InterSectionObserver";



function About() {
    const [paragraph1, isVisible1] = useIntersectionObserver();
    const [paragraph2, isVisible2] = useIntersectionObserver();

    return (
        <div className="aboutSectionBackground">
            <div className={`shortBlurb ${isVisible1 ? 'visible' : '' }`} ref={paragraph1}>
                <h3>About MT4 Tutoring Club</h3>
                <div className='line'></div>
                <p>MT4 Tutoring Club is a peer-led tutoring initiative designed to help students achieve their
                    academic potential in mathematics. Our tutors are part of the
                    <span>
                        <a href="https://www.qc.cuny.edu/academics/seys/time-2000-program-overview/"> TIME 2000 </a>
                    </span>
                    program, a specialized
                    community of future math educators.</p>
            </div>
            <div className={`shortBlurb ${isVisible2 ? 'visible' : '' }`} ref={paragraph2}>
                <h3>What is Time 2000?</h3>
                <div className='line'></div>
                <p>
                    <span>
                        <a href="https://www.qc.cuny.edu/academics/seys/time-2000-program-overview/"> TIME 2000 </a>
                    </span>
                    is a prestigious undergraduate program at Queens College that prepares future math
                    educators through an integrated approach to learning.
                </p>
            </div>
        </div>
    )
}

export default About;