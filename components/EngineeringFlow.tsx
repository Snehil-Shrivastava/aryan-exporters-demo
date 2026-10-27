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
  // {
  //   label: "Manufacture",
  //   video: designVideo,
  // },
  {
    label: "Success Stories",
    video: designVideo,
  },
];

export default function EngineeringFlow() {
  const [activeTab, setActiveTab] = useState("design r&d");

  const activeVideo = Videos.find((v) => v.label.toLowerCase() === activeTab);

  return (
    <div className="flex flex-col gap-18">
      <div className="flex gap-15 items-center">
        <h2 className="text-4xl font-semibold capitalize">
          the enginnering flow
        </h2>
        <p>
          <span>
            A problem arrives as a drawing, a sample, a challenge, or a failure.
          </span>
          <br />
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
      <div className="flex max-1440p:flex-wrap gap-8 justify-between items-center min-h-15 w-4/5 max-xl:w-full max-w-368.75 mx-auto">
        {EngineeringFlowTabs.map((tab, index) => {
          const isActive = activeTab == tab.label;
          return (
            <button
              key={index}
              className={`capitalize shadow-[0_0_15px_2px_rgba(0,0,0,0.15)] px-20 1440p:max-2xl:px-15 max-1440p:px-10 py-3 rounded-full cursor-pointer text-xl ${isActive ? "font-bold bg-brand-red text-white" : "text-brand-red"}`}
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
