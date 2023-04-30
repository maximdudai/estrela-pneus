
/**
 * 
 * @param {className} className 
 * @param {img} img 
 * @param {imgStyle} imgStyle 
 * @param {title} title 
 * @param {subTitle} subTitle 
 * @param {content} content 
 * @returns 
 */

const HelpGuide = ({className, img, imgStyle = 'w-26 md:w-24', title, subTitle, content}) => {
    return (
        <>
            <div className={`helpGuideContainer ${className} flex items-start`}>
                <div className="helpGuideContentIcon">
                    <img 
                        className={`helpGuideImage ${imgStyle}`}
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
                    <div className="helpContentDescription max-w-3xl">
                        {content}
                    </div>
                </div>
            </div>
        </>
    )
};
export default HelpGuide;