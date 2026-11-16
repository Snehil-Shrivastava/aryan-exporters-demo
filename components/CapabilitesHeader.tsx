import React from "react";

const CapabilitesHeader = () => {
  return (
    <section className="px-10 max-lg:px-4 max-w-[1920px] mx-auto w-full">
      <div className="overflow-hidden mb-15">
        <div>
          <p className="text-2xl font-medium mb-2">Capabilities</p>
          <h1 className="text-5xl md:text-6xl font-bold text-brand-red leading-16">
            Design, manufacture and test, on one site
          </h1>
          <p className="leading-relaxed mt-6 text-lg">
            A requirement arrives as a drawing, a sample or a failure. It leaves
            as a component with a test report behind it. Every stage in between
            happens at Amausi, under one roof and one quality system.
          </p>
        </div>
      </div>
      <div className="text-neutral-800 leading-relaxed grid grid-cols-2 gap-x-15">
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
          <div className="flex gap-8 items-center">
            <h2 className="inline-block font-bold text-4xl">
              6,000 m<sup>2</sup>
            </h2>
            <p className="inline-block">The works at Amausi, Lucknow</p>
          </div>
          <hr className="border-neutral-300" />
          <div className="flex gap-8 items-center">
            <h2 className="inline-block font-bold text-4xl">
              2,500 m<sup>2</sup>
            </h2>
            <p className="inline-block">Covered, for rubber manufacturing</p>
          </div>
          <hr className="border-neutral-300" />
          <div className="flex gap-8 items-center">
            <h2 className="inline-block font-bold text-4xl">3 stages</h2>
            <p className="inline-block">
              Design and R&D, manufacture, testing — none of them outsourced
            </p>
          </div>
        </div>
      </div>
      <div className="w-full aspect-3/1.5 bg-neutral-200 rounded-xl mt-15" />
    </section>
  );
};

export default CapabilitesHeader;
