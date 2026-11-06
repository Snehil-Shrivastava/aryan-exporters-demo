import SolutionsHeader from "@/components/SolutionsHeader";
import SolutionsKeyProducts from "@/components/SolutionsKeyProducts";
import SolutionsProductCatalog from "@/components/SolutionsProductCatalog";
import StartConvo from "@/components/StartConvo";
import {
  EngineeringKeyProducts,
  EngineeringProductsCategories,
} from "@/lib/data";

import bogieHeaderImg from "@/public/images/bogie_header_img.png";

const EngineeringProducts = () => {
  return (
    <div className="py-14 max-md:py-8 w-full font-montserrat">
      <div className="px-10 max-lg:px-4 max-w-[1920px] mx-auto w-full md:max-lg:pb-25">
        <SolutionsHeader
          headerImg={bogieHeaderImg}
          heading="Engineering products"
          subHeading="The same engineering, a long way from a railway."
          description="Everything on this page is made in the same plant, from the same compounds, by the same people as the rail work. What changes is the application. A bridge bearing and a side bearer are the same problem stated differently: something has to carry a very large load and still be allowed to move."
        />
        <SolutionsKeyProducts keyProducts={EngineeringKeyProducts} />
        <SolutionsProductCatalog CATEGORIES={EngineeringProductsCategories} />
      </div>
      <StartConvo />
    </div>
  );
};

export default EngineeringProducts;
