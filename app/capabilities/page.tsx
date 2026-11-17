import CapabilitesHeader from "@/components/CapabilitesHeader";
import CapabilitiesBanner from "@/components/CapabilitiesBanner";
import CapabilitiesStage1 from "@/components/CapabilitiesStage1";
import StartConvo from "@/components/StartConvo";
import SupportingCapabilities from "@/components/SupportingCapabilities";
import {
  Stage2Listitems,
  Stage2Tags,
  Stage3Listitems,
  Stage3Tags,
} from "@/lib/data";

import stage2Img from "@/public/images/capabilities_stage2.png";
import stage3Img from "@/public/images/capabilities_stage3.png";

const Capabilities = () => {
  const stage2tags = Stage2Tags;
  const stage2listitems = Stage2Listitems;
  const stage3tags = Stage3Tags;
  const stage3listitems = Stage3Listitems;
  return (
    <div className="py-14 max-md:py-8 w-full font-montserrat">
      {/* <div className="px-10 max-lg:px-4 max-w-[1920px] mx-auto w-full"> */}
      <CapabilitesHeader />
      {/* </div> */}
      <CapabilitiesBanner />
      <div className="px-10 max-lg:px-4 max-w-[1920px] mx-auto w-full pt-30 max-1440p:pt-15">
        <div className="flex flex-col gap-35 max-xl:gap-15 xl:max-1440p:gap-20">
          <CapabilitiesStage1 />
          <CapabilitiesStage1
            reverse={true}
            stage="stage 02"
            stageTitle="Manufacture"
            text1="The point of making it here is repeatability: the component you qualify is the component you receive for the next ten years."
            para="It is non-linear, it changes with temperature, it takes a set, and the way Rubber, engineering plastic and polyurethane components are produced on the same site on which they were designed and tested, under ISO 9001 and, for rolling stock, IRIS. Moulding is PLC-controlled, batching is automatic, and the adhesive application for rubber-to-metal bonded parts is automated rather than left to the day."
            tags={stage2tags}
            listItems={stage2listitems}
            image={stage2Img}
          />
          <CapabilitiesStage1
            stage="stage 03"
            stageTitle="Testing"
            text1="An independent judgement on how we test, not a statement about how we manufacture."
            para="The laboratory at the works is accredited to ISO/IEC 17025:2017 in its own right. That is why a test report issued here means something to somebody who has never visited. Quality is controlled at three stages — incoming material, in process, and finished product — and new products go through accelerated endurance testing and then trials in service before they are released.A component that fails on the rig goes back to design, not forward to production. That loop is why development here takes longer at the start than buying a part off a shelf, and why it costs less by the third year."
            tags={stage3tags}
            listItems={stage3listitems}
            image={stage3Img}
          />
          <SupportingCapabilities />
        </div>
      </div>
      <StartConvo />
    </div>
  );
};

export default Capabilities;
