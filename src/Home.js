import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import UserContainer from './UserContainer';
import './App.css';

const newUser = {
  full_name: "",
  username: "",
  password: ""
}

function Home({ users, setUsers }) {

  const [newUserData, setNewUserData] = useState(newUser)

  let navigate = useNavigate();
  const handleCreateUserClick = (e) => {
    navigate('/trips');
  };

  function handleAddNewUser(e) {
    setNewUserData({...newUserData, 
      [e.target.name]: e.target.value})
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:9292/users', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUserData)
    })
      .then((r) => r.json())
      .then((data) => {
        setUsers((currentUsers) => [data, ...currentUsers]);
        setNewUserData(newUser);
        handleCreateUserClick();
      })

  }


  return (

    <div>
        <h1 className="welcomeHeader">Welcome to The Travel Log! Browse user trips and post your own to inspire!</h1>
      
        <img className="travelPicture" src="plane-pic.jpg"/>

        <div>
          <form  onSubmit={handleSubmit} className="loginForm">
          <h2>Create your user profile here!</h2>
          <label>
            Full Name:
            <input id="full_name"
              className="full_name"
              type="text"
              name="full_name"
              placeholder="Full Name..."
              value={newUserData.full_name}
              onChange={handleAddNewUser}
              autoFocus={true}
              required
              >
            </input>
          </label>
          <br/>
          <br/>
          <label>
            Username:
            <input
              className = "username"
              type="text"
              name="username"
              placeholder="Username..."
              value={newUserData.username}
              onChange={handleAddNewUser}
              required
              >
            </input>
          </label>
          <br/>
          <br/>
          <label>
            Password:
            <input
              className="password"
              type="password"
              name="password"
              placeholder="Password..."
              value={newUserData.password}
              onChange={handleAddNewUser}
              required
              >
            </input>
          </label>
          <br/>
          <input id="formButton" type="submit" value= "Create User"></input>
          <br/>
          <br/>
          <br/>
          </form>
        </div>

    </div>
  );
}

export default Home;

