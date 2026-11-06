"use client";

import { useState } from "react";

// Define the structure of the data
const CATEGORIES = [
  {
    id: "conventional-coach",
    label: "Conventional Coach (ICF)",
    items: [
      "Air Spring Assembly, EMU, DMU and Mainline",
      "140 kN Air Spring",
      "160 kN Air Spring",
      "180 kN Air Spring",
    ],
  },
  {
    id: "lhb-fiat",
    label: "LHB and Fiat Bogie",
    items: [
      "Silent Block for Roll Link",
      "Elastic Connection for Fiat Bogies",
      "Axle Box Pivot Bush",
      "Ball Joint for Traction Lever",
    ],
  },
  {
    id: "freight-wagon",
    label: "Freight Wagon",
    items: [
      "Constant Contact Side Bearer pad, 22 t",
      "Constant Contact Side Bearer pad, 25 t",
      "Elastomeric Pad",
      "Modified design PU Elastomeric pad",
    ],
  },
  {
    id: "locomotive",
    label: "Locomotive",
    items: [
      "Motor Suspension Bush",
      "Motor Suspension Pad",
      "Long Life Side Buffer, Locomotives",
      "Rubber Spring, EMD",
    ],
  },
  {
    id: "metro",
    label: "Metro",
    items: ["Sealing Cap", "Rubber Buffer", "Rubber Snubber"],
  },
  {
    id: "track",
    label: "Track",
    items: ["Track Under-Rail Pad"],
  },
];

export default function BogieProductCatalog() {
  // State to hold the currently selected filter IDs
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  // Toggle logic: Adds if not present, removes if present
  const toggleFilter = (id: string) => {
    setSelectedFilters((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id],
    );
  };

  // If no filters are selected, show all. Otherwise, filter the categories.
  const visibleCategories =
    selectedFilters.length === 0
      ? CATEGORIES
      : CATEGORIES.filter((cat) => selectedFilters.includes(cat.id));

  return (
    <div className="flex flex-col gap-20 w-full py-10">
      {/* Top Filter Bar */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6">
        {/* Filter Pills */}
        <div className="flex flex-wrap gap-3">
          {CATEGORIES.map((cat) => {
            const isActive = selectedFilters.includes(cat.id);
            return (
              <button
                key={cat.id}
                onClick={() => toggleFilter(cat.id)}
                className={`px-4 md:px-5 py-2 rounded-full border text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-brand-red text-white border-brand-red"
                    : "bg-brand-red/10 text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* "All Selected" State/Button */}
        <button
          onClick={() => setSelectedFilters([])}
          className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 shrink-0 ${
            selectedFilters.length === 0
              ? "bg-brand-red text-white"
              : "bg-gray-100 text-gray-500 hover:bg-gray-200"
          }`}
        >
          All Selected
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col gap-25">
        {visibleCategories.map((category) => (
          <div key={category.id} className="flex flex-col">
            {/* Category Header */}
            <div className="flex items-end gap-8 pb-4 mb-6">
              <h2 className="text-xl md:text-2xl text-neutral-500 font-semibold">
                {category.label}
              </h2>
              <hr className="flex-1 border-gray-200" />
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
              {category.items.map((item, index) => (
                <div key={index} className="flex flex-col group cursor-pointer">
                  {/* Image Placeholder */}
                  <div className="w-full aspect-4/3 bg-[#f3f4f6] rounded-lg border border-neutral-300 transition-shadow duration-300 group-hover:shadow-md"></div>

                  {/* Item Title */}
                  <h3 className="mt-4 text-sm md:text-base font-semibold text-gray-900 leading-snug">
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
