"use client";

import { useEffect } from "react";

export default function AnimationObserver() {
  useEffect(() => {
    // Select all animatable elements
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".wow, .text-anime-style-1, .text-anime-style-2, .text-anime-style-3"
      )
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.getAttribute("data-wow-delay");
            if (delay) {
              const ms = parseFloat(delay) * 1000;
              setTimeout(() => el.classList.add("animated"), ms);
            } else {
              el.classList.add("animated");
            }
            observer.unobserve(el);
          }
        }
      },
      { threshold: 0.05, rootMargin: "50px 0px 50px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    // Safety fallback: reveal all elements after 1.5s if any were missed
    const timer = setTimeout(() => {
      elements.forEach((el) => {
        if (!el.classList.contains("animated")) {
          el.classList.add("animated");
        }
      });
    }, 1500);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return null;
}
