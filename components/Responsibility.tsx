import Image from "next/image";
import environment from "@/public/images/environment.png";
import healthcare from "@/public/images/healthcare.png";

const Responsibility = () => {
  return (
    <div>
      <div className="flex gap-15 items-center">
        <h2 className="text-4xl font-semibold">Responsibility</h2>
        <p>
          <span>
            At Aryan Exporters we believe in conserving this very environment
            that provides for us, and healthcare.
          </span>
          <br />
          <span>
            A holistic approach of living a simple life with high thinking.
          </span>
        </p>
      </div>
      <div className="flex max-lg:flex-col max-xl:flex-wrap gap-40 max-xl:gap-20 py-10">
        <div className="flex-1">
          {/* <div className="relative 1440p:h-100 1440p:w-150 w-100 h-80"> */}
          <div className="relative w-full aspect-12/6">
            <Image
              src={environment}
              alt="environment"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-lg py-6">
            <h3 className="font-bold text-2xl">Environment</h3>
            <p>
              A green campus at the works. The company also supports Save Soil,
              the Conscious Planet movement, across the workforce.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative w-full aspect-12/6">
            <Image
              src={healthcare}
              alt="healthcare"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-lg py-6">
            <h3 className="font-bold text-2xl">Community and healthcare</h3>
            <p>
              A charitable clinic run by the company gives free consultation and
              medicine to anyone who needs it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Responsibility;
