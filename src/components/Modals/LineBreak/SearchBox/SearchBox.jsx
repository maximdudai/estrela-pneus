import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBox = () => {

    return (
        <div 
            className="flex justify-between items-center rounded bg-white w-[98%] p-2 text-white font-md">
            <div className="smallNavigationBarButton p-1.5">
                <button className="smallNavigationBarSearchButton focus:outline-none">
                    <p className='text-gray-500 font-bold'>Pesquisar..</p>
                </button>
            </div>

            <div className="smallNavigationBarSearchIcon text-gray-500">
                <FontAwesomeIcon icon={faSearch} />
            </div>
        </div>
    )
};
export default SearchBox;