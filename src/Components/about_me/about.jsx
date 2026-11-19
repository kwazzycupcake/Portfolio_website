import React, { useEffect, useRef, useState } from "react";
import "./about.css";

const About = () => {
  const windowRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Rise into view the first time the box scrolls onto the screen
  useEffect(() => {
    const el = windowRef.current;
    if (!el || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-me-parent">
      <div className={`about-window ${visible ? "visible" : ""}`} ref={windowRef}>
        <span className="about-tape" aria-hidden="true"></span>

        <div className="about-window-bar">
          <i></i>
          <i></i>
          <i></i>
          <span>about-me.txt</span>
        </div>

        <div className="about-window-body">
          <h2 className="about-me-title reveal-heading">
            A bit about{" "}
            <span className="about-nowrap">
              <span className="about-hl hl-swipe">yours truly</span>
              <span className="about-cursor" aria-hidden="true"></span>
            </span>
          </h2>
          <p className="about-me-write-up">
            I'm a Computer Science and Engineering graduate from NSUT and a software engineer at Adobe. I enjoy
            bringing ideas to life, whether that's building useful websites for people around me or working on
            something just for the fun of it. Outside of software, I'm drawn to cooking, content creation, video
            editing, and discovering good books (with the goal of becoming a much more avid reader!). This is my
            humble abode, take a look around!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
