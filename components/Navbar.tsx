// "use client";

// import Image from "next/image";

// import aryanExportersLogo from "@/public/aryan_exporters_logo.svg";
// import { ArrowUpRight, Menu, X } from "lucide-react";
// import Link from "next/link";
// import { useCallback, useEffect, useRef, useState } from "react";

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
//     link: "/about",
//   },
// ];

// const Navbar = () => {
//   const [hidden, setHidden] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const lastScrollY = useRef(0);

//   const closeMenu = useCallback(() => setIsMenuOpen(false), []);

//   /* ---------------------------------- scroll --------------------------------- */
//   useEffect(() => {
//     const onScroll = () => {
//       const currentY = window.scrollY;
//       const delta = currentY - lastScrollY.current;

//       // never hide the bar while the mobile menu is open
//       if (isMenuOpen) {
//         setHidden(false);
//         lastScrollY.current = currentY;
//         return;
//       }

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
//   }, [isMenuOpen]);

//   /* ------------------------- close menu on desktop resize ------------------------ */
//   useEffect(() => {
//     const mq = window.matchMedia("(min-width: 1024px)");
//     const onChange = (e: MediaQueryListEvent) => {
//       if (e.matches) setIsMenuOpen(false);
//     };

//     mq.addEventListener("change", onChange);
//     return () => mq.removeEventListener("change", onChange);
//   }, []);

//   /* ----------------------------- escape to close ----------------------------- */
//   useEffect(() => {
//     if (!isMenuOpen) return;
//     const onKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "Escape") setIsMenuOpen(false);
//     };
//     window.addEventListener("keydown", onKeyDown);
//     return () => window.removeEventListener("keydown", onKeyDown);
//   }, [isMenuOpen]);

