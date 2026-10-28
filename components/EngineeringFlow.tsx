"use client";

import Video from "next-video";
import placeholderVideo from "@/videos/placeholder_video.mp4";
import designVideo from "@/videos/sample-video.mp4";
import { useState } from "react";
import Minimal from "player.style/minimal/react";

const EngineeringFlowTabs = [
  { label: "design r&d" },
  { label: "manufacture" },
  { label: "testing" },
  // { label: "manufacture" },
  { label: "success stories" },
];

const Videos = [
  {
    label: "Design R&D",
    video: placeholderVideo,
  },
  {
    label: "Manufacture",
    video: designVideo,
  },
  {
    label: "Testing",
    video: designVideo,
  },
  {
    label: "Success Stories",
    video: designVideo,
  },
];

export default function EngineeringFlow() {
  const [activeTab, setActiveTab] = useState("design r&d");

  const activeVideo = Videos.find((v) => v.label.toLowerCase() === activeTab);

  return (
    <div className="flex flex-col gap-6 xl:gap-8">
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
      <div>
        {activeVideo && (
          <Video
            src={activeVideo.video}
            key={activeVideo.label}
            theme={Minimal}
            style={{
              // width: "80%",
              maxWidth: "1475px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            className="max-xl:w-full w-4/5"
          />
        )}
      </div>
      <div className="flex flex-wrap gap-x-4 md:gap-x-6 lg:gap-x-8 2xl:gap-x-12 gap-y-4 items-center min-h-15 w-full xl:w-4/5 max-w-368.75 mx-auto">
        {EngineeringFlowTabs.map((tab, index) => {
          const isActive = activeTab == tab.label;
          return (
            <button
              key={index}
              className={`capitalize shadow-[0_0_15px_2px_rgba(0,0,0,0.15)] px-4 md:px-8 lg:px-10 py-1.5 md:py-2 lg:py-2.5 rounded-full cursor-pointer text-xs md:text-sm lg:text-base 2xl:text-lg ${isActive ? "font-bold bg-brand-red text-white" : "text-brand-red"}`}
              onClick={() => setActiveTab(tab.label)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
