import Image from "next/image";
import labTestingHeader from "@/public/images/lab-testing-header.png";

const LabTestingHeader = () => {
  return (
    <div className="flex gap-15 mb-25 max-md:mb-0">
      <div className="flex-1 max-1440p:flex-[0.75] max-xl:flex-1 flex flex-col gap-0 max-lg:gap-0 max-1440p:gap-6 pt-15 max-1440p:pt-1">
        <div>
          <p className="text-2xl max-lg:text-lg font-medium mb-2">
            Lab and Testing
          </p>
          <h1 className="max-lg:text-3xl lg:max-1440p:text-5xl 1440p:text-6xl font-bold text-brand-red 1440p:leading-16">
            Our laboratory is NABL accredited
          </h1>
          <div className="overflow-hidden rounded-xl xl:hidden max-lg:mt-5 lg:max-xl:mt-8">
            <Image src={labTestingHeader} alt="" />
          </div>
        </div>
        <div>
          <p className="leading-relaxed mt-6 text-lg max-lg:text-sm">
            Aryan Exporters Private Limited (Lab Division) is accredited by NABL
            to ISO/IEC 17025:2017. That is the international standard for the
            competence of testing laboratories.
          </p>
          <p className="leading-relaxed mt-6 text-lg max-lg:text-sm">
            Our certificate number is NABLT0726UP18835. It was issued on 29 July
            2026 and runs to 28 July 2030.
          </p>
          <p className="leading-relaxed mt-6 text-lg max-lg:text-sm">
            The accreditation covers testing at our works at B-1, Industrial
            Area, Amausi, Lucknow. It is held by the laboratory. It is not a
            certificate for the factory.
          </p>
          <p className="leading-relaxed mt-6 text-lg max-lg:text-sm">
            The laboratory does two jobs. It tests what we make, before any of
            it is released. And it tests for outside customers who need rubber,
            polyurethane or polymer material and parts tested.
          </p>
        </div>
      </div>
      <div className="flex-1 overflow-hidden rounded-xl max-xl:hidden aspect-3/2">
        <Image src={labTestingHeader} alt="" />
      </div>
    </div>
  );
};

export default LabTestingHeader;
