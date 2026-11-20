const LabTestingOwnProducts = () => {
  return (
    <div className="px-10 max-lg:px-4 max-w-[1920px] mx-auto w-full max-lg:pb-15">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-start gap-1.5 xl:flex-row xl:items-center xl:gap-10">
          <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold capitalize">
            Our own products
          </h2>
          <p className="lg:flex lg:flex-col py-0 text-xs md:text-sm xl:text-xs 2xl:text-sm text-gray-600">
            <span>How we test </span>
            <span>our own parts</span>
          </p>
        </div>
        <div>
          <p className="leading-relaxed mt-6 max-lg:mt-0 text-lg max-lg:text-sm">
            We check quality at three stages: incoming material, in process, and
            finished product. Every compound batch goes on the rheometer before
            it is allowed to be moulded. New products then go through
            accelerated endurance testing, and then trials in service, before
            they are released.
          </p>
          <p className="leading-relaxed mt-6 text-lg max-lg:text-sm">
            A part that fails on the rig goes back to design, not forward to
            production. In 1999 a long life elastomeric pad developed here
            passed one million cycles on fatigue test at the RDSO laboratory.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LabTestingOwnProducts;
