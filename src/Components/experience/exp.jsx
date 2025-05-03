import React from 'react';
import "./exp.css";

class Experience extends React.Component {
  render() {
    return (
        <div className='exp-parent'>
            <div className='exp-section'>

                <div className='exp-title'><h2>Experience</h2></div>

                <div className='exp-write-up'>
                  <h3 style={{ margin: '0', marginBottom: '2px' }}>Software Development Engineer</h3>
                  <h3 style={{ margin: '0', marginTop: '0', fontSize: '1.5em' }}>OYO</h3>
                  <ul>
                    <li>Developing and maintaining OYO’s Android apps, focusing on performance, scalability, and UX.</li>
                    <li>Implementing features, fixing bugs, and optimizing functionality with Kotlin and MVVM architecture.</li>
                    <li>Collaborating closely with product managers, designers, and backend engineers to deliver high-quality releases in an agile environment.</li>
                  </ul>

                  <h3 style={{ margin: '0', marginBottom: '2px' }}>Product Intern</h3>
                  <h3 style={{ margin: '0', marginTop: '0', fontSize: '1.5em' }}>ADOBE</h3>
                  <ul>
                    <li>Led end-to-end development of an intuitive dashboard, currently used by the Connect team at Adobe to improve event scheduling and monitor capacity utilization.</li>
                    <li>The dashboard was built from scratch using Java (Spring Boot) for a robust backend and React for a dynamic and responsive frontend.</li>
                  </ul>
              </div>


                
            </div>
        </div>
      
    );
  }
}

export default Experience;