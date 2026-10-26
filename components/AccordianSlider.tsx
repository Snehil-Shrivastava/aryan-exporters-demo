"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// each tag now has its own image
const slides = [
  {
    title: "Railway",
    image: "/images/railway.jpg",
    href: "#",
    tags: [
      { label: "Air springs", image: "/images/brake_systems.webp" },
      {
        label: "Constant contact side bearers Brake system",
        image: "/images/brake_systems.webp",
      },
      { label: "Couplers", image: "/images/couplers.jpg" },
    ],
    subheading: "Our Portfolio",
  },
  {
    title: "Defence",
    image: "/images/defence.jpg",
    href: "#",
    tags: [
      { label: "Track pads", image: "/images/shelters.webp" },
      { label: "Anti-vibration mounts", image: "/images/cables.jpg" },
      { label: "Amoured vehicle suspensions", image: "/images/cables.jpg" },
      { label: "Bellows and ducts", image: "/images/cables.jpg" },
    ],
    subheading: "Our Portfolio",
  },
  {
    title: "Electrical Components",
    image: "/images/electrical_component.jpg",
    href: "#",
    tags: [
      { label: "Pantograph", image: "/images/pantograph.jpg" },
      { label: "Wiring Harness", image: "/images/wiring_harness.jpg" },
      { label: "Grommets and bushes", image: "/images/couplers.jpg" },
    ],
    subheading: "Our Portfolio",
  },
  {
    title: "Power Electronics",
    image: "/images/power_electronics.jpg",
    href: "#",
    tags: [
      { label: "OHE", image: "/images/converters.jpg" },
      { label: "Inverters/Converts", image: "/images/inverters.jpg" },
    ],
    subheading: "Our Portfolio",
  },
  {
    title: "Smart Embedded",
    image: "/images/smart_embedded.jpg",
    href: "#",
    tags: [
      { label: "Rolling Stocks", image: "/images/controllers.jpg" },
      { label: "MVIS", image: "/images/sensors.jpg" },
      { label: "Onboard monitoring system", image: "/images/sensors.jpg" },
    ],
    subheading: "Our Portfolio",
  },
];

/*
  Responsive notes
  - The outer div is a container (@container). The @4xl: and @6xl: prefixes
    below react to THIS component's width, not the screen width:
      default = tablet (about 670px to 895px wide)
      @4xl    = 896px and up (laptop)
      @6xl    = 1152px and up (your original desktop sizes)
  - Height is one clamp: 43% of the width, never under 28rem, never over 45rem
    (45rem = your old h-180). No per-breakpoint heights needed.
*/
export default function ExpandingSlider() {
  const [active, setActive] = useState(2);
  const [paused, setPaused] = useState(false);
  // selected tag index for each slide, e.g. { 2: 0 } = slide 3, first tag
  const [selected, setSelected] = useState<Record<number, number | null>>({});

  // auto move to the next slide every 4 seconds
  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % slides.length),
      4000,
    );
    return () => clearInterval(id);
  }, [paused, active]);

  // click a tag to select it, click it again to go back to the main image
  const toggleTag = (slideIndex: number, tagIndex: number) => {
    setSelected((prev) => ({
      ...prev,
      [slideIndex]: prev[slideIndex] === tagIndex ? null : tagIndex,
    }));
  };

  return (
    <div
      className="@container w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex h-[clamp(28rem,43cqw,45rem)] w-full gap-2 @4xl:gap-4">
        {slides.map((slide, i) => {
          const isActive = i === active;
          const num = String(i + 1).padStart(2, "0");
          const selectedTag = selected[i] ?? null;

          return (
            <div
              key={slide.title}
              onClick={() => setActive(i)}
              className={`relative basis-0 overflow-hidden transition-[flex-grow] duration-700 ease-in-out rounded-lg ${
                isActive
                  ? "grow-10 @4xl:grow-7 border border-gray-300 bg-white"
                  : "grow cursor-pointer"
              }`}
            >
              {/* COLLAPSED VIEW */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  isActive ? "pointer-events-none opacity-0" : "opacity-100"
                }`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={slide.image}
                    alt=""
                    className="h-full w-full scale-110 object-cover blur-sm"
                    fill
                  />
                </div>
                <div className="absolute inset-0 bg-black/60" />
                <span className="absolute inset-x-0 top-4 text-center text-sm font-semibold text-white/80 @6xl:top-6 @6xl:text-base">
                  {num}
                </span>
                <span className="absolute bottom-[35%] left-1/2 -translate-x-1/2 rotate-180 whitespace-nowrap text-lg font-bold text-white [writing-mode:vertical-rl] @6xl:text-xl">
                  {slide.title}
                </span>
              </div>

              {/* EXPANDED VIEW
                  min-w is just under the panel's final width at each size, so
                  text does not re-wrap while the panel is still growing. */}
              <div
                className={`flex h-full min-w-100 flex-col p-5 transition-opacity duration-500 @4xl:min-w-125 @4xl:p-6 @6xl:min-w-160 @6xl:p-8 ${
                  isActive ? "opacity-100 delay-300" : "opacity-0"
                }`}
              >
                <span className="text-xl font-bold opacity-40 @6xl:text-base">
                  {slide.subheading}
                </span>
                <h2 className="mb-3 mt-2 text-2xl font-bold leading-tight text-brand-red @4xl:mb-4 @4xl:mt-3 @4xl:text-3xl @6xl:mb-6 @6xl:mt-4 @6xl:text-4xl">
                  {num} {slide.title}
                </h2>

                {/* All images are stacked; only the selected one is visible.
                    This gives a smooth cross-fade and preloads every image. */}
                <div className="relative min-h-0 w-full flex-1">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className={`object-cover transition-opacity duration-500 rounded-lg select-none ${
                      selectedTag === null ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  {slide.tags.map((tag, t) => (
                    <Image
                      key={tag.label}
                      src={tag.image}
                      alt={tag.label}
                      fill
                      className={`object-cover transition-opacity duration-500 rounded-lg select-none ${
                        selectedTag === t ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))}
                </div>

                {/* flex-wrap: if the tags and the link don't fit in one row,
                    the link drops under the tags instead of overflowing */}
                <div className="mt-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-3 @4xl:mt-5 @6xl:mt-6">
                  <ul className="flex flex-wrap gap-2 @4xl:gap-3 @6xl:gap-4">
                    {slide.tags.map((tag, t) => (
                      <li key={tag.label}>
                        <button
                          type="button"
                          aria-pressed={selectedTag === t}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleTag(i, t);
                          }}
                          className={`cursor-pointer shadow-[0_0_15px_2px_rgba(0,0,0,0.15)] px-3 py-2 text-sm transition-colors @4xl:px-4 @4xl:py-3 @6xl:px-6 @6xl:py-4 @6xl:text-base rounded-full font-medium ${
                            selectedTag === t
                              ? "bg-brand-red text-white"
                              : "text-brand-red hover:bg-red-50"
                          }`}
                        >
                          {tag.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={slide.href}
                    className="text-sm font-medium text-brand-blue hover:underline @6xl:text-base"
                  >
                    see this range
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
