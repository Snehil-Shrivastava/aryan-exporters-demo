"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Milestone = { year: number; text: string };

const MILESTONES: Milestone[] = [
  {
    year: 1983,
    text: "Established at Lucknow, manufacturing a single product.",
  },
  { year: 1983, text: "Began supplying Indian Railways and OEM Telco." },
  {
    year: 1995,
    text: "First to develop the coaching rubber spring for Indian Railways. Drawing and design approved by RDSO.",
  },
  {
    year: 1996,
    text: "First to develop the lower rubber washer for metre gauge coaches.",
  },
  {
    year: 1997,
    text: "Developed the high-performance elastomeric pad and were the first to take it through approval.",
  },
  {
    year: 1999,
    text: "A long-life elastomeric pad passed one million cycles on fatigue test at the RDSO laboratory. ISO 9002:1994 accreditation, the first Indian railway rubber products manufacturer to hold it.",
  },
  {
    year: 2001,
    text: "First to develop an all-rubber, moulded, one-piece seamless traction motor bush.",
  },
  { year: 2002, text: "ISO 9001:2000 accreditation." },
  {
    year: 2003,
    text: "First to develop the thermoplastic polyurethane spring pad for Indian Railways locomotives.",
  },
  {
    year: 2005,
    text: "First to develop the thermoplastic polyurethane spring pad for Indian Railways locomotives.",
  },
  {
    year: 2009,
    text: "MSME National Award, Special Recognition for outstanding entrepreneurship, to Shri Ravi Sood.",
  },
  {
    year: 2010,
    text: "MSME National Award, Special Recognition for research and development.",
  },
  {
    year: 2012,
    text: "Developed castable polyurethane upper and lower washers addressing axle box decanting, wheel grazing and lower spring seat damage.",
  },
  {
    year: 2014,
    text: "Developed the long-life buffer assembly for broad gauge locomotives.",
  },
  {
    year: 2015,
    text: "Developed a suspension mount for the Indian Navy, Visakhapatnam.",
  },
  { year: 2016, text: "Vendor approval from GE Global Sourcing India." },
  {
    year: 2017,
    text: "Developed the rubber spring assembly for the WDG4 locomotive.",
  },
  {
    year: 2018,
    text: "Indigenous development of the air spring assembly for passenger coaches, under Make in India.",
  },
  {
    year: 2019,
    text: "Developed high-capacity RF-8 and RF-9 rubber pads for high-capacity draft gear.",
  },
  {
    year: 2021,
    text: "Approval of rubber-to-metal bonded items for Cape Gauge, through MFC, for Mozambique.",
  },
  { year: 2022, text: "Approval of the 180 kN capacity air spring assembly." },
  { year: 2025, text: "IRIS certification for rolling stock." },
  {
    year: 2026,
    text: "NABL accreditation for the laboratory, to ISO/IEC 17025:2017.",
  },
];

const HistoryTimeline = () => {
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        desktop: "(min-width: 1024px)", // must match Tailwind's `lg`
        // gsap.matchMedia only runs the callback if at least one condition
        // matches, so tablet/mobile needs its own entry or nothing animates.
        mobile: "(max-width: 1023px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { desktop, reduceMotion } = context.conditions as {
          desktop: boolean;
          reduceMotion: boolean;
        };

        // Respect reduced motion: just show everything.
        if (reduceMotion) {
          gsap.set(
            list.querySelectorAll(
              "[data-dot], [data-badge], [data-text], [data-line]",
            ),
            { opacity: 1 },
          );
          return;
        }

        const rows = gsap.utils.toArray<HTMLElement>("[data-row]", list);
        const timelines: gsap.core.Timeline[] = [];

        rows.forEach((row, i) => {
          const dot = row.querySelector("[data-dot]");
          const badge = row.querySelector("[data-badge]");
          const text = row.querySelector("[data-text]");
          const line = row.querySelector("[data-line]"); // absent on the last row

          // Odd rows sit on the left on desktop, so they slide in from the right.
          const dir = desktop && i % 2 === 1 ? 1 : -1;

          const tl = gsap.timeline({
            paused: true,
            // When this row finishes, immediately start the next one.
            onComplete: () => {
              timelines[i + 1]?.play();
            },
          });

          // 1. dot pops in
          tl.fromTo(
            dot,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.2, ease: "back.out(2.5)" },
          )
            // 2. year badge
            .fromTo(
              badge,
              { x: dir * 16, opacity: 0 },
              { x: 0, opacity: 1, duration: 0.15, ease: "power2.out" },
              "-=0.15",
            )
            // 3. text, a beat behind the badge
            .fromTo(
              text,
              { x: dir * 16, opacity: 0 },
              { x: 0, opacity: 1, duration: 0.15, ease: "power2.out" },
              "<0.1",
            );

          // 4. line flows down to where the next dot will appear
          if (line) {
            tl.fromTo(
              line,
              { scaleY: 0, opacity: 1, transformOrigin: "top center" },
              { scaleY: 1, duration: 0.5, ease: "power1.inOut" },
            );
          }

          timelines.push(tl);
        });

        // One trigger: when the timeline scrolls into view, start the first
        // row and let the rest play through on their own.
        ScrollTrigger.create({
          trigger: list,
          start: "top 80%",
          end: "max", // still fires if the page loads already scrolled past it
          once: true,
          onEnter: () => timelines[0]?.play(),
        });
      },
    );

    return () => mm.revert();
  }, []);

  return (
    <ol ref={listRef} className="mt-12 flex flex-col">
      {MILESTONES.map((m, i) => {
        const isLeft = i % 2 === 1; // only matters from lg up; tablet and mobile are a single column
        // Row spacing lives *inside* the grid cells (not on the <li>) so the
        // dot column is tall enough for the line to reach the next dot.
        const gap = i < MILESTONES.length - 1 ? "pb-7" : "";

        return (
          <li
            key={`${m.year}-${i}`}
            data-row
            className="grid grid-cols-[1.5rem_1fr] lg:grid-cols-[1fr_2rem_1fr]"
          >
            {/* Dot + the line that runs down to the next dot */}
            <div
              aria-hidden="true"
              className={`relative col-start-1 row-start-1 flex justify-center lg:col-start-2 ${gap}`}
            >
              {i < MILESTONES.length - 1 && (
                <span
                  data-line
                  className="absolute left-1/2 top-[18px] -ml-px h-full w-px bg-brand-red/30 opacity-0"
                />
              )}
              <span
                data-dot
                className="relative z-10 mt-3 h-3 w-3 rounded-full bg-brand-blue opacity-0"
              />
            </div>

            {/* Badge + text */}
            <div
              className={`col-start-2 row-start-1 flex items-start gap-3 pl-4 ${gap} ${
                isLeft
                  ? "lg:col-start-1 lg:flex-row-reverse lg:pl-0 lg:pr-5 lg:text-right"
                  : "lg:col-start-3 lg:pl-5"
              }`}
            >
              {/* Swap this colour for your brand red if you have a token for it */}
              <span
                data-badge
                className="flex h-9 shrink-0 items-center rounded-md bg-[#9b2527] px-3 text-lg font-bold text-white opacity-0"
              >
                {m.year}
              </span>
              <p
                data-text
                className="max-w-md flex-1 pt-1 text-sm leading-relaxed text-gray-800 opacity-0"
              >
                {m.text}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
};

export default HistoryTimeline;
