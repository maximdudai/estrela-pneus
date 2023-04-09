const SearchData = ({ clickedList, searchFilter }) => {
    const filteredWords = searchFilter();
  
    return (
      <ul 
        // className="w-full flex flex-wrap"
        className="grid grid-cols-2 gap-4 md:grid-cols-4"
        >
        {filteredWords.map((word, i) => (
          <li
            onClick={clickedList}
            key={i}
            // className="w-auto text-center m-1 p-1 px-2 text-gray-600 rounded border-[1px] border-gray-400"
            className="bg-gray-200 rounded-md p-4 text-center"
          >
            {word}
          </li>
        ))}
      </ul>
    );
  };
  
  export default SearchData;