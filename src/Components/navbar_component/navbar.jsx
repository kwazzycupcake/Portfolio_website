import React, { useState, useEffect, useRef } from "react";
import "./navbar.css";

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
        <h1>Himanshi Prakash</h1>
      </div>
      <div className="icon" onClick={handleShowNavbar} ref={iconRef}>
        <i className="fa fa-bars"></i>
      </div>
      <div className={`options ${showNavbar ? "active" : ""}`} ref={menuRef}>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


