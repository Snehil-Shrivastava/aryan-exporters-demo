import Image, { StaticImageData } from "next/image";
import capabilitiesstage1 from "@/public/images/capabilities_stage1.png";

const defaultTags = [
  "Autocad",
  "SolidWorks",
  "ANSYS",
  "Two decades in railway component development",
];

const defaultListItems = [
  "A design review before anything is committed",
  "An FEA report written against your load case",
  "Drawings — and, if we think the requirement itself is wrong, you hear that at this stage rather than after the tooling is cut",
];

const CapabilitiesStage1 = ({
  stage,
  stageTitle,
  image,
  text1,
  para,
  tags,
  listItems,
  reverse = false,
}: {
  stage?: string;
  stageTitle?: string;
  image?: StaticImageData;
  text1?: string;
  para?: string;
  tags?: string[];
  listItems?: string[];
  reverse?: boolean;
}) => {
  const displayTags = tags && tags.length > 0 ? tags : defaultTags;
  const displayListItems =
    listItems && listItems.length > 0 ? listItems : defaultListItems;
  return (
    <div
      className={`flex gap-25 xl:max-1440p:gap-15 ${reverse ? "xl:flex-row-reverse" : ""}`}
    >
      <div className="overflow-hidden rounded-xl flex-[0.4] relative min-h-200 max-xl:hidden">
        <Image
          src={image ? image : capabilitiesstage1}
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="xl:flex-[0.6] lg:pb-10">
        <h4 className="uppercase font-medium tracking-widest max-lg:text-sm">
          {stage ? stage : "stage 1 - design and r&d"}
        </h4>
        <h2 className="text-[42px] 1440p:leading-12 max-lg:text-3xl lg:max-1440p:text-4xl font-bold text-brand-red mt-3">
          {stageTitle
            ? stageTitle
            : "Nothing is cut until we know what it will do"}
        </h2>
        <div className="flex flex-col gap-10 max-lg:gap-6 mt-10 max-lg:mt-4 lg:max-1440p:mt-6">
          <h3 className="font-semibold text-xl max-lg:text-base">
            {text1
              ? text1
              : "Rubber does not behave like steel, it will not forgive being designd as though it does."}
          </h3>
          <div className="overflow-hidden rounded-xl relative h-100 xl:hidden">
            <Image
              src={image ? image : capabilitiesstage1}
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <p className="max-lg:text-sm">
            {para
              ? para
              : `It is non-linear, it changes with temperature, it takes a set, and
            the way it is bonded matters as much as its shape. So the analysis
            comes first, every time. We read the requirement, select the
            material, model the geometry and analyse it before anything is
            committed to tooling. Development work runs on the same basis. The
            air spring programme took close to eight years and the traction
            motor bellow two, both of them starting from a requirement for which
            no proven design existed in India.`}
          </p>
          <div className="flex flex-wrap gap-8 max-lg:gap-4">
            {displayTags.map((tag) => (
              <div
                key={tag}
                className="px-4 py-2 border border-neutral-400 rounded-lg font-semibold max-lg:text-sm"
              >
                {tag}
              </div>
            ))}
          </div>
          <hr className="border-neutral-300" />
          <div>
            <h3 className="uppercase font-semibold tracking-wider mb-4 max-lg:text-sm">
              what you recieve
            </h3>
            <ul
              className="flex flex-col gap-3 ml-8 marker:text-neutral-600"
              style={{ listStyleType: "disc" }}
            >
              {displayListItems.map((listItem) => (
                <li key={listItem} className="max-lg:text-sm">
                  {listItem}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapabilitiesStage1;
