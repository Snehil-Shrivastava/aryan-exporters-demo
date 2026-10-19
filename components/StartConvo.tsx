const StartConvo = () => {
  return (
    <div className="bg-brand-blue text-white py-15 my-25">
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
          <button className="bg-white text-brand-blue px-8 py-3 rounded-lg text-xl font-bold uppercase">
            contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartConvo;
