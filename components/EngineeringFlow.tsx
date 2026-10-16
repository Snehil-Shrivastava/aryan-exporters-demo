// "use client";

// import { Fragment, useEffect, useState } from "react";
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

// // The blur + red tint. Applied to every piece that sits AROUND the window.
// const frame = "backdrop-blur-xs bg-brand-red/80";

// /*
//   Sizing note: 1cqw = 1% of the section's width. Every size inside the section
//   uses cqw, so the whole thing scales like one picture. The section itself
//   only needs an aspect ratio, no heights per breakpoint.
// */
// export default function EngineeringFlow() {
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
//       className="relative flex aspect-13/7 w-full flex-col overflow-hidden font-montserrat text-white @container my-30"
//       onMouseEnter={() => setPaused(true)}
//       onMouseLeave={() => setPaused(false)}
//     >
//       {/* ONE background image (cross-fades between steps). It is never tinted
//           or blurred itself, the frame pieces do that. */}
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

//       {/* TOP: heading + step buttons (blurred and tinted) */}
//       <div className={`relative px-10 py-10 ${frame}`}>
//         <p className="text-sm font-semibold">The engineering flow</p>
//         <h2 className="mt-5 text-4xl font-semibold leading-tight">
//           Five capabilities, One engineering team
//         </h2>

//         <div className="mt-8 flex items-center gap-8">
//           {steps.map((step, i) => (
//             <Fragment key={step.label}>
//               <button
//                 type="button"
//                 onClick={() => setActive(i)}
//                 aria-pressed={i === active}
//                 className={`flex-1 cursor-pointer border py-5 text-xl transition-colors duration-300 ${
//                   i === active
//                     ? "border-white bg-white font-bold text-brand-red"
//                     : "border-white/80 text-white hover:bg-white/10"
//                 }`}
//               >
//                 {step.label}
//               </button>
//               {i < steps.length - 1 && (
//                 <svg
//                   viewBox="0 0 24 24"
//                   className="h-[1.4cqw] w-[1.4cqw] shrink-0 text-white"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   aria-hidden="true"
//                 >
//                   <path d="M9 5l7 7-7 7" />
//                 </svg>
//               )}
//             </Fragment>
//           ))}
//         </div>
//       </div>

//       {/* MIDDLE: left gutter | clear window | right gutter.
//           The window uses flex-1, so it takes whatever height is left over. */}
//       <div className="relative flex min-h-0 flex-1">
//         <div className={`w-[3.5cqw] shrink-0 ${frame}`} />

//         {/* The window: no blur, no tint, so the background shows through sharp */}
//         <div className="relative flex-1">
//           <div className="absolute bottom-[3cqw] right-[3.4cqw] grid w-[20cqw] bg-brand-red p-[2.6cqw]">
//             {steps.map((step, i) => (
//               <p
//                 key={step.label}
//                 className={`col-start-1 row-start-1 text-lg leading-[1.55] transition-opacity duration-500 ${
//                   i === active ? "opacity-100" : "opacity-0"
//                 }`}
//               >
//                 {step.text}
//               </p>
//             ))}
//           </div>
//         </div>

//         <div className={`w-[3.5cqw] shrink-0 ${frame}`} />
//       </div>

//       {/* BOTTOM strip */}
//       <div className={`relative h-[4cqw] shrink-0 ${frame}`} />
//     </section>
//   );
// }

// ------------------------------------- responsive

"use client";

import { Fragment, useEffect, useState } from "react";
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

// The blur + red tint. Applied to every piece that sits AROUND the window.
const frame = "backdrop-blur-xs bg-brand-red/80";

/*
  Responsive notes
  - The section is a container (@container). The @4xl: and @6xl: prefixes
    react to the SECTION's width, not the screen width:
      default = tablet (about 670px to 895px wide)
      @4xl    = 896px and up (laptop)
      @6xl    = 1152px and up (your original desktop sizes)
  - The shape is a fixed aspect ratio: a bit taller on tablet/small laptop
    (16/10), then 13/7 from the lg screen size up. Nothing else needs a height.
  - Sizes that are written in cqw (1cqw = 1% of the section width) scale
    smoothly with the section.
*/
export default function EngineeringFlow() {
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
      className="relative flex aspect-16/10 w-full flex-col overflow-hidden text-white @container my-30 lg:aspect-13/7"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ONE background image (cross-fades between steps). It is never tinted
          or blurred itself, the frame pieces do that. */}
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

      {/* TOP: heading + step buttons (blurred and tinted) */}
      <div
        className={`relative px-6 py-5 @4xl:px-8 @4xl:py-8 @6xl:px-10 @6xl:py-10 ${frame}`}
      >
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

      {/* MIDDLE: left gutter | clear window | right gutter.
          The window uses flex-1, so it takes whatever height is left over. */}
      <div className="relative flex min-h-0 flex-1">
        {/* <div className={`w-[3.5cqw] shrink-0 ${frame}`} /> */}

        {/* The window: no blur, no tint, so the background shows through sharp */}
        <div className="relative flex-1">
          {/* Caption box: wider (as a share of the section) on smaller sizes so
              the text wraps into fewer lines and the box stays short */}
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

        <div className={`w-[3.5cqw] shrink-0 ${frame}`} />
      </div>

      {/* BOTTOM strip */}
      <div className={`relative h-[4cqw] shrink-0 ${frame}`} />
    </section>
  );
}
