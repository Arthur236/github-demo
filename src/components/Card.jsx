import React from "react";

const Card = (props) => {
  const user = props.user && props.user;
  const topRepos = user.topRepositories && user.topRepositories.edges[0] && user.topRepositories.edges[0].node;

  return (
    <div className="card">
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
