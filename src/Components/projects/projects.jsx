import React, { useEffect, useRef, useState } from "react";
import "./projects.css";

// Add a `link` (GitHub, demo...) to show a "View project" link for that project.
const PROJECTS = [
  {
    folder: "fourth-notebook",
    color: "#ffd876",
    description:
      "My father kept three vocabulary notebooks, filled with words from the newspaper, and quizzed us on them every evening. This is the fourth: a place to save the words you often come across but aren't quite sure of. Build your own word collection, revisit it whenever you like, and take quizzes to test how well you've learned them.",
    tags: ["React", "Vite", "PWA"],
    link: "https://kwazzycupcake.github.io/fourth-notebook",
  },
  {
    folder: "covid-sentiment",
    color: "#8bdfdd",
    description:
      "Sentiment analysis on 12,000 COVID-19 vaccine tweets with 92% accuracy, plus a state-wise breakdown that found 70% positive feedback for Covishield.",
    tags: ["Python", "NLP"],
    link: "",
  },
];

const PUBLICATIONS = [
  {
    title:
      "A Novel Multi-Importance Matrix Guided Adaptive Kernel Convolution Network for Interpretable Chest Disease Diagnosis",
    venue: "Expert Systems with Applications · Elsevier · 2026",
    authors: ["Harshil Jain", "Surendra Nagar", "Tej Bahadur Chandra", "Himanshi Prakash", "Md. Sami Khan", "Vijay Kumar Bohat"],
    link: "https://www.sciencedirect.com/science/article/abs/pii/S095741742604011X",
    color: "#c9c2ec",
  },
];

const Prompt = ({ children }) => (
  <div className="term-cmd">
    <span className="term-prompt">himanshi@portfolio:~$</span> {children}
  </div>
);

const Projects = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  // Terminal rises in, then each project "prints" one after another
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
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="project-parent">
      <div className={`term ${visible ? "visible" : ""}`} ref={ref}>
        <span className="term-tape" aria-hidden="true"></span>

        <div className="term-bar">
          <i></i>
          <i></i>
          <i></i>
          <span>~/projects</span>
        </div>

        <div className="term-body">
          <h2 className="term-title reveal-heading">
            Things I've <span className="term-hl hl-swipe">built</span>
          </h2>

          <Prompt>
            <b>ls projects/</b>
          </Prompt>

          {PROJECTS.map((p, i) => (
            <div className="term-proj" key={p.folder} style={{ "--c": p.color, "--i": i }}>
              <h3>
                <span>{p.folder}/</span>
              </h3>
              <p>{p.description}</p>
              <div className="term-row">
                <div className="term-tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                {p.link && (
                  <a className="term-link" href={p.link} target="_blank" rel="noopener noreferrer">
                    View project ↗
                  </a>
                )}
              </div>
            </div>
          ))}

          <Prompt>
            <b>cat publications.txt</b>
          </Prompt>

          {PUBLICATIONS.map((pub, i) => (
            <div
              className="term-proj term-pub"
              key={pub.title}
              style={{ "--c": pub.color, "--i": PROJECTS.length + i }}
            >
              <h4>{pub.title}</h4>
              <div className="term-venue">{pub.venue}</div>
              <p className="term-authors">
                {pub.authors.map((a, ai) => (
                  <React.Fragment key={a}>
                    {ai > 0 && ", "}
                    {a === "Himanshi Prakash" ? <b>{a}</b> : a}
                  </React.Fragment>
                ))}
              </p>
              <a className="term-link" href={pub.link} target="_blank" rel="noopener noreferrer">
                Read the paper ↗
              </a>
            </div>
          ))}

          <Prompt>
            <span className="term-cursor" aria-hidden="true"></span>
          </Prompt>
        </div>
      </div>
    </div>
  );
};

export default Projects;
