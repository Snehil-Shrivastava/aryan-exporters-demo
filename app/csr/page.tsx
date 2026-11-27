import CSRHeader from "@/components/CSRHeader";
import CSRStories from "@/components/CSRStories";
import StartConvo from "@/components/StartConvo";
import { CSRStoriesData } from "@/lib/data";
import Image from "next/image";

import noteSVG from "@/public/note.svg";

const CSR = () => {
  const csrStories = CSRStoriesData;
  return (
    <div className="py-14 max-md:py-8 w-full font-montserrat">
      <div className="px-10 max-lg:px-4 max-w-[1920px] mx-auto w-full md:max-lg:pb-25">
        <CSRHeader />
      </div>
      {csrStories.map((csr, index) => (
        <CSRStories
          key={index}
          title={csr.title}
          header={csr.header}
          bodyTxt1={csr.bodyTxt1}
          bodyTxt2={csr.bodyTxt2}
          image={csr.image}
          bgColor={index % 2 !== 0 ? "bg-[#f5f5f5]" : ""}
          className={index % 2 !== 0 ? "flex-row-reverse" : ""}
        />
      ))}
      <div className="bg-[#f5f5f5]">
        <div className="max-w-[1920px] mx-auto flex max-xl:flex-col max-lg:items-start max-xl:gap-8 gap-20 items-center max-xl:px-10 px-15 py-10">
          <div>
            <Image src={noteSVG} alt="" />
          </div>
          <p>
            None of this is a programme with a budget line and an annual report.
            It is a company that has been in one place for forty-three years,
            doing what a neighbour does. We would rather say that than dress it
            up.
          </p>
        </div>
      </div>
      <StartConvo marginTop="mt-0" />
    </div>
  );
};

export default CSR;
