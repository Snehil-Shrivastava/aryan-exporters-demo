import React from "react";

const SuccessStoriesHeader = () => {
  return (
    <section>
      <div className="overflow-hidden mb-15 max-lg:mb-8 px-10 max-lg:px-4 max-w-[1920px] mx-auto w-full">
        <div>
          <p className="text-2xl max-lg:text-lg font-medium mb-2">Success</p>
          <h1 className="max-lg:text-3xl lg:max-1440p:text-5xl 1440p:text-6xl font-bold text-brand-red 1440p:leading-16">
            Success stories
          </h1>
          <p className="leading-relaxed mt-6 text-lg max-lg:text-base">
            Four developments, each of which began with a requirement Indian
            Railways had not yet been able to meet. What follows in each case is
            what was asked for, what stood in the way, and what the component
            does in service today.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesHeader;
