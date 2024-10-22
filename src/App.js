import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import Tutors from "./components/Tutors/Tutors";
import React from "react";

function App() {
  return (
      <div className="App">
          <div className="backgroundCircle"></div>
          <Navbar/>
          <Landing/>
          <About/>
          <Tutors/>
      </div>
  );
}

export default App;
