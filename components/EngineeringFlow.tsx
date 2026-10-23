"use client";

import Video from "next-video";
import placeholderVideo from "@/videos/placeholder_video.mp4";
import designVideo from "@/videos/sample-video.mp4";
import { useState } from "react";
import Minimal from "player.style/minimal/react";

const EngineeringFlowTabs = [
  { label: "design" },
  { label: "develop" },
  { label: "test" },
  { label: "manufacture" },
  { label: "support" },
];

const Videos = [
  {
    label: "Design",
    video: placeholderVideo,
  },
  {
    label: "Develop",
    video: designVideo,
  },
  {
    label: "Test",
    video: designVideo,
  },
  {
    label: "Manufacture",
    video: designVideo,
  },
  {
    label: "Support",
    video: designVideo,
  },
];

export default function EngineeringFlow() {
  const [activeTab, setActiveTab] = useState("design");

  const activeVideo = Videos.find((v) => v.label.toLowerCase() === activeTab);

  return (
    <div className="flex flex-col gap-18">
      <div className="flex gap-15 items-center">
        <h2 className="text-4xl font-semibold capitalize">
          the enginnering flow
        </h2>
        <p>
          <span>Five capabilities,</span>
          <br />
          <span>One enginnering team</span>
        </p>
      </div>
      <div>
        {activeVideo && (
          <Video
            src={activeVideo.video}
            key={activeVideo.label}
            theme={Minimal}
            style={{
              width: "80%",
              maxWidth: "1475px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        )}
      </div>
      <div className="flex gap-8 justify-between items-center min-h-15">
        {EngineeringFlowTabs.map((tab, index) => {
          const isActive = activeTab == tab.label;
          return (
            <button
              key={index}
              className={`capitalize shadow-[0_0_15px_2px_rgba(0,0,0,0.15)] px-20 py-3 rounded-full cursor-pointer text-xl ${isActive ? "font-bold bg-brand-red text-white" : "text-brand-red"}`}
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
