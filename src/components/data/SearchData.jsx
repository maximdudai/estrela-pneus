const SearchData = ({ searchFilter }) => {
    const filteredWords = searchFilter();
  
    return (
      <ul className="w-full flex flex-wrap">
        {filteredWords.map((word, i) => (
          <li
            key={i}
            className="m-1 text-gray-600 rounded-lg min-w-min p-1 border-2 border-gray-400 bg-gray-200"
          >
            {word}
          </li>
        ))}
      </ul>
    );
  };
  
  export default SearchData;