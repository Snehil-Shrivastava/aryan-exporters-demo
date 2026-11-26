import ContactEnquiry from "@/components/ContactEnquiry";
import ContactHeader from "@/components/ContactHeader";

const Contact = () => {
  return (
    <div className="py-14 max-md:py-8 w-full font-montserrat">
      <div className="px-10 max-lg:px-4 max-w-[1920px] mx-auto w-full md:max-lg:pb-25 pb-35">
        <ContactHeader />
      </div>
      <div className="bg-[#f5f5f5]">
        <ContactEnquiry />
      </div>
    </div>
  );
};

export default Contact;
