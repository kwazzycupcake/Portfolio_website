import React, { useEffect, useRef } from "react";
import "./floatingShapes.css";

// Simple 24x24 shapes
const SHAPES = {
  sparkle: <path d="M12 0 C13 8 16 11 24 12 C16 13 13 16 12 24 C11 16 8 13 0 12 C8 11 11 8 12 0Z" />,
  star: <path d="M12 1.5l3.1 6.6 7.2.9-5.3 5 1.4 7.1L12 17.6 5.6 21.1 7 14l-5.3-5 7.2-.9z" />,
  circle: <circle cx="12" cy="12" r="10" />,
  heart: <path d="M12 21s-8.5-5.3-8.5-11.3A4.7 4.7 0 0 1 12 7a4.7 4.7 0 0 1 8.5 2.7C20.5 15.7 12 21 12 21z" />,
  flower: (
    <>
      <circle cx="12" cy="5.5" r="4.5" />
      <circle cx="18.5" cy="12" r="4.5" />
      <circle cx="12" cy="18.5" r="4.5" />
      <circle cx="5.5" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="3.2" fill="#FAF9F6" />
    </>
  ),
  ring: <circle cx="12" cy="12" r="8.5" fill="none" strokeWidth="3.5" />,
  plus: <path d="M12 3v18M3 12h18" fill="none" strokeWidth="3.5" strokeLinecap="round" />,
};
const LINE_SHAPES = ["ring", "plus"];

const COLORS = {
  pink: "#e7baad",
  peach: "#ffcbbb",
  teal: "#8bdfdd",
  green: "#8ed993",
  yellow: "#ffd876",
  lavender: "#c9c2ec",
};

// [shape, colour, left %, top %, size px]
// Positions are % of the screen: the layer stays fixed while the page scrolls,
// so the shapes keep floating behind every section. Only one flower, on purpose.
const ITEMS = [
  ["sparkle", "yellow", 3, 12, 30],
  ["star", "green", 18, 28, 16],
  ["heart", "pink", 5, 38, 20],
  ["circle", "teal", 2, 62, 14],
  ["star", "green", 6, 85, 22],
  ["sparkle", "pink", 14, 95, 18],
  ["ring", "lavender", 30, 6, 20],
  ["circle", "pink", 24, 48, 11],
  ["sparkle", "yellow", 36, 72, 20],
  ["star", "yellow", 44, 92, 16],
  ["sparkle", "teal", 50, 4, 22],
  ["circle", "yellow", 52, 55, 13],
  ["sparkle", "green", 62, 40, 18],
  ["star", "pink", 70, 96, 18],
  ["circle", "lavender", 75, 60, 12],
  ["sparkle", "lavender", 80, 8, 20],
  ["circle", "teal", 86, 90, 11],
  ["star", "yellow", 90, 18, 20],
  ["sparkle", "teal", 95, 32, 28],
  ["plus", "yellow", 98, 50, 13],
  ["circle", "green", 93, 62, 15],
  ["flower", "peach", 96, 78, 28],
  ["heart", "pink", 91, 94, 17],
  ["sparkle", "pink", 99, 6, 16],
];

// Phones: text spans the whole width, so only the shapes hugging the left/right edges show
const showOnPhones = (left) => left <= 6 || left >= 92;

// Parallax: each shape gets a "depth", so they drift up at different speeds as you scroll.
// Shapes that leave the top of the screen wrap round to the bottom, so there are always some in view.
const depthOf = (i) => 0.12 + (i % 4) * 0.1;

const FloatingShapes = () => {
  const layerRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const shapes = Array.from(layerRef.current.children);
    let frame = null;

    const update = () => {
      frame = null;
      const vh = window.innerHeight;
      const range = vh + 120; // a little off-screen room above and below
      shapes.forEach((el, i) => {
        const baseTop = (ITEMS[i][3] / 100) * vh;
        const y = baseTop - window.scrollY * depthOf(i);
        const wrapped = ((((y + 60) % range) + range) % range) - 60;
        el.style.translate = `0 ${(wrapped - baseTop).toFixed(1)}px`;
      });
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

  return (
  <div className="floating-shapes" aria-hidden="true" ref={layerRef}>
    {ITEMS.map(([shape, color, left, top, size], i) => {
      const fill = COLORS[color];
      const isLine = LINE_SHAPES.includes(shape);
      return (
        <span
          key={i}
          className={`shape ${showOnPhones(left) ? "" : "hide-on-phone"}`}
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: size * 1.6,
            height: size * 1.6,
            // every shape gets its own speed, direction and starting point
            "--glow": fill,
            "--d": `${7 + (i % 5)}s`,
            "--sd": `${2.2 + (i % 4) * 0.6}s`,
            "--delay": `-${(i * 1.3).toFixed(1)}s`,
            "--dx": `${i % 2 ? 10 : -10}px`,
            "--dy": `${i % 3 ? -16 : 14}px`,
            "--r": `${i % 2 ? 14 : -12}deg`,
          }}
        >
          <svg viewBox="-2 -2 28 28" fill={isLine ? "none" : fill} stroke={isLine ? fill : "none"}>
            {SHAPES[shape]}
          </svg>
        </span>
      );
    })}
  </div>
  );
};

export default FloatingShapes;
