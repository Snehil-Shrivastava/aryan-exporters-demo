import BogieHeader from "@/components/BogieHeader";
import BogieKeyProducts from "@/components/BogieKeyProducts";
import BogieProductCatalog from "@/components/BogieProductCatalog";
import StartConvo from "@/components/StartConvo";

const Bogie = () => {
  return (
    <div className="py-14 w-full font-montserrat">
      <div className="px-10 max-lg:px-4 max-w-[1920px] mx-auto w-full md:max-lg:pb-25">
        <BogieHeader />
        <BogieKeyProducts />
        <BogieProductCatalog />
      </div>
      <StartConvo />
    </div>
  );
};

export default Bogie;
