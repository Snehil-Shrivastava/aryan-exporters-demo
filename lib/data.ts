import airSpring from "@/public/images/bogie_air_spring.png";
import slideBearer from "@/public/images/bogie_slide_bearer.png";
import suspensionBush from "@/public/images/bogie_suspension_bush.png";

import profileImg from "@/public/images/ProfilePlaceholder.png";

import isoImg from "@/public/images/ISO 9002 (copy).png";
import irisImg from "@/public/images/Iris 1 (copy).png";
import nablImg from "@/public/images/NABL 1 (copy).png";
import msme2009lImg from "@/public/images/MSME 2009 1 (copy).png";
import msme2010lImg from "@/public/images/MSME 2010 1 (copy).png";

import teknoloji from "@/public/images/collaborators/AHA Teknoloji.png";
import rfcomm from "@/public/images/collaborators/RF-Comm.png";
import ideasunlimited from "@/public/images/collaborators/Ideas Unlimited.png";
import tictag from "@/public/images/collaborators/tictag-logo.webp";
import lanxess from "@/public/images/collaborators/Lanxess.svg";
import suda from "@/public/images/collaborators/Tsuda Industries.gif";
import covestro from "@/public/images/collaborators/Covestro.png";
import pamozdi from "@/public/images/collaborators/Pamoudzi Unique Engineering.png";
import sojitz from "@/public/images/collaborators/Sojitz Corporation.svg";
import geh from "@/public/images/collaborators/Global Energy Harvest.png";
import iitroorkee from "@/public/images/collaborators/IIT Roorkee.png";

import kunwar from "@/public/images/partners/Kunwar Engineers Pvt Ltd.png";
import royalispat from "@/public/images/partners/Royal Ispat Udyog.png";
import sadhuforging from "@/public/images/partners/sadhu forging limited.png";

import banaraslocomotive from "@/public/images/customers/Banaras Locomotive Works.png";
import beml from "@/public/images/customers/BEML.png";
import bhel from "@/public/images/customers/BHEL.png";
import brandalloys from "@/public/images/customers/Brand Alloys Limited.png";
import chitaranjanlocomotive from "@/public/images/customers/Chitaranjan Locomotive Works.png";
import indiandefence from "@/public/images/customers/Indian Defense.png";
import indiannavy from "@/public/images/customers/Indian Navy.png";
import indianrailways from "@/public/images/customers/Indian Railways.jpg";
import integratedcoachfactory from "@/public/images/customers/Integrated Coach Factory.png";
import jupiterwagons from "@/public/images/customers/Jupiter Wagons.png";
import lnt from "@/public/images/customers/L&T.png";
import mazagoandock from "@/public/images/customers/Mazagoan Dock.webp";
import moderncoachfactory from "@/public/images/customers/Modern Coach Factory.png";
import nalco from "@/public/images/customers/NALCO.png";
import patialalocomotiveworks from "@/public/images/customers/Patiala Locomotive Works.png";
import railcoachfactory from "@/public/images/customers/Rail Coach Factory.png";
import rdso from "@/public/images/customers/RDSO Logo.png";
import rdso2 from "@/public/images/customers/RDSO.png";
import texmacorail from "@/public/images/customers/Texmaco Rail and Engineering.png";
import titagarhrailsystem from "@/public/images/customers/Titagarh Rail System.png";

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

export const Partners = [
  {
    img: covestro,
  },
  {
    img: kunwar,
  },
  {
    img: lanxess,
  },
  {
    img: royalispat,
  },
  {
    img: sadhuforging,
  },
];

export const Customers = [
  {
    img: banaraslocomotive,
  },
  {
    img: beml,
  },
  {
    img: bhel,
  },
  {
    img: brandalloys,
  },
  {
    img: chitaranjanlocomotive,
  },
  {
    img: indiandefence,
  },
  {
    img: indiannavy,
  },
  {
    img: indianrailways,
  },
  {
    img: integratedcoachfactory,
  },
  {
    img: jupiterwagons,
  },
  {
    img: lnt,
  },
  {
    img: mazagoandock,
  },
  {
    img: moderncoachfactory,
  },
  {
    img: nalco,
  },
  {
    img: patialalocomotiveworks,
  },
  {
    img: railcoachfactory,
  },
  {
    img: rdso,
  },
  {
    img: rdso2,
  },
  {
    img: texmacorail,
  },
  {
    img: titagarhrailsystem,
  },
];

export const OurPartnersLogos = {
  customers: [
    {
      img: banaraslocomotive,
      name: "banaraslocomotive",
    },
    {
      img: beml,
      name: "beml",
    },
    {
      img: bhel,
      name: "bhel",
    },
    {
      img: brandalloys,
      name: "brandalloys",
    },
    {
      img: chitaranjanlocomotive,
      name: "chitaranjanlocomotive",
    },
    {
      img: indiandefence,
      name: "indiandefence",
    },
    {
      img: indiannavy,
      name: "indiannavy",
    },
    {
      img: indianrailways,
      name: "indianrailways",
    },
    {
      img: integratedcoachfactory,
      name: "integratedcoachfactory",
    },
    {
      img: jupiterwagons,
      name: "jupiterwagons",
    },
    {
      img: lnt,
      name: "lnt",
    },
    {
      img: mazagoandock,
      name: "mazagoandock",
    },
    {
      img: moderncoachfactory,
      name: "moderncoachfactory",
    },
    {
      img: nalco,
      name: "nalco",
    },
    {
      img: patialalocomotiveworks,
      name: "patialalocomotiveworks",
    },
    {
      img: railcoachfactory,
      name: "railcoachfactory",
    },
    {
      img: rdso,
      name: "rdso",
    },
    {
      img: rdso2,
      name: "rdso2",
    },
    {
      img: texmacorail,
      name: "texmacorail",
    },
    {
      img: titagarhrailsystem,
      name: "titagarhrailsystem",
    },
  ],
  technology: [
    {
      img: covestro,
      name: "covestro",
    },
    {
      img: kunwar,
      name: "kunwar",
    },
    {
      img: lanxess,
      name: "lanxess",
    },
    {
      img: royalispat,
      name: "royalispat",
    },
    {
      img: sadhuforging,
      name: "sadhuforging",
    },
  ],
  collaborators: [
    {
      img: teknoloji,
      name: "teknoloji",
    },
    {
      img: rfcomm,
      name: "rfcomm",
    },
    {
      img: ideasunlimited,
      name: "ideasunlimited",
    },
    {
      img: tictag,
      name: "tictag",
    },
    {
      img: lanxess,
      name: "lanxess",
    },
    {
      img: suda,
      name: "suda",
    },
    {
      img: covestro,
      name: "covestro",
    },
    {
      img: pamozdi,
      name: "pamozdi",
    },
    {
      img: sojitz,
      name: "sojitz",
    },
    {
      img: geh,
      name: "geh",
    },
    {
      img: iitroorkee,
      name: "iitroorkee",
    },
  ],
};
