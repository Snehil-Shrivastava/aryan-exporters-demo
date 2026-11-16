import Image, { StaticImageData } from "next/image";
import airspringstory from "@/public/images/success_story_air_spring.png";
import { JSX } from "react/jsx-runtime";

const headingClass =
  "uppercase font-semibold text-xl max-lg:text-base tracking-widest";
const containerClass =
  "flex flex-col gap-6 max-lg:gap-3 max-lg:text-sm max-lg:leading-5";

const SuccessStoriesSection = ({
  story,
  storyTitle,
  text1,
  image,
  opportunityTxt,
  challengeTxt,
  achievementTxt,
  tags,
  opportunityColSpan,
  challengeColSpan,
  achievementColSpan,
  tagsColSpan,
}: {
  story?: string;
  storyTitle?: string;
  text1?: string;
  image: StaticImageData[];
  opportunityTxt?: JSX.Element;
  challengeTxt?: JSX.Element;
  achievementTxt?: JSX.Element;
  tags: string[];
  opportunityColSpan?: string;
  challengeColSpan?: string;
  achievementColSpan?: string;
  tagsColSpan?: string;
}) => {
  return (
    <div className={`flex gap-25 xl:max-1440p:gap-15`}>
      <div className="lg:pb-10">
        <h4 className="uppercase font-medium tracking-widest max-lg:text-sm">
          {story}
        </h4>
        <h2 className="text-[42px] 1440p:leading-12 max-lg:text-3xl lg:max-1440p:text-4xl font-bold text-brand-red mt-3">
          {storyTitle}
        </h2>
        <div className="flex flex-col gap-10 max-lg:gap-6 mt-10 max-lg:mt-4 lg:max-1440p:mt-6">
          <h3 className="font-semibold text-xl max-lg:text-base">{text1}</h3>
          <div className="flex justify-between gap-15">
            {image.map((image, i) => (
              <div key={i} className="relative overflow-hidden rounded-xl">
                <Image src={image} alt="" />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-x-15 gap-y-20 max-lg:gap-y-15 mt-10 max-xl:mt-4">
            {opportunityTxt && (
              <div
                className={`${containerClass} ${opportunityColSpan ? opportunityColSpan : ""}`}
              >
                <h4 className={`${headingClass}`}>the opportunity</h4>
                {opportunityTxt}
              </div>
            )}
            {challengeTxt && (
              <div
                className={`${containerClass} ${challengeColSpan ? challengeColSpan : ""}`}
              >
                <h4 className={`${headingClass}`}>the challenge</h4>
                {challengeTxt}
              </div>
            )}
            {achievementTxt && (
              <div
                className={`${containerClass} ${achievementColSpan ? achievementColSpan : ""}`}
              >
                <h4 className={`${headingClass}`}>the achievement</h4>
                {achievementTxt}
              </div>
            )}
            {tags && (
              <div
                className={`flex flex-col justify-end ${tagsColSpan ? tagsColSpan : ""}`}
              >
                <div className="flex flex-wrap gap-8 max-lg:gap-4 mt-auto">
                  {tags.map((tag, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 border border-neutral-400 rounded-lg font-semibold max-lg:text-sm"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesSection;
