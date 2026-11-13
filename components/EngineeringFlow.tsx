// "use client";

// import Video from "next-video";
// import placeholderVideo from "@/videos/placeholder_video.mp4";
// import designVideo from "@/videos/sample-video.mp4";
// import { useState, useEffect } from "react";
// import Minimal from "player.style/minimal/react";

// const tabsData = [
//   {
//     id: 0,
//     number: "01",
//     label: "Design and R&D",
//     description:
//       "Material selection, geometry and structural analysis against your load case. AutoCAD and SolidWorks for design, ANSYS for analysis. Delivering a design to review, an FEA report and drawings.",
//     video: placeholderVideo,
//   },
//   {
//     id: 1,
//     number: "02",
//     label: "Manufacture",
//     description:
//       "Rubber, engineering plastic and polyurethane moulding under ISO 9001 and, for rolling stock, IRIS. PLC-controlled injection, automatic batching and automatic adhesive application. First article inspection and batch records with every order.",
//     video: designVideo,
//   },
//   {
//     id: 2,
//     number: "03",
//     label: "Testing",
//     description:
//       "NABL accreditation to ISO/IEC 17025:2017. Rheometer, tensile, universal testing, fatigue and torque. Quality controlled at incoming material, in process and finished product, with endurance and field trials before release.",
//     video: designVideo,
//   },
//   {
//     id: 3,
//     number: "04",
//     label: "Success Stories",
//     description:
//       "A fully indigenised air spring assembly. A modular constant contact side bearer, in service since 2005. A single-piece traction motor bellow. The Happy Pad spring pad.",
//     video: designVideo,
//   },
// ];

// export default function EngineeringFlow() {
//   const [activeTab, setActiveTab] = useState(0);

//   // Auto-play logic: cycles every 6 seconds
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setActiveTab((prev) => (prev + 1) % tabsData.length);
//     }, 6000);

//     // Clear timeout if the component unmounts or activeTab changes (user clicks)
//     return () => clearTimeout(timer);
//   }, [activeTab]);

//   const activeData = tabsData[activeTab];

//   return (
//     <div className="flex flex-col gap-6 xl:gap-8">
//       {/* --- Original Header Section --- */}
//       <div className="flex flex-col items-start gap-1.5 xl:flex-row xl:items-center xl:gap-10">
//         <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold capitalize">
//           the enginnering flow
//         </h2>
//         <p className="lg:flex lg:flex-col py-0 text-xs md:text-sm xl:text-xs 2xl:text-sm text-gray-600">
//           <span>
//             A problem arrives as a drawing, a sample, a challenge, or a
//             failure.&nbsp;
//           </span>
//           <span>
//             It leaves as a part with a test report behind it. This is what
//             happens in between.
//           </span>
//         </p>
//       </div>

//       {/* --- New Slider/Accordion Layout --- */}
//       {/* Added a fixed height on desktop (lg:h-[600px]) to give the flex-grow animation a defined space */}
//       <div className="flex flex-col lg:flex-row w-full border border-gray-200 shadow-sm bg-white overflow-hidden h-auto lg:h-137.5 2xl:h-162.5">
//         {/* Video Player (Left) */}
//         <div className="w-full lg:w-2/3 relative bg-black flex items-center justify-center overflow-hidden max-lg:h-105">
//           {activeData && (
//             <div
//               key={activeData.label}
//               className="absolute inset-0 w-full h-full"
//               style={{
//                 animation: "fadeIn 0.7s ease-in-out",
//               }}
//             >
//               <Video
//                 src={activeData.video}
//                 theme={Minimal}
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                 }}
//               />
//             </div>
//           )}
//         </div>

//         {/* Accordion Tabs (Right) */}
//         <div className="w-full lg:w-1/3 flex flex-col">
//           {tabsData.map((tab, index) => {
//             const isActive = activeTab === index;

//             return (
//               <div
//                 key={tab.id}
//                 onClick={() => setActiveTab(index)}
//                 className={`relative flex flex-col cursor-pointer transition-all duration-700 ease-in-out overflow-hidden ${
//                   isActive
//                     ? "flex-1 bg-brand-red text-white"
//                     : "flex-none bg-white hover:bg-gray-50 border-t border-gray-100"
//                 }`}
//               >
//                 <div className="p-8 md:p-10 flex flex-col h-full">
//                   {/* Tab Header */}
//                   <div className="flex items-center gap-4">
//                     <span
//                       className={`text-xl md:text-2xl transition-colors duration-500 ${
//                         isActive
//                           ? "text-white/90 font-bold"
//                           : "text-gray-500 font-light"
//                       }`}
//                     >
//                       {tab.number}
//                     </span>
//                     <h3
//                       className={`text-xl md:text-2xl transition-all duration-500 ${
//                         isActive
//                           ? "text-white font-bold"
//                           : "text-gray-700 font-medium"
//                       }`}
//                     >
//                       {tab.label}
//                     </h3>
//                   </div>

