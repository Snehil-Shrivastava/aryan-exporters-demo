import Image from "next/image";

import aryanExportersLogo from "@/public/aryan_exporters_logo.svg";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const navLinks = [
  {
    label: "solutions",
    link: "",
  },
  {
    label: "capabilities",
    link: "",
  },
  {
    label: "how we work",
    link: "",
  },
  {
    label: "products",
    link: "",
  },
  {
    label: "projects",
    link: "",
  },
  {
    label: "about",
    link: "",
  },
];

const Navbar = () => {
  return (
    <nav className="flex fixed top-0 left-0 right-0 z-99 bg-white">
      <div className="flex items-center gap-4 font-bold flex-[0.3] text-brand-blue py-6 max-1440p:py-3.5 pl-15 max-1440p:pl-8">
        <Image
          src={aryanExportersLogo}
          alt="aryan exporters pvt ltd"
          className="w-8"
        />
        <span className="font-mirano uppercase max-1440p:text-sm">
          Aryan Exporters Pvt Ltd
        </span>
      </div>
      <div className="flex-[0.7] flex justify-between items-stretch">
        <ul className="flex justify-around items-center font-semibold text-xs max-1440p:text-[10px] opacity-65 flex-1">
          {navLinks.map((nav, index) => (
            <Link href={nav.link} key={index} className="uppercase">
              {nav.label}
            </Link>
          ))}
        </ul>
        <button className="bg-brand-red text-white font-bold flex gap-5 max-1440p:gap-2.5 items-center uppercase px-10 max-1440p:px-5">
          <p className="flex flex-col text-start max-1440p:text-sm">
            <span>discuss</span>
            <span>a challenge</span>
          </p>
          <ArrowUpRight size={38} strokeWidth={1.5} className="max-1440p:w-8" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
