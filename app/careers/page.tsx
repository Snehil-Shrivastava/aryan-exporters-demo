import CareersHeader from "@/components/CareersHeader";
import CareersWork from "@/components/CareersWork";
import CareerVacancyApply from "@/components/CareerVacancyApply";
import StartConvo from "@/components/StartConvo";

const Careers = () => {
  return (
    <div className="py-14 max-md:py-8 w-full font-montserrat">
      <div className="px-10 max-lg:px-4 max-w-[1920px] mx-auto w-full md:max-lg:pb-25 pb-35">
        <CareersHeader />
      </div>
      <div className="bg-[#f5f5f5]">
        <CareersWork />
      </div>
      <CareerVacancyApply />
      <StartConvo />
    </div>
  );
};

export default Careers;