//                   {/* Tab Content (Fades and slides in) */}
//                   <div
//                     className={`transition-all duration-700 ease-in-out overflow-hidden flex flex-col flex-1 ${
//                       isActive
//                         ? "opacity-100 max-h-125 mt-6"
//                         : "opacity-0 max-h-0 mt-0 pointer-events-none"
//                     }`}
//                   >
//                     <p className="text-sm md:text-base leading-relaxed text-white/90 mb-8">
//                       {tab.description}
//                     </p>
//                     <button className="mt-auto self-end font-bold text-sm md:text-base hover:underline underline-offset-4 text-white">
//                       Know More
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Simple Keyframe for the Video Fade */}
//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// -------------------------------------- new engineering flow

"use client";

import Video from "next-video";
import placeholderVideo from "@/videos/placeholder_video.mp4";
import { useState, useEffect } from "react";

const tabsData = [
  {
    id: 0,
    number: "01",
    label: "Design and R&D",
    description:
      "Material selection, geometry and structural analysis against your load case. AutoCAD and SolidWorks for design, ANSYS for analysis. Delivering a design to review, an FEA report and drawings.",
  },
  {
    id: 1,
    number: "02",
    label: "Manufacture",
    description:
      "Rubber, engineering plastic and polyurethane moulding under ISO 9001 and, for rolling stock, IRIS. PLC-controlled injection, automatic batching and automatic adhesive application. First article inspection and batch records with every order.",
  },
  {
    id: 2,
    number: "03",
    label: "Testing",
    description:
      "NABL accreditation to ISO/IEC 17025:2017. Rheometer, tensile, universal testing, fatigue and torque. Quality controlled at incoming material, in process and finished product, with endurance and field trials before release.",
  },
  {
    id: 3,
    number: "04",
    label: "Success Stories",
    description:
      "A fully indigenised air spring assembly. A modular constant contact side bearer, in service since 2005. A single-piece traction motor bellow. The Happy Pad spring pad.",
  },
];

export default function EngineeringFlow() {
  const [activeTab, setActiveTab] = useState(0);

  // Auto-play logic: cycles every 6 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveTab((prev) => (prev + 1) % tabsData.length);
    }, 6000);

    // Clear timeout if the component unmounts or activeTab changes (user clicks)
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div className="flex flex-col gap-6 xl:gap-8">
      {/* --- Original Header Section --- */}
      <div className="flex flex-col items-start gap-1.5 xl:flex-row xl:items-center xl:gap-10">
        <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold capitalize">
          the enginnering flow
        </h2>
        <p className="lg:flex lg:flex-col py-0 text-xs md:text-sm xl:text-xs 2xl:text-sm text-gray-600">
          <span>
            A problem arrives as a drawing, a sample, a challenge, or a
            failure.&nbsp;
          </span>
          <span>
            It leaves as a part with a test report behind it. This is what
            happens in between.
          </span>
        </p>
      </div>

      {/* --- New Slider/Accordion Layout --- */}
      <div className="flex flex-col lg:flex-row w-full border border-gray-200 bg-white overflow-hidden h-auto lg:h-137.5 2xl:h-162.5">
        {/* Video Player (Left) */}
        <div className="w-full lg:w-2/3 relative flex items-center justify-center overflow-hidden max-lg:h-105">
          <Video
            src={placeholderVideo}
            autoPlay
            loop
            muted
            controls={false}
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Accordion Tabs (Right) */}
        <div className="w-full lg:w-1/3 flex flex-col">
          {tabsData.map((tab, index) => {
            const isActive = activeTab === index;

            return (
              <div
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`relative flex flex-col cursor-pointer transition-all duration-700 ease-in-out overflow-hidden ${
                  isActive
                    ? "flex-1 bg-brand-red text-white"
                    : "flex-none bg-white hover:bg-gray-50 border-t border-gray-100"
                }`}
              >
                <div className="p-8 md:p-10 flex flex-col h-full">
                  {/* Tab Header */}
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-xl md:text-2xl transition-colors duration-500 ${
                        isActive
                          ? "text-white/90 font-bold"
                          : "text-gray-500 font-light"
                      }`}
                    >
                      {tab.number}
                    </span>
                    <h3
                      className={`text-xl md:text-2xl transition-all duration-500 ${
                        isActive
                          ? "text-white font-bold"
                          : "text-gray-700 font-medium"
                      }`}
                    >
                      {tab.label}
                    </h3>
                  </div>

                  {/* Tab Content (Fades and slides in) */}
                  <div
                    className={`transition-all duration-700 ease-in-out overflow-hidden flex flex-col flex-1 ${
                      isActive
                        ? "opacity-100 max-h-125 mt-6"
                        : "opacity-0 max-h-0 mt-0 pointer-events-none"
                    }`}
                  >
                    <p className="text-sm md:text-base leading-relaxed text-white/90 mb-8">
                      {tab.description}
                    </p>
                    <button className="mt-auto self-end font-bold text-sm md:text-base hover:underline underline-offset-4 text-white">
                      Know More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
