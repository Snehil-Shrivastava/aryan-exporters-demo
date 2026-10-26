import homeAboutImg from "@/public/images/homeaboutimg.png";
import logo from "@/public/aryan_exporters_logo.svg";
import Image from "next/image";

const HomeAboutUs = () => {
  return (
    <div className="my-30 flex gap-15">
      <div className="flex-1 flex flex-col gap-12 items-start">
        <h2 className="font-semibold text-4xl">About Us</h2>
        <div className="flex gap-7 items-center">
          <Image src={logo} alt="" className="w-15" />
          <h2 className="text-brand-blue uppercase font-bold text-2xl flex flex-col leading-6 font-mirano">
            <span>aryan exporters</span>
            {/* <br /> */}
            <span>pvt ltd.</span>
          </h2>
        </div>
        <div className="text-lg flex flex-col gap-8">
          <p>
            Aryan Exporters started in Lucknow in 1983 with one rubber product
            and one customer. The works now covers more than 6,000 square
            metres, with its own mixing, moulding, tool room, polyurethane plant
            and laboratory, and the catalogue runs past a hundred parts for
            railways, defence, industry and road.
          </p>
          <p>
            What changed along the way is what we get asked for. It used to be a
            part made to a drawing. More often now it is a problem: something
            failing in service, something that has to be made in India,
            something nobody here has built before. We kept the factory, and
            built the engineering around it.
          </p>
        </div>
        <button className="bg-brand-red rounded-full px-8 py-1.5 text-white font-semibold text-lg">
          Read the full story
        </button>
      </div>
      <div className="relative flex-1">
        <Image
          src={homeAboutImg}
          alt=""
          fill
          className="object-cover rounded-lg object-[center_60%]"
        />
      </div>
    </div>
  );
};

export default HomeAboutUs;
