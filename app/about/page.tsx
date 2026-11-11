import AboutHeader from "@/components/AboutHeader";
import AboutHistory from "@/components/AboutHistory";
import AboutLeadership from "@/components/AboutLeadership";
import GroupofCompanies from "@/components/GroupofCompanies";
import StartConvo from "@/components/StartConvo";

const About = () => {
  return (
    <div className="py-14 max-md:py-8 w-full font-montserrat">
      <div className="px-10 max-lg:px-4 max-w-[1920px] mx-auto w-full md:max-lg:pb-25">
        <AboutHeader />
        <AboutHistory />
        <AboutLeadership />
        <GroupofCompanies />
      </div>
      <StartConvo />
    </div>
  );
};

export default About;
