// "use client";

// import { Fragment, useEffect, useState } from "react";
// import type { CSSProperties } from "react";
// import Image from "next/image";

// const steps = [
//   {
//     label: "Design",
//     image: "/images/flow_design.jpg",
//     text: "Concept, CAD and simulation, shaped around your requirements.",
//   },
//   {
//     label: "Develop",
//     image: "/images/flow_develop.png",
//     text: "Compound development, prototypes and tooling, refined with your engineers.",
//   },
//   {
//     label: "Test",
//     image: "/images/flow_test.jpg",
//     text: "In-house validation for fatigue, pressure and environmental performance.",
//   },
//   {
//     label: "Manufacture",
//     image: "/images/flow_manufacture.jpg",
//     text: "Repeatable, quality-controlled production at scale.",
//   },
//   {
//     label: "Support",
//     image: "/images/flow_support.jpg",
//     text: "Field support, spares and service through the product life.",
//   },
// ];

// /*
//   THE CUT-OUT
//   The overlay is ONE full-size layer (blur + red tint). A mask with two
//   layers punches a hole in it:
//     layer 1: a rectangle covering everything
//     layer 2: a smaller rectangle, positioned where the window should be
//   mask-composite: exclude keeps (layer 1 minus layer 2), i.e. a frame with a hole.

//   The hole is described by three CSS variables, set on the wrapper below:
//     --gx      left and right gap
//     --top     distance from the top to the hole  (= height of the heading area)
//     --bottom  gap at the bottom
// */
// const holeMask: CSSProperties = {
//   maskImage: "linear-gradient(#000 0 0), linear-gradient(#000 0 0)",
//   maskSize:
//     "100% 100%, calc(100% - 2 * var(--gx)) calc(100% - var(--top) - var(--bottom))",
//   maskPosition: "0 0, var(--gx) var(--top)",
//   maskRepeat: "no-repeat",
//   maskComposite: "exclude",
//   // same thing with prefixes, for Safari
//   WebkitMaskImage: "linear-gradient(#000 0 0), linear-gradient(#000 0 0)",
//   WebkitMaskSize:
//     "100% 100%, calc(100% - 2 * var(--gx)) calc(100% - var(--top) - var(--bottom))",
//   WebkitMaskPosition: "0 0, var(--gx) var(--top)",
//   WebkitMaskRepeat: "no-repeat",
//   WebkitMaskComposite: "xor",
// };

// export default function EngineeringFlowMasked() {
//   const [active, setActive] = useState(0); // starts on Design
//   const [paused, setPaused] = useState(false);

//   // move to the next step every 4 seconds, loop back to Design after Support
//   useEffect(() => {
//     if (paused) return;
//     const id = setInterval(
//       () => setActive((i) => (i + 1) % steps.length),
//       4000,
//     );
//     return () => clearInterval(id);
//   }, [paused, active]);

//   return (
//     <section
//       className="relative aspect-16/10 w-full overflow-hidden font-montserrat text-white @container my-30 lg:aspect-13/7"
//       onMouseEnter={() => setPaused(true)}
//       onMouseLeave={() => setPaused(false)}
//     >
//       {/* ONE background image (cross-fades between steps). Never tinted itself. */}
//       <div className="absolute inset-0">
//         {steps.map((step, i) => (
//           <Image
//             key={step.label}
//             src={step.image}
//             alt={step.label}
//             fill
//             className={`object-cover transition-opacity duration-700 ${
//               i === active ? "opacity-100" : "opacity-0"
//             }`}
//           />
//         ))}
//       </div>

//       {/* Wrapper that holds the hole's measurements. --top steps up with the
//           size because the heading area gets taller as the text gets bigger.
//           If you change the heading or button sizes, adjust --top to match. */}
//       <div className="absolute inset-0 [--bottom:4cqw] [--gx:3.5cqw] [--top:10.5rem] @4xl:[--top:14.5rem] @6xl:[--top:17rem]">
//         {/* THE OVERLAY: one blurred, tinted layer with the hole cut out */}
//         <div
//           className="absolute inset-0 backdrop-blur-xs bg-brand-red/80"
//           style={holeMask}
//         />

