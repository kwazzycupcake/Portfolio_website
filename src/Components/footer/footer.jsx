import React, { useEffect, useState } from "react";
import "./footer.css";
import resume from "../hero_component/Resume_Himanshi.pdf";

const LINKS = [
  { label: "GitHub", url: "https://github.com/kwazzycupcake", color: "#8bdfdd" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/himanshiprakash2411/", color: "#e7baad" },
  { label: "Instagram", url: "https://www.instagram.com/kwazzycupcake/", color: "#ffd8cc" },
  { label: "Resume", url: resume, color: "#8ed993" },
];

// Current time in Bengaluru, e.g. "01:15 am"
const bengaluruTime = () =>
  new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kolkata" });

const Footer = () => {
  const [time, setTime] = useState(bengaluruTime);

  // keep the clock live
  useEffect(() => {
    const id = setInterval(() => setTime(bengaluruTime()), 15000);
    return () => clearInterval(id);
  }, []);

  const backToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="site-footer">
      <svg className="footer-spark" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 0 C13 8 16 11 24 12 C16 13 13 16 12 24 C11 16 8 13 0 12 C8 11 11 8 12 0Z"
          fill="#fff"
          stroke="#332b29"
          strokeWidth="1.2"
        />
      </svg>

      <div className="footer-inner">
        <h2 className="footer-title reveal-heading">
          Thanks for scrolling <span>all the way</span> down!
        </h2>
        <p className="footer-sub">If you liked what you saw, let's connect.</p>

        <div className="footer-grid">
          <div className="footer-links">
            {LINKS.map((l) => (
              <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer" style={{ "--c": l.color }}>
                {l.label} ↗
              </a>
            ))}
          </div>

          <div className="footer-clock">
            It's currently
            <b>{time}</b>
            in Bengaluru
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Himanshi Prakash</span>
          <button type="button" className="footer-top" onClick={backToTop} aria-label="Back to top">
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
