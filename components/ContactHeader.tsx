import { GoogleMapsEmbed } from "@next/third-parties/google";
import Image from "next/image";
import linkedInSVG from "@/public/linkedin.svg";

const ContactHeader = () => {
  return (
    <div className="flex gap-15 mb-25 max-md:mb-0 items-stretch pt-15 max-1440p:pt-1">
      <div className="flex-1 max-1440p:flex-[0.75] max-xl:flex-1 flex flex-col gap-0 max-lg:gap-0 max-1440p:gap-6">
        <div>
          <p className="text-2xl max-lg:text-lg font-medium mb-2">Contact</p>
          <h1 className="max-lg:text-3xl lg:max-1440p:text-5xl 1440p:text-6xl font-bold text-brand-red 1440p:leading-16">
            Get in touch
          </h1>
          <div className="overflow-hidden rounded-xl xl:hidden max-lg:mt-5 lg:max-xl:mt-8">
            <GoogleMapsEmbed
              apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
              height={400}
              width="100%"
              mode="place"
              q="Aryan+Exporters"
              style="height:100% !important;width:100% !important;"
            />
          </div>
        </div>
        <div>
          <p className="leading-relaxed mt-6 text-lg max-lg:text-sm">
            Send a drawing, a sample, or a description of what is failing. An
            engineer reads it, and you get a reply within one working day.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3.5">
            <div className="bg-[#f5f5f5] rounded-lg px-6 py-3 col-span-2 border border-neutral-300">
              <h4 className="font-bold text-lg mb-1">
                Registered Office and Works
              </h4>
              <p className="opacity-80 text-sm">
                B-1 Industrial Area, Amausi, Lucknow 226008, Uttar Pradesh,
                India
              </p>
            </div>
            <div className="bg-[#f5f5f5] rounded-lg px-6 py-3 col-span-2 border border-neutral-300">
              <h4 className="font-bold text-lg mb-1">Laboratory</h4>
              <p className="opacity-80 text-sm">
                Lab Division, at the same address. NABL accredited to ISO/IEC
                17025:2017, certificate NABLT0726UP18835.
              </p>
            </div>
            <div className="bg-[#f5f5f5] rounded-lg px-6 py-3 col-span-2 border border-neutral-300">
              <h4 className="font-bold text-lg mb-1">Corporate Office</h4>
              <p className="opacity-80 text-sm">
                T-31 Green Park Main New Delhi 110016, India
              </p>
            </div>
            <div className="bg-[#f5f5f5] rounded-lg px-6 py-3 border border-neutral-300">
              <h4 className="font-bold text-lg mb-1">Contact</h4>
              <p className="opacity-80 text-sm">
                +91 73180 01900, 0522-2437456
              </p>
            </div>
            <div className="bg-[#f5f5f5] rounded-lg px-6 py-3 border border-neutral-300">
              <h4 className="font-bold text-lg mb-1">Mail</h4>
              <p className="opacity-80 text-sm">mail@aryanexp.com</p>
            </div>
            <div className="bg-[#f5f5f5] rounded-lg px-6 py-3 border border-neutral-300">
              <h4 className="font-bold text-lg mb-1">Hours</h4>
              <p className="opacity-80 text-sm">
                Monday to Saturday, 9:00 to 19:00 IST
              </p>
            </div>
            <div className="bg-[#f5f5f5] rounded-lg px-6 py-3 border border-neutral-300 flex items-center gap-6">
              <h4 className="font-bold text-lg mb-1">Connect</h4>
              <Image src={linkedInSVG} alt="linkedIn" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-hidden rounded-xl max-xl:hidden">
        <GoogleMapsEmbed
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
          height="100%"
          width="100%"
          mode="place"
          q="Aryan+Exporters"
          style="height:100% !important;width:100% !important;"
        />
      </div>
    </div>
  );
};

export default ContactHeader;