//         {/* THE DETAILS, on top of the overlay */}
//         <div className="relative flex h-full flex-col">
//           {/* heading area: its height is exactly --top */}
//           <div className="h-[var(--top)] shrink-0 px-6 py-5 @4xl:px-8 @4xl:py-8 @6xl:px-10 @6xl:py-10">
//             <p className="text-xs font-semibold @4xl:text-sm">
//               The engineering flow
//             </p>
//             <h2 className="mt-3 text-2xl font-semibold leading-tight @4xl:mt-4 @4xl:text-3xl @6xl:mt-5 @6xl:text-4xl">
//               Five capabilities, One engineering team
//             </h2>

//             <div className="mt-5 flex items-center gap-2 @4xl:mt-6 @4xl:gap-4 @6xl:mt-8 @6xl:gap-8">
//               {steps.map((step, i) => (
//                 <Fragment key={step.label}>
//                   <button
//                     type="button"
//                     onClick={() => setActive(i)}
//                     aria-pressed={i === active}
//                     className={`flex-1 cursor-pointer border py-3 text-sm transition-colors duration-300 @4xl:py-4 @4xl:text-lg @6xl:py-5 @6xl:text-xl ${
//                       i === active
//                         ? "border-white bg-white font-bold text-brand-red"
//                         : "border-white/80 text-white hover:bg-white/10"
//                     }`}
//                   >
//                     {step.label}
//                   </button>
//                   {i < steps.length - 1 && (
//                     <svg
//                       viewBox="0 0 24 24"
//                       className="size-3 shrink-0 text-white @4xl:size-4 @6xl:size-[1.4cqw]"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       aria-hidden="true"
//                     >
//                       <path d="M9 5l7 7-7 7" />
//                     </svg>
//                   )}
//                 </Fragment>
//               ))}
//             </div>
//           </div>

//           {/* the window: same left/right gap and bottom gap as the hole */}
//           <div className="relative mx-[var(--gx)] mb-[var(--bottom)] flex-1">
//             <div className="absolute bottom-[3cqw] right-[3.4cqw] grid w-[34cqw] bg-brand-red p-[2.6cqw] @4xl:w-[26cqw] @6xl:w-[20cqw]">
//               {steps.map((step, i) => (
//                 <p
//                   key={step.label}
//                   className={`col-start-1 row-start-1 text-sm leading-[1.55] transition-opacity duration-500 @4xl:text-base @6xl:text-lg ${
//                     i === active ? "opacity-100" : "opacity-0"
//                   }`}
//                 >
//                   {step.text}
//                 </p>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// --------------------------------------------- style change

// "use client";

// import Image from "next/image";
// import {
//   useCallback,
//   useEffect,
//   useLayoutEffect,
//   useRef,
//   useState,
// } from "react";

// type Slide = {
//   id: string;
//   label: string;
//   text: string;
//   image: string;
//   alt: string;
// };

// // Put the images in /public/images/engineering/
// const SLIDES: Slide[] = [
//   {
//     id: "design",
//     label: "Design",
//     text: "Material selection, CAD, structural analysis in ANSYS, mould design in our own tool room.",
//     image: "/images/flow_design.jpg",
//     alt: "Engineer holding an air spring assembly",
//   },
//   {
//     id: "develop",
//     label: "Develop",
//     text: "Prototype builds and compound trials that turn the design into a working part.",
//     image: "/images/flow_develop.png",
//     alt: "Prototype air spring on a workbench",
//   },
//   {
//     id: "test",
//     label: "Test",
//     text: "Fatigue, burst and leak testing against customer specifications before release.",
//     image: "/images/flow_test.jpg",
//     alt: "Air spring on a test rig",
//   },
//   {
//     id: "manufacture",
//     label: "Manufacture",
//     text: "Moulding, vulcanising and assembly on our own production lines.",
//     image: "/images/flow_manufacture.jpg",
//     alt: "Production line for air springs",
//   },
//   {
//     id: "support",
//     label: "Support",
//     text: "Application guidance, installation help and after-sales service.",
//     image: "/images/flow_support.jpg",
//     alt: "Engineer supporting a customer on site",
//   },
// ];

