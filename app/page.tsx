import AccordionSlider from "@/components/AccordianSlider";
import CertificatesAwards from "@/components/CertificatesAwards";
import EngineeringFlow from "@/components/EngineeringFlow";
import EngineeringFlowMasked from "@/components/EngineeringFlowMasked";
import Footer from "@/components/Footer";
import GroupofCompanies from "@/components/GroupofCompanies";
import OurPartners from "@/components/OurPartners";
import StartConvo from "@/components/StartConvo";

export default function Home() {
  return (
    <div className="py-10 w-full font-montserrat">
      <div className="px-10 max-w-[1920px] mx-auto w-full">
        <AccordionSlider />
        {/* <EngineeringFlow /> */}
        <EngineeringFlowMasked frameHeightClass="min-h-[450px] sm:max-lg:min-h-[360px] 1440p:min-h-[650px]" />
        <CertificatesAwards />
        <GroupofCompanies />
        <OurPartners />
      </div>
      <StartConvo />
    </div>
  );
}
