import React from "react";
import "./hero.css";
import photo from "./himanshi.jpg";

// Leave a url empty ("") to hide that link until it's filled in
const SOCIAL_LINKS = [
  { label: "GitHub", url: "https://github.com/kwazzycupcake", color: "#8bdfdd" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/himanshiprakash2411/", color: "#e7baad" },
  { label: "Instagram", url: "https://www.instagram.com/kwazzycupcake/", color: "#ffd876" },
];

const Hero = () => {
  return (
    <header className="hero">
      <div className="hero-text">
        <h1 className="hero-title">Hi, I'm Himanshi!</h1>
        <p className="hero-welcome">
          Welcome to a little corner of the internet where I share things I've{" "}
          <span className="hl" style={{ "--c": "#8ed993" }}>built</span>, things I've{" "}
          <span className="hl" style={{ "--c": "#e7baad" }}>learned</span>, and things I'm{" "}
          <span className="hl" style={{ "--c": "#ffd876" }}>curious about</span>.
        </p>
        <div className="hero-links">
          {SOCIAL_LINKS.filter((l) => l.url).map((l) => (
            <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer" style={{ "--c": l.color }}>
              {l.label} ↗
            </a>
          ))}
        </div>
      </div>

      {/* Photo-only polaroid: tilts slightly, straightens on hover */}
      <div className="polaroid">
        <span className="tape" aria-hidden="true"></span>
        <div className="polaroid-shot">
          <img src={photo} alt="Himanshi Prakash" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
