const bannerData = [
  {
    title: "What people use us for",
    description:
      "Qualifying a material before a production decision. Checking incoming material against a specification. Investigating a part that has failed in service. Running a finished part to a set number of cycles.",
  },
  {
    title: "What we test",
    description:
      "Natural and synthetic rubber, cast and thermoplastic polyurethane, thermoplastic elastomers, and rubber bonded to metal.",
  },
  {
    title: "What you get back",
    description:
      "A report with the method, the conditions, the result, and the measurement uncertainty where it applies. Where the test is inside our accredited scope the report carries the NABL symbol. Where it is not, the report says so.",
  },
];

const LabTestingBanner = () => {
  return (
    <div
      className={`bg-brand-red text-white py-15 max-xl:py-8 mt-25 max-lg:mt-0`}
    >
      <div className="max-w-[1920px] mx-auto px-10 max-lg:px-4">
        <div>
          <h4 className="font-bold max-lg:font-semibold max-lg:text-[10px] lg:max-xl:text-sm uppercase">
            for outside customers
          </h4>
          <h2 className="text-4xl max-lg:text-xl lg:max-xl:text-3xl font-semibold py-5 max-lg:py-3">
            Testing for your parts
          </h2>
          <p className="max-lg:text-xs lg:max-xl:text-sm">
            The laboratory takes work from customers who are not buying parts
            from us.
          </p>
        </div>
        <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-15 max-lg:gap-6 lg:max-xl:gap-10 pt-10">
          {bannerData.map((data, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-neutral-300 px-8 py-5 text-black"
            >
              <h4 className="font-bold text-lg mb-1">{data.title}</h4>
              <span className="opacity-80 text-sm">{data.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LabTestingBanner;