// const INTERVAL_MS = 5000;
// const HOLE_RADIUS = 8; // px, matches rounded-3xl on the frame

// /** Builds a clip-path that covers the whole box except a rounded-rect hole. */
// function buildHolePath(
//   W: number,
//   H: number,
//   x: number,
//   y: number,
//   w: number,
//   h: number,
//   r: number,
// ) {
//   const outer = `M0 0H${W}V${H}H0Z`;
//   const hole =
//     `M${x + r} ${y}H${x + w - r}A${r} ${r} 0 0 1 ${x + w} ${y + r}` +
//     `V${y + h - r}A${r} ${r} 0 0 1 ${x + w - r} ${y + h}` +
//     `H${x + r}A${r} ${r} 0 0 1 ${x} ${y + h - r}` +
//     `V${y + r}A${r} ${r} 0 0 1 ${x + r} ${y}Z`;
//   return `path(evenodd, "${outer} ${hole}")`;
// }

// export default function EngineeringFlowMasked() {
//   const [active, setActive] = useState(0);
//   const [paused, setPaused] = useState(false);
//   const [clipPath, setClipPath] = useState<string | null>(null);

//   const sectionRef = useRef<HTMLElement>(null);
//   const frameRef = useRef<HTMLDivElement>(null);

//   // Keep the overlay's hole aligned with the frame, at any size.
//   const updateHole = useCallback(() => {
//     const section = sectionRef.current;
//     const frame = frameRef.current;
//     if (!section || !frame) return;
//     const s = section.getBoundingClientRect();
//     const f = frame.getBoundingClientRect();
//     setClipPath(
//       buildHolePath(
//         s.width,
//         s.height,
//         f.left - s.left,
//         f.top - s.top,
//         f.width,
//         f.height,
//         HOLE_RADIUS,
//       ),
//     );
//   }, []);

//   useLayoutEffect(() => {
//     updateHole();
//     const ro = new ResizeObserver(updateHole);
//     if (sectionRef.current) ro.observe(sectionRef.current);
//     if (frameRef.current) ro.observe(frameRef.current);
//     return () => ro.disconnect();
//   }, [updateHole]);

//   // Auto-advance; restarts whenever the active slide changes (including manual clicks).
//   useEffect(() => {
//     if (paused) return;
//     const reduce = window.matchMedia(
//       "(prefers-reduced-motion: reduce)",
//     ).matches;
//     if (reduce) return;
//     const t = setTimeout(
//       () => setActive((i) => (i + 1) % SLIDES.length),
//       INTERVAL_MS,
//     );
//     return () => clearTimeout(t);
//   }, [active, paused]);

//   const current = SLIDES[active];

//   return (
//     <section
//       ref={sectionRef}
//       onMouseEnter={() => setPaused(true)}
//       onMouseLeave={() => setPaused(false)}
//       className="relative isolate overflow-hidden rounded-lg text-white my-30 font-montserrat h-[650px] sm:h-[780px] lg:h-[900px]"
//     >
//       {/* Layer 0: slide images (crossfade). Seen sharp through the hole, tinted elsewhere. */}
//       <div className="absolute inset-0 -z-20">
//         {SLIDES.map((s, i) => (
//           <Image
//             key={s.id}
//             src={s.image}
//             alt={i === active ? s.alt : ""}
//             fill
//             sizes="100vw"
//             priority={i === 0}
//             className={`object-cover transition-opacity duration-700 ${
//               i === active ? "opacity-100" : "opacity-0"
//             }`}
//           />
//         ))}
//       </div>

