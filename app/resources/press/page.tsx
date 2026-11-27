import Announcements from "@/components/Announcements";
import MediaPressPack from "@/components/MediaPressPack";
import ResourcesHeader from "@/components/ResourcesHeader";
import StartConvo from "@/components/StartConvo";
import UpcomingEvents from "@/components/UpcomingEvents";

const PressResources = () => {
  return (
    <div className="py-14 max-md:py-8 w-full font-montserrat">
      <div className="px-10 max-lg:px-4 max-w-[1920px] mx-auto w-full md:max-lg:pb-25 pb-35">
        <ResourcesHeader />
        <UpcomingEvents />
      </div>
      <div className="bg-[#f5f5f5]">
        <Announcements />
      </div>
      <MediaPressPack />
      <StartConvo />
    </div>
  );
};

export default PressResources;
