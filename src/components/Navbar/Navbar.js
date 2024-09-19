import React from 'react';
import './Navbar.css'

function Navbar() {
    return (
      <nav className="navbar">
          <ul className="navbarLinks">
              <li><a href="/public">Home</a></li>
              <li><a href="/public">About</a></li>
              <li><a href="/public">Tutors</a></li>
              <li><a href="/public">Resources</a></li>
          </ul>

          <div className='hamburgerIcon'>
              <div className='line'></div>
              <div className='line'></div>
              <div className='line'></div>
          </div>
      </nav>
    );
}

export default Navbar;