//       {/* Layer 1: red tint + blur with a hole cut out over the frame */}
//       <div
//         aria-hidden
//         className={`absolute inset-0 -z-10 bg-brand-red/75 transition-opacity duration-300 ${
//           clipPath ? "opacity-100" : "opacity-0"
//         }`}
//         style={clipPath ? { clipPath } : undefined}
//       />

//       {/* Content */}
//       <div className="flex flex-col gap-10 p-5 sm:p-8 lg:px-10 lg:py-10">
//         <div>
//           <p className="text-sm font-bold">The engineering flow</p>
//           <h2 className="mt-3 text-3xl font-medium sm:text-4xl lg:text-5xl">
//             Five capabilities, One engineering team
//           </h2>
//         </div>

//         {/* Stepper */}
//         <div
//           role="tablist"
//           aria-label="Engineering capabilities"
//           className="flex overflow-hidden rounded-lg border border-white bg-brand-blue"
//         >
//           {SLIDES.map((s, i) => (
//             <button
//               key={s.id}
//               role="tab"
//               id={`tab-${s.id}`}
//               aria-selected={i === active}
//               aria-controls="engineering-panel"
//               onClick={() => setActive(i)}
//               data-active={i === active}
//               className="engineering-step focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white"
//               style={{ zIndex: SLIDES.length - i }}
//             >
//               <span className="engineering-step-inner text-xs sm:text-lg lg:text-xl">
//                 {s.label}
//               </span>
//             </button>
//           ))}
//         </div>

//         {/* Frame: the "hole". Transparent, the image shows through the overlay. */}
//         <div
//           ref={frameRef}
//           id="engineering-panel"
//           role="tabpanel"
//           aria-labelledby={`tab-${current.id}`}
//           className="relative min-h-[320px] rounded-lg sm:min-h-[420px] lg:min-h-[480px]"
//         >
//           <div
//             key={current.id}
//             aria-live="polite"
//             className="engineering-card-in absolute right-3 bottom-3 w-[min(100%-1.5rem,20rem)] rounded-lg bg-brand-red p-5 text-base leading-relaxed sm:right-6 sm:bottom-6 sm:p-7 sm:text-xl"
//           >
//             {current.text}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// -------------------------------- before this works but has no blur. this si with blur

"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

type Slide = {
  id: string;
  label: string;
  text: string;
  image: string;
  alt: string;
};

const SLIDES: Slide[] = [
  {
    id: "design",
    label: "Design",
    text: "Material selection, CAD, structural analysis in ANSYS, mould design in our own tool room.",
    image: "/images/flow_design.jpg",
    alt: "Engineer holding an air spring assembly",
  },
  {
    id: "develop",
    label: "Develop",
    text: "Prototype builds and compound trials that turn the design into a working part.",
    image: "/images/flow_develop.png",
    alt: "Prototype air spring on a workbench",
  },
  {
    id: "test",
    label: "Test",
    text: "Fatigue, burst and leak testing against customer specifications before release.",
    image: "/images/flow_test.jpg",
    alt: "Air spring on a test rig",
  },
  {
    id: "manufacture",
    label: "Manufacture",
    text: "Moulding, vulcanising and assembly on our own production lines.",
    image: "/images/flow_manufacture.jpg",
    alt: "Production line for air springs",
  },
  {
    id: "support",
    label: "Support",
    text: "Application guidance, installation help and after-sales service.",
    image: "/images/flow_support.jpg",
    alt: "Engineer supporting a customer on site",
  },
];

const INTERVAL_MS = 5000;

type Box = { x: number; y: number; W: number; H: number };

type Props = {
  /**
   * Height of the image frame (the "hole"). This is the one place to tune the
   * component's overall height; everything else grows around it.
   */
  frameHeightClass?: string;
};

