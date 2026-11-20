import { LabTestingCertificateSays } from "@/lib/data";

const LabTestingCertificate = () => {
  const certificateSaysData = LabTestingCertificateSays;
  return (
    <div className="flex flex-col gap-15 max-lg:gap-6 max-md:pt-15">
      <div className="flex flex-col items-start gap-1.5 xl:flex-row xl:items-center xl:gap-10">
        <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold capitalize">
          The Certificate
        </h2>
        <p className="flex lg:flex-col py-0 text-xs md:text-sm xl:text-xs 2xl:text-sm text-gray-600">
          <span>What the&nbsp;</span>
          <span>certificate says</span>
        </p>
      </div>
      <div className="grid grid-cols-5 max-md:grid-cols-1 md:max-lg:grid-cols-2 lg:max-xl:grid-cols-3 xl:max-1440p:grid-cols-4 gap-15 lg:max-xl:gap-10 xl:max-1440p:gap-8 max-lg:gap-8">
        {certificateSaysData.map((data, index) => (
          <div
            key={index}
            className="bg-black/5 rounded-xl border border-neutral-300 px-8 max-lg:px-4 py-5"
          >
            <h4 className="font-bold text-lg mb-1">{data.title}</h4>
            <span className="opacity-80 text-sm">{data.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabTestingCertificate;
