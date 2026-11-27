import Image from "next/image";
import upcomingEvent from "@/public/images/events_upcoming.png";

const UpcomingEvents = () => {
  return (
    <div className="flex flex-col gap-10 max-lg:gap-6 max-md:pt-15">
      <div className="flex flex-col items-start gap-1.5 xl:flex-row xl:items-center xl:gap-10">
        <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold capitalize">
          Upcoming
        </h2>
        <p className="flex xl:flex-col py-0 text-xs md:text-sm xl:text-xs 2xl:text-sm text-gray-600">
          <span>Where to&nbsp;</span>
          <span>find us</span>
        </p>
      </div>
      <div className="flex max-xl:flex-col gap-15 lg:max-xl:gap-10 xl:max-1440p:gap-8 max-lg:gap-8">
        <div className="overflow-hidden rounded-xl w-full relative max-md:h-80 md:max-lg:h-100 lg:max-xl:h-130 xl:max-w-160 xl:h-100">
          <Image
            src={upcomingEvent}
            alt=""
            className="max-xl:object-cover"
            fill
          />
        </div>
        <div className="flex flex-col justify-center items-start">
          <h4 className="uppercase font-medium tracking-widest max-lg:text-sm">
            date and time
          </h4>
          <h2 className="text-[42px] 1440p:leading-12 max-lg:text-3xl lg:max-1440p:text-4xl font-bold text-brand-red mt-3">
            Exhibition name
          </h2>
          <p className="leading-relaxed mt-6 text-lg max-lg:text-base">
            Hall and stand to be confirmed. Six product boards on the stand,
            covering bogie, locomotive, wagon, electrical components, air
            springs and side bearers.
          </p>
          <button className="px-6 py-2.5 border border-neutral-300 rounded-lg font-semibold max-lg:text-sm inline-block mt-6">
            Book a meeting at the stand
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
