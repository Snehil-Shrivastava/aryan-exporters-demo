const CapabilitiesBanner = () => {
  return (
    <div className="bg-brand-red text-white py-15 max-xl:py-8 mt-25 max-lg:mt-0">
      <div className="max-w-[1920px] mx-auto px-10 grid grid-cols-3 gap-x-15 justify-center">
        <div className="border-l-4 border-white pl-6 max-w-87.5">
          <h4 className="font-bold text-xl mb-2">ISO 9001:2015</h4>
          <p>
            DNV, certificate C899464. First certified 18 May 1999, current
            validity to 17 May 2029. The scope reaches well beyond rail.
          </p>
        </div>
        <div className="border-l-4 border-white pl-6 max-w-87.5">
          <h4 className="font-bold text-xl mb-2">IRIS certification</h4>
          <p>
            DNV Business Assurance India, register C545422, valid to 3 August
            2028. Business category rolling stock.
          </p>
        </div>
        <div className="border-l-4 border-white pl-6 max-w-87.5">
          <h4 className="font-bold text-xl mb-2">IRIS certification</h4>
          <p>
            ISO/IEC 17025:2017 for the laboratory division. Certificate
            NABLT0726UP18835, valid to 28 July 2030.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CapabilitiesBanner;
