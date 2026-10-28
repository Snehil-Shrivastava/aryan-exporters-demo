import AccordionSlider from "@/components/AccordianSlider";
import CertificatesAwards from "@/components/CertificatesAwards";
import EngineeringFlow from "@/components/EngineeringFlow";
import GroupofCompanies from "@/components/GroupofCompanies";
import HomeAboutUs from "@/components/HomeAboutUs";
import OurPartners from "@/components/OurPartners";
import Responsibility from "@/components/Responsibility";
import StartConvo from "@/components/StartConvo";

export default function Home() {
  return (
    <div className="py-10 w-full font-montserrat">
      <div className="px-10 max-lg:px-4 max-w-[1920px] mx-auto w-full">
        <AccordionSlider />
        <HomeAboutUs />
        {/* <EngineeringFlowMasked frameHeightClass="min-h-[450px] sm:max-lg:min-h-[360px] 1440p:min-h-[650px]" /> */}
        <EngineeringFlow />
        <CertificatesAwards />
        <OurPartners />
        <GroupofCompanies />
        <Responsibility />
      </div>
      <StartConvo />
    </div>
  );
}
