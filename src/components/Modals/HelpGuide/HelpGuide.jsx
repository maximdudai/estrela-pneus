import React, { useContext } from 'react';

import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

export const HelpGuide = ({className, img, imgStyle = 'w-26 md:w-12', title, subTitle, content}) => {

    const visibleHelpGuide = true;
    return (
        <div className={`helpGuideContainer ${className} flex flex-col`}>
            <div className="helpGuideContainerToggleButton">
                <div className="toggleClientSeasonButton">
                    <button 
                        // onClick={}
                        className="flex items-center text-sm"
                        type="submit">
                        <span className="seasonGuideContent">{visibleHelpGuide ? 'Esconder' : 'Mostrar'} o guia para melhor escolha</span>
                        <span className="seasonGuideIcon px-2">{!visibleHelpGuide ? <BsChevronDown /> : <BsChevronUp />}</span>
                    </button>
                </div>
            </div>

            <div className="helpGuideContainerContent flex">
                <div className="helpGuideContentIcon w-auto">
                    <img 
                        className={`helpGuideImage ${imgStyle}`}
                        src={img} 
                        alt="helpGuide image"/>
                </div>

                <div className="helpGuideContent px-5">
                    <div className="helpContentTitle flex flex-col">
                        <span className="font-semibold">{title}</span>
                        {subTitle && <span className="text-gray-400 text-[12px]">{subTitle}</span>}
                    </div>
                    <div className="helpContentDescription max-w-3xl">
                        {content}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HelpGuide;
