import React from "react";

const CapabilitesHeader = () => {
  return (
    <section className="px-10 max-lg:px-4 max-w-[1920px] mx-auto w-full">
      <div className="overflow-hidden mb-15 max-lg:mb-8">
        <div>
          <p className="text-2xl max-lg:text-lg font-medium mb-2">
            Capabilities
          </p>
          <h1 className="max-lg:text-3xl lg:max-1440p:text-5xl 1440p:text-6xl font-bold text-brand-red 1440p:leading-16">
            Design, manufacture and test, on one site
          </h1>
          <p className="leading-relaxed mt-6 text-lg max-lg:text-base">
            A requirement arrives as a drawing, a sample or a failure. It leaves
            as a component with a test report behind it. Every stage in between
            happens at Amausi, under one roof and one quality system.
          </p>
        </div>
      </div>
      <div className="text-neutral-800 leading-relaxed grid grid-cols-2 max-lg:grid-cols-1 max-lg:gap-y-10 gap-x-15">
        <p>
          The works at Amausi, Lucknow, extends to more than 6,000 square
          metres, of which 2,500 are covered for rubber manufacturing. It is an
          integrated plant: an automatic internal mixer, an engineering workshop
          and tool room, metal blanking, surface preparation and adhesive
          application, mixing and moulding, a cast and thermoplastic
          polyurethane shop, a technical laboratory for development and quality
          assurance, and raw and finished stores. Holding all of it on one site
          is not a statement about scale. It is the reason a change to a mould
          takes an afternoon rather than a purchase order, and the reason the
          engineer who tested a component can walk out and speak to the person
          who moulded it.
        </p>
        <div className="flex flex-col justify-center gap-6">
          <div className="flex max-lg:flex-col gap-8 max-lg:gap-4 items-center">
            <h2 className="inline-block font-bold text-4xl max-lg:text-2xl lg:max-xl:text-2xl">
              6,000 m<sup>2</sup>
            </h2>
            <p className="inline-block max-lg:text-sm max-lg:text-center max-w-75 flex-1">
              The works at Amausi, Lucknow
            </p>
          </div>
          <hr className="border-neutral-300" />
          <div className="flex max-lg:flex-col gap-8 max-lg:gap-4 items-center">
            <h2 className="inline-block font-bold text-4xl max-lg:text-2xl lg:max-xl:text-2xl">
              2,500 m<sup>2</sup>
            </h2>
            <p className="inline-block max-lg:text-sm max-lg:text-center max-w-75 flex-1">
              Covered, for rubber manufacturing
            </p>
          </div>
          <hr className="border-neutral-300" />
          <div className="flex max-lg:flex-col gap-8 max-lg:gap-4 items-center">
            <h2 className="inline-block font-bold text-4xl max-lg:text-2xl lg:max-xl:text-2xl">
              3 stages
            </h2>
            <p className="inline-block max-lg:text-sm max-lg:text-center max-w-75 flex-1">
              Design and R&D, manufacture, testing — none of them outsourced
            </p>
          </div>
        </div>
      </div>
      <div className="w-full aspect-3/1.5 max-lg:aspect-3/2 bg-neutral-200 rounded-xl mt-15 max-lg:mb-20" />
    </section>
  );
};

export default CapabilitesHeader;
