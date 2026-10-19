import Image from "next/image";
import logo from "@/public/aryan_exporters_logo.svg";

import linkedin from "@/public/images/linkedin.svg";
import whatsapp from "@/public/images/whatsapp.svg";

const Footer = () => {
  return (
    <div className="flex flex-col bg-[#F1F1F1] px-30 max-2xl:px-15 pt-15 pb-8 font-montserrat">
      <div className="flex gap-15 pb-15">
        <div className="flex flex-col flex-[0.25] gap-15">
          <div className="relative flex gap-5 items-center">
            <Image src={logo} alt="" />
            <h3 className="text-brand-blue uppercase text-lg flex flex-col font-mirano">
              <span className="font-bold leading-5">aryan exporters</span>
              <span className="leading-5">pvt ltd.</span>
            </h3>
          </div>
          <p className="font-montserrat">
            We design, develop and test polymer parts in-house, then manufacture
            them at scale. Proven on the Indian Railways, engineering now for
            rail, defence, infrastructure and industry.
          </p>
        </div>
        <div className="text-lg flex-[0.75] flex 2xl:gap-40 1440p:max-2xl:gap-25 max-1440p:gap-15">
          <div className="flex flex-col gap-15">
            <h3 className="font-bold tracking-wide">Solutions</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <span className="capitalize">by application</span>
              </li>
              <li>
                <span className="capitalize">by challenges</span>
              </li>
              <li>
                <span className="capitalize">capabilities</span>
              </li>
              <li>
                <span className="capitalize">how we work</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-15">
            <h3 className="font-bold tracking-wide">Company</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <span className="capitalize">about</span>
              </li>
              <li>
                <span className="capitalize">projects</span>
              </li>
              <li>
                <span className="capitalize">resources</span>
              </li>
              <li>
                <span className="capitalize">careers</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-15">
            <h3 className="font-bold tracking-wide">Contact</h3>
            <div className="flex flex-col gap-4">
              <p>Mob: +91 731-800-1900, Mail: mail@aryanexp.com</p>
              <p>Registered Office & Works Office</p>
              <p>B-1, Industrial Area,</p>
              <p>Amausi, Lucknow-226008</p>
              <div className="flex gap-8">
                <Image src={linkedin} alt="linkedin" />
                <Image src={whatsapp} alt="whatsapp" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="opacity-40" />
      <p className="text-center pt-8">
        &copy; &nbsp; 2026-2027 Aryan Exporters Private Limited
      </p>
    </div>
  );
};

export default Footer;
