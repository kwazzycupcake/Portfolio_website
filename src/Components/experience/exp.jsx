import React, { useEffect, useRef, useState } from "react";
import "./exp.css";

// Newest first. Set `current: true` on the job you're in now.
const JOBS = [
  {
    title: "Software Developer",
    company: "ADOBE · LEARNING MANAGER",
    date: "Aug 2025 – Present",
    current: true,
    color: "#8ed993",
    points: [
      "Full-stack developer on Adobe Learning Manager, Adobe's learning platform that companies use to train their employees, partners and customers.",
      "Building features across the admin, author and learner pages, with Ember, React and TypeScript on the frontend and Java and Spring on the backend.",
      "Working closely with designers and product managers to bring new features to life.",
    ],
    tags: ["Ember", "React", "TypeScript", "Java", "Spring"],
  },
  {
    title: "Software Development Engineer",
    company: "OYO",
    date: "Until Jul 2025",
    color: "#8bdfdd",
    points: [
      "Developed and maintained OYO's Android apps, focusing on performance, scalability, and UX.",
      "Implemented features, fixed bugs, and optimized functionality with Kotlin and MVVM architecture.",
      "Collaborated closely with product managers, designers, and backend engineers to deliver high-quality releases in an agile environment.",
    ],
    tags: ["Kotlin", "Android", "MVVM"],
  },
  {
    title: "Product Intern",
    company: "ADOBE",
    date: "Internship",
    color: "#ffd876",
    points: [
      "Led end-to-end development of an intuitive dashboard, used by the Connect team at Adobe to improve event scheduling and monitor capacity utilization.",
      "Built it from scratch with Java (Spring Boot) for the backend and React for the frontend.",
    ],
    tags: ["Java", "Spring Boot", "React"],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  // Cards rise in one after another the first time the section scrolls into view
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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`exp-parent ${visible ? "visible" : ""}`} ref={ref}>
      <h2 className="exp-heading reveal-heading">
        Where I've <span className="exp-hl hl-swipe">worked</span>
      </h2>

      <div className="exp-timeline">
        {JOBS.map((job, i) => (
          <div
            key={job.title + job.company}
            className={`exp-item ${job.current ? "current" : ""}`}
            style={{ "--c": job.color, "--i": i }}
          >
            <div className="exp-card">
              {job.current && <span className="exp-tape" aria-hidden="true"></span>}
              <div className="exp-top">
                <h3>{job.title}</h3>
                {job.current ? (
                  <span className="exp-now">
                    <i></i>
                    {job.date}
                  </span>
                ) : (
                  <span className="exp-date">{job.date}</span>
                )}
              </div>
              <span className="exp-company">{job.company}</span>
              <ul>
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className="exp-tags">
                {job.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
