import Image from "next/image";
import bogieHeaderImg from "@/public/images/bogie_header_img.png";

const BogieHeader = () => {
  return (
    <div className="flex gap-15">
      <div className="flex-1 flex flex-col gap-10 pt-15">
        <div>
          <h1 className="uppercase font-bold text-4xl">Bogie</h1>
          <h3 className="text-brand-red text-3xl py-5">
            Everything between the rail and the body
          </h3>
        </div>
        <p>
          Almost everything we make for the railways lives on or around the
          bogie. These are the parts that sit between two pieces of steel which
          would otherwise destroy each other, and they have to keep doing it for
          years, through heat, through monsoon, under a load that never stops
          changing
        </p>
      </div>
      <div className="flex-1 overflow-hidden rounded-xl">
        <Image src={bogieHeaderImg} alt="" />
      </div>
    </div>
  );
};

export default BogieHeader;
