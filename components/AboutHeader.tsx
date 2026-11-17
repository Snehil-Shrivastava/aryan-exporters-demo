// import headerImg from "@/public/images/About-Page-hero.JPG.webp";
// import Image from "next/image";

// const AboutHeader = () => {
//   return (
//     <section>
//       <div className="overflow-hidden">
//         <div className="relative w-full h-75 mb-6 rounded-2xl overflow-hidden md:w-[48%] md:float-right md:ml-8 md:mb-4 md:h-112.5 select-none">
//           <Image
//             src={headerImg}
//             alt="Industrial worker operating machinery"
//             fill
//             className="object-fit"
//             priority
//           />
//         </div>

//         <div>
//           <p className="text-2xl font-medium mb-2">About</p>
//           <h1 className="text-5xl md:text-6xl font-bold text-brand-red leading-16">
//             Aryan
//             <br />
//             Exporters
//           </h1>
//           <h2 className="text-2xl font-medium mt-6 mb-8">
//             Engineering since 1983
//           </h2>
//           <p className="text-gray-700 leading-relaxed mb-4">
//             Established at Lucknow in 1983, now supplying more than a hundred
//             components to railway, defence and industrial customers. History,
//             management and certifications.
//           </p>

//           <p className="text-gray-800 leading-relaxed mb-4">
//             Aryan Exporters was established at Lucknow in 1983, manufacturing a
//             single rubber product for a single customer. The works at Amausi now
//             extends to more than 6,000 square metres, of which 2,500 are covered
//             for rubber manufacturing, and incorporates its own mixing plant,
//             moulding shop, tool room, polyurethane plant and laboratory. The
//             catalogue today comprises more than a hundred components supplied to
//             the railway, defence, industrial and road sectors.
//           </p>
//         </div>
//       </div>

//       <div className="clear-both space-y-6 text-gray-800 leading-relaxed">
//         <p>
//           What has changed over that period is not the plant but the nature of
//           the work. Where a customer once supplied a drawing and required a
//           component manufactured to it, the requirement is now more often a
//           problem to be resolved: a part failing in service without an
//           established cause, an assembly that must be produced in India in place
//           of an import, or an application for which no proven design exists. The
//           manufacturing base has been retained, and an engineering capability
//           has been built around it.
//         </p>
//         <p>
//           Following liberalization, the company began working with international
//           polymer manufacturers on thermoplastic and castable systems. A
//           substantial part of its present material capability derives from those
//           relationships, and they are the reason that development work which
//           would ordinarily be placed overseas can be undertaken at Lucknow.
//         </p>
//       </div>

//       <div className="mt-12 bg-brand-red rounded-xl py-6 text-center">
//         <h3 className="text-white max-md:text-base max-md:px-4 text-xl md:text-2xl font-semibold tracking-wide px-4">
//           Our record is best measured by the problems resolved, not by the
//           volume dispatched.
//         </h3>
//       </div>
//     </section>
//   );
// };

// export default AboutHeader;

// ---------------------------------------------------

import headerImg from "@/public/images/About-Page-hero.JPG.webp";
import Image from "next/image";

const AboutHeader = () => {
  return (
    <section>
      {/* <div className="overflow-hidden">
        <div className="relative w-full h-75 mb-6 rounded-2xl overflow-hidden md:w-[48%] md:float-right md:ml-8 md:mb-4 md:h-112.5 select-none">
          <Image
            src={headerImg}
            alt="Industrial worker operating machinery"
            fill
            className="object-fit"
            priority
          />
        </div>

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
      </div> */}
      <div className="flex xl:max-1440p:gap-45 1440p:max-2xl:gap-30 2xl:max-1920p:gap-10 1920p:gap-40">
        <div className="xl:flex-[0.65]">
          <p className="text-2xl font-medium mb-2">About</p>
          <h1 className="text-5xl md:text-6xl font-bold text-brand-red md:leading-16">
            Aryan
            <br />
            Exporters
          </h1>
          <h2 className="text-2xl font-medium mt-6 mb-8">
            Engineering since 1983
          </h2>
          <div className="overflow-hidden rounded-2xl xl:hidden mb-8">
            <Image src={headerImg} alt="" />
          </div>
          <p className="text-gray-800 leading-relaxed mb-4">
            Established at Lucknow in 1983, now supplying more than a hundred
            components to railway, defence and industrial customers. History,
            management and certifications.
          </p>

          <p className="text-gray-800 leading-relaxed mb-4">
            Aryan Exporters was established at Lucknow in 1983, manufacturing a
            single rubber product for a single customer. The works at Amausi now
            extends to more than 6,000 square metres, of which 2,500 are covered
            for rubber manufacturing, and incorporates its own mixing plant,
            moulding shop, tool room, polyurethane plant and laboratory. The
            catalogue today comprises more than a hundred components supplied to
            the railway, defence, industrial and road sectors.
          </p>
          <p className="text-gray-800 leading-relaxed mb-4 xl:max-1440p:hidden">
            What has changed over that period is not the plant but the nature of
            the work. Where a customer once supplied a drawing and required a
            component manufactured to it, the requirement is now more often a
            problem to be resolved: a part failing in service without an
            established cause, an assembly that must be produced in India in
            place of an import, or an application for which no proven design
            exists. The manufacturing base has been retained, and an engineering
            capability has been built around it.
          </p>
          <p className="text-gray-800 leading-relaxed mb-4 xl:max-2xl:hidden">
            Following liberalization, the company began working with
            international polymer manufacturers on thermoplastic and castable
            systems. A substantial part of its present material capability
            derives from those relationships, and they are the reason that
            development work which would ordinarily be placed overseas can be
            undertaken at Lucknow.
          </p>
        </div>
        <div className="flex-[0.35] overflow-hidden rounded-2xl max-xl:hidden">
          <Image src={headerImg} alt="" />
        </div>
      </div>

      <div className="max-xl:hidden 1440p:hidden mt-6">
        <p className="text-gray-800 leading-relaxed mb-4">
          What has changed over that period is not the plant but the nature of
          the work. Where a customer once supplied a drawing and required a
          component manufactured to it, the requirement is now more often a
          problem to be resolved: a part failing in service without an
          established cause, an assembly that must be produced in India in place
          of an import, or an application for which no proven design exists. The
          manufacturing base has been retained, and an engineering capability
          has been built around it.
        </p>
        <p className="text-gray-800 leading-relaxed mb-4">
          Following liberalization, the company began working with international
          polymer manufacturers on thermoplastic and castable systems. A
          substantial part of its present material capability derives from those
          relationships, and they are the reason that development work which
          would ordinarily be placed overseas can be undertaken at Lucknow.
        </p>
      </div>
      <div className="max-1440p:hidden 2xl:hidden mt-6">
        <p className="text-gray-800 leading-relaxed mb-4">
          Following liberalization, the company began working with international
          polymer manufacturers on thermoplastic and castable systems. A
          substantial part of its present material capability derives from those
          relationships, and they are the reason that development work which
          would ordinarily be placed overseas can be undertaken at Lucknow.
        </p>
      </div>

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
