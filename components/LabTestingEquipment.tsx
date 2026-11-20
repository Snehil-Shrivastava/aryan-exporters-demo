import { LabTestingEquipmentData } from "@/lib/data";
import Image from "next/image";

const LabTestingEquipment = () => {
  const labTestingEquipmentData = LabTestingEquipmentData;
  return (
    <div className="px-10 max-lg:px-4 max-w-[1920px] mx-auto w-full">
      <div className="flex flex-col gap-15">
        <div className="flex flex-col items-start gap-1.5 xl:flex-row xl:items-center xl:gap-10">
          <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold capitalize">
            Equipment
          </h2>
          <p className="lg:flex lg:flex-col py-0 text-xs md:text-sm xl:text-xs 2xl:text-sm text-gray-600">
            <span>What we</span>
            <span>can test</span>
          </p>
        </div>
        <div className="grid grid-cols-3 gap-15">
          {labTestingEquipmentData.map((data, index) => (
            // <div
            //   key={index}
            //   className="bg-black/5 rounded-xl border border-neutral-300 px-8 py-5 flex items-center gap-10"
            // >
            //   <div>
            //     <Image src={data.icon} alt="" />
            //   </div>
            //   <div>
            //     <h4 className="font-bold text-lg mb-1">{data.title}</h4>
            //     <span className="opacity-80 text-sm">{data.description}</span>
            //   </div>
            // </div>
            <div
              key={index}
              className="bg-black/5 rounded-xl border border-neutral-300 px-8 py-5 flex items-center gap-10"
            >
              <div className="relative size-24 shrink-0">
                <Image src={data.icon} alt="" fill className="object-contain" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">{data.title}</h4>
                <span className="opacity-80 text-sm">{data.description}</span>
              </div>
            </div>
          ))}
        </div>
        <p>
          Most of it is computer controlled. What matters more is that the same
          test run twice gives the same answer.
        </p>
      </div>
    </div>
  );
};

export default LabTestingEquipment;
