"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
export function RevealObserver() {
  const path = usePathname();
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.06 },
    );
    const elements = document.querySelectorAll("[data-reveal]");
    elements.forEach((el) => {
      el.classList.add("will-reveal");
      observer.observe(el);
    });
    return () => {
      observer.disconnect();
      elements.forEach((el) => el.classList.remove("will-reveal"));
    };
  }, [path]);
  return null;
}
