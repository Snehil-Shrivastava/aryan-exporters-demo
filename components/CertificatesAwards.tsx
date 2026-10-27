"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

const timelineData = [
  {
    year: "1999",
    label: "ISO 9001, first certified",
    text: "Currently ISO 9001:2015, certificate C899464 by DNV, valid to 17 May 2029.",
    logo: "/images/iso.png", // Replace with your actual image paths
  },
  {
    year: "2009",
    label: "MSME National Award, Entrepreneurship",
    text: "Ministry of Micro, Small and Medium Enterprises. Special Recognition Award for outstanding entrepreneurship, to Shri Ravi Sood.",
    logo: "/images/msme.png",
  },
  {
    year: "2010",
    label: "MSME National Award, Research and Development",
    text: "Ministry of Micro, Small and Medium Enterprises. Special Recognition Award for research and development.",
    logo: "/images/msme.png",
  },
  {
    year: "2025",
    label: "IRIS certified for rolling stock",
    text: "Register C545422 by DNV Business Assurance India, valid to 3 August 2028.",
    logo: "/images/iris.png",
  },
  {
    year: "2026",
    label: "NABL laboratory accreditation",
    text: "ISO/IEC 17025:2017 for the laboratory at the works, certificate NABLT0726UP18835, valid to 28 July 2030.",
    logo: "/images/nabl.png",
  },
];

const CertificatesAwards = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Select all timeline items
      const items = gsap.utils.toArray<HTMLElement>(".timeline-item");

      // Create the master timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%", // Start animation when top of container hits 75% of viewport
          toggleActions: "play none none none", // Play once and stay
        },
      });

      items.forEach((item) => {
        const node = item.querySelector(".timeline-node");
        const logo = item.querySelector(".timeline-logo");
        const text = item.querySelector(".timeline-text");
        const line = item.querySelector(".timeline-line");

        // 1. Node appears (pop effect)
        tl.fromTo(
          node,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.5)" },
        );

        // 2. Logo fades in and drops slightly
        tl.fromTo(
          logo,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.2", // Overlap with previous animation
        );

        // 3. Text fades in and slides up from bottom
        tl.fromTo(
          text,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.3", // Overlap with previous animation
        );

        // 4. Line draws to the right (only if it's not the last item)
        if (line) {
          tl.fromTo(
            line,
            { scaleX: 0 },
            {
              scaleX: 1,
              duration: 0.6,
              ease: "power2.inOut",
              transformOrigin: "left center",
            },
            "-=0.2",
          );
        }
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden my-40 max-1440p:py-0"
    >
      {/* Header */}
      <div className="mb-10 flex gap-10 items-center">
        <h2 className="text-4xl font-semibold text-gray-900">
          Certificates and awards
        </h2>
        <p className="py-2 text-sm text-gray-600 flex flex-col">
          <span>
            Proving our capabilities and being recognized for it at multiple
            steps.
          </span>
          <span>Click any to know more.</span>
        </p>
      </div>

      {/* Timeline Container - Horizontal scroll on small screens */}
      <div className="w-full pt-10">
        <div className="relative flex items-start justify-between">
          {timelineData.map((item, i) => (
            <div
              key={i}
              className="timeline-item relative flex flex-1 flex-col items-center"
            >
              {/* 1. Logo (Above the line) */}
              {/* Fixed height ensures the line and nodes align perfectly across all items */}
              <div className="timeline-logo relative mb-6 flex h-24 w-32 items-end justify-center opacity-0">
                <Image
                  src={item.logo}
                  alt={`${item.year} certification`}
                  fill
                  className="object-contain"
                />
              </div>

              {/* 2. Node & Line Row */}
              <div className="relative flex h-4 w-full items-center justify-center">
                {/* The animated line (stretches from this node to the next) */}
                {i < timelineData.length - 1 && (
                  <div className="timeline-line absolute left-1/2 top-1/2 z-0 h-0.5 w-full -translate-y-1/2 bg-[#1e3a8a] opacity-100" />
                )}

                {/* The Node */}
                <div className="timeline-node relative z-10 h-4 w-4 bg-[#1e3a8a] opacity-0" />
              </div>

              {/* 3. Text (Below the line) */}
              <div className="timeline-text mt-6 flex w-48 flex-col items-center text-center opacity-0">
                <h3 className="text-3xl font-bold text-[#c92a2a]">
                  {item.year}
                </h3>
                <p className="mt-2 text-sm font-medium leading-snug text-gray-800">
                  {item.label}
                </p>
                <p className="mt-2 text-xs leading-snug text-gray-800">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificatesAwards;
