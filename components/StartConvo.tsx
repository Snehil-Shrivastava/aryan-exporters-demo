import { ArrowUpRight } from "lucide-react";

const StartConvo = () => {
  return (
    <div className="bg-brand-red text-white py-15 mt-25">
      <div className="max-w-[1920px] mx-auto px-10 flex items-center justify-between">
        <div>
          <h4 className="font-bold uppercase">start a conversation</h4>
          <h2 className="text-4xl font-semibold py-5">
            Tell us what&apos;s failing. We&apos;ll engineer the fix.
          </h2>
          <p>
            Send a drawing, a sample or a description. An engineer replies
            within 30 Days.
          </p>
        </div>
        <div>
          <button className="bg-white text-brand-red px-8 py-5 text-xl font-bold uppercase flex items-center gap-4">
            <span>contact us</span>
            <ArrowUpRight size={32} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartConvo;
