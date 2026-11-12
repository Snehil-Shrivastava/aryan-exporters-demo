import AboutCertificatesAwards from "@/components/AboutCertificatesAwards";
import AboutCollaborators from "@/components/AboutCollaborators";
import AboutHeader from "@/components/AboutHeader";
import AboutHistory from "@/components/AboutHistory";
import AboutLeadership from "@/components/AboutLeadership";
import GroupofCompanies from "@/components/GroupofCompanies";
import StartConvo from "@/components/StartConvo";
import { Customers, Partners } from "@/lib/data";

const About = () => {
  const partners = Partners;
  const customers = Customers;
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
          logoData={partners}
        />
        <AboutCollaborators sectionHeading="Customers" logoData={customers} />
      </div>
      <StartConvo />
    </div>
  );
};

export default About;
