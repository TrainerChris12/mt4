import React from 'react';
import './Navbar.css';



function Navbar() {

    const [isNavVisible, setIsNavVisible] = React.useState(false);

    const toggleNavVisibility = () => {
        setIsNavVisible(!isNavVisible);
    };


    return (
        <nav className="navbarContainer">
            <div className="navbar"></div>
            <img className="websiteLogo" src="/Time2000_logo-no-background.png" alt="Time 2000 Logo"/>
            <ul className={`navbarLinks ${isNavVisible ? 'visible' : ''}`}>
                <li><a href="/public">Home</a></li>
                <li><a href="/public">About</a></li>
                <li><a href="/public">Gallery</a></li>
                <li><a href="/public">Tutors</a></li>
                <li><a href="/public">Resources</a></li>
            </ul>

            <div className={`hamburgerIcon ${isNavVisible ? 'toX' : ''}`} onClick={toggleNavVisibility}>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </div>
        </nav>
    );
}

export default Navbar;