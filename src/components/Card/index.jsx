import React, { useContext } from 'react';

import { SearchContext } from '../../contexts/SearchContext';

const Card = (props) => {
  const { searchResults, setSearchResults } = useContext(SearchContext);

  const user = props.user && props.user;
  const topRepos = user.topRepositories && user.topRepositories.edges[0] && user.topRepositories.edges[0].node;

  const handleDelete = (id) => {
    const newResults = searchResults.filter((result) => result.id !== id);

    setSearchResults(newResults);
  };

  return (
    <div className="card">
      <span className="close" onClick={() => handleDelete(user.id)}>x</span>

      <img src={user.avatarUrl} alt=""/>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Website URL: {user.websiteUrl}</p>
      <p>Bio: {user.bio}</p>
      <p>Organization: {user.organization && user.organization.name}</p>
      <p>Top Repository: {topRepos && topRepos.name}</p>
      <p>Created At: {user.createdAt}</p>
    </div>
  );
};

export default Card;
