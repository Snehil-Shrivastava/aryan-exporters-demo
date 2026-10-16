import Image from "next/image";
import gocbg from "@/public/images/gocbg_1.png";
import logo from "@/public/aryan_exporters_logo.svg";
import Link from "next/link";
import { CircleArrowRight } from "lucide-react";

const GroupofCompanies = () => {
  return (
    <div className="my-30 flex rounded-xl bg-[#F1F1F1]">
      <div
        className="flex-[0.25] relative rounded-l-xl p-20"
        style={{
          backgroundImage: "url(/images/gocbg_2.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center right",
        }}
      >
        {/* <Image
          src={gocbg}
          alt="bg"
          className="absolute inset-0 z-1 rounded-l-xl"
        /> */}
        <h2 className="text-4xl font-semibold">Group of Companies</h2>
        <p className="text-sm py-5">
          Aryan Exporters is one of several companies: structure and detail to
          follow
        </p>
      </div>
      <div className="flex-[0.75] flex flex-col px-30">
        <div className="grid grid-cols-14 items-center gap-x-10 py-15 border-b border-b-neutral-400/50">
          <h2 className="opacity-50 text-4xl font-light col-span-2">01</h2>
          <div className="flex items-center gap-5 col-span-6">
            <Image src={logo} alt="" />
            <h2 className="font-mirano text-brand-red uppercase text-xl leading-5.5">
              <span className="font-bold">Aryan Exporters</span>
              <br />
              Pvt Ltd
            </h2>
          </div>
          <p className="col-span-4">Aryan Exporters Pvt Ltd</p>
          <Link
            href={"#"}
            className="col-span-2 opacity-50 flex items-center justify-end"
          >
            <CircleArrowRight strokeWidth={"0.5"} size={48} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GroupofCompanies;
