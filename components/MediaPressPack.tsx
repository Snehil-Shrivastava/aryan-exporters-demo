const MediaPressPack = () => {
  return (
    <div className="px-10 max-lg:px-4 max-w-[1920px] mx-auto w-full pt-15 pb-15">
      <div className="flex max-lg:flex-col gap-30 max-lg:gap-20 max-md:pt-15">
        <div className="flex flex-col justify-center items-start flex-1">
          <h4 className="uppercase font-medium tracking-widest max-lg:text-sm">
            media
          </h4>
          <h2 className="text-[36px] 1440p:leading-10 max-lg:text-2xl lg:max-1440p:text-3xl font-bold text-brand-red mt-3">
            Media and exhibition enquiries
          </h2>
          <p className="leading-relaxed mt-6 text-lg max-lg:text-base">
            Fatima handles press, certification and the exhibition calendar.
            Write to press@aryanexp.com and you will have a reply the same day.
          </p>
        </div>
        <div className="flex flex-col justify-center items-start flex-1">
          <h4 className="uppercase font-medium tracking-widest max-lg:text-sm">
            presspack
          </h4>
          <h2 className="text-[36px] 1440p:leading-10 max-lg:text-2xl lg:max-1440p:text-3xl font-bold text-brand-red mt-3">
            Press pack
          </h2>
          <p className="leading-relaxed mt-6 text-lg max-lg:text-base">
            One archive: the logo in vector and raster, four factory photographs
            cleared for publication, two leadership portraits, a one-page fact
            sheet, and the three certificates. The photographs are free to use
            with a credit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MediaPressPack;
