import { AboutAwardsData } from "@/lib/data";
import Image from "next/image";

const AboutCertificatesAwards = () => {
  const awardsData = AboutAwardsData;
  return (
    <div className="w-full overflow-hidden">
      <div className="flex flex-col items-start gap-1.5 xl:flex-row xl:items-center xl:gap-10">
        <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold capitalize">
          Certificates and awards
        </h2>
        <p className="lg:flex lg:flex-col py-0 text-xs md:text-sm xl:text-xs 2xl:text-sm text-gray-600">
          <span>
            Proving our capabilities and being recognized for it at multiple
            steps.&nbsp;
          </span>
          <span>Click any to know more.</span>
        </p>
      </div>
      <div className="grid grid-cols-2 max-lg:gap-8 gap-20 py-20 xl:max-w-4/5 mx-auto">
        {awardsData.map((award, index) => (
          <div
            key={index}
            className="flex max-lg:flex-col items-center gap-15 lg:max-xl:gap-8 max-lg:gap-4"
          >
            <div className="relative aspect-3/4 w-40 shrink-0 md:w-48 shadow-[4px_2px_6px_2px_rgba(0,0,0,0.35)]">
              <Image
                src={award.image}
                alt={award.title}
                fill
                sizes="(min-width: 768px) 192px, 160px"
                className="object-contain"
              />
            </div>
            <div className="max-lg:text-center">
              <h3 className="font-bold text-2xl mb-2 max-lg:text-xl">
                {award.title}
              </h3>
              <p className="max-lg:text-sm">{award.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCertificatesAwards;
