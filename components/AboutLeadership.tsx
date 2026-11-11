import Image from "next/image";
import { LeadershipData } from "@/lib/data";

const AboutLeadership = () => {
  const leadership = LeadershipData;
  return (
    <div className="my-40 flex flex-col">
      <div className="flex flex-col items-start gap-1.5 xl:flex-row xl:items-center xl:gap-10">
        <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold capitalize">
          Leadership
        </h2>
        <p className="lg:flex lg:flex-col py-0 text-xs md:text-sm xl:text-xs 2xl:text-sm text-gray-600">
          {/* <span>Aryan Exporters is one of several companies:&nbsp;</span> */}
          <span>The management team</span>
        </p>
      </div>
      <div className="flex flex-wrap max-lg:flex-col gap-30 py-15 items-center justify-center">
        {leadership.map((leader, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div className="relative w-full h-full max-w-52 rounded-4xl overflow-hidden">
              <Image src={leader.image} alt="" />
            </div>
            <div className="text-center mt-6">
              <h4 className="font-bold text-lg">{leader.name}</h4>
              <span>{leader.designation}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutLeadership;
