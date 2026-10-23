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
    <nav className="flex fixed top-0 left-0 right-0 z-10 bg-white">
      <div className="flex items-center gap-4 font-bold flex-[0.3] text-brand-blue py-6 pl-15">
        <Image
          src={aryanExportersLogo}
          alt="aryan exporters pvt ltd"
          className="w-8"
        />
        <span className="font-mirano uppercase">Aryan Exporters Pvt Ltd</span>
      </div>
      <div className="flex-[0.7] flex justify-between items-stretch">
        <ul className="flex justify-around items-center font-semibold text-xs opacity-65 flex-1">
          {navLinks.map((nav, index) => (
            <Link href={nav.link} key={index} className="uppercase">
              {nav.label}
            </Link>
          ))}
        </ul>
        <button className="bg-brand-red text-white font-bold flex gap-5 items-center uppercase px-10">
          <p className="flex flex-col text-start">
            <span>discuss</span>
            <span>a challenge</span>
          </p>
          <ArrowUpRight size={38} strokeWidth={1.5} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
