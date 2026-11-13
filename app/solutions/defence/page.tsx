import SolutionsHeader from "@/components/SolutionsHeader";
import SolutionsKeyProducts from "@/components/SolutionsKeyProducts";
import SolutionsProductCatalog from "@/components/SolutionsProductCatalog";
import StartConvo from "@/components/StartConvo";
import { DefenceCategory, DefenceProducts } from "@/lib/data";

import defenceHeaderImg from "@/public/images/hero-images/Defence.webp";

const Defence = () => {
  return (
    <div className="py-14 max-md:py-8 w-full font-montserrat">
      <div className="px-10 max-lg:px-4 max-w-[1920px] mx-auto w-full md:max-lg:pb-25">
        <SolutionsHeader
          headerImg={defenceHeaderImg}
          heading="Defence"
          subHeading="Mounts, pads and sealing that hold under shock, heat and salt."
          description="Defence work asks the same question as rail, louder. The load arrives
          suddenly instead of cyclically, the environment is salt or desert
          rather than a depot, and a part that fails is not an inconvenience."
        />
        {/* <SolutionsKeyProducts keyProducts={DefenceProducts} /> */}
        <SolutionsProductCatalog CATEGORIES={DefenceCategory} />
      </div>
      <StartConvo />
    </div>
  );
};

export default Defence;
