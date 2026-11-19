import { useEffect } from "react";

// Adds "in" to every .reveal-heading the first time it scrolls into view
const useRevealHeadings = () => {
  useEffect(() => {
    const headings = document.querySelectorAll(".reveal-heading");
    if (!("IntersectionObserver" in window)) {
      headings.forEach((h) => h.classList.add("in"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, []);
};

export default useRevealHeadings;
