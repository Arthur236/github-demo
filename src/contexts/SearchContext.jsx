import React, { createContext, useState } from "react";

export const SearchContext = createContext([]);

const SearchContextProvider = (props) => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <SearchContext.Provider value={{
      searchResults,
      setSearchResults
    }}>
      {props.children}
    </SearchContext.Provider>
  )
};

export default SearchContextProvider;
