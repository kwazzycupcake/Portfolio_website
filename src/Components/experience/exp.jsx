import React from 'react';
import "./exp.css";

class Experience extends React.Component {
  render() {
    return (
        <div className='exp-parent'>
            <div className='exp-section'>

                <div className='exp-title'><h2>Experience</h2></div>

                <div className='exp-write-up'>
                    <h3 style={{ margin: '0', marginBottom: '2px' }}>Product Intern</h3>
                    <h3 style={{ margin: '0', marginTop: '0' , fontSize: '1.5em'}}>Adobe</h3>
                    <p>Led end-to-end development of an intuitive dashboard, 
                       currently being used by the Connect team at Adobe to improve 
                       event scheduling by analysing upcoming events, and monitor capacity 
                       utilization.
                    </p>
                    <p>The dashboard was built from scratch using Java (Spring Boot) 
                       for a robust backend and React for a dynamic and responsive frontend.
                    </p>
                </div>
            </div>
        </div>
      
    );
  }
}

export default Experience;