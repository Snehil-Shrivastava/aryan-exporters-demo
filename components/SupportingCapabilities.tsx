import { SupportingCapabilities as Capabilities } from "@/lib/data";

const SupportingCapabilities = () => {
  const supportingcapabilities = Capabilities;
  return (
    <div className={`flex flex-col gap-15 max-lg:gap-8 max-lg:pb-15`}>
      <div>
        <h4 className="uppercase font-medium tracking-widest max-lg:text-sm">
          also on site
        </h4>
        <h2 className="text-[42px] max-lg:text-3xl lg:max-1440p:text-4xl font-bold text-brand-red mt-3">
          Four supporting capabilities that make the three stages possible
        </h2>
        <div className="flex flex-col gap-10 max-lg:gap-6 mt-10 max-lg:mt-4 lg:max-1440p:mt-6">
          <h3 className="font-semibold text-xl max-lg:text-base">
            None of these is a service sold on its own. They are the reason the
            three stages above can be run without leaving the site, and the
            reason a change takes days rather than months.
          </h3>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        {supportingcapabilities.map((capability) => (
          <div
            key={capability.index}
            className="border border-neutral-300 rounded-lg p-6"
          >
            <div className="flex gap-3 text-xl max-lg:text-lg font-bold">
              <span className="opacity-50">{capability.index}</span>
              <h3>{capability.heading}</h3>
            </div>
            <div className="flex flex-col gap-6 mt-4 text-neutral-600 max-lg:text-sm">
              {capability.para1 && <p>{capability.para1}</p>}
              {capability.para2 && <p>{capability.para2}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportingCapabilities;
