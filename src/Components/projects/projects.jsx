import React from 'react';
import "./projects.css";

class Projects extends React.Component {
  render() {
    return (
      <div className='project-parent'>
        <div className='proj-title'><h2>Projects</h2></div>
        <div className='proj-list'>
          <div className='proj proj-pink'>
                <h3>Quizwarts - A Quiz App</h3>
                <h4>Java, Kotlin, Android</h4>
                <p>Developed a native android app from scratch in Kotlin with XML layouts, 
                  featuring category-based questions and dynamic UI. Integrated API to fetch quiz data, implemented timed quizzes, randomized questions, and score tracking for an engaging user experience.</p>     
            </div>
            <div className='proj proj-blue'>
                <h3>COVID Vaccine Twitter Sentiment Analysis</h3>
                <h4>Python, NLP</h4>
                <p>Conducted sentiment analysis on 12,000 COVID-19 vaccine-related tweets, 
                   achieving 92% accuracy, with state-wise analysis revealing 70% positive 
                   feedback for Covishield and providing actionable insights into public sentiment.</p>
            </div>
            <div className='proj proj-yellow'>
                <h3>Accident Detection and Notification System</h3>
                <h4>Python, CNN, Tensorflow</h4>
                <p>Developed a CNN model with 88% accuracy for accident detection in CCTV footage, 
                   integrating a real-time notification system that improved emergency response 
                   times by 30 minutes and potentially reduced fatalities by 60% through timely alerts.</p>
            </div>
        </div>
      </div>
    );
  }
}

export default Projects;


{/* <div className='proj proj-pink'>
                <h3>VoyageVibe - IoT-based Smart Suitcase</h3>
                <h4>Arduino IDE, IoT</h4>
                <p>Developed a smart suitcase with sensors and Bluetooth connectivity, integrated with a 
                   mobile app for secure travel, featuring theft, mishandling detection, 
                   automated weighing, and locking, powered by an ESP32 microcontroller.</p>

                   </div> */}