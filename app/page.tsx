import AccordionSlider from "@/components/AccordianSlider";
import CertificatesAwards from "@/components/CertificatesAwards";
import EngineeringFlow from "@/components/EngineeringFlow";
import EngineeringFlowMasked from "@/components/EngineeringFlowMasked";
import GroupofCompanies from "@/components/GroupofCompanies";

export default function Home() {
  return (
    <div className="px-10 py-10 max-w-[1920px] mx-auto w-full font-montserrat">
      <AccordionSlider />
      {/* <EngineeringFlow /> */}
      <EngineeringFlowMasked frameHeightClass="min-h-[280px] sm:min-h-[360px] lg:min-h-[650px]" />
      <CertificatesAwards />
      <GroupofCompanies />
    </div>
  );
}
