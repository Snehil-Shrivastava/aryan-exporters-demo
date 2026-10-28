// "use client";

// import Image from "next/image";

// import aryanExportersLogo from "@/public/aryan_exporters_logo.svg";
// import { ArrowUpRight } from "lucide-react";
// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";

// const navLinks = [
//   {
//     label: "solutions",
//     link: "",
//   },
//   {
//     label: "capabilities",
//     link: "",
//   },
//   {
//     label: "how we work",
//     link: "",
//   },
//   {
//     label: "products",
//     link: "",
//   },
//   {
//     label: "projects",
//     link: "",
//   },
//   {
//     label: "about",
//     link: "",
//   },
// ];

// const Navbar = () => {
//   const [hidden, setHidden] = useState(false);
//   const lastScrollY = useRef(0);

//   useEffect(() => {
//     const onScroll = () => {
//       const currentY = window.scrollY;
//       const delta = currentY - lastScrollY.current;

//       if (currentY <= 0) {
//         // always show at the very top
//         setHidden(false);
//       } else if (delta > 4) {
//         // scrolling down -> hide
//         setHidden(true);
//       } else if (delta < -4) {
//         // scrolling up -> show
//         setHidden(false);
//       }

//       lastScrollY.current = currentY;
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });
//     onScroll(); // sync initial state
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     // <nav className="flex fixed top-0 left-0 right-0 z-99 bg-white">
//     <nav
//       className={`flex fixed top-0 left-0 right-0 z-99 bg-white transition-transform duration-300 ease-out will-change-transform border-b  shadow-[0_0_15px_2px_rgba(0,0,0,0.15)] border-gray-300 ${hidden ? "-translate-y-full" : "translate-y-0"}`}
//     >
//       <div className="flex items-center gap-4 font-bold flex-[0.3] max-1440p:flex-[0.2] text-brand-blue py-6 max-1440p:py-3.5 pl-15 max-1440p:pl-8">
//         <Image
//           src={aryanExportersLogo}
//           alt="aryan exporters pvt ltd"
//           className="w-8"
//         />
//         <span className="font-mirano uppercase max-1440p:text-sm">
//           Aryan Exporters Pvt Ltd
//         </span>
//       </div>
//       <div className="flex-[0.7] max-1440p:flex-[0.8] flex justify-end items-stretch 2xl:gap-20 1440p:gap-5 gap-10">
//         <ul className="flex 1440p:justify-around justify-end xl:max-1440p:gap-15 gap-10 items-center font-semibold text-sm xl:max-1440p:text-xs max-xl:text-[10px] opacity-65 flex-1 max-w-200">
//           {navLinks.map((nav, index) => (
//             <Link href={nav.link} key={index} className="uppercase">
//               {nav.label}
//             </Link>
//           ))}
//         </ul>
//         <button className="bg-brand-red text-white font-bold flex gap-5 max-1440p:gap-2.5 items-center uppercase px-10 1440p:max-2xl:px-6 max-1440p:px-5">
//           <p className="flex flex-col text-start max-1440p:text-sm">
//             <span>discuss</span>
//             <span>a challenge</span>
//           </p>
//           <ArrowUpRight size={38} strokeWidth={1.5} className="max-1440p:w-8" />
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// ----------------------------- responsiveness

"use client";

import Image from "next/image";

