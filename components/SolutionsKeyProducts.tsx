import Image, { StaticImageData } from "next/image";

const SolutionsKeyProducts = ({
  keyProducts,
}: {
  keyProducts: { name: string; label: string; image: StaticImageData }[];
}) => {
  return (
    <div className="py-35 max-xl:py-15">
      <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold xl:col-start-1 xl:row-start-1">
        Key Products
      </h2>
      <div className="grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-10 max-xl:gap-8 mt-15">
        {keyProducts.map((product, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-5">
            <div className="rounded-lg overflow-hidden relative w-full h-80 border border-neutral-300">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold">{product.name}</h3>
              <p className="pt-1">{product.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionsKeyProducts;
