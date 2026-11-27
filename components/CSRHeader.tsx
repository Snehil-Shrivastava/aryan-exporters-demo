const CSRHeader = () => {
  return (
    <div className="flex gap-15 mb-25 max-md:mb-0 items-stretch max-1440p:pt-1">
      <div className="flex flex-col gap-0 max-lg:gap-0 max-1440p:gap-6 w-full">
        <div>
          <p className="text-2xl max-lg:text-lg font-medium mb-2">
            Corporate Social Responsibility
          </p>
          <h1 className="max-lg:text-3xl lg:max-1440p:text-5xl 1440p:text-6xl font-bold text-brand-red 1440p:leading-16">
            What we do beyond the works
          </h1>
          <p className="leading-relaxed mt-6 text-lg max-lg:text-base">
            Everything a buyer or an auditor is likely to ask for, in one place,
            without a form in front of it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CSRHeader;
