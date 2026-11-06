// "use client";

// import { useState } from "react";
// import Image from "next/image";

// import ballistic from "@/public/images/ballistic.svg";
// import liva from "@/public/images/liva.svg";
// import aven from "@/public/images/aven.svg";
// import vertex from "@/public/images/vertex.svg";

// // Define the tabs
// const TABS = [
//   { id: "customers", label: "Customers" },
//   { id: "technology", label: "Technology Partners" },
//   { id: "collaborators", label: "Collaborators" },
// ];

// // Define the logos for each tab.
// // Replace the 'src' paths with your actual logo image paths.
// const LOGOS = {
//   customers: [
//     {
//       name: "Ballistic Dummy Lab",
//       src: ballistic,
//     },
//     {
//       name: "Liva",
//       src: liva,
//     },
//     {
//       name: "Aven",
//       src: aven,
//     },
//     {
//       name: "Vertex Kapital LLC",
//       src: vertex,
//     },
//   ],
//   technology: [
//     {
//       name: "Tech Corp",
//       src: liva,
//     },
//     {
//       name: "Innovate Inc",
//       src: vertex,
//     },
//     {
//       name: "Future Systems",
//       src: ballistic,
//     },
//   ],
//   collaborators: [
//     {
//       name: "Global Reach",
//       src: aven,
//     },
//     {
//       name: "Partner One",
//       src: ballistic,
//     },
//     {
//       name: "Joint Ventures",
//       src: liva,
//     },
//     {
//       name: "Synergy Group",
//       src: vertex,
//     },
//   ],
// };

// export default function OurPartners() {
//   const [activeTab, setActiveTab] = useState<keyof typeof LOGOS>("customers");

//   return (
//     <div className="flex flex-col gap-8 py-10 sm:gap-10 lg:gap-15 max-1440p:py-0">
//       {/* Header Area */}
//       <div className="flex flex-col items-start gap-1.5 xl:flex-row xl:items-center xl:gap-10">
//         <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold capitalize">
//           Our Partners
//         </h2>
//         <p className="lg:flex lg:flex-col py-0 text-xs md:text-sm xl:text-xs 2xl:text-sm text-gray-600">
//           <span>
//             The operators and builders who buy from us, the material companies
//             behind our compounds, and the people we develop with.
//           </span>
//         </p>
//       </div>

//       {/* Logos Grid */}
//       <div
//         key={activeTab}
//         id="partners-panel"
//         role="tabpanel"
//         aria-labelledby={`tab-${activeTab}`}
//         className="flex sm:max-lg:grid sm:max-lg:grid-cols-2 animate-fade-in flex-wrap justify-center gap-4 sm:gap-6"
//       >
//         {LOGOS[activeTab].map((logo) => (
//           <div
//             key={logo.name}
//             className="group relative flex aspect-2.5/1 grow basis-full items-center justify-center border-b-5 border-r-5 border-neutral-300 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md max-xl:p-4 sm:basis-[calc(50%-0.75rem)] lg:basis-0 lg:max-w-110.5"
//           >
//             <div className="relative h-full w-7/10">
//               <Image
//                 src={logo.src}
//                 alt={`${logo.name} logo`}
//                 className="object-contain filter transition-all duration-300"
//                 fill
//                 sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 80vw"
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Tab Switcher */}
//       <div
//         role="tablist"
//         aria-label="Partner categories"
//         className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 lg:gap-25"
//       >
//         {TABS.map((tab) => {
//           const isActive = activeTab === tab.id;

//           return (
//             <button
//               key={tab.id}
//               role="tab"
//               id={`tab-${tab.id}`}
//               aria-selected={isActive}
//               aria-controls="partners-panel"
//               onClick={() => setActiveTab(tab.id as keyof typeof LOGOS)}
//               className={`cursor-pointer py-2 text-sm ${isActive ? "font-bold" : "opacity-50"}`}
//             >
//               {tab.label}
//             </button>
//           );
//         })}
//       </div>

