import airSpring from "@/public/images/bogie_air_spring.png";
import slideBearer from "@/public/images/bogie_slide_bearer.png";
import suspensionBush from "@/public/images/bogie_suspension_bush.png";
import Image from "next/image";

const BogieProducts = [
  {
    name: "180 kN Air Spring",
    label: "Developed here when the technology could only be imported.",
    image: airSpring,
  },
  {
    name: "Constant Contact Side Bearer, 25 t",
    label:
      "Cast polyurethane rings in a forged housing, replacing the coil spring that kept breaking.",
    image: slideBearer,
  },
  {
    name: "Motor Suspension Bush",
    label: "All-rubber, moulded in one piece. No joint, so no joint to fail.",
    image: suspensionBush,
  },
];

const BogieKeyProducts = () => {
  return (
    <div className="py-35">
      <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold xl:col-start-1 xl:row-start-1">
        Key Products
      </h2>
      <div className="grid grid-cols-3 gap-10 mt-15">
        {BogieProducts.map((product, index) => (
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

export default BogieKeyProducts;
