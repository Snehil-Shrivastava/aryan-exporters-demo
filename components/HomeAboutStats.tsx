"use client";

import { useEffect, useRef, useState } from "react";

const AboutStats = [
  {
    number: "1947",
    description: "Foundation Day",
  },
  {
    number: "88",
    description: "Foundation Day",
  },
  {
    number: "786",
    description: "Foundation Day",
  },
  {
    number: "05",
    description: "Foundation Day",
  },
];

const COUNT_DURATION = 1200; // ms — tweak to taste

// Starts fast, slows down at the end (feels like a real counter)
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const HomeAboutStats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [progress, setProgress] = useState(0); // 0 → 1

  // 1. Fire once when the section scrolls into view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect(); // only animate once
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // 2. Drive the count-up with requestAnimationFrame
  useEffect(() => {
    if (!hasEntered) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setProgress(1);
      return;
    }

    let rafId = 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const t = Math.min((now - startTime) / COUNT_DURATION, 1);
      setProgress(easeOutCubic(t));
      if (t < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [hasEntered]);

  return (
    <div
      ref={sectionRef}
      className="my-25 grid grid-cols-4 max-md:grid-cols-1 md:max-lg:grid-cols-2 max-md:gap-y-4 max-lg:gap-y-10"
    >
      {AboutStats.map((stats, index) => {
        const target = Number(stats.number);
        const digits = stats.number.length;

        // padStart keeps "05" as "05" and "1947" as "1947"
        const display = String(Math.floor(target * progress)).padStart(
          digits,
          "0",
        );

        return (
          <div
            key={index}
            className={`text-center ${
              index != 3 ? "md:border-r border-neutral-400 max-md:border-b" : ""
            }`}
          >
            <h2
              className="text-brand-red text-4xl xl:max-1440p:text-5xl 1440p:max-2xl:text-6xl 2xl:text-7xl font-bold tabular-nums"
              aria-label={stats.number}
            >
              {display}
            </h2>
            <p className="text-xl 1440p:max-2xl:text-2xl 2xl:text-4xl py-5 2xl:py-10 flex flex-col leading-6 1440p:max-2xl:leading-8 2xl:leading-12">
              {stats.description.split(" ").map((text, i) => (
                <span key={i}>{text}</span>
              ))}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default HomeAboutStats;
