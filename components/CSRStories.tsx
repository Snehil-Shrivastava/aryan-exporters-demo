import Image, { StaticImageData } from "next/image";
import placeholderImg from "@/public/images/CSR_environment.png";

const CSRStories = ({
  title,
  header,
  bodyTxt1,
  bodyTxt2,
  image,
  className,
  bgColor,
}: {
  title: string;
  header: string;
  bodyTxt1: string;
  bodyTxt2: string;
  image: StaticImageData;
  className: string;
  bgColor: string;
}) => {
  return (
    <div className={`${bgColor}`}>
      <div
        className={`px-10 max-lg:px-4 max-w-[1920px] mx-auto w-full pt-15 pb-15`}
      >
        <div className={`flex gap-35 ${className}`}>
          <div className="flex flex-col justify-start items-start">
            <h4 className="uppercase font-medium tracking-[12px] max-lg:text-sm">
              {title}
            </h4>
            <h2 className="text-[42px] 1440p:leading-12 max-lg:text-3xl lg:max-1440p:text-4xl font-bold text-brand-red mt-3">
              {header}
            </h2>
            <div className="rounded-xl overflow-hidden xl:hidden mt-6">
              <Image src={image} alt="" />
            </div>
            <p className="leading-relaxed mt-6 text-lg max-lg:text-base">
              {bodyTxt1}
            </p>
            <p className="leading-relaxed mt-6 text-lg max-lg:text-base">
              {bodyTxt2}
            </p>
          </div>
          <div className="rounded-xl overflow-hidden max-xl:hidden relative">
            <Image src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSRStories;
