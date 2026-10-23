import Image from "next/image";
import environment from "@/public/images/environment.png";
import healthcare from "@/public/images/healthcare.png";

const Responsibility = () => {
  return (
    <div>
      <div className="flex gap-15 items-center">
        <h2 className="text-4xl font-semibold">Responsibility</h2>
        <p>
          <span>Aryan Exporters is one of several comapanies:</span>
          <br />
          <span>structure and detail to follow</span>
        </p>
      </div>
      <div className="flex max-xl:flex-col max-xl:flex-wrap gap-40 max-xl:gap-20 py-10">
        <div>
          <div className="relative 1440p:h-100 1440p:w-150 w-100 h-80">
            <Image
              src={environment}
              alt="environment"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-lg py-6">
            <h3 className="font-bold text-2xl">Environment</h3>
            <p>Green campus at the works.</p>
          </div>
        </div>
        <div>
          <div className="relative 1440p:h-100 1440p:w-150 w-100 h-80">
            <Image
              src={healthcare}
              alt="healthcare"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-lg py-6">
            <h3 className="font-bold text-2xl">Community and healthcare</h3>
            <p>Charitable clinic and local programmes.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Responsibility;
