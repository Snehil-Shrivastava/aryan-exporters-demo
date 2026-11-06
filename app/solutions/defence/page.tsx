import SolutionsHeader from "@/components/SolutionsHeader";
import SolutionsKeyProducts from "@/components/SolutionsKeyProducts";
import SolutionsProductCatalog from "@/components/SolutionsProductCatalog";
import StartConvo from "@/components/StartConvo";
import { DefenceCategories, DefenceProducts } from "@/lib/data";

import bogieHeaderImg from "@/public/images/bogie_header_img.png";

const Defence = () => {
  return (
    <div className="py-14 w-full font-montserrat">
      <div className="px-10 max-lg:px-4 max-w-[1920px] mx-auto w-full md:max-lg:pb-25">
        <SolutionsHeader
          headerImg={bogieHeaderImg}
          heading="Defence"
          subHeading="Mounts, pads and sealing that hold under shock, heat and salt."
          description="Defence work asks the same question as rail, louder. The load arrives
          suddenly instead of cyclically, the environment is salt or desert
          rather than a depot, and a part that fails is not an inconvenience."
        />
        <SolutionsKeyProducts keyProducts={DefenceProducts} />
        <SolutionsProductCatalog CATEGORIES={DefenceCategories} />
      </div>
      <StartConvo />
    </div>
  );
};

export default Defence;
