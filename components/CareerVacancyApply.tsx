const CareerVacancyApply = () => {
  return (
    <div className="px-10 max-lg:px-4 max-w-[1920px] mx-auto w-full pt-15 pb-15">
      <div className="flex max-lg:flex-col gap-30 max-lg:gap-20 max-md:pt-15">
        <div className="flex flex-col justify-center items-start flex-1">
          <h4 className="uppercase font-medium tracking-[12px] max-lg:text-sm">
            vacancies
          </h4>
          <h2 className="text-[36px] 1440p:leading-10 max-lg:text-2xl lg:max-1440p:text-3xl font-bold text-brand-red mt-3">
            Open roles
          </h2>
          <p className="leading-relaxed mt-6 text-lg max-lg:text-base">
            We still read everything that arrives and we keep applications on
            file for a year. If the work above sounds like yours, write to us
            anyway.
          </p>
          <button className="px-6 py-2.5 border border-neutral-300 rounded-lg font-semibold max-lg:text-sm text-white bg-brand-red inline-block mt-6">
            Send an open application
          </button>
        </div>
        <div className="flex flex-col justify-center items-start flex-1">
          <h4 className="uppercase font-medium tracking-[12px] max-lg:text-sm">
            applying
          </h4>
          <h2 className="text-[36px] 1440p:leading-10 max-lg:text-2xl lg:max-1440p:text-3xl font-bold text-brand-red mt-3">
            How to apply
          </h2>
          <p className="leading-relaxed mt-6 text-lg max-lg:text-base">
            Write to careers@aryanexp.com with a CV and a short paragraph about
            something you have built, repaired or worked out. We reply to
            everyone, including to say no.
          </p>
          <p className="leading-relaxed mt-6 text-lg max-lg:text-base">
            Apprenticeships and ITI placements go through the works. Same
            address, marked for the works.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareerVacancyApply;
