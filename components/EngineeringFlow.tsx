// "use client";

// import Video from "next-video";
// import placeholderVideo from "@/videos/placeholder_video.mp4";
// import designVideo from "@/videos/sample-video.mp4";
// import { useState } from "react";
// import Minimal from "player.style/minimal/react";

// const EngineeringFlowTabs = [
//   { label: "design r&d" },
//   { label: "manufacture" },
//   { label: "testing" },
//   { label: "success stories" },
// ];

// const Videos = [
//   {
//     label: "Design R&D",
//     video: placeholderVideo,
//   },
//   {
//     label: "Manufacture",
//     video: designVideo,
//   },
//   {
//     label: "Testing",
//     video: designVideo,
//   },
//   {
//     label: "Success Stories",
//     video: designVideo,
//   },
// ];

// export default function EngineeringFlow() {
//   const [activeTab, setActiveTab] = useState("design r&d");

//   const activeVideo = Videos.find((v) => v.label.toLowerCase() === activeTab);

//   return (
//     <div className="flex flex-col gap-6 xl:gap-8">
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
//       <div>
//         {activeVideo && (
//           <Video
//             src={activeVideo.video}
//             key={activeVideo.label}
//             theme={Minimal}
//             style={{
//               maxWidth: "1475px",
//               marginLeft: "auto",
//               marginRight: "auto",
//             }}
//             className="max-xl:w-full w-4/5"
//           />
//         )}
//       </div>
//       <div className="flex flex-wrap gap-x-4 md:gap-x-6 lg:gap-x-8 2xl:gap-x-12 gap-y-4 items-center min-h-15 w-full xl:w-4/5 max-w-368.75 mx-auto">
//         {EngineeringFlowTabs.map((tab, index) => {
//           const isActive = activeTab == tab.label;
//           return (
//             <button
//               key={index}
//               className={`capitalize shadow-[0_0_15px_2px_rgba(0,0,0,0.15)] px-4 md:px-8 lg:px-10 py-1.5 md:py-2 lg:py-2.5 rounded-full cursor-pointer text-xs md:text-sm lg:text-base 2xl:text-lg ${isActive ? "font-bold bg-brand-red text-white" : "text-brand-red"}`}
//               onClick={() => setActiveTab(tab.label)}
//             >
//               {tab.label}
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// -------------------------------------------------------------------------------------

"use client";

import Video from "next-video";
import placeholderVideo from "@/videos/placeholder_video.mp4";
import designVideo from "@/videos/sample-video.mp4";
import { useState, useEffect } from "react";
import Minimal from "player.style/minimal/react";

const tabsData = [
  {
    id: 0,
    number: "01",
    label: "Design R&D",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library",
    video: placeholderVideo,
  },
  {
    id: 1,
    number: "02",
    label: "Manufacture",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library",
    video: designVideo,
  },
  {
    id: 2,
    number: "03",
    label: "Testing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library",
    video: designVideo,
  },
  {
    id: 3,
    number: "04",
    label: "Success Stories",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library",
    video: designVideo,
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

  const activeData = tabsData[activeTab];

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
      {/* Added a fixed height on desktop (lg:h-[600px]) to give the flex-grow animation a defined space */}
      <div className="flex flex-col lg:flex-row w-full border border-gray-200 shadow-sm bg-white overflow-hidden h-auto lg:h-[550px] 2xl:h-[650px]">
        {/* Video Player (Left) */}
        <div className="w-full lg:w-2/3 relative bg-black flex items-center justify-center overflow-hidden">
          {activeData && (
            <div
              key={activeData.label}
              className="absolute inset-0 w-full h-full"
              style={{
                animation: "fadeIn 0.7s ease-in-out",
              }}
            >
              <Video
                src={activeData.video}
                theme={Minimal}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          )}
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
                        ? "opacity-100 max-h-[500px] mt-6"
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

      {/* Simple Keyframe for the Video Fade */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
