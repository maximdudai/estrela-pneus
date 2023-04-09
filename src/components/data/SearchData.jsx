const SearchData = ({ clickedList, searchFilter }) => {
    const filteredWords = searchFilter();
  
    return (
      <ul className="w-full flex flex-wrap">
        {filteredWords.map((word, i) => (
          <li
            onClick={clickedList}
            key={i}
            className="w-auto m-1 p-1 px-2 text-gray-600 rounded border-[1px] border-gray-400"
          >
            {word}
          </li>
        ))}
      </ul>
    );
  };
  
  export default SearchData;