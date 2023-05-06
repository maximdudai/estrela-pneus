import { createContext, useState } from 'react';

export const GuideContext = createContext();

const GuideProvider = ({ children }) => {
    const [visibleHelpGuide, setVisibleHelpGuide] = useState(false);

    const toggleVisibleHelpGuid = () => {
        setVisibleHelpGuide(!visibleHelpGuide);
    };

    return (
        <GuideContext.Provider value={{ visibleHelpGuide, toggleVisibleHelpGuid }}>
            {children}
        </GuideContext.Provider>
    )
};
export default GuideProvider;