import StartConvo from "@/components/StartConvo";
import SuccessStoriesHeader from "@/components/SuccessStoriesHeader";

const SuccessStories = () => {
  return (
    <div className="py-14 max-md:py-8 w-full font-montserrat">
      <div className="px-10 max-lg:px-4 max-w-[1920px] mx-auto w-full md:max-lg:pb-25 pb-35">
        <SuccessStoriesHeader />
      </div>
      <StartConvo />
    </div>
  );
};

export default SuccessStories;
