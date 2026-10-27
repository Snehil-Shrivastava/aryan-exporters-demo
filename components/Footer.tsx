import Image from "next/image";
import logo from "@/public/aryan_exporters_logo.svg";

import linkedin from "@/public/images/linkedin.svg";
import whatsapp from "@/public/images/whatsapp.svg";

const Footer = () => {
  return (
    <div className="flex flex-col px-10 pt-5 pb-8 font-montserrat max-w-[1920px] mx-auto">
      <div className="flex gap-15 pb-15">
        <div className="flex flex-col flex-[0.25] gap-15">
          <div className="relative flex gap-5 items-center">
            <Image src={logo} alt="" className="w-10" />
            <h3 className="text-brand-blue uppercase text-sm flex flex-col font-mirano leading-4">
              <span className="font-bold">aryan exporters</span>
              <span>pvt ltd.</span>
            </h3>
          </div>
          <p className="font-montserrat 1440p:max-2xl:text-base max-1440p:text-sm">
            We design, test and build suspension, electrical, power and embedded
            systems in our own works at Lucknow. Proven on Indian Railways since
            1983, engineering now for rail, defence, infrastructure and
            industry.
          </p>
        </div>
        <div className="text-lg flex-[0.75] flex 2xl:gap-40 1440p:max-2xl:gap-25 max-1440p:gap-15 1440p:max-2xl:text-base max-1440p:text-sm">
          <div className="flex flex-col gap-15">
            <h3 className="font-bold tracking-wide">Solutions</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <span>By application</span>
              </li>
              <li>
                <span>By challenges</span>
              </li>
              <li>
                <span>Capabilities</span>
              </li>
              <li>
                <span>How we work</span>
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
                <span className="capitalize">certifications</span>
              </li>
              <li>
                <span className="capitalize">responsibility</span>
              </li>
              <li>
                <span className="capitalize">careers</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-15">
            <h3 className="font-bold tracking-wide">Contact</h3>
            <div className="flex flex-col gap-4">
              <p>Mob: +91 731-800-1900, 0522 2437456</p>
              <p>Mail: mail@aryanexp.com</p>
              <div className="flex gap-[3vw]">
                <div className="flex flex-col">
                  <p className="font-medium">Registered Office & Works</p>
                  <p>B-1, Industrial Area,</p>
                  <p>Amausi, Lucknow-226008, India</p>
                </div>
                <div className="flex flex-col">
                  <p className="font-medium">Corporate Office</p>
                  <p>T-31, Green Park Main,</p>
                  <p>New Delhi 110016, India</p>
                </div>
              </div>
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
        &copy; &nbsp; Aryan Exporters Private Limited
      </p>
    </div>
  );
};

export default Footer;
