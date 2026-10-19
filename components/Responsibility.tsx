import Image from "next/image";
import environment from "@/public/images/environment.png";
import healthcare from "@/public/images/healthcare.png";

const Responsibility = () => {
  return (
    <div className="pt-30">
      <div>
        <h2 className="text-4xl font-semibold">Responsibility</h2>
        <p>
          Aryan Exporters is one of several comapanies: structure and detail to
          follow
        </p>
      </div>
      <div className="flex gap-40 py-10">
        <div>
          <div className="relative h-60 w-150">
            <Image
              src={environment}
              alt="environment"
              fill
              className="object-cover rounded-xl"
            />
          </div>
          <div className="text-brand-red text-lg py-6">
            <h3 className="font-bold text-2xl">Environment</h3>
            <p>Green campus at the works.</p>
          </div>
        </div>
        <div>
          <div className="relative h-60 w-150">
            <Image
              src={healthcare}
              alt="healthcare"
              fill
              className="object-cover rounded-xl"
            />
          </div>
          <div className="text-brand-red text-lg py-6">
            <h3 className="font-bold text-2xl">Community and healthcare</h3>
            <p>Charitable clinic and local programmes.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Responsibility;