import aryanExportersLogo from "@/public/aryan_exporters_logo.svg";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const navLinks = [
  {
    label: "solutions",
    link: "",
  },
  {
    label: "capabilities",
    link: "",
  },
  {
    label: "how we work",
    link: "",
  },
  {
    label: "products",
    link: "",
  },
  {
    label: "projects",
    link: "",
  },
  {
    label: "about",
    link: "",
  },
];

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  /* ---------------------------------- scroll --------------------------------- */
  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      // never hide the bar while the mobile menu is open
      if (isMenuOpen) {
        setHidden(false);
        lastScrollY.current = currentY;
        return;
      }

      if (currentY <= 0) {
        // always show at the very top
        setHidden(false);
      } else if (delta > 4) {
        // scrolling down -> hide
        setHidden(true);
      } else if (delta < -4) {
        // scrolling up -> show
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // sync initial state
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMenuOpen]);

  /* ------------------------- close menu on desktop resize ------------------------ */
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setIsMenuOpen(false);
    };

    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  /* ----------------------------- escape to close ----------------------------- */
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  /* --------------------------- lock body scroll --------------------------- */
  useEffect(() => {
    if (!isMenuOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-99 flex flex-col bg-white border-b border-gray-300 shadow-[0_0_15px_2px_rgba(0,0,0,0.15)] transition-transform duration-300 ease-out will-change-transform ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* -------------------------------- top bar -------------------------------- */}
      <div className="flex items-stretch">
        {/* brand */}
        <div className="flex flex-1 items-center gap-3 py-4 pl-5 font-bold text-brand-blue sm:gap-4 sm:pl-8 lg:flex-[0.2] lg:py-3.5 1440p:flex-[0.3] 1440p:py-6 1440p:pl-15">
          <Image
            src={aryanExportersLogo}
            alt="aryan exporters pvt ltd"
            className="w-7 shrink-0 sm:w-8"
          />
          <span className="font-mirano text-sm uppercase leading-tight 1440p:text-base">
            Aryan Exporters Pvt Ltd
          </span>
        </div>

        {/* desktop links + cta */}
        <div className="hidden flex-[0.8] items-stretch justify-end gap-10 lg:flex 1440p:flex-[0.7] 1440p:gap-5 2xl:gap-20">
          <ul className="flex max-w-200 flex-1 items-center justify-end gap-10 text-sm font-semibold opacity-65 xl:max-1440p:gap-15 xl:max-1440p:text-xs max-xl:text-[10px] 1440p:justify-around">
            {navLinks.map((nav, index) => (
              <Link href={nav.link} key={index} className="uppercase">
                {nav.label}
              </Link>
            ))}
          </ul>
          <button
            type="button"
            className="flex items-center gap-5 bg-brand-red px-10 font-bold uppercase text-white max-1440p:gap-2.5 max-1440p:px-5 1440p:max-2xl:px-6"
          >
            <span className="flex flex-col text-start max-lg:text-sm lg:max-xl:text-xs xl:max-1440p:text-sm">
              <span>discuss</span>
              <span>a challenge</span>
            </span>
            <ArrowUpRight
              size={38}
              strokeWidth={1.5}
              className="max-lg:w-8 lg:max-xl:w-6 xl:max-1440p:w-8"
            />
          </button>
        </div>

        {/* hamburger */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className="flex shrink-0 items-center justify-center px-5 text-brand-blue transition-colors active:bg-gray-100 lg:hidden"
        >
          {isMenuOpen ? (
            <X size={26} strokeWidth={2} />
          ) : (
            <Menu size={26} strokeWidth={2} />
          )}
        </button>
      </div>

      {/* ------------------------------ mobile panel ------------------------------ */}
      <div
        id="mobile-menu"
        className={`overflow-hidden bg-white transition-[max-height,opacity,visibility] duration-300 ease-out lg:hidden ${
          isMenuOpen
            ? "visible max-h-[calc(100dvh-4.5rem)] opacity-100"
            : "invisible max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-5 sm:px-8">
          {navLinks.map((nav) => (
            <li
              key={nav.label}
              className="border-b border-gray-200 last:border-b-0"
            >
              <Link
                href={nav.link}
                onClick={closeMenu}
                className="flex items-center justify-between py-3.5 text-[13px] font-semibold uppercase tracking-wide text-brand-blue"
              >
                {nav.label}
                <ArrowUpRight
                  size={16}
                  strokeWidth={2}
                  className="opacity-40"
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="p-5 sm:px-8">
          <button
            type="button"
            onClick={closeMenu}
            className="flex w-full items-center justify-center gap-3 bg-brand-red px-6 py-4 text-sm lg:max-xl:text-[10px] font-bold uppercase text-white"
          >
            <span>discuss a challenge</span>
            <ArrowUpRight size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
