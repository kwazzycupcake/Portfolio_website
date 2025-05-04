import React, { useEffect } from "react";
import "./hero.css";
// import photo2 from './photo.png';
import photo2 from './photo4.png';
import moksha from './moksha.png'
// import photo2 from './me.JPG';
import Typed from 'typed.js';
import resume from './resume.pdf';
import resume2 from './Resume_Himanshi.pdf'

const Hero = () => {

  useEffect(() => {
    const typed = new Typed("#element", {
      strings: ["developer", "student", "video editor", "coder"],
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
          <a href={resume2} className="btn" target="_blank" rel="noopener noreferrer">Resume</a>
          {/* <button className="btn">Videos</button> */}
        </div>

      </div>

      <div className="photo-div">
        <img src={moksha} alt="meri photo" />
      </div>
    </div>
  );
};

export default Hero;


