import React from 'react';
import "./skills.css";

class Skills extends React.Component {
  render() {
    return (
      <div className='skills-parent'>
        <div className='skills'>
          <h2 className='stack-title'>Technologies</h2>
          <div className='lists'>
            <div className='stacks'><span>C++</span></div>
            <div className='stacks'><span>Java</span></div>
            <div className='stacks'><span>Python</span></div>
            <div className='stacks'><span>HTML</span></div>
            <div className='stacks'><span>CSS</span></div>
            <div className='stacks'><span>Javascript</span></div>
            <div className='stacks'><span>React</span></div>
            <div className='stacks'><span>Springboot</span></div>
            <div className='stacks'><span>Bootstrap</span></div>
            <div className='stacks'><span>AWS</span></div>
            <div className='stacks'><span>Docker</span></div>
            <div className='stacks'><span>Git</span></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
