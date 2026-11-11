import airSpring from "@/public/images/bogie_air_spring.png";
import slideBearer from "@/public/images/bogie_slide_bearer.png";
import suspensionBush from "@/public/images/bogie_suspension_bush.png";

import profileImg from "@/public/images/ProfilePlaceholder.png";

import isoImg from "@/public/images/ISO 9002 (copy).png";
import irisImg from "@/public/images/Iris 1 (copy).png";
import nablImg from "@/public/images/NABL 1 (copy).png";
import msme2009lImg from "@/public/images/MSME 2009 1 (copy).png";
import msme2010lImg from "@/public/images/MSME 2010 1 (copy).png";

import teknoloji from "@/public/images/teknoloji.png";
import rfcomm from "@/public/images/rf-comm.png";
import ideasunlimited from "@/public/images/ideas-unlimited.png";
import tictag from "@/public/images/tictag.png";
import lanxess from "@/public/images/lanxess.png";
import suda from "@/public/images/suda.png";
import covestro from "@/public/images/covestro.png";
import pamozdi from "@/public/images/pamodzi.png";
import sojitz from "@/public/images/sojitz.png";
import geh from "@/public/images/geh.png";
import iitroorkee from "@/public/images/iit-roorkee.png";

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

export const LeadershipData = [
  {
    name: "Arun Bhatia",
    designation: "Director",
    image: profileImg,
  },
  {
    name: "Manu Bhatia",
    designation: "Director",
    image: profileImg,
  },
  {
    name: "Kathiraman",
    designation: "Director",
    image: profileImg,
  },
  {
    name: "Maan Singh",
    designation: "Development and testing",
    image: profileImg,
  },
  {
    name: "Fatima",
    designation: "Certification, Trade Shows and Press",
    image: profileImg,
  },
];

export const AboutAwardsData = [
  {
    title: "ISO 9001:2015",
    description:
      "DNV, certificate C899464. First certified 18 May 1999. Current validity 18 May 2026 to 17 May 2029.",
    image: isoImg,
  },
  {
    title: "IRIS Certification",
    description:
      "DNV Business Assurance India, register C545422. Valid 4 August 2025 to 3 August 2028. Business category rolling stock.",
    image: irisImg,
  },
  {
    title: "NABL accreditation",
    description:
      "ISO/IEC 17025:2017 for the laboratory division at the works. Certificate NABLT0726UP18835, issued 29 July 2026, valid to 28 July 2030.",
    image: nablImg,
  },
  {
    title: "MSME National Awards 2009",
    description:
      "Ministry of Micro, Small and Medium Enterprises. Special Recognition Award for outstanding entrepreneurship, to Shri Ravi Sood.",
    image: msme2009lImg,
  },
  {
    title: "MSME National Awards 2010",
    description:
      "Ministry of Micro, Small and Medium Enterprises. Special Recognition Award for research and development.",
    image: msme2010lImg,
  },
];

export const Collaborators = [
  {
    img: teknoloji,
  },
  {
    img: rfcomm,
  },
  {
    img: ideasunlimited,
  },
  {
    img: tictag,
  },
  {
    img: lanxess,
  },
  {
    img: suda,
  },
  {
    img: covestro,
  },
  {
    img: pamozdi,
  },
  {
    img: sojitz,
  },
  {
    img: geh,
  },
  {
    img: iitroorkee,
  },
];
