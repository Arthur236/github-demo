import { createContext, useState } from "react";

const SearchContext = createContext([]);

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
