import { LabTestingAwardsData } from "@/lib/data";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const LabTestingAwards = () => {
  const labTestingAwardsData = LabTestingAwardsData;
  return (
    <div className="bg-[#F5F5F5] my-35 max-lg:my-15">
      <div className="py-10 px-10 max-lg:px-4 max-w-[1920px] mx-auto w-full">
        <div className="flex flex-col items-start gap-1.5 xl:flex-row xl:items-center xl:gap-10">
          <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold capitalize">
            Certifications
          </h2>
          <p className="flex lg:flex-col py-0 text-xs md:text-sm xl:text-xs 2xl:text-sm opacity-80">
            <span>Our certifications, and&nbsp;</span>
            <span>what each one covers</span>
          </p>
        </div>
        <p className="lg:flex lg:flex-col text-xs md:text-sm xl:text-xs 2xl:text-sm opacity-90 py-4">
          We hold three. They cover different things, so they are set out
          separately rather than in a row.
        </p>
        <div className="grid grid-cols-3 max-lg:grid-cols-1 lg:max-xl:grid-cols-2 gap-15 lg:max-xl:gap-6 xl:max-1440p:gap-8 max-lg:gap-6 py-10 max-lg:pt-6">
          {labTestingAwardsData.map((data, index) => (
            <div
              key={index}
              className="bg-white rounded-xl px-6 py-8 flex flex-col items-start"
            >
              <p className="uppercase text-white font-semibold tracking-wider bg-brand-red rounded-md px-4 py-1.5 inline-block">
                {data.tag}
              </p>
              <h3 className="font-bold text-2xl pt-3">{data.title}</h3>
              <span className="block opacity-70 text-sm pt-2">
                {data.description1}
              </span>
              <span className="block opacity-70 text-sm">
                {data.description2}
              </span>
              <p className="font-bold opacity-70 pt-2.5">{data.validity}</p>
              <p className="text-sm opacity-90 py-10">{data.text}</p>
              <Link
                href={data.link}
                className="text-brand-red inline-flex items-center gap-4 border border-neutral-300 rounded-md px-4 py-2.5 font-bold tracking-wider mt-auto"
              >
                <span>Open the certificate</span>
                <ChevronRight className="text-black" size={16} />
              </Link>
            </div>
          ))}
        </div>
        <p className="max-lg:text-sm">
          <b>In plain terms:</b> NABL accreditation belongs to the laboratory
          and applies to the tests in its scope. ISO 9001 and IRIS belong to the
          manufacturing business. They are not the same thing, and we do not
          present them as if they were.
        </p>
      </div>
    </div>
  );
};

export default LabTestingAwards;
