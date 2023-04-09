import { faClose, faRemove, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import './SearchPage.css';

import SearchData from "../../data/SearchData";

import * as suggestionWords from '../../data/searchData.json';

const SearchPage = (props) => {
    const [visibleClearInput, setVisibleClearInput] = useState(false);

    const [searchBoxTextInput, setSearchBoxTextInput] = useState('');

    const [searchHistory, setSearchHistory] = useState(() => {
        const storedTerm = localStorage.getItem("clientSearchHistory");
        return storedTerm ? JSON.parse(storedTerm) : [];
      });

    const updateInputSearchBox = (e) => {
        const msg = e.target.value;
        setSearchBoxTextInput(msg);

    };

    const resetSeachInputArea = () => {
        setSearchBoxTextInput('');
    };

    const onSearchEnter = (e) => {
        if(e.key !== "Enter") return;
        if(!searchBoxTextInput.length) return;

        setSearchHistory((prev) => [...prev, searchBoxTextInput]);
        saveSearchedText();
    };
      
    const clearClientSearchHistory = () => {
        setSearchHistory([])
        saveSearchedText();
    };

    const removeClientHistoryElement = (item) => {
        setSearchHistory((prevSearchHistory) =>
            prevSearchHistory.filter((_, index) => index !== item)
        );
        saveSearchedText();
    };

    const saveSearchedText = () => {
        localStorage.setItem("clientSearchHistory", JSON.stringify(searchHistory));
        setSearchBoxTextInput('');
    };

    const onClientClickSuggestion = (e) => {
        const suggestedButton = e.target.textContent;
        setSearchBoxTextInput(suggestedButton);
    };

    useEffect(() => {
        localStorage.setItem("clientSearchHistory", JSON.stringify(searchHistory));

    }, [searchHistory]);

    useEffect(() => {
        const storedTerm = localStorage.getItem("clientSearchHistory");
        if (storedTerm) {
            const clientSearch = JSON.parse(storedTerm);
            setSearchHistory(clientSearch);
        }
    }, []);

    useEffect(() => {
        const changeClearAreaButton = () => {
            if(searchBoxTextInput.length > 1) {
                setVisibleClearInput(true);
            }
            else
                setVisibleClearInput(false);
        };
        changeClearAreaButton();

    }, [searchBoxTextInput]);

    const filterSearchBox = () => {
        return suggestionWords.default.filter(word => {
            return word.toLowerCase().includes(searchBoxTextInput.toLowerCase());
        });
    };

    return (
        <>
            <div className="navigationSearch overflow-hidden absolute z-20 w-full h-full flex flex-col items-center bg-white text-black top-0 left-0 right-0 bottom-0 p-2 md:w-1/4">
                
                <div className="navigationSearchContent border-[1px] border-gray-400 rounded w-full h-16 flex items-center">
                    <div className="searchBoxInputArea w-full flex items-center">
                        <span className="searchBoxIcon px-3 text-gray-500">
                            <FontAwesomeIcon icon={faSearch} />
                        </span>

                        <input
                            onKeyDown={onSearchEnter}
                            value={searchBoxTextInput}
                            onChange={updateInputSearchBox}
                            className="w-full p-2 mr-2 focus:outline-none"
                            type="text" 
                            name="searchInput" 
                            placeholder="Pesquisar.."
                            autoFocus
                        />
                    </div>

                    {
                        visibleClearInput &&
                        <button 
                            onClick={resetSeachInputArea}
                            className="clearSearchArea px-2 text-lg text-gray-500">
                            <FontAwesomeIcon icon={faRemove} />
                        </button>
                    }
                </div>

                <div className="navigationSearchWords flex flex-col w-full">
                    <div className="navigationSearchTitle p-1">
                        <p className="border-b-[1px]">Sugestões:</p>
                    </div>
                    
                    <div className="navigationSearchSuggestion w-full mt-1 p-1 h-48 overflow-y-scroll">
                        <SearchData clickedList={onClientClickSuggestion} searchFilter={filterSearchBox} />
                    </div>
                </div>
                
                <div className="navigationHistorySearch mt-3 w-full">
                    
                    <div className="searchHistoryTitle">
                        <p className="border-b-[1px]">A sua pesquisa mais recente:</p>
                    </div>

                    <div className="navigationSearchPageHistory mt-2">
                        <div className={`navigationSearchPageContent max-h-64 overflow-y-scroll`}>
                            {
                                searchHistory &&
                                    <ul className="mt-1">
                                        {
                                            searchHistory.map((search, index) => {
                                                return <li 
                                                    onClick={() => removeClientHistoryElement(index)}
                                                    className="w-[95%] flex justify-between m-1 text-gray-600 rounded-lg p-1 px-2 border-2 border-gray-400 bg-gray-200"
                                                    key={index}>
                                                    <span className="searchContent">{search}</span>
                                                    <span className="searchRemoveIcon">
                                                        <FontAwesomeIcon icon={faRemove} />
                                                    </span>
                                                </li>
                                            })
                                        }
                                    </ul>
                            }
                        </div>

                        {
                            searchHistory.length >= 1 &&
                            <button
                                className="navigationSearchPageClear p-2 mt-2 bg-red-200 text-sm"  
                                onClick={clearClientSearchHistory}
                            >
                                Excluir Tudo
                            </button>
                        }
                       

                    </div>
                </div>

                <div className="closeSearchPage w-full flex flex-col items-center justify-end py-3 absolute bottom-0">
                    <button
                        className="w-10 h-10 flex items-center justify-center text-2xl rounded-full border-2 text-gray-500 border-gray-400 bg-gray-200"
                        onClick={props.onClosePage}>
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                </div>
            </div>
        </>
    )
};
export default SearchPage;
