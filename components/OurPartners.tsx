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
// Replace the 'src' paths with your actual logo image paths.
const LOGOS = {
  customers: [
    {
      name: "Ballistic Dummy Lab",
      src: ballistic,
    },
    {
      name: "Liva",
      src: liva,
    },
    {
      name: "Aven",
      src: aven,
    },
    {
      name: "Vertex Kapital LLC",
      src: vertex,
    },
  ],
  technology: [
    {
      name: "Tech Corp",
      src: liva,
    },
    {
      name: "Innovate Inc",
      src: vertex,
    },
    {
      name: "Future Systems",
      src: ballistic,
    },
  ],
  collaborators: [
    {
      name: "Global Reach",
      src: aven,
    },
    {
      name: "Partner One",
      src: ballistic,
    },
    {
      name: "Joint Ventures",
      src: liva,
    },
    {
      name: "Synergy Group",
      src: vertex,
    },
  ],
};

export default function OurPartners() {
  const [activeTab, setActiveTab] = useState<keyof typeof LOGOS>("customers");

  return (
    <div className="flex flex-col gap-15 py-10 max-1440p:py-0">
      {/* Header Area */}
      <div className="flex gap-10 items-center">
        <h2 className="text-4xl font-semibold">Our Partners</h2>
        <p className="py-2 text-sm text-gray-600 flex flex-col">
          <span>
            The operators and builders who buy from us, the material companies
            behind our compounds, and the people we develop with.
          </span>
          {/* <span>Click any to know more.</span> */}
        </p>
      </div>
      {/* Logos Grid */}
      {/* <div
        key={activeTab}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 animate-fade-in"
      > */}
      <div
        key={activeTab}
        className="flex gap-6 animate-fade-in justify-center"
      >
        {LOGOS[activeTab].map((logo) => (
          <div
            key={logo.name}
            className="group relative flex aspect-2.5/1 items-center justify-center bg-white p-8 transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-b-5 border-r-5 border-neutral-300 flex-1 max-w-110.5"
          >
            <div className="relative w-7/10 h-full">
              <Image
                src={logo.src}
                alt={`${logo.name} logo`}
                className="object-contain filter transition-all duration-300"
                fill
              />
            </div>
          </div>
        ))}
      </div>

      {/* Tab Switcher */}
      <div
        role="tablist"
        aria-label="Partner categories"
        className="flex items-center justify-center gap-25"
      >
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <div key={tab.id}>
              <button
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.id as keyof typeof LOGOS)}
                className={`text-sm cursor-pointer ${isActive ? "font-bold" : "opacity-50"}`}
              >
                {tab.label}
              </button>
            </div>
          );
        })}
      </div>

      {/* Inline style for the fade-in animation. 
          You can move this to your global CSS or tailwind.config.js if you prefer. */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `,
        }}
      />
    </div>
  );
}
