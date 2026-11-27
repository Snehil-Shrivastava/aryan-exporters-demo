import { CareersWork as CareersWorkData } from "@/lib/data";
import Image from "next/image";

const CareersWork = () => {
  const careersWork = CareersWorkData;
  return (
    <div className="px-10 max-lg:px-4 max-w-[1920px] mx-auto w-full pt-15 pb-15">
      <div className="flex flex-col gap-10 max-lg:gap-6">
        <div className="flex flex-col items-start gap-1.5 xl:flex-row xl:items-center xl:gap-10">
          <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold capitalize">
            The Work
          </h2>
          <p className="flex xl:flex-col py-0 text-xs md:text-sm xl:text-xs 2xl:text-sm text-gray-600">
            <span>The four&nbsp;</span>
            <span>kinds of work here</span>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 max-lg:gap-12">
          {careersWork.map((data, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-neutral-300 px-8 py-5 flex max-lg:flex-col items-center max-lg:items-start gap-10"
            >
              <div className="relative size-24 max-lg:size-16 lg:max-xl:size-12 shrink-0">
                <Image src={data.icon} alt="" fill className="object-contain" />
              </div>
              <div>
                <h4 className="font-bold text-lg max-lg:text-sm mb-1 text-brand-red">
                  {data.title}
                </h4>
                <span className="opacity-80 text-sm max-lg:text-[10px]">
                  {data.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareersWork;
