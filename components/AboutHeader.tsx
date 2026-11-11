import headerImg from "@/public/images/about-header-img.png";
import Image from "next/image";

const AboutHeader = () => {
  return (
    // <section>
    //   {/* Top Section: Two Columns */}
    //   <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    //     {/* Left Column: Text */}
    //     <div>
    //       <p className="text-gray-700 text-lg mb-2">About</p>
    //       <h1 className="text-5xl md:text-6xl font-bold text-brand-red leading-tight">
    //         Aryan <br /> Exporters
    //       </h1>
    //       <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-8">
    //         Engineering since 1983
    //       </h2>
    //       <p className="text-gray-700 leading-relaxed text-justify sm:text-left">
    //         Established at Lucknow in 1983, now supplying more than a hundred
    //         components to railway, defence and industrial customers. History,
    //         management and certifications.
    //       </p>
    //     </div>

    //     {/* Right Column: Image */}
    //     <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg">
    //       {/* Replace the src with your actual image path */}
    //       <Image
    //         src={headerImg}
    //         alt="Industrial worker operating machinery"
    //         priority
    //       />
    //     </div>
    //   </div>

    //   {/* Middle Section: Paragraphs */}
    //   <div className="mt-16 space-y-6 text-gray-800 leading-relaxed text-justify sm:text-left">
    //     <p>
    //       Aryan Exporters was established at Lucknow in 1983, manufacturing a
    //       single rubber product for a single customer. The works at Amausi now
    //       extends to more than 6,000 square metres, of which 2,500 are covered
    //       for rubber manufacturing, and incorporates its own mixing plant,
    //       moulding shop, tool room, polyurethane plant and laboratory. The
    //       catalogue today comprises more than a hundred components supplied to
    //       the railway, defence, industrial and road sectors.
    //     </p>
    //     <p>
    //       What has changed over that period is not the plant but the nature of
    //       the work. Where a customer once supplied a drawing and required a
    //       component manufactured to it, the requirement is now more often a
    //       problem to be resolved: a part failing in service without an
    //       established cause, an assembly that must be produced in India in place
    //       of an import, or an application for which no proven design exists. The
    //       manufacturing base has been retained, and an engineering capability
    //       has been built around it.
    //     </p>
    //     <p>
    //       Following liberalization, the company began working with international
    //       polymer manufacturers on thermoplastic and castable systems. A
    //       substantial part of its present material capability derives from those
    //       relationships, and they are the reason that development work which
    //       would ordinarily be placed overseas can be undertaken at Lucknow.
    //     </p>
    //   </div>

    //   {/* Bottom Section: Red Banner */}
    //   <div className="mt-12 bg-brand-red rounded-xl p-8 md:p-10 text-center shadow-md">
    //     <h3 className="text-white text-xl md:text-2xl font-bold tracking-wide">
    //       Our record is best measured by the problems resolved, not by the
    //       volume dispatched.
    //     </h3>
    //   </div>
    // </section>
    <section>
      {/* TOP SECTION - Contains the float */}
      {/* We add 'overflow-hidden' (a form of clearfix) to this wrapper so it expands to contain the floated image */}
      <div className="overflow-hidden">
        {/* FLOATED IMAGE */}
        {/* On mobile, we want it full width (w-full), on desktop we float it right with a set width (md:w-1/2 md:float-right) */}
        <div className="relative w-full h-75 mb-6 rounded-2xl overflow-hidden md:w-[48%] md:float-right md:ml-8 md:mb-4 md:h-112.5 select-none">
          <Image
            src={headerImg}
            alt="Industrial worker operating machinery"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* TEXT THAT WRAPS AROUND THE IMAGE */}
        <div>
          <p className="text-2xl font-medium mb-2">About</p>
          <h1 className="text-5xl md:text-6xl font-bold text-brand-red leading-16">
            Aryan
            <br />
            Exporters
          </h1>
          <h2 className="text-2xl font-medium mt-6 mb-8">
            Engineering since 1983
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Established at Lucknow in 1983, now supplying more than a hundred
            components to railway, defence and industrial customers. History,
            management and certifications.
          </p>

          {/* Because we floated the image, this first long paragraph will naturally wrap around the left side of the image. */}
          <p className="text-gray-800 leading-relaxed mb-4">
            Aryan Exporters was established at Lucknow in 1983, manufacturing a
            single rubber product for a single customer. The works at Amausi now
            extends to more than 6,000 square metres, of which 2,500 are covered
            for rubber manufacturing, and incorporates its own mixing plant,
            moulding shop, tool room, polyurethane plant and laboratory. The
            catalogue today comprises more than a hundred components supplied to
            the railway, defence, industrial and road sectors.
          </p>
        </div>
      </div>

      {/* BOTTOM SECTION - Full width text */}
      {/* We use 'clear-both' here to force this div to drop BELOW the floated image */}
      <div className="clear-both space-y-6 text-gray-800 leading-relaxed">
        <p>
          What has changed over that period is not the plant but the nature of
          the work. Where a customer once supplied a drawing and required a
          component manufactured to it, the requirement is now more often a
          problem to be resolved: a part failing in service without an
          established cause, an assembly that must be produced in India in place
          of an import, or an application for which no proven design exists. The
          manufacturing base has been retained, and an engineering capability
          has been built around it.
        </p>
        <p>
          Following liberalization, the company began working with international
          polymer manufacturers on thermoplastic and castable systems. A
          substantial part of its present material capability derives from those
          relationships, and they are the reason that development work which
          would ordinarily be placed overseas can be undertaken at Lucknow.
        </p>
      </div>

      {/* RED BANNER */}
      <div className="mt-12 bg-brand-red rounded-xl py-6 text-center">
        <h3 className="text-white max-md:text-base max-md:px-4 text-xl md:text-2xl font-semibold tracking-wide px-4">
          Our record is best measured by the problems resolved, not by the
          volume dispatched.
        </h3>
      </div>
    </section>
  );
};

export default AboutHeader;