export default function EngineeringFlowMasked({
  frameHeightClass = "min-h-[320px] sm:min-h-[420px] lg:min-h-[480px]",
}: Props) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [box, setBox] = useState<Box | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);

  // Where the frame sits inside the section, so the sharp image inside it lines
  // up exactly with the blurred/tinted image behind the overlay.
  const measure = useCallback(() => {
    const section = sectionRef.current;
    const frame = frameRef.current;
    if (!section || !frame) return;
    const s = section.getBoundingClientRect();
    const f = frame.getBoundingClientRect();
    setBox({ x: f.left - s.left, y: f.top - s.top, W: s.width, H: s.height });
  }, []);

  useLayoutEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (sectionRef.current) ro.observe(sectionRef.current);
    if (frameRef.current) ro.observe(frameRef.current);
    return () => ro.disconnect();
  }, [measure]);

  // Auto-advance; restarts whenever the active slide changes (including manual clicks).
  useEffect(() => {
    if (paused) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;
    const t = setTimeout(
      () => setActive((i) => (i + 1) % SLIDES.length),
      INTERVAL_MS,
    );
    return () => clearTimeout(t);
  }, [active, paused]);

  const current = SLIDES[active];

  return (
    <section
      ref={sectionRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative isolate overflow-hidden rounded-lg text-white my-30 font-montserrat"
    >
      {/* Layer 0: slide images, full bleed. Only ever seen through the red overlay. */}
      <div className="absolute inset-0 -z-20">
        {SLIDES.map((s, i) => (
          <Image
            key={s.id}
            src={s.image}
            alt=""
            fill
            sizes="100vw"
            priority={i === 0}
            className={`object-cover transition-opacity duration-700 ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Layer 1: red tint + blur over everything behind it (no cutout needed) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-brand-red/75 backdrop-blur-xs"
      />

      {/* Content (sits above the overlay) */}
      <div className="flex flex-col gap-10 p-5 sm:p-8 lg:px-10 lg:py-10">
        <div>
          <p className="text-sm font-bold">The engineering flow</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-3xl lg:text-4xl">
            Five capabilities, One engineering team
          </h2>
        </div>

        {/* Stepper */}
        <div
          role="tablist"
          aria-label="Engineering capabilities"
          className="flex overflow-hidden rounded-lg border border-white bg-brand-blue"
        >
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              role="tab"
              id={`tab-${s.id}`}
              aria-selected={i === active}
              aria-controls="engineering-panel"
              onClick={() => setActive(i)}
              data-active={i === active}
              className="engineering-step focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white"
              style={{ zIndex: SLIDES.length - i }}
            >
              <span className="engineering-step-inner text-xs sm:text-lg lg:text-xl font-medium">
                {s.label}
              </span>
            </button>
          ))}
        </div>

        {/*
          Frame = the "hole". It sits above the overlay and holds its own
          untinted, unblurred copy of the image, offset so it lines up
          pixel-for-pixel with the full-bleed image behind the overlay.
        */}
        <div
          ref={frameRef}
          id="engineering-panel"
          role="tabpanel"
          aria-labelledby={`tab-${current.id}`}
          className={`relative overflow-hidden rounded-lg ${frameHeightClass}`}
        >
          {box && (
            <div
              className="absolute"
              style={{ left: -box.x, top: -box.y, width: box.W, height: box.H }}
            >
              {SLIDES.map((s, i) => (
                <Image
                  key={s.id}
                  src={s.image}
                  alt={i === active ? s.alt : ""}
                  fill
                  sizes="100vw"
                  className={`object-cover transition-opacity duration-700 ${
                    i === active ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          )}

          <div
            key={current.id}
            aria-live="polite"
            className="engineering-card-in absolute right-3 bottom-3 w-[min(100%-1.5rem,20rem)] rounded-lg bg-brand-red p-5 text-base leading-relaxed sm:right-6 sm:bottom-6 sm:p-7 sm:text-xl"
          >
            {current.text}
          </div>
        </div>
      </div>
    </section>
  );
}
