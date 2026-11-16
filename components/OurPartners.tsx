"use client";

import { useState } from "react";
import Image from "next/image";

import { OurPartnersLogos } from "@/lib/data";

// Define the tabs
const TABS = [
  { id: "customers", label: "Customers" },
  { id: "technology", label: "Technology Partners" },
  { id: "collaborators", label: "Collaborators" },
];

export default function OurPartners() {
  const [activeTab, setActiveTab] =
    useState<keyof typeof OurPartnersLogos>("customers");
  const partnerLogos = OurPartnersLogos;

  const REFERENCE_DURATION = 40;
  const referenceCount = partnerLogos.collaborators.length;
  const scrollDuration =
    (partnerLogos[activeTab].length / referenceCount) * REFERENCE_DURATION;

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
        {/* <div className="flex w-max animate-scroll hover:[animation-play-state:paused]"> */}
        <div
          className="flex w-max animate-scroll hover:[animation-play-state:paused]"
          style={{ animationDuration: `${scrollDuration}s` }}
        >
          {[...partnerLogos[activeTab], ...partnerLogos[activeTab]].map(
            (logo, index) => {
              const isDuplicate = index >= partnerLogos[activeTab].length;

              return (
                // <div
                //   key={`${logo.name}-${index}`}
                //   aria-hidden={isDuplicate}
                //   className="group relative flex w-45 sm:w-55 lg:w-[12.5vw] max-h-38 shrink-0 aspect-3/2 max-sm:aspect-3.5/2 sm:max-lg:aspect-2.5/1.5 items-center justify-center border-b-5 border-r-5 border-neutral-300 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md max-xl:p-4 mr-4 sm:mr-6"
                // >
                //   <div className="relative h-full w-full">
                //     <Image
                //       src={logo.img}
                //       alt={`${logo.name} logo`}
                //       className="object-contain filter transition-all duration-300"
                //       fill
                //       sizes="(min-width: 1024px) 15vw, (min-width: 640px) 220px, 180px"
                //     />
                //   </div>
                // </div>
                <div
                  key={`${logo.name}-${index}`}
                  aria-hidden={isDuplicate}
                  className="group relative flex w-45 sm:w-55 lg:w-[12.5vw] max-h-38 shrink-0 aspect-3/2 max-sm:aspect-3.5/2 sm:max-lg:aspect-2.5/1.5 items-center justify-center border-b-5 border-r-5 border-neutral-300 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md max-xl:p-3 mr-4 sm:mr-6"
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={logo.img}
                      alt={`${logo.name} logo`}
                      className="object-contain filter transition-all duration-300"
                      fill
                      sizes="(min-width: 1024px) 15vw, (min-width: 640px) 220px, 180px"
                    />
                  </div>
                </div>
              );
            },
          )}
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
              onClick={() =>
                setActiveTab(tab.id as keyof typeof OurPartnersLogos)
              }
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
