import StartConvo from "@/components/StartConvo";
import SuccessStoriesSection from "@/components/SuccessStories";
import SuccessStoriesHeader from "@/components/SuccessStoriesHeader";
import { Story1Arr, Story2Arr, Story3Arr, Story4Arr } from "@/lib/data";

const SuccessStories = () => {
  const stories1 = Story1Arr;
  const stories2 = Story2Arr;
  const stories3 = Story3Arr;
  const stories4 = Story4Arr;
  return (
    <div className="py-14 max-md:py-8 w-full font-montserrat">
      <SuccessStoriesHeader />
      <div className="flex flex-col gap-20 max-1440p:gap-20 mt-20 max-lg:mt-6">
        <SuccessStoriesSection
          story={stories1.story}
          storyTitle={stories1.storyTitle}
          text1={stories1.text1}
          image={stories1.image}
          opportunityTxt={stories1.oppportunityTxt}
          challengeTxt={stories1.challengeTxt}
          achievementTxt={stories1.achievementTxt}
          tags={stories1.tags}
        />
        <SuccessStoriesSection
          story={stories2.story}
          storyTitle={stories2.storyTitle}
          text1={stories2.text1}
          image={stories2.image}
          opportunityTxt={stories2.oppportunityTxt}
          challengeTxt={stories2.challengeTxt}
          achievementTxt={stories2.achievementTxt}
          tags={stories2.tags}
          opportunityColSpan="xl:col-span-2"
          challengeColSpan="xl:col-span-2"
          bgColor="bg-[#F5F5F5]"
        />
        <SuccessStoriesSection
          story={stories3.story}
          storyTitle={stories3.storyTitle}
          text1={stories3.text1}
          image={stories3.image}
          opportunityTxt={stories3.oppportunityTxt}
          challengeTxt={stories3.challengeTxt}
          achievementTxt={stories3.achievementTxt}
          tags={stories3.tags}
          tagsColSpan="xl:col-span-2"
        />
        <SuccessStoriesSection
          story={stories4.story}
          storyTitle={stories4.storyTitle}
          text1={stories4.text1}
          image={stories4.image}
          opportunityTxt={stories4.oppportunityTxt}
          achievementTxt={stories4.achievementTxt}
          tags={stories4.tags}
          opportunityColSpan="xl:col-span-2"
          achievementColSpan="xl:col-span-2"
          tagsColSpan="xl:col-span-2"
          bgColor="bg-[#F5F5F5]"
        />
      </div>
      <StartConvo marginTop="mt-0" />
    </div>
  );
};

export default SuccessStories;
