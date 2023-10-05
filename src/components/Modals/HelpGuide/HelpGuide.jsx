import React, { useContext, useState } from "react";
import { twMerge } from "tailwind-merge";

import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export const HelpGuide = ({
  className,
  img,
  imgStyle = "w-26 md:w-12",
  title,
  subTitle,
  content,
}) => {
  const [visibleHelpGuide, setVisibleHelpGuide] = useState(false);

  const handleHelpGuide = () => {
    setVisibleHelpGuide(!visibleHelpGuide);
  };

  return (
    <div className={twMerge(`helpGuideContainer  flex flex-col`, className)}>
      <div className="helpGuideContainerContent flex">
        <div className="helpGuideContentIcon w-auto">
          <img
            className={`helpGuideImage ${imgStyle}`}
            src={img}
            alt="helpGuide image"
          />
        </div>

        <div className="helpGuideContent px-5">
          <div className="helpContentTitle flex flex-col">
            <span className="font-semibold">{title}</span>
            {subTitle && (
              <span className="text-gray-400 text-[12px]">{subTitle}</span>
            )}
          </div>
          <div className="helpContentDescription max-w-3xl">{content}</div>
        </div>
      </div>
    </div>
  );
};
