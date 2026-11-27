import Image from "next/image";
import certificatesSVG from "@/public/certificatesSVG.svg";
import awardsSVG from "@/public/awardsSVG.svg";
import productsSVG from "@/public/productsSVG.svg";
import { DownloadsData } from "@/lib/data";
import { Download, Loader } from "lucide-react";

const DownloadFiles = () => {
  const certificatesData = DownloadsData.certificates;
  const awardsData = DownloadsData.awards;
  const productsData = DownloadsData.products;
  return (
    <div className="px-10 max-lg:px-4 max-w-[1920px] mx-auto w-full pt-15 max-lg:pt-8 pb-15 flex flex-col gap-15">
      <div>
        <div className="flex gap-6 items-center">
          <div>
            <Image src={certificatesSVG} alt="" />
          </div>
          <h3 className="uppercase font-bold text-brand-red tracking-widest">
            certificates
          </h3>
        </div>
        <div>
          {certificatesData.map((certificates, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-neutral-300 px-8 py-5 flex max-lg:flex-col items-center justify-between max-lg:items-start gap-10 my-8"
            >
              <div>
                <h4 className="font-bold text-lg max-lg:text-sm mb-1 text-brand-red">
                  {certificates.title}
                </h4>
                <span className="opacity-80 text-sm max-lg:text-[10px]">
                  {certificates.description}
                </span>
              </div>
              <div className="flex items-center gap-8">
                <button className="uppercase border border-neutral-400 px-4 py-2 rounded-md text-neutral-500">
                  pdf
                </button>
                <button
                  className={`capitalize px-4 py-2 rounded-md font-semibold w-48 flex gap-3 items-center justify-center ${certificates.downloadStatus === "download" ? "bg-brand-red text-white" : "bg-neutral-300 text-black/50"}`}
                >
                  <span>{certificates.downloadStatus}</span>
                  {certificates.downloadStatus === "awaiting aryan" ? (
                    <Loader size={16} />
                  ) : certificates.downloadStatus === "as written" ? (
                    <></>
                  ) : (
                    <Download size={16} />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex gap-6 items-center">
          <div>
            <Image src={awardsSVG} alt="" />
          </div>
          <h3 className="uppercase font-bold text-brand-red tracking-widest">
            Awards
          </h3>
        </div>
        <div>
          {awardsData.map((award, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-neutral-300 px-8 py-5 flex max-lg:flex-col items-center justify-between max-lg:items-start gap-10 my-8"
            >
              <div>
                <h4 className="font-bold text-lg max-lg:text-sm mb-1 text-brand-red">
                  {award.title}
                </h4>
                <span className="opacity-80 text-sm max-lg:text-[10px]">
                  {award.description}
                </span>
              </div>
              <div className="flex items-center gap-8">
                <button className="uppercase border border-neutral-400 px-4 py-2 rounded-md text-neutral-500">
                  pdf
                </button>
                <button
                  className={`capitalize px-4 py-2 rounded-md font-semibold w-48 flex gap-3 items-center justify-center ${award.downloadStatus === "download" ? "bg-brand-red text-white" : "bg-neutral-300 text-black/50"}`}
                >
                  <span>{award.downloadStatus}</span>
                  {award.downloadStatus === "awaiting aryan" ? (
                    <Loader size={16} />
                  ) : award.downloadStatus === "as written" ? (
                    <></>
                  ) : (
                    <Download size={16} />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex gap-6 items-center">
          <div>
            <Image src={productsSVG} alt="" />
          </div>
          <h3 className="uppercase font-bold text-brand-red tracking-widest">
            Products and Policy
          </h3>
        </div>
        <div>
          {productsData.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-neutral-300 px-8 py-5 flex max-lg:flex-col items-center justify-between max-lg:items-start gap-10 my-8"
            >
              <div>
                <h4 className="font-bold text-lg max-lg:text-sm mb-1 text-brand-red">
                  {product.title}
                </h4>
                <span className="opacity-80 text-sm max-lg:text-[10px]">
                  {product.description}
                </span>
              </div>
              <div className="flex items-center gap-8">
                <button className="uppercase border border-neutral-400 px-4 py-2 rounded-md text-neutral-500">
                  pdf
                </button>
                <button
                  className={`capitalize px-4 py-2 rounded-md font-semibold w-48 flex gap-3 items-center justify-center ${product.downloadStatus === "download" ? "bg-brand-red text-white" : "bg-neutral-300 text-black/50"}`}
                >
                  <span>{product.downloadStatus}</span>
                  {product.downloadStatus === "awaiting aryan" ? (
                    <Loader size={16} />
                  ) : product.downloadStatus === "as written" ? (
                    <></>
                  ) : (
                    <Download size={16} />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DownloadFiles;
