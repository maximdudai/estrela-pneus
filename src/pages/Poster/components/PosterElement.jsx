/**
 * 
 * @param {icon} icon 
 * @param {title} title 
 * @param {content} content 
 * @returns 
 */
export const PosterElement = ({icon, title, content}) => {
    return (
        <div className="posterElement">
            <div className="posterIcon"></div>
            <div className="posterTitle"></div>
            <div className="posterContent"></div>
        </div>
    )
};