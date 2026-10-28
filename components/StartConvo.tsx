import { ArrowUpRight } from "lucide-react";

const StartConvo = () => {
  return (
    <div className="bg-brand-red text-white py-15 max-xl:py-8 mt-25">
      <div className="max-w-[1920px] mx-auto px-10 flex max-lg:flex-col max-lg:items-start max-lg:gap-8 items-center justify-between">
        <div>
          <h4 className="font-bold max-lg:font-semibold max-lg:text-[10px] lg:max-xl:text-sm uppercase">
            start a conversation
          </h4>
          <h2 className="text-4xl max-lg:text-xl lg:max-xl:text-3xl font-semibold py-5 max-lg:py-3">
            Tell us what&apos;s failing. We&apos;ll engineer the fix.
          </h2>
          <p className="max-lg:text-xs lg:max-xl:text-sm">
            Send a drawing, a sample or a description. An engineer replies
            within 30 Days.
          </p>
        </div>
        <div>
          <button className="bg-white text-brand-red px-8 max-lg:px-4 lg:max-xl:px-5 py-5 max-lg:py-2 lg:max-xl:py-3 text-xl max-lg:text-base font-bold uppercase flex items-center gap-4 max-lg:gap-2">
            <span>contact us</span>
            <ArrowUpRight size={32} className="max-lg:w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartConvo;
