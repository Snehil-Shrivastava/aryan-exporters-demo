import LabTestingAwards from "@/components/LabTestingAwards";
import LabTestingCertificate from "@/components/LabTestingCertificate";
import LabTestingHeader from "@/components/LabTestingHeader";
import StartConvo from "@/components/StartConvo";

const LabTesting = () => {
  return (
    <div className="py-14 max-md:py-8 w-full font-montserrat">
      <div className="px-10 max-lg:px-4 max-w-[1920px] mx-auto w-full md:max-lg:pb-25">
        <LabTestingHeader />
        <LabTestingCertificate />
      </div>
      <LabTestingAwards />
      <StartConvo />
    </div>
  );
};

export default LabTesting;
