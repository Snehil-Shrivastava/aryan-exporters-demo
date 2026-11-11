import AboutCertificatesAwards from "@/components/AboutCertificatesAwards";
import AboutCollaborators from "@/components/AboutCollaborators";
import AboutHeader from "@/components/AboutHeader";
import AboutHistory from "@/components/AboutHistory";
import AboutLeadership from "@/components/AboutLeadership";
import GroupofCompanies from "@/components/GroupofCompanies";
import StartConvo from "@/components/StartConvo";

const About = () => {
  return (
    <div className="py-14 max-md:py-8 w-full font-montserrat">
      <div className="px-10 max-lg:px-4 max-w-[1920px] mx-auto w-full md:max-lg:pb-25 pb-35">
        <AboutHeader />
        <AboutHistory />
        <AboutLeadership />
        <GroupofCompanies />
        <AboutCertificatesAwards />
        <AboutCollaborators />
        <AboutCollaborators
          sectionHeading="Technology Partners"
          isLogoVisible={false}
        />
        <AboutCollaborators sectionHeading="Customers" isLogoVisible={false} />
      </div>
      <StartConvo />
    </div>
  );
};

export default About;
