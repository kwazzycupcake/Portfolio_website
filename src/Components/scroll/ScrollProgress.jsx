import React, { useEffect, useState } from "react";
import "./scrollEffects.css";

const RING = 2 * Math.PI * 22; // circumference of the progress ring (r = 22)

// Round badge in the bottom-right corner: a yellow ring fills as you scroll,
// the % sits in the middle, and clicking it scrolls back to the top.
const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    let frame = null;
    const footer = document.querySelector(".site-footer");

    const update = () => {
      frame = null;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
      // appears once you start scrolling, and steps aside when the footer
      // (which has its own back-to-top button) comes into view
      const footerInView = footer && footer.getBoundingClientRect().top < window.innerHeight - 40;
      setShow(window.scrollY > 120 && !footerInView);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const pct = Math.round(progress * 100);

  return (
    <button
      type="button"
      className={`scroll-circle ${show ? "show" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={`Back to top (${pct}% scrolled)`}
      tabIndex={show ? 0 : -1}
    >
      <svg viewBox="0 0 50 50" aria-hidden="true">
        <circle className="scroll-circle-track" cx="25" cy="25" r="22" />
        <circle
          className="scroll-circle-fill"
          cx="25"
          cy="25"
          r="22"
          style={{ strokeDasharray: RING, strokeDashoffset: RING * (1 - progress) }}
        />
      </svg>
      <span className="scroll-circle-pct">{pct}%</span>
      <span className="scroll-circle-arrow" aria-hidden="true">↑</span>
    </button>
  );
};

export default ScrollProgress;
