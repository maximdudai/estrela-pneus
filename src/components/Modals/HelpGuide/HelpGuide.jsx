const HelpGuide = ({className, img, title, subTitle, content}) => {
    return (
        <>
            <div className={`helpGuideContainer ${className} flex items-start`}>
                <div className="helpGuideContentIcon w-26 md:w-24">
                    <img 
                        src={img} 
                        alt="helpGuide image"/>
                </div>

                <div className="helpGuideContent px-5">
                    <div className="helpContentTitle flex flex-col">
                        <span className="font-semibold">{title}</span>
                        {
                            subTitle &&
                            <span className="text-gray-400 text-[12px]">{subTitle}</span>
                        }
                    </div>
                    <div className="helpContentDescription">
                        <p>
                            {content}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
};
export default HelpGuide;