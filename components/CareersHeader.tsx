import Image from "next/image";
import careersHeader from "@/public/images/careers_header.png";

const CareersHeader = () => {
  return (
    <div className="flex gap-15 mb-25 max-md:mb-0 items-stretch max-1440p:pt-1">
      <div className="flex flex-col gap-10 max-lg:gap-10 max-1440p:gap-6 w-full">
        <div>
          <p className="text-2xl max-lg:text-lg font-medium mb-2">Careers</p>
          <h1 className="max-lg:text-3xl lg:max-1440p:text-5xl 1440p:text-6xl font-bold text-brand-red 1440p:leading-16">
            Working here
          </h1>
          <p className="leading-relaxed mt-6 text-lg max-lg:text-base">
            We are a factory with an accredited laboratory attached, in Lucknow,
            making parts that have to work for ten years.
          </p>
        </div>
        <div className="flex max-xl:flex-col gap-15 lg:max-xl:gap-10 xl:max-1440p:gap-8 max-lg:gap-8">
          <div className="overflow-hidden rounded-xl w-full relative max-md:h-80 md:max-lg:h-100 lg:max-xl:h-130 xl:max-w-160 xl:h-100">
            <Image
              src={careersHeader}
              alt=""
              className="max-xl:object-cover"
              fill
            />
          </div>
          <div className="flex flex-col justify-start items-start">
            <p className="leading-relaxed mt-6 text-lg max-lg:text-base">
              There is no graduate scheme and no rotation programme. People who
              join tend to pick one discipline — compounding, or design, or test
              — and go deep into it, usually alongside someone who hasbeen doing
              it for twenty years.
            </p>
            <p className="leading-relaxed mt-6 text-lg max-lg:text-base">
              The engineers who developed the air spring are still here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersHeader;
