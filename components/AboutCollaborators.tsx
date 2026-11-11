import { Collaborators } from "@/lib/data";
import Image, { StaticImageData } from "next/image";

const AboutCollaborators = ({
  sectionHeading,
  isLogoVisible = true,
  logoData,
}: {
  sectionHeading?: string;
  isLogoVisible?: boolean;
  logoData?: { img: StaticImageData }[];
}) => {
  const collaborators = logoData ? logoData : Collaborators;
  return (
    <div className="flex flex-col gap-8 py-10 sm:gap-10 lg:gap-15 max-1440p:py-0">
      {/* Header Area */}
      <div className="flex flex-col items-start gap-1.5 xl:flex-row xl:items-center xl:gap-10">
        <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold capitalize">
          {sectionHeading || "Collaborators"}
        </h2>
      </div>

      {/* Logos Grid */}
      <div className="grid grid-cols-7 max-sm:grid-cols-1 sm:max-lg:grid-cols-2 lg:max-1440p:grid-cols-5 justify-center gap-6 sm:gap-10">
        {collaborators.map((collaborator, index) => (
          <div
            key={index}
            className="group relative flex aspect-3/2 max-sm:aspect-3.5/1 sm:max-lg:aspect-2.5/1 grow basis-full items-center justify-center border-b-5 border-r-5 border-neutral-300 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md max-xl:p-4 sm:basis-[calc(50%-0.75rem)] lg:basis-0 lg:max-w-110.5 select-none"
          >
            <div className="relative h-full w-full">
              {isLogoVisible && (
                <Image
                  src={collaborator.img}
                  alt={`logo`}
                  className="object-contain filter transition-all duration-300"
                  fill
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCollaborators;
