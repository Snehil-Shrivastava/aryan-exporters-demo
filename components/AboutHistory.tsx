import HistoryTimeline from "./HistoryTimeline";

const AboutHistory = () => {
  return (
    <div className="my-40 flex flex-col">
      <div className="flex flex-col items-start gap-1.5 xl:flex-row xl:items-center xl:gap-10">
        <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold capitalize">
          History and Milestones
        </h2>
        <p className="lg:flex lg:flex-col py-0 text-xs md:text-sm xl:text-xs 2xl:text-sm text-gray-600">
          <span>Milestones,</span>
          <span>1983 to 2026</span>
        </p>
      </div>
      <div>
        <HistoryTimeline />
      </div>
    </div>
  );
};

export default AboutHistory;
