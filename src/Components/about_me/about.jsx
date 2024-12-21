import React from 'react';
import "./about.css";

class About extends React.Component {
  render() {
    return (
        <div className='about-me-parent'>
            <div className='about-me'>
              <h2 className='about-me-title'>Welcome to my creative space! </h2>
              <p className='about-me-write-up'> I'm a final-year Computer Science and 
                Engineering student at NSUT. This is my humble abode, where I bring together my passions 
                and projects. Beyond coding, I love cooking, filming, and editing videos.
                Here, you'll find a showcase of my skills, talents, and everything that inspires
                me. Take a look around and enjoy!</p>
            </div>
            {/* <div>
              
            </div> */}
            
        </div>
      
    );
  }
}

export default About;