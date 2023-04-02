import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import SearchPage from "../../SearchPage/SearchPage";


const SearchBox = () => {

    const [visibleSearchPage, setVisibleSearchPage] = useState(false);

    const onClientClickSearch = () => {
        setVisibleSearchPage(!visibleSearchPage);
    };

    return (
        <div className="search w-full flex justify-center">
            {
                visibleSearchPage && <SearchPage onClosePage={onClientClickSearch}/>
            }
            <button 
                onClick={onClientClickSearch}
                className="flex justify-between items-center rounded bg-white w-[98%] p-2 text-white font-md">
                <div className="smallNavigationBarButton p-1.5">
                    <div className="smallNavigationBarSearchButton focus:outline-none">
                        <p className='text-gray-500 font-bold'>Pesquisar..</p>
                    </div>
                </div>

                <div className="smallNavigationBarSearchIcon text-gray-500">
                    <FontAwesomeIcon icon={faSearch} />
                </div>
            </button>
        </div>
    )
};
export default SearchBox;