//       {/* Inline style for the fade-in animation.
//           You can move this to your global CSS or tailwind.config.js if you prefer. */}
//       <style
//         dangerouslySetInnerHTML={{
//           __html: `
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade-in {
//           animation: fadeIn 0.4s ease-out forwards;
//         }
//       `,
//         }}
//       />
//     </div>
//   );
// }

// --------------------------------------------------------------------------

"use client";

import { useState } from "react";
import Image from "next/image";

import ballistic from "@/public/images/ballistic.svg";
import liva from "@/public/images/liva.svg";
import aven from "@/public/images/aven.svg";
import vertex from "@/public/images/vertex.svg";

// Define the tabs
const TABS = [
  { id: "customers", label: "Customers" },
  { id: "technology", label: "Technology Partners" },
  { id: "collaborators", label: "Collaborators" },
];

// Define the logos for each tab.
const LOGOS = {
  customers: [
    { name: "Ballistic Dummy Lab", src: ballistic },
    { name: "Liva", src: liva },
    { name: "Aven", src: aven },
    { name: "Vertex Kapital LLC", src: vertex },
    // Added dummy logos to demonstrate the scroll
    { name: "Customer 5", src: ballistic },
    { name: "Customer 6", src: liva },
    { name: "Customer 7", src: aven },
    { name: "Customer 8", src: vertex },
    { name: "Customer 9", src: ballistic },
    { name: "Customer 10", src: liva },
  ],
  technology: [
    { name: "Tech Corp", src: liva },
    { name: "Innovate Inc", src: vertex },
    { name: "Future Systems", src: ballistic },
    { name: "Tech 4", src: aven },
    { name: "Tech 5", src: liva },
    { name: "Tech 6", src: vertex },
    { name: "Tech 7", src: ballistic },
    { name: "Tech 8", src: aven },
  ],
  collaborators: [
    { name: "Global Reach", src: aven },
    { name: "Partner One", src: ballistic },
    { name: "Joint Ventures", src: liva },
    { name: "Synergy Group", src: vertex },
    { name: "Collab 5", src: aven },
    { name: "Collab 6", src: ballistic },
    { name: "Collab 7", src: liva },
    { name: "Collab 8", src: vertex },
  ],
};

export default function OurPartners() {
  const [activeTab, setActiveTab] = useState<keyof typeof LOGOS>("customers");

  return (
    <div className="flex flex-col gap-8 py-10 sm:gap-10 lg:gap-15 max-1440p:py-0">
      {/* Header Area */}
      <div className="flex flex-col items-start gap-1.5 xl:flex-row xl:items-center xl:gap-10">
        <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold capitalize">
          Our Partners
        </h2>
        <p className="lg:flex lg:flex-col py-0 text-xs md:text-sm xl:text-xs 2xl:text-sm text-gray-600">
          <span>
            The operators and builders who buy from us, the material companies
            behind our compounds, and the people we develop with.
          </span>
        </p>
      </div>

      {/* Infinite Scrolling Logo Carousel */}
      {/* Infinite Scrolling Logo Carousel */}
      <div
        key={activeTab}
        id="partners-panel"
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
        className="relative w-full overflow-hidden py-2"
      >
        {/* The moving track */}
        <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
          {[...LOGOS[activeTab], ...LOGOS[activeTab]].map((logo, index) => {
            const isDuplicate = index >= LOGOS[activeTab].length;

            return (
              <div
                key={`${logo.name}-${index}`}
                aria-hidden={isDuplicate}
                // ADDED: mr-4 sm:mr-6 for the gap between logos
                className="group relative flex w-[180px] sm:w-[220px] lg:w-[12.5vw] shrink-0 aspect-2.5/1 items-center justify-center border-b-5 border-r-5 border-neutral-300 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md max-xl:p-4 mr-4 sm:mr-6"
              >
                <div className="relative h-full w-7/10">
                  <Image
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    className="object-contain filter transition-all duration-300"
                    fill
                    sizes="(min-width: 1024px) 15vw, (min-width: 640px) 220px, 180px"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tab Switcher */}
      <div
        role="tablist"
        aria-label="Partner categories"
        className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 lg:gap-25"
      >
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls="partners-panel"
              onClick={() => setActiveTab(tab.id as keyof typeof LOGOS)}
              className={`cursor-pointer py-2 text-sm transition-all duration-300 ${
                isActive
                  ? "font-bold opacity-100"
                  : "opacity-50 hover:opacity-100"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* CSS for the infinite scroll animation */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          /* 40s is the speed, adjust to make it faster/slower */
          animation: scroll 40s linear infinite;
        }
      `,
        }}
      />
    </div>
  );
}
