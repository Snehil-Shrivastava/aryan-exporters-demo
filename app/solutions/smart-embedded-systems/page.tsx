import SolutionsHeader from "@/components/SolutionsHeader";
import StartConvo from "@/components/StartConvo";

import bogieHeaderImg from "@/public/images/bogie_header_img.png";

const SmartEmbeddedSystems = () => {
  return (
    <div className="py-14 w-full font-montserrat">
      <div className="px-10 max-lg:px-4 max-w-[1920px] mx-auto w-full md:max-lg:pb-25">
        <SolutionsHeader
          headerImg={bogieHeaderImg}
          heading="Smart embedded systems"
          subHeading="Knowing what the vehicle is doing, before it tells you the hard way."
          description="We build the sensing, the controller and the enclosure that holds them, for conditions where a commercial unit would not last a season. The advantage of making suspension and making the monitoring on the same site is that we already know what the part is supposed to feel like when it is healthy."
        />
      </div>
      <StartConvo />
    </div>
  );
};

export default SmartEmbeddedSystems;
