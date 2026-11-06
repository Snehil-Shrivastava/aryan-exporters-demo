import SolutionsHeader from "@/components/SolutionsHeader";
import SolutionsProductCatalog from "@/components/SolutionsProductCatalog";
import StartConvo from "@/components/StartConvo";
import { ElectricalComponentsCategories } from "@/lib/data";

import bogieHeaderImg from "@/public/images/bogie_header_img.png";

const ElectricalComponents = () => {
  return (
    <div className="py-14 w-full font-montserrat">
      <div className="px-10 max-lg:px-4 max-w-[1920px] mx-auto w-full md:max-lg:pb-25">
        <SolutionsHeader
          headerImg={bogieHeaderImg}
          heading="Electrical components"
          subHeading="Our IRIS certificate is issued for electrical components. This is what sits behind it."
          description="An electrical failure on a vehicle is rarely the cable. It is the thing the cable passes through, rests against or terminates into. We make both: the harnesses themselves, and the polymer parts around them that stop chafing, stop water, and stop a fire travelling from one compartment to the next."
        />
        <SolutionsProductCatalog CATEGORIES={ElectricalComponentsCategories} />
      </div>
      <StartConvo />
    </div>
  );
};

export default ElectricalComponents;
