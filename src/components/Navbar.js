import React from 'react';

function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Tutors</a></li>
              <li><a href="/">Resources</a></li>
          </ul>
      </nav>
    );
}

export default Navbar;