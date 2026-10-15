import AccordionSlider from "@/components/AccordianSlider";
import EngineeringFlow from "@/components/EngineeringFlow";
import EngineeringFlowMasked from "@/components/EngineeringFlowMasked";

export default function Home() {
  return (
    <div className="px-10 py-10 max-w-[1920px] mx-auto w-full">
      <AccordionSlider />
      {/* <EngineeringFlow /> */}
      <EngineeringFlowMasked />
    </div>
  );
}
