import SolutionsHeader from "@/components/SolutionsHeader";
import StartConvo from "@/components/StartConvo";

import bogieHeaderImg from "@/public/images/bogie_header_img.png";

const PowerElectronics = () => {
  return (
    <div className="py-14 max-md:py-8 w-full font-montserrat">
      <div className="px-10 max-lg:px-4 max-w-[1920px] mx-auto w-full md:max-lg:pb-25">
        <SolutionsHeader
          headerImg={bogieHeaderImg}
          heading="Power electronics"
          subHeading="Converting power on a moving vehicle, for as long as the vehicle lasts."
          description="Power electronics on rolling stock live a hard life: wide input swings, constant vibration, heat with nowhere to go, and a service interval measured in years. We design and build converters and inverters at Lucknow, on the same site as the laboratory that qualifies them."
        />
      </div>
      <StartConvo />
    </div>
  );
};

export default PowerElectronics;
