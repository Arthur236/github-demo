import React, { useState } from 'react';
import { useQuery } from "react-apollo";

import { searchUser } from "../graphql/search";

import './App.css';
import Card from './Card';

const App = () => {
  const [state, setState] = useState("");
  const [users, setUsers] = useState([]);

  const { refetch: fetchUser } = useQuery(searchUser, {
    skip: true,
    variables: {
      login: state
    }
  });

  const handleChange = (e) => {
    setState(e.target.value);
  };

  const handleClick = async () => {
    console.log(state);

    const fetchedUser = await fetchUser({
      variables: {
        login: state
      }
    });

    console.log(fetchedUser);
    setUsers([...users, fetchedUser.data.user]);
  };

  return (
    <div className="App">
      <div className="header">
        <a href="/">Home</a>
      </div>

      <input type="text" placeholder="Enter username" className="search" onChange={handleChange}/>
      <button onClick={handleClick}>Search</button>

      <h4>Results</h4>

      <div className="card-container">
        {users && users.map((user) => <Card user={user}/>)}
      </div>
    </div>
  );
};

export default App;
