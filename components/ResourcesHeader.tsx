const ResourcesHeader = () => {
  return (
    <div className="flex gap-15 mb-25 max-md:mb-0 items-stretch pt-15 max-1440p:pt-1">
      <div className="flex flex-col gap-0 max-lg:gap-0 max-1440p:gap-6 w-full">
        <div>
          <p className="text-2xl max-lg:text-lg font-medium mb-2">Resources</p>
          <h1 className="max-lg:text-3xl lg:max-1440p:text-5xl 1440p:text-6xl font-bold text-brand-red 1440p:leading-16">
            Press and events
          </h1>
          <p className="leading-relaxed mt-6 text-lg max-lg:text-base">
            Four developments, each of which began with a requirement Indian
            Railways had not yet been able to meet. What follows in each case is
            what was asked for, what stood in the way, and what the component
            does in service today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResourcesHeader;
