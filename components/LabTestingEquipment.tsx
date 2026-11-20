import { LabTestingEquipmentData } from "@/lib/data";
import Image from "next/image";

const LabTestingEquipment = () => {
  const labTestingEquipmentData = LabTestingEquipmentData;
  return (
    <div className="px-10 max-lg:px-4 max-w-[1920px] mx-auto w-full">
      <div className="flex flex-col gap-15 max-lg:gap-6">
        <div className="flex flex-col items-start gap-1.5 xl:flex-row xl:items-center xl:gap-10">
          <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold capitalize">
            Equipment
          </h2>
          <p className="lg:flex lg:flex-col py-0 text-xs md:text-sm xl:text-xs 2xl:text-sm text-gray-600">
            <span>What we </span>
            <span>can test</span>
          </p>
        </div>
        <div className="grid grid-cols-3 max-lg:grid-cols-1 lg:max-xl:grid-cols-2 gap-15 max-lg:gap-6 xl:max-1440p:gap-8">
          {labTestingEquipmentData.map((data, index) => (
            <div
              key={index}
              className="bg-black/5 rounded-xl border border-neutral-300 px-8 py-5 flex items-center gap-10"
            >
              <div className="relative size-24 max-lg:size-10 lg:max-xl:size-12 shrink-0">
                <Image src={data.icon} alt="" fill className="object-contain" />
              </div>
              <div>
                <h4 className="font-bold text-lg max-lg:text-sm mb-1">
                  {data.title}
                </h4>
                <span className="opacity-80 text-sm max-lg:text-[10px]">
                  {data.description}
                </span>
              </div>
            </div>
          ))}
        </div>
        <p className="max-lg:text-sm">
          Most of it is computer controlled. What matters more is that the same
          test run twice gives the same answer.
        </p>
      </div>
    </div>
  );
};

export default LabTestingEquipment;
