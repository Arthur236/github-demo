import React, { useContext, useState } from 'react';
import { useQuery } from 'react-apollo';

import Card from '../Card';
import { SearchContext } from '../../contexts/SearchContext';
import { searchUser } from '../../graphql/search';

import './App.css';

const App = () => {
  const { searchResults, setSearchResults } = useContext(SearchContext);
  const [searchString, setSearchString] = useState('');
  const [loading, setLoading] = useState(false);

  const { refetch: fetchUser } = useQuery(searchUser, {
    skip: true,
    variables: {
      login: searchString
    }
  });

  const handleChange = (e) => {
    setSearchString(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const fetchedUser = await fetchUser({
      variables: {
        login: searchString
      }
    });

    setSearchResults([...searchResults, fetchedUser.data.user]);
    setSearchString('');
    setLoading(false);
  };

  return (
    <div className="App">
      <div className="header">
        <p>Github Demo</p>
        <a href="/">Home</a>
      </div>

      <div className="search-container">
        <form className="search-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter username" className="search-input"
                 value={searchString} onChange={handleChange}/>
          <button type="submit" className="search-button">Search</button>
        </form>
      </div>

      <h4 className="search-header">Search Results</h4>

      {loading && <p className="search-header">Loading data...</p>}

      <div className="card-container">
        {searchResults && searchResults.map((user) => <Card key={user.id} user={user}/>)}
      </div>
    </div>
  );
};

export default App;