//   /* --------------------------- lock body scroll --------------------------- */
//   useEffect(() => {
//     if (!isMenuOpen) return;
//     const original = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = original;
//     };
//   }, [isMenuOpen]);

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-99 flex flex-col bg-white border-b border-gray-300 shadow-[0_0_15px_2px_rgba(0,0,0,0.15)] transition-transform duration-300 ease-out will-change-transform ${
//         hidden ? "-translate-y-full" : "translate-y-0"
//       }`}
//     >
//       {/* -------------------------------- top bar -------------------------------- */}
//       <div className="flex items-stretch">
//         {/* brand */}
//         <Link
//           href="/"
//           className="flex flex-1 items-center gap-3 py-4 pl-5 font-bold text-brand-blue sm:gap-4 sm:pl-8 lg:flex-[0.2] lg:py-3.5 1440p:flex-[0.3] 1440p:py-6 1440p:pl-15"
//         >
//           <Image
//             src={aryanExportersLogo}
//             alt="aryan exporters pvt ltd"
//             className="w-7 shrink-0 sm:w-8"
//           />
//           <span className="font-mirano text-sm uppercase leading-tight 1440p:text-base">
//             Aryan Exporters Pvt Ltd
//           </span>
//         </Link>

//         {/* desktop links + cta */}
//         <div className="hidden flex-[0.8] items-stretch justify-end gap-10 lg:flex 1440p:flex-[0.7] 1440p:gap-5 2xl:gap-20">
//           <ul className="flex max-w-200 flex-1 items-center justify-end gap-10 text-sm font-semibold opacity-65 xl:max-1440p:gap-15 xl:max-1440p:text-xs max-xl:text-[10px] 1440p:justify-around">
//             {navLinks.map((nav, index) => (
//               <Link href={nav.link} key={index} className="uppercase">
//                 {nav.label}
//               </Link>
//             ))}
//           </ul>
//           <button
//             type="button"
//             className="flex items-center gap-5 bg-brand-red px-10 font-bold text-white max-1440p:gap-2.5 max-1440p:px-5 1440p:max-2xl:px-6"
//           >
//             <span className="flex flex-col text-start max-lg:text-sm lg:max-xl:text-xs xl:max-1440p:text-sm">
//               <span>NABL</span>
//               <span>Lab Testing</span>
//             </span>
//             <ArrowUpRight
//               size={38}
//               strokeWidth={1.5}
//               className="max-lg:w-8 lg:max-xl:w-6 xl:max-1440p:w-8"
//             />
//           </button>
//         </div>

//         {/* hamburger */}
//         <button
//           type="button"
//           onClick={() => setIsMenuOpen((open) => !open)}
//           aria-label={
//             isMenuOpen ? "Close navigation menu" : "Open navigation menu"
//           }
//           aria-expanded={isMenuOpen}
//           aria-controls="mobile-menu"
//           className="flex shrink-0 items-center justify-center px-5 text-brand-blue transition-colors active:bg-gray-100 lg:hidden"
//         >
//           {isMenuOpen ? (
//             <X size={26} strokeWidth={2} />
//           ) : (
//             <Menu size={26} strokeWidth={2} />
//           )}
//         </button>
//       </div>

//       {/* ------------------------------ mobile panel ------------------------------ */}
//       <div
//         id="mobile-menu"
//         className={`overflow-hidden bg-white transition-[max-height,opacity,visibility] duration-300 ease-out lg:hidden ${
//           isMenuOpen
//             ? "visible max-h-[calc(100dvh-4.5rem)] opacity-100"
//             : "invisible max-h-0 opacity-0"
//         }`}
//       >
//         <ul className="flex flex-col px-5 sm:px-8">
//           {navLinks.map((nav) => (
//             <li
//               key={nav.label}
//               className="border-b border-gray-200 last:border-b-0"
//             >
//               <Link
//                 href={nav.link}
//                 onClick={closeMenu}
//                 className="flex items-center justify-between py-3.5 text-[13px] font-semibold uppercase tracking-wide text-brand-blue"
//               >
//                 {nav.label}
//                 <ArrowUpRight
//                   size={16}
//                   strokeWidth={2}
//                   className="opacity-40"
//                 />
//               </Link>
//             </li>
//           ))}
//         </ul>

//         <div className="p-5 sm:px-8">
//           <button
//             type="button"
//             onClick={closeMenu}
//             className="flex w-full items-center justify-center gap-3 bg-brand-red px-6 py-4 text-sm lg:max-xl:text-[10px] font-bold text-white"
//           >
//             <span>NABL Lab Testing</span>
//             <ArrowUpRight size={20} strokeWidth={1.5} />
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// ------------------------- sub nav items

"use client";

import Image from "next/image";

import aryanExportersLogo from "@/public/aryan_exporters_logo.svg";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

type NavItem = {
  label: string;
  link: string;
  children?: { label: string; link: string }[];
};

const navLinks: NavItem[] = [
  {
    label: "solutions",
    link: "",
    children: [
      { label: "Coach", link: "/solutions/bogie" },
      { label: "Defence", link: "/solutions/defence" },
      {
        label: "Electrical components",
        link: "/solutions/electrical-components",
      },
      { label: "Power electronics", link: "/solutions/power-electronics" },
      {
        label: "Smart embedded systems",
        link: "/solutions/smart-embedded-systems",
      },
      {
        label: "Engineering products",
        link: "/solutions/engineering-products",
      },
    ],
  },
  {
    label: "capabilities",
    link: "",
  },
  // {
  //   label: "products",
  //   link: "",
  //   children: [
  //     { label: "Coach", link: "/products/bogie" },
  //     { label: "Defence", link: "/products/defence" },
  //     {
  //       label: "Electrical components",
  //       link: "/products/electrical-components",
  //     },
  //     { label: "Power electronics", link: "/products/power-electronics" },
  //     {
  //       label: "Smart embedded systems",
  //       link: "/products/smart-embedded-systems",
  //     },
  //     {
  //       label: "Engineering products",
  //       link: "/products/engineering-products",
  //     },
  //   ],
  // },
  {
    label: "Success stories",
    link: "",
  },
  {
    label: "about",
    link: "/about",
  },
  {
    label: "company",
    link: "",
    children: [
      { label: "CSR", link: "/csr" },
      { label: "Careers", link: "/careers" },
      {
        label: "Resources",
        link: "/resources",
      },
      { label: "Press and Events", link: "" },
    ],
  },
  {
    label: "contact",
    link: "",
  },
];

const DesktopNavItem = ({ nav }: { nav: NavItem }) => {
  const [open, setOpen] = useState(false);
  // pinned = opened by a click, so it stays open after the cursor leaves
  const [pinned, setPinned] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setPinned(false);
  }, []);

  /* click outside / Escape closes the dropdown */
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) close();
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  // 1st click pins it open, 2nd click closes it
  const onToggle = () => {
    if (pinned) {
      close();
    } else {
      setPinned(true);
      setOpen(true);
    }
  };

  const labelClass = "flex items-center gap-1 uppercase transition-opacity";

  return (
    <li
      ref={ref}
      // `relative` anchors the dropdown. The li stretches the full bar height,
      // so the dropdown sits flush against the bar with no hover gap.
      className="relative flex items-center"
      // hover only for a real mouse; touch devices use the click toggle instead
      onPointerEnter={(e) => {
        if (nav.children && e.pointerType === "mouse") setOpen(true);
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse" && !pinned) setOpen(false);
      }}
      // keyboard users: tabbing to the item opens it, tabbing away closes it
      onFocus={(e) => {
        if (nav.children && e.target.matches(":focus-visible")) setOpen(true);
      }}
      onBlur={(e) => {
        if (
          !pinned &&
          !e.currentTarget.contains(e.relatedTarget as Node | null)
        )
          setOpen(false);
      }}
    >
      {nav.children ? (
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-haspopup="true"
          className={`${labelClass} cursor-pointer font-semibold uppercase ${
            open ? "opacity-100" : "opacity-65"
          }`}
        >
          {nav.label}
          <ChevronDown
            size={14}
            strokeWidth={2}
            aria-hidden="true"
            className={`transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      ) : (
        <Link
          href={nav.link}
          className={`${labelClass} opacity-65 hover:opacity-100`}
        >
          {nav.label}
        </Link>
      )}

      {nav.children && (
        <ul
          className={`absolute left-0 top-full z-10 min-w-64 border border-t-2 border-gray-300 border-t-brand-red bg-white py-2 shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition-[opacity,transform,visibility] duration-200 ease-out ${
            open
              ? "visible translate-y-0 opacity-100"
              : "invisible translate-y-1 opacity-0"
          }`}
        >
          {nav.children.map((child) => (
            <li key={child.label}>
              <Link
                href={child.link}
                onClick={close}
                className="block px-5 py-3 text-brand-blue transition-colors hover:bg-gray-50 hover:text-brand-red focus-visible:bg-gray-50 focus-visible:text-brand-red focus-visible:outline-none"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // which accordion section is expanded in the mobile menu
  const [openSection, setOpenSection] = useState<string | null>(null);
  const lastScrollY = useRef(0);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    setOpenSection(null);
  }, []);

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
      if (e.matches) closeMenu();
    };

    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [closeMenu]);

  /* ----------------------------- escape to close ----------------------------- */
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen, closeMenu]);

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
        <Link
          href="/"
          className="flex flex-1 items-center gap-3 py-4 pl-5 font-bold text-brand-blue sm:gap-4 sm:pl-8 lg:flex-[0.2] lg:py-3.5 1440p:flex-[0.3] 1440p:py-6 1440p:pl-15"
        >
          <Image
            src={aryanExportersLogo}
            alt="aryan exporters pvt ltd"
            className="w-7 shrink-0 sm:w-8"
          />
          <span className="font-mirano text-sm uppercase leading-tight 1440p:text-base">
            Aryan Exporters Pvt Ltd
          </span>
        </Link>

        {/* desktop links + cta */}
        <div className="hidden flex-[0.8] items-stretch justify-end gap-10 lg:flex 1440p:flex-[0.7] 1440p:gap-5 2xl:gap-20">
          {/*
            NOTE: opacity-65 moved from the <ul> onto each link. If it stayed
            on the <ul>, the dropdown panel would inherit the 65% opacity too.
          */}
          <ul className="flex max-w-250 flex-1 items-stretch justify-end gap-10 text-sm font-semibold xl:max-1440p:gap-15 xl:max-1440p:text-xs max-xl:text-[10px] 1440p:justify-around">
            {navLinks.map((nav) => (
              <DesktopNavItem key={nav.label} nav={nav} />
            ))}
          </ul>
          <button
            type="button"
            className="flex items-center gap-5 bg-brand-red px-10 font-bold text-white max-1440p:gap-2.5 max-1440p:px-5 1440p:max-2xl:px-6"
          >
            <span className="flex flex-col text-start max-lg:text-sm lg:max-xl:text-xs xl:max-1440p:text-sm">
              <span>NABL</span>
              <span>Lab Testing</span>
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
          onClick={() => {
            if (isMenuOpen) closeMenu();
            else setIsMenuOpen(true);
          }}
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
      {/* overflow-y-auto (was overflow-hidden) so an expanded section can scroll */}
      <div
        id="mobile-menu"
        className={`overflow-y-auto bg-white transition-[max-height,opacity,visibility] duration-300 ease-out lg:hidden ${
          isMenuOpen
            ? "visible max-h-[calc(100dvh-4.5rem)] opacity-100"
            : "invisible max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-5 sm:px-8">
          {navLinks.map((nav) => {
            const isOpen = openSection === nav.label;

            return (
              <li
                key={nav.label}
                className="border-b border-gray-200 last:border-b-0"
              >
                {nav.children ? (
                  <>
                    {/* hover doesn't exist on touch, so sections with children expand on tap */}
                    <button
                      type="button"
                      onClick={() => setOpenSection(isOpen ? null : nav.label)}
                      aria-expanded={isOpen}
                      aria-controls={`mobile-sub-${nav.label}`}
                      className="flex w-full items-center justify-between py-3.5 text-[13px] font-semibold uppercase tracking-wide text-brand-blue"
                    >
                      {nav.label}
                      <ChevronDown
                        size={16}
                        strokeWidth={2}
                        aria-hidden="true"
                        className={`opacity-40 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <ul
                        id={`mobile-sub-${nav.label}`}
                        className="mb-3 flex flex-col border-l-2 border-brand-red/60 pl-4"
                      >
                        {nav.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.link}
                              onClick={closeMenu}
                              className="block py-2.5 text-[13px] font-medium text-brand-blue/80"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
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
                )}
              </li>
            );
          })}
        </ul>

        <div className="p-5 sm:px-8">
          <button
            type="button"
            onClick={closeMenu}
            className="flex w-full items-center justify-center gap-3 bg-brand-red px-6 py-4 text-sm lg:max-xl:text-[10px] font-bold text-white"
          >
            <span>NABL Lab Testing</span>
            <ArrowUpRight size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
