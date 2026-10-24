"use client";

import { useEffect } from "react";

export default function MotionEnhancements() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const elements = Array.from(document.querySelectorAll("[data-reveal]"));
    if (!elements.length) return;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.08, rootMargin: "0px 0px -35px 0px" });

    elements.forEach((element) => {
      // Avoid animating content already visible on initial page load.
      if (element.getBoundingClientRect().top < window.innerHeight * 0.9) {
        element.classList.add("is-revealed");
      } else {
        element.classList.add("reveal-pending");
        observer.observe(element);
      }
    });
    return () => observer.disconnect();
  }, []);
  return null;
}
