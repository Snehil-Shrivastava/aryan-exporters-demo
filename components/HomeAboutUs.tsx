import homeAboutImg from "@/public/images/homeaboutimg.png";
import logo from "@/public/aryan_exporters_logo.svg";
import Image from "next/image";

const HomeAboutUs = () => {
  return (
    <div className="my-30 flex gap-15">
      <div className="flex-1">
        <h2 className="font-semibold text-4xl">About Us</h2>
        <div className="flex gap-7 items-center my-12">
          <Image src={logo} alt="" className="w-15" />
          <h2 className="text-brand-blue uppercase font-bold text-2xl flex flex-col leading-6 font-mirano">
            <span>aryan exporters</span>
            {/* <br /> */}
            <span>pvt ltd.</span>
          </h2>
        </div>
        <p className="mb-8 text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since 1966, when designers at Letraset and James Mosley, the
          librarian at St Bride Printing Library in London, took a 1914 Cicero
          translation and scrambled it to make dummy text for Letraset&apos;s
          Body Type sheets. It has survived not only many decades, but also the
          leap into electronic typesetting, remaining essentially unchanged.
        </p>
        <button className="bg-brand-red rounded-full px-8 py-1.5 text-white font-semibold text-lg">
          Know More
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
