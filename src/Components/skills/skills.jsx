import React, { useEffect, useRef, useState } from "react";
import "./skills.css";

// [json key, highlighter colour, skills]
const GROUPS = [
  ["languages", "#8bdfdd", ["Java", "TypeScript", "JavaScript", "Kotlin", "Python", "C++"]],
  ["frontend", "#e7baad", ["React", "Ember", "HTML", "CSS", "Bootstrap"]],
  ["backend_cloud", "#8ed993", ["Spring Boot", "AWS", "Docker", "Firebase"]],
  ["mobile", "#ffd8cc", ["Android", "MVVM"]],
  ["tools", "#ffd876", ["Git", "Postman"]],
  ["ai_tools", "#c9c2ec", ["GitHub Copilot", "Cursor", "Claude", "Codex"]],
];

const Skills = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  // Window rises in and the highlighter swipes across each skill when scrolled to
  useEffect(() => {
    const el = ref.current;
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

  let count = 0; // running index so the highlighter swipes go one after another

  return (
    <div className="skills-parent">
      <div className={`skills-window ${visible ? "visible" : ""}`} ref={ref}>
        <span className="skills-tape" aria-hidden="true"></span>

        <div className="skills-bar">
          <i></i>
          <i></i>
          <i></i>
          <span>skills.json</span>
        </div>

        <div className="skills-body">
          <h2 className="skills-title reveal-heading">
            My <span className="skills-hl hl-swipe">toolbox</span>
          </h2>

          <div className="skills-code">
            <span className="p">{"{"}</span>
            {GROUPS.map(([key, color, items], gi) => (
              <div className="skills-line" key={key}>
                <span className="skills-key">
                  <span className="k">"{key}"</span>
                  <span className="p">: [</span>
                </span>
                {items.map((skill, i) => (
                  // value + its comma stay together so a comma never wraps onto its own line
                  <span className="skills-val" key={skill}>
                    <span className="v" style={{ "--c": color, "--n": count++ }}>
                      "{skill}"
                    </span>
                    {i < items.length - 1 && <span className="p">,</span>}
                  </span>
                ))}
                <span className="p">]{gi < GROUPS.length - 1 ? "," : ""}</span>
              </div>
            ))}
            <span className="p">{"}"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
