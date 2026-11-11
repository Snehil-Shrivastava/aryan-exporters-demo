import Image from "next/image";
import aryanlogo from "@/public/aryan_exporters_logo.svg";
import liama from "@/public/images/Liama.svg";
import aryanAdvanceTech from "@/public/images/Aryan Advance Technologies Logo.png";

const GroupofCompanies = () => {
  return (
    <div className="my-40 flex flex-col">
      <div className="flex flex-col items-start gap-1.5 xl:flex-row xl:items-center xl:gap-10">
        <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold capitalize">
          Group of Companies
        </h2>
        <p className="lg:flex lg:flex-col py-0 text-xs md:text-sm xl:text-xs 2xl:text-sm text-gray-600">
          <span>Aryan Exporters is one of several companies:&nbsp;</span>
          <span>structure and detail to follow</span>
        </p>
      </div>
      <div className="flex max-lg:flex-col gap-30 py-15 items-center justify-center">
        <div className="flex flex-col items-center gap-10 justify-between lg:max-xl:flex-1">
          <div className="flex items-center gap-5 col-span-6 h-22">
            <Image src={aryanlogo} alt="" className="w-12" />
            <h2 className="font-mirano text-brand-red uppercase text-xl leading-5.5">
              <span className="font-bold">Aryan Exporters</span>
              <br />
              Pvt Ltd
            </h2>
          </div>
        </div>

        <div className="flex flex-col items-center gap-10 justify-between lg:max-xl:flex-1">
          <div className="flex items-center gap-5 col-span-6 relative">
            <Image
              src={aryanAdvanceTech}
              alt=""
              className="w-40 object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-10 justify-between lg:max-xl:flex-1">
          <div className="flex items-center gap-5 col-span-6">
            <Image src={liama} alt="" className="w-80" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupofCompanies;
