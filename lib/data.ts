import airSpring from "@/public/images/bogie_air_spring.png";
import slideBearer from "@/public/images/bogie_slide_bearer.png";
import suspensionBush from "@/public/images/bogie_suspension_bush.png";

export const DefenceProducts = [
  {
    name: "Naval anti-vibration pads",
    label: "Developed for the Indian Navy at Visakhapatnam.",
    image: airSpring,
  },
  {
    name: "Sandwich mounting",
    label:
      "Alternating rubber and steel: high vertical stiffness with low shear stiffness, which no single-layer mount can do.",
    image: slideBearer,
  },
];

export const DefenceCategories = [
  {
    id: "mounting-and-isolation",
    label: "Mounting and isolation",
    items: ["Naval anti-vibration pads", "Shock mounts", "Sandwich mounting"],
  },
  {
    id: "sealing-and-ducting",
    label: "Sealing and ducting",
    items: ["Bellows and ducts, aramid and silicone"],
  },
];

export const ElectricalComponentsCategories = [
  {
    id: "cable-entry-and-protection",
    label: "Cable entry and protection",
    items: ["Grommets"],
  },
];

export const EngineeringKeyProducts = [
  {
    name: "POT-PTFE bearings",
    label:
      "Confined elastomer with a PTFE sliding surface. Carries very high load while letting the deck rotate and slide.",
    image: airSpring,
  },
  {
    name: "Conveyor pulley polyrim",
    label:
      "One of ours runs 14.6 kilometres on a NALCO conveyor, carrying bauxite from the mine to the plant.",
    image: slideBearer,
  },
  {
    name: "Long life rice rollers",
    label:
      "A consumable by nature, so the whole argument is how many tonnes it gets through before it is changed.",
    image: suspensionBush,
  },
];

export const EngineeringProductsCategories = [
  {
    id: "bridges-and-structures",
    label: "Bridges and structures",
    items: ["POT-PTFE bearings", "Elastomeric bearings"],
  },
  {
    id: "conveyor-and-process",
    label: "Conveyor and process",
    items: [
      "Conveyor pulley polyrim",
      "Long life rice rollers",
      "Polyurethane rods",
      "Polyurethane printing rollers",
    ],
  },
  {
    id: "automotive",
    label: "Automotive",
    items: ["Automotive rubber-to-metal parts"],
  },
];
