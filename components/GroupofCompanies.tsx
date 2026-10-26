import Image from "next/image";
import aryanlogo from "@/public/aryan_exporters_logo.svg";
import medrazlogo from "@/public/images/medraz.svg";
import steelIndustrieslogo from "@/public/images/steel_industries.png";
import Link from "next/link";
import { CircleArrowRight } from "lucide-react";

const GroupofCompanies = () => {
  return (
    <div className="my-40 flex flex-col">
      <div className="relative flex items-center gap-15">
        <h2 className="text-4xl font-semibold">Group of Companies</h2>
        <p className="text-sm py-5 flex flex-col">
          <span>Aryan Exporters is one of several companies:</span>
          <span>structure and detail to follow</span>
        </p>
      </div>
      <div className="flex gap-30 py-15 items-center justify-center">
        <div className="flex flex-col items-center gap-10 justify-between">
          <div className="flex items-center gap-5 col-span-6 h-22">
            <Image src={aryanlogo} alt="" className="w-12" />
            <h2 className="font-mirano text-brand-red uppercase text-xl leading-5.5">
              <span className="font-bold">Aryan Exporters</span>
              <br />
              Pvt Ltd
            </h2>
          </div>
          <div className="flex items-center gap-6 rounded-full shadow-[0_0_15px_2px_rgba(0,0,0,0.15)] px-8 py-2.5">
            <p className="col-span-4">Aryan Exporters Pvt Ltd</p>
            <Link
              href={"#"}
              className="col-span-2 opacity-50 flex items-center justify-end"
            >
              <CircleArrowRight strokeWidth={"0.5"} size={48} />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center gap-10 justify-between">
          <div className="flex items-center gap-5 col-span-6">
            <Image src={medrazlogo} alt="" className="h-22" />
          </div>
          <div className="flex items-center gap-6 rounded-full shadow-[0_0_15px_2px_rgba(0,0,0,0.15)] px-8 py-2.5">
            <p className="col-span-4">Medarz Ingenieria</p>
            <Link
              href={"#"}
              className="col-span-2 opacity-50 flex items-center justify-end"
            >
              <CircleArrowRight strokeWidth={"0.5"} size={48} />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center gap-10 justify-between">
          <div className="flex items-center gap-5 col-span-6 relative">
            <Image
              src={steelIndustrieslogo}
              alt=""
              className="h-22 object-contain w-85.5"
            />
          </div>
          <div className="flex items-center gap-6 rounded-full shadow-[0_0_15px_2px_rgba(0,0,0,0.15)] px-8 py-2.5">
            <p className="col-span-4">Steel Industries</p>
            <Link
              href={"#"}
              className="col-span-2 opacity-50 flex items-center justify-end"
            >
              <CircleArrowRight strokeWidth={"0.5"} size={48} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupofCompanies;
