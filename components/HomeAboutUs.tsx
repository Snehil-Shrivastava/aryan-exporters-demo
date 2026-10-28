// import homeAboutImg from "@/public/images/homeaboutimg.png";
// import logo from "@/public/aryan_exporters_logo.svg";
// import Image from "next/image";

// const HomeAboutUs = () => {
//   return (
//     <div className="my-30 flex gap-15">
//       <div className="flex-1 flex flex-col gap-12 items-start">
//         <h2 className="font-semibold text-4xl">About Us</h2>
//         <div className="flex gap-7 items-center">
//           <Image src={logo} alt="" className="w-15" />
//           <h2 className="text-brand-blue uppercase font-bold text-2xl flex flex-col leading-6 font-mirano">
//             <span>aryan exporters</span>
//             <span>pvt ltd.</span>
//           </h2>
//         </div>
//         <div className="text-lg flex flex-col gap-8">
//           <p>
//             Aryan Exporters started in Lucknow in 1983 with one rubber product
//             and one customer. The works now covers more than 6,000 square
//             metres, with its own mixing, moulding, tool room, polyurethane plant
//             and laboratory, and the catalogue runs past a hundred parts for
//             railways, defence, industry and road.
//           </p>
//           <p>
//             What changed along the way is what we get asked for. It used to be a
//             part made to a drawing. More often now it is a problem: something
//             failing in service, something that has to be made in India,
//             something nobody here has built before. We kept the factory, and
//             built the engineering around it.
//           </p>
//         </div>
//         <button className="bg-brand-red rounded-full px-8 py-1.5 text-white font-semibold text-lg">
//           Read the full story
//         </button>
//       </div>
//       <div className="relative flex-1">
//         <Image
//           src={homeAboutImg}
//           alt=""
//           fill
//           className="object-cover rounded-lg object-[center_60%]"
//         />
//       </div>
//     </div>
//   );
// };

// export default HomeAboutUs;

// ---------------------------------- responsive

import homeAboutImg from "@/public/images/homeaboutimg.png";
import logo from "@/public/aryan_exporters_logo.svg";
import Image from "next/image";

const HomeAboutUs = () => {
  return (
    <section className="my-16 sm:my-20 xl:my-30">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-15 gap-y-5 2xl:gap-y-8">
        {/* ---------------------------------- title ---------------------------------- */}
        {/* <h2 className="text-3xl font-semibold sm:text-4xl xl:col-start-1 xl:row-start-1"> */}
        <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold xl:col-start-1 xl:row-start-1">
          About Us
        </h2>

        {/* -------------------------------- logo lockup ------------------------------- */}
        <div className="flex items-center gap-3 md:gap-5 xl:col-start-1 xl:row-start-2">
          <Image src={logo} alt="" className="shrink-0 w-6 md:w-10 2xl:w-12" />
          <h2 className="flex flex-col font-mirano font-bold uppercase text-brand-blue text-xs md:text-base lg:text-lg 2xl:text-xl leading-2.5 md:leading-4 2xl:leading-5 tracking-wider">
            <span>aryan exporters</span>
            <span>pvt ltd.</span>
          </h2>
        </div>

        {/* ---------------------------------- image ---------------------------------- */}
        {/* below xl: sits directly under the logo lockup */}
        {/* xl+: right column, spanning all rows -> full column height */}
        <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg sm:aspect-video xl:col-start-2 xl:row-span-3 xl:row-start-1 xl:aspect-auto xl:h-full">
          <Image
            src={homeAboutImg}
            alt=""
            fill
            sizes="(min-width: 1280px) 50vw, 100vw"
            className="object-cover object-[center_60%]"
          />
        </div>

        {/* -------------------------- body copy + cta -------------------------- */}
        <div className="flex flex-col items-start gap-6 2xl:gap-8 xl:col-start-1 xl:row-start-3">
          <div className="flex flex-col gap-3.5 text-xs md:text-sm lg:text-base 2xl:text-lg leading-relaxed">
            <p>
              Aryan Exporters started in Lucknow in 1983 with one rubber product
              and one customer. The works now covers more than 6,000 square
              metres, with its own mixing, moulding, tool room, polyurethane
              plant and laboratory, and the catalogue runs past a hundred parts
              for railways, defence, industry and road.
            </p>
            <p>
              What changed along the way is what we get asked for. It used to be
              a part made to a drawing. More often now it is a problem:
              something failing in service, something that has to be made in
              India, something nobody here has built before. We kept the
              factory, and built the engineering around it.
            </p>
          </div>

          <button
            type="button"
            className="rounded-full bg-brand-red px-4 lg:px-6 2xl:px-8 py-2 text-sm md:text-base lg:text-lg 2xl:text-xl font-semibold text-white transition-opacity active:opacity-90"
          >
            Read the full story
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutUs;
