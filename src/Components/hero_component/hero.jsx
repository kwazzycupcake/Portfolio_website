import React, { useEffect } from "react";
import "./hero.css";
// import photo2 from './photo.png';
import photo2 from './photo4.png';
// import photo2 from './me.JPG';
import Typed from 'typed.js';
import resume from './resume.pdf'; // Update this path to where your resume is stored

const Hero = () => {

  useEffect(() => {
    const typed = new Typed("#element", {
      strings: ["passionate developer", "student", "video editor", "coder", "culinary enthusiast"],
      typeSpeed: 50,
    });

    // Cleanup function to destroy the Typed instance
    return () => {
      typed.destroy();
    };
  }, []); // Empty dependency array to run this effect only once when the component mounts

  return (
    <div className="main-div">
      <div className="text-div">
        Hi, I'm Himanshi
        <div>and I am a</div>
        <span id="element"></span>

        

        <div className="buttons">
          <a href={resume} className="btn" target="_blank" rel="noopener noreferrer">Resume</a>
          <button className="btn">Videos</button>
        </div>

      </div>

      <div className="photo-div">
        <img src={photo2} alt="meri photo" />
        {/* <img src={photo} alt="meri photo" /> */}
      </div>
    </div>
  );
};

export default Hero;


