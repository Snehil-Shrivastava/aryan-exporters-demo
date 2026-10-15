"use client";

import { Fragment, useEffect, useState } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";

const steps = [
  {
    label: "Design",
    image: "/images/flow_design.jpg",
    text: "Concept, CAD and simulation, shaped around your requirements.",
  },
  {
    label: "Develop",
    image: "/images/flow_develop.png",
    text: "Compound development, prototypes and tooling, refined with your engineers.",
  },
  {
    label: "Test",
    image: "/images/flow_test.jpg",
    text: "In-house validation for fatigue, pressure and environmental performance.",
  },
  {
    label: "Manufacture",
    image: "/images/flow_manufacture.jpg",
    text: "Repeatable, quality-controlled production at scale.",
  },
  {
    label: "Support",
    image: "/images/flow_support.jpg",
    text: "Field support, spares and service through the product life.",
  },
];

/*
  THE CUT-OUT
  The overlay is ONE full-size layer (blur + red tint). A mask with two
  layers punches a hole in it:
    layer 1: a rectangle covering everything
    layer 2: a smaller rectangle, positioned where the window should be
  mask-composite: exclude keeps (layer 1 minus layer 2), i.e. a frame with a hole.

  The hole is described by three CSS variables, set on the wrapper below:
    --gx      left and right gap
    --top     distance from the top to the hole  (= height of the heading area)
    --bottom  gap at the bottom
*/
const holeMask: CSSProperties = {
  maskImage: "linear-gradient(#000 0 0), linear-gradient(#000 0 0)",
  maskSize:
    "100% 100%, calc(100% - 2 * var(--gx)) calc(100% - var(--top) - var(--bottom))",
  maskPosition: "0 0, var(--gx) var(--top)",
  maskRepeat: "no-repeat",
  maskComposite: "exclude",
  // same thing with prefixes, for Safari
  WebkitMaskImage: "linear-gradient(#000 0 0), linear-gradient(#000 0 0)",
  WebkitMaskSize:
    "100% 100%, calc(100% - 2 * var(--gx)) calc(100% - var(--top) - var(--bottom))",
  WebkitMaskPosition: "0 0, var(--gx) var(--top)",
  WebkitMaskRepeat: "no-repeat",
  WebkitMaskComposite: "xor",
};

export default function EngineeringFlowMasked() {
  const [active, setActive] = useState(0); // starts on Design
  const [paused, setPaused] = useState(false);

  // move to the next step every 4 seconds, loop back to Design after Support
  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % steps.length),
      4000,
    );
    return () => clearInterval(id);
  }, [paused, active]);

  return (
    <section
      className="relative aspect-16/10 w-full overflow-hidden font-montserrat text-white @container my-30 lg:aspect-13/7"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ONE background image (cross-fades between steps). Never tinted itself. */}
      <div className="absolute inset-0">
        {steps.map((step, i) => (
          <Image
            key={step.label}
            src={step.image}
            alt={step.label}
            fill
            className={`object-cover transition-opacity duration-700 ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Wrapper that holds the hole's measurements. --top steps up with the
          size because the heading area gets taller as the text gets bigger.
          If you change the heading or button sizes, adjust --top to match. */}
      <div className="absolute inset-0 [--bottom:4cqw] [--gx:3.5cqw] [--top:10.5rem] @4xl:[--top:14.5rem] @6xl:[--top:17rem]">
        {/* THE OVERLAY: one blurred, tinted layer with the hole cut out */}
        <div
          className="absolute inset-0 backdrop-blur-xs bg-brand-red/80"
          style={holeMask}
        />

        {/* THE DETAILS, on top of the overlay */}
        <div className="relative flex h-full flex-col">
          {/* heading area: its height is exactly --top */}
          <div className="h-[var(--top)] shrink-0 px-6 py-5 @4xl:px-8 @4xl:py-8 @6xl:px-10 @6xl:py-10">
            <p className="text-xs font-semibold @4xl:text-sm">
              The engineering flow
            </p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight @4xl:mt-4 @4xl:text-3xl @6xl:mt-5 @6xl:text-4xl">
              Five capabilities, One engineering team
            </h2>

            <div className="mt-5 flex items-center gap-2 @4xl:mt-6 @4xl:gap-4 @6xl:mt-8 @6xl:gap-8">
              {steps.map((step, i) => (
                <Fragment key={step.label}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={i === active}
                    className={`flex-1 cursor-pointer border py-3 text-sm transition-colors duration-300 @4xl:py-4 @4xl:text-lg @6xl:py-5 @6xl:text-xl ${
                      i === active
                        ? "border-white bg-white font-bold text-brand-red"
                        : "border-white/80 text-white hover:bg-white/10"
                    }`}
                  >
                    {step.label}
                  </button>
                  {i < steps.length - 1 && (
                    <svg
                      viewBox="0 0 24 24"
                      className="size-3 shrink-0 text-white @4xl:size-4 @6xl:size-[1.4cqw]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </Fragment>
              ))}
            </div>
          </div>

          {/* the window: same left/right gap and bottom gap as the hole */}
          <div className="relative mx-[var(--gx)] mb-[var(--bottom)] flex-1">
            <div className="absolute bottom-[3cqw] right-[3.4cqw] grid w-[34cqw] bg-brand-red p-[2.6cqw] @4xl:w-[26cqw] @6xl:w-[20cqw]">
              {steps.map((step, i) => (
                <p
                  key={step.label}
                  className={`col-start-1 row-start-1 text-sm leading-[1.55] transition-opacity duration-500 @4xl:text-base @6xl:text-lg ${
                    i === active ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {step.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
