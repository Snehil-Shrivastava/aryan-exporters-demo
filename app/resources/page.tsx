import DownloadFiles from "@/components/DownloadFiles";
import ResourcesHeader from "@/components/ResourcesHeader";
import StartConvo from "@/components/StartConvo";

const Resources = () => {
  return (
    <div className="py-14 max-md:py-8 w-full font-montserrat">
      <div className="px-10 max-lg:px-4 max-w-[1920px] mx-auto w-full md:max-lg:pb-25">
        <ResourcesHeader
          header="Downloads"
          description="Everything a buyer or an auditor is likely to ask for, in one place, without a form in front of it."
        />
      </div>
      <div className="bg-[#f5f5f5]">
        <DownloadFiles />
      </div>
      <div className="px-10 max-lg:px-4 max-w-[1920px] mx-auto w-full pt-15 pb-15">
        <div className="flex max-lg:flex-col gap-30 max-lg:gap-20 max-md:pt-15">
          <div className="flex flex-col justify-center items-start flex-1">
            <h4 className="uppercase font-medium tracking-[12px] max-lg:text-sm">
              not there yet
            </h4>
            <h2 className="text-[36px] 1440p:leading-10 max-lg:text-2xl lg:max-1440p:text-3xl font-bold text-brand-red mt-3">
              If the one you need is missing
            </h2>
            <p className="leading-relaxed mt-6 text-lg max-lg:text-base">
              Data sheets exist for part of the range and go up as they are
              written. If the one you need is missing, ask and we will send it.
            </p>
          </div>
        </div>
      </div>
      <StartConvo />
    </div>
  );
};

export default Resources;
