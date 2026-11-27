const Announcements = () => {
  return (
    <div className="px-10 max-lg:px-4 max-w-[1920px] mx-auto w-full pt-15 pb-15">
      <div className="flex flex-col gap-10 max-lg:gap-6">
        <div className="flex flex-col items-start gap-1.5 xl:flex-row xl:items-center xl:gap-10">
          <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold capitalize">
            Announcements
          </h2>
          <p className="flex xl:flex-col py-0 text-xs md:text-sm xl:text-xs 2xl:text-sm text-gray-600">
            <span>What we&nbsp;</span>
            <span>have announced</span>
          </p>
        </div>
        <div className="bg-white rounded-xl px-8 max-md:px-4 py-6 flex flex-col gap-8 max-lg:gap-12">
          <div className="flex max-lg:flex-col max-lg:items-start items-center gap-10 max-lg:gap-3">
            <div className="max-lg:w-65 lg:max-xl:w-50 xl:w-39.5">
              <h3 className="shrink-0 rounded-lg bg-neutral-100 px-5 max-md:px-2.5 py-3 max-lg:text-xs lg:text-lg font-semibold transition peer-focus-visible:ring-2 peer-focus-visible:ring-[#a42826]/40 inline-block border border-neutral-300">
                July 2026
              </h3>
            </div>
            <p className="max-lg:text-xs">
              The laboratory at the works receives NABL accreditation to ISO/IEC
              17025:2017 and opens for testing work from outside customers
            </p>
          </div>
          <div className="flex max-lg:flex-col max-lg:items-start items-center gap-10 max-lg:gap-3">
            <div className="max-lg:w-65 lg:max-xl:w-50 xl:w-39.5">
              <h3 className="shrink-0 rounded-lg bg-neutral-100 px-5 max-md:px-2.5 py-3 max-lg:text-xs lg:text-lg font-semibold transition peer-focus-visible:ring-2 peer-focus-visible:ring-[#a42826]/40 inline-block border border-neutral-300">
                August 2025
              </h3>
            </div>
            <p className="max-lg:text-xs">
              IRIS certification for rolling stock, covering the air spring
              assembly and constant contact side bearers
            </p>
          </div>
          <div className="flex max-lg:flex-col max-lg:items-start items-center gap-10 max-lg:gap-3">
            <div className="max-lg:w-65 lg:max-xl:w-50 xl:w-39.5">
              <h3 className="shrink-0 rounded-lg bg-neutral-100 px-5 max-md:px-2.5 py-3 max-lg:text-xs lg:text-lg font-semibold transition peer-focus-visible:ring-2 peer-focus-visible:ring-[#a42826]/40 inline-block border border-neutral-300">
                August 2025
              </h3>
            </div>
            <p className="max-lg:text-xs">
              The 180 kN air spring assembly is approved, ending a development
              programme that began in 2018.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
