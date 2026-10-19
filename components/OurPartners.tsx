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
    <section className="w-full py-10 max-1440p:py-0">
      <div>
        {/* Header & Tabs Area */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          {/* Text Content */}
          <div className="max-w-md">
            <p className="text-sm">Our</p>
            <h2 className="text-4xl font-semibold">Partners</h2>
            <p className="py-2 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          {/* Tab Switcher */}
          <div
            role="tablist"
            aria-label="Partner categories"
            className="flex items-center rounded-lg bg-[#f4e8e8] p-1.5 shadow-inner"
          >
            {TABS.map((tab, index) => {
              const isActive = activeTab === tab.id;

              return (
                <div key={tab.id} className="flex items-center">
                  {/* Separator (only between tabs, and hides if one is active) */}
                  {index > 0 && <div className="h-5 w-px bg-brand-red/30" />}

                  <button
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTab(tab.id as keyof typeof LOGOS)}
                    className={`px-4 py-2.5 md:px-6 md:py-3 rounded-md text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-brand-red text-white shadow-md"
                        : "text-brand-red hover:bg-brand-red/5"
                    }`}
                  >
                    {tab.label}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Logos Grid */}
        {/* We use a key on the wrapper to trigger a CSS animation when the tab changes */}
        <div
          key={activeTab}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 animate-fade-in"
        >
          {LOGOS[activeTab].map((logo) => (
            <div
              key={logo.name}
              className="group relative flex aspect-2.5/1 items-center justify-center rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              {/* Note: I am using a standard img tag here for the placeholders. 
                  If you are using local assets, use the Next.js <Image> component instead. */}
              <div className="relative w-full h-full">
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  className="max-h-full max-w-full object-contain filter transition-all duration-300"
                  fill
                />
              </div>
            </div>
          ))}
        </div>
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
    </section>
  );
}
