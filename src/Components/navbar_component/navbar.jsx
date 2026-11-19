import React, { useState, useEffect, useRef } from "react";
import "./navbar.css";
import resume from "../hero_component/Resume_Himanshi.pdf";

const NAME = "Himanshi Prakash";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const menuRef = useRef(null); // Reference to the options menu
  const iconRef = useRef(null); // Reference to the hamburger icon

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  // Close the menu if the user clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target) && // If click is outside the menu
        iconRef.current && !iconRef.current.contains(event.target) // and outside the hamburger icon
      ) {
        setShowNavbar(false); // Close the menu
      }
    };

    // Adding event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav>
      <div className="title">
        <h1 aria-label={NAME}>
          {/* Each letter is its own span so it can bounce in and hop on hover */}
          {NAME.split(" ").map((word, w, words) => {
            const offset = words.slice(0, w).join(" ").length + (w ? 1 : 0);
            return (
              <React.Fragment key={w}>
                {w > 0 && " "}
                <span className="word" aria-hidden="true">
                  {[...word].map((ch, i) => (
                    <span className="ch" style={{ "--i": offset + i }} key={i}>
                      {ch}
                    </span>
                  ))}
                </span>
              </React.Fragment>
            );
          })}
        </h1>
      </div>
      {/* Phones/tablets: Resume sits next to the menu button */}
      <a className="resume-mobile" href={resume} target="_blank" rel="noopener noreferrer">
        Resume
      </a>
      <button
        className={`icon ${showNavbar ? "open" : ""}`}
        onClick={handleShowNavbar}
        ref={iconRef}
        aria-label="Menu"
        aria-expanded={showNavbar}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`options ${showNavbar ? "active" : ""}`} ref={menuRef}>
        {/* Tapping a link closes the phone menu */}
        <ul onClick={() => setShowNavbar(false)}>
          <li style={{ "--c": "#e7baad" }}>
            <a href="#about">About</a>
          </li>
          <li style={{ "--c": "#8ed993" }}>
            <a href="#skills">Skills</a>
          </li>
          <li style={{ "--c": "#7ed0cf" }}>
            <a href="#projects">Projects</a>
          </li>
          <li style={{ "--c": "#f8ab41" }}>
            <a href="#contact">Contact me</a>
          </li>
          <li className="resume" style={{ "--c": "#f8ab41" }}>
            <a href={resume} target="_blank" rel="noopener noreferrer">Resume ↗</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


