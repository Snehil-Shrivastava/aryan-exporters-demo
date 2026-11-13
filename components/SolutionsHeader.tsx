import Image, { StaticImageData } from "next/image";

const SolutionsHeader = ({
  heading,
  subHeading,
  description,
  headerImg,
}: {
  heading: string;
  subHeading: string;
  description: string;
  headerImg: StaticImageData;
}) => {
  return (
    <div className="flex gap-15 max-md:pb-15 mb-20 max-md:mb-0">
      <div className="flex-1 max-1440p:flex-[0.75] max-xl:flex-1 flex flex-col gap-10 max-1440p:gap-6 max-sm:gap-4 pt-15 max-1440p:pt-1">
        <div>
          <h1 className="uppercase font-bold text-4xl max-md:text-xl md:max-lg:text-2xl">
            {heading}
          </h1>
          <h3 className="text-brand-red text-3xl max-md:text-base md:max-lg:text-xl py-5 max-lg:py-2">
            {subHeading}
          </h3>
          <div className="overflow-hidden rounded-xl xl:hidden">
            <Image src={headerImg} alt="" />
          </div>
        </div>
        <p className="max-md:text-sm">{description}</p>
      </div>
      <div className="flex-1 overflow-hidden rounded-xl max-xl:hidden aspect-3/2">
        <Image src={headerImg} alt="" />
      </div>
    </div>
  );
};

export default SolutionsHeader